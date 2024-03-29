const afterLoad = require('after-load');
const commonUtil = require('./common-util.js');
const logger = require('./logger.js');
const rateLimiterNoWait = require('./rate-limiter-no-wait.js');
const rateLimiter = require('./rate-limiter.js');
let {taskManager} = require('./chapter-consume-manager.js');

const OUTPUT_ROOT_FOLDER = './output';

const getWebFirstPageUrl = (comicId, chNo) => {
    // return `https://comicbus.live/online/a-${comicId}.html?ch=${chNo}`;         // first version
    // return `https://comic.aya.click/online/b-${comicId}.html?ch=${chNo}`;       // v20210405
    // return `https://comic.aya.click/online/best_${comicId}.html?ch=${chNo}`;    // v20210627
    // return `https://comicabc.com/online/new-${comicId}.html?ch=${chNo}`;        // v20211113
    return `https://www.comicabc.com/online/new-${comicId}.html?ch=${chNo}`;       // v20220902
}

const getPageCount = (comicId, chNo) => {
    let url = getWebFirstPageUrl(comicId, chNo);
    let html = afterLoad(url);
    let $ = afterLoad.$(html);
    return $('#pageindex').children().length;
}

const generateTempScriptAsync = async (comicId, chNo, pageNo) => {
    // 1. get sources snippet
    return await commonUtil.getUrlHtmlAsync(getWebFirstPageUrl(comicId, chNo))
    .then((htmlText) => {
        let startIdx = htmlText.indexOf('var pi=ch;');
        let endIdx = htmlText.indexOf("var nt=");
        let tmpScript = htmlText.substring(startIdx, endIdx);

        startIdx = tmpScript.indexOf('ci=i;ge(');
        endIdx = tmpScript.indexOf(".src=") + 5;
        let snippetToReplaced = tmpScript.substring(startIdx, endIdx);

        tmpScript = tmpScript.replace(snippetToReplaced, "ci=i;return 'https:' + ");
        logger.debug(tmpScript);

        // 2. compose
        let header = `function getImgUrl() {
            function lc(l) {
                if (l.length != 2) return l;
                var az = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var a = l.substring(0, 1);
                var b = l.substring(1, 2);
                if (a == "Z") return 8000 + az.indexOf(b);
                else return az.indexOf(a) * 52 + az.indexOf(b);
            }
            function su(a, b, c) {
                var e = (a + '').substring(b, b + c);
                return (e);
            }
            function nn(n) {
                return n < 10 ? '00' + n : n < 100 ? '0' + n : n;
            }
            function mm(p) {
                return (parseInt((p - 1) / 10) % 10) + (((p - 1) % 10) * 3)
            };
            var ch = ${chNo};
            var p = ${pageNo};`;
        let footer = `} module.exports = {getImgUrl};`;
        tmpScript = header + tmpScript + footer;

        // 3. generate file
        commonUtil.createFolder(`./src_tmp/${comicId}`);
        commonUtil.createFolder(`./src_tmp/${comicId}/${chNo}`);
        let tmpScriptFileName = `script_${comicId}_${chNo}-${pageNo}.js`;
        let tmpScriptFilePath = `./src_tmp/${comicId}/${chNo}/${tmpScriptFileName}`;
        commonUtil.generateFile(tmpScriptFilePath, tmpScript);
        logger.debug(`generate ok: ${tmpScriptFilePath}`);
        return tmpScriptFileName;
    })
    .catch((errMsg)=>{
        logger.error(`Error! Msg=[${errMsg}] (comicId=${comicId}, chNo=${chNo}, pageNo=${pageNo})`);
    });
}

