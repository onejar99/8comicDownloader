const afterLoad = require('after-load');
const commonUtil = require('./common-util.js');

const getWebFirstPageUrl = (comicId, chNo) => {
    return `https://comicbus.live/online/a-${comicId}.html?ch=${chNo}`;
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
        tmpScript = tmpScript.replace("ge('TheImg').src='//img'", "return 'https://img'")
        //console.log(tmpScript);

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
            var p = ${pageNo};
            var y = 46;`;
        let footer = `} module.exports = {getImgUrl};`;
        tmpScript = header + tmpScript + footer;

        // 3. generate file
        commonUtil.createFolder(`./src_tmp/${comicId}`);
        commonUtil.createFolder(`./src_tmp/${comicId}/${chNo}`);
        let tmpScriptFileName = `script_${comicId}_${chNo}-${pageNo}.js`;
        let tmpScriptFilePath = `./src_tmp/${comicId}/${chNo}/${tmpScriptFileName}`;
        commonUtil.generateFile(tmpScriptFilePath, tmpScript);
        //console.log(`generate ok: ${tmpScriptFilePath}`);
        return tmpScriptFileName;
    })
    .catch((errMsg)=>{
        console.log(`Error! Msg=[${errMsg}]`);
    });
}

// [Example]
// * target page url: https://comicbus.live/online/a-7340.html?ch=1-2
// * result image url: https://img6.8comic.com/4/7340/1/002_Aqu.jpg
const downloadSinglePage = async (fullFolderPath, comicId, chNo, pageNo) => {
    let scriptName = await generateTempScriptAsync(comicId, chNo, pageNo);
    let scriptPath = `../src_tmp/${comicId}/${chNo}/${scriptName}`;

    //console.log(`scriptPath=[${scriptPath}]`);
    const tmpLib = require(scriptPath);
    let url = tmpLib.getImgUrl();
    let savePath = `${fullFolderPath}/${commonUtil.paddingZero(chNo, 4)}_${commonUtil.paddingZero(pageNo, 3)}.jpg`;
    console.log(`url=[${url}] savePath=[${savePath}]`);

    commonUtil.downloadAndSave(url, savePath, () => {
        console.log(`savePath=[${savePath}] Done!`)
    });
}

const downloadComic = async (outputRootFolder, comicId, chNo) => {
    let parentFolderPath = `${outputRootFolder}/${comicId}`;
    let fullFolderPath = `${outputRootFolder}/${comicId}/${commonUtil.paddingZero(chNo, 4)}`;
    commonUtil.createFolder(parentFolderPath);
    commonUtil.createFolder(fullFolderPath);
  
    console.log(`task start: ${comicId} ${chNo}`);
    let pageMax = getPageCount(comicId, chNo);
    console.log(`get page count: ${pageMax}`);
    for (let i = 1; i <= pageMax; i++) {
        let pageNo = i;
        // for parallel
        setTimeout(downloadSinglePage, 1, fullFolderPath, comicId, chNo, pageNo);
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



module.exports = {
    downloadComic
};