// [Example]
// * target page url: https://comicbus.live/online/a-7340.html?ch=1-2
// * result image url: https://img6.8comic.com/4/7340/1/002_Aqu.jpg
const downloadSinglePage = async (savePath, comicId, chNo, pageNo) => {
    let scriptName = await generateTempScriptAsync(comicId, chNo, pageNo);
    if (typeof scriptName !== "string" || scriptName.length === 0) {
        logger.error(`generateTempScript failed, try again. (comicId=${comicId}, chNo=${chNo}, pageNo=${pageNo})`);
        setTimeout(throttleTriggerDownloadSinglePage, 1000, savePath, comicId, chNo, pageNo);
        return;
    }
    let scriptPath = `../src_tmp/${comicId}/${chNo}/${scriptName}`;
    logger.debug(`scriptPath=[${scriptPath}]`);
    const tmpLib = require(scriptPath);
    let url = tmpLib.getImgUrl();

    logger.info(`savePath=[${savePath}] url=[${url}]`);
    commonUtil.downloadAndSave(url, savePath, () => {
        logger.info(`savePath=[${savePath}] Done!`);
        taskManager.doPageDone(comicId, chNo, pageNo);
    },
    (err) => {
        logger.error(`savePath=[${savePath}] Error! ${err}`);
        setTimeout(throttleTriggerDownloadSinglePage, 1000, savePath, comicId, chNo, pageNo);
    });
}

const throttleTriggerDownloadSinglePage = async (savePath, comicId, chNo, pageNo) => {
    rateLimiter.acquire(`${comicId}_${chNo}_${pageNo}`, () => {
        downloadSinglePage(savePath, comicId, chNo, pageNo);
    });
}

const downloadComic = async (comicId, chNo) => {
    let outputRootFolder = OUTPUT_ROOT_FOLDER;
    let parentFolderPath = `${outputRootFolder}/${comicId}`;
    let fullFolderPath = `${outputRootFolder}/${comicId}/${commonUtil.paddingZero(chNo, 4)}`;
    commonUtil.createFolder(parentFolderPath);
    commonUtil.createFolder(fullFolderPath);
  
    logger.info(`task start: ${comicId} ${chNo}`);
    let pageMax = getPageCount(comicId, chNo);
    logger.info(`get page count: ${pageMax}`);
    taskManager.setTaskChapterInfo(comicId, chNo, pageMax);
    for (let i = 1; i <= pageMax; i++) {
        let pageNo = i;

        // check exist first
        let savePath = `${fullFolderPath}/${commonUtil.paddingZero(chNo, 4)}_${commonUtil.paddingZero(pageNo, 3)}.jpg`;
        if (commonUtil.isFileExisted(savePath)) {
            logger.info(`savePath=[${savePath}] already exist, skip.`);
            taskManager.doPageDone(comicId, chNo, pageNo);
            continue;
        }

        // for parallel
        setTimeout(throttleTriggerDownloadSinglePage, Math.floor(Math.random() * 10) + 1, savePath, comicId, chNo, pageNo);

        // [experiment] download a chapter with 51 pages
        // * parallel: ~20s
        // * no parallel: ~1m20s

        // no parallel:
        // let scriptName = await generateTempScriptAsync(comicId, chNo, pageNo);
        // let scriptPath = `../src_tmp/${comicId}/${chNo}/${scriptName}`;
      
        // //console.log(`scriptPath=[${scriptPath}]`);
        // const tmpLib = require(scriptPath);
        // let url = tmpLib.getImgUrl();
        // let savePath = `${fullFolderPath}/${chNo}_${commonUtil.paddingZero(pageNo, 3)}.jpg`;
        // console.log(`url=[${url}] savePath=[${savePath}]`);
        
        // commonUtil.downloadAndSave(url, savePath, () => {
        //     console.log(`savePath=[${savePath}] Done!`)
        // });
    }
}

const addDownloadComicTask = (comicId, chNo) => {
    const cbk = () => {
        downloadComic(comicId, chNo);
    }
    taskManager.addToDoTask(comicId, chNo, cbk);
    taskManager.startTriggerCheckDeamon();
}

module.exports = {
    addDownloadComicTask
};
