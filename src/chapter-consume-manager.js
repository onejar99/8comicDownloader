const logger = require('./logger.js');

class SingleChapterProgressManager {
    constructor(comicId, chNo, pageTotal) {
        this.comicId = comicId;
        this.chNo = chNo;
        this.pageTotal = pageTotal;
        this.pageDownloadedCount = 0;
        this.pageDoneMap = {}; // {"1" => true, "3" => true}
    }
    doChPageDone(pageNo) {
        this.pageDownloadedCount++;
        this.pageDoneMap[`${pageNo}`] = true;
    }
    isAllDone() {
        return this.pageDownloadedCount >= this.pageTotal;
    }
    getProgressString(){
        let ratio = Math.round((this.pageDownloadedCount/this.pageTotal)*100);
        return `comicId=${this.comicId}, chNo=${this.chNo}, progress: ${ratio}% (${this.pageDownloadedCount}/${this.pageTotal})`;
    }
}
class TaskManager {
    constructor(){
        this.isDeamonTriggered = false;
        this.CONCURRENT_LIMIT = 3;
        this.toDoTasks = []; // [{ "comicId", "chNo", "callback"}  ]
        this.ongoingTasks = []; // [ "comicId_chNo" ]
        this.taskMap = {}; // {"comicId_chNo" => object}
        this.deamonCheckEmptyCount = 0;
        this.DEAMON_CHECK_EMPTY_THRESHOLD = 10; // check 10 times, if no more to-do task, end
    }
    getTaskKey(comicId, chNo) {
        return `${comicId}_${chNo}`;
    }
    getChapterMgr(comicId, chNo) {
        let key = this.getTaskKey(comicId, chNo);
        return this.taskMap[key];
    }
    addToDoTask(comicId, chNo, cbk) {
        let task = {"comicId": comicId, "chNo": chNo, "callback": cbk };
        this.toDoTasks.push(task);
        this.log(`Add to-do task: comicId=${comicId} chNo=${chNo}`);
    }
    triggerCheckDeamon() {
        this.log("Deamon check (ongoingTasks: " + this.ongoingTasks.toString() + ", to-do tasks count: " + this.toDoTasks.length);
        //console.log(this);
        //console.log(Array.isArray(this.toDoTasks));
        //console.log(this.toDoTasks);
        if (this.toDoTasks.length > 0) {
            this.deamonCheckEmptyCount = 0;
            if (this.ongoingTasks.length < this.CONCURRENT_LIMIT) {
                let cbk = () => {
                    this.startNextTask();
                }
                setTimeout(cbk, 100);
            }
        } else {
            this.deamonCheckEmptyCount++;
            this.log(`Deamon check: no task (times: ${this.deamonCheckEmptyCount})`);
            if (this.deamonCheckEmptyCount >= this.DEAMON_CHECK_EMPTY_THRESHOLD) {
                return;
            }
        }
        let cbk = () => {
            this.triggerCheckDeamon();
        }
        setTimeout(cbk, 1000);
    }
    startTriggerCheckDeamon() {
        if (this.isDeamonTriggered) {
            return;
        }
        this.isDeamonTriggered = true;
        this.triggerCheckDeamon();
    }
    
    startNextTask() {
        //console.log(this);
        //console.log(Array.isArray(this.toDoTasks));
        //console.log(this.toDoTasks);
        if (this.toDoTasks.length > 0) {
           let task = this.toDoTasks.shift();
           let key = this.getTaskKey(task.comicId, task.chNo);
           this.ongoingTasks.push(key);
           this.log(`start next task: ${key}`);
           task.callback();
        } else {
            this.log(`start next task: none`);
        }
    }
    setTaskChapterInfo(comicId, chNo, pageTotal) {
        let key = this.getTaskKey(comicId, chNo);
        this.taskMap[key] = new SingleChapterProgressManager(comicId, chNo, pageTotal);
    }
    doPageDone(comicId, chNo, pageNo) {
        let chMgr = this.getChapterMgr(comicId, chNo);
        chMgr.doChPageDone(pageNo);
        this.log(chMgr.getProgressString());
        this.checkIfTaskFinished(comicId, chNo);
    }
    checkIfTaskFinished(comicId, chNo){
        let chMgr = this.getChapterMgr(comicId, chNo);
        if (chMgr.isAllDone()) {
           let key = this.getTaskKey(chMgr.comicId, chMgr.chNo);
           this.log(`Task ${key} done.`);
           let idx = this.ongoingTasks.indexOf(key);
           if (idx >= 0) {
               this.ongoingTasks.splice(idx, 1);
           } else {
               this.log(`Task ${key} done but not included in ongoingTasks array!`);
           }
        }
    }
    
    log(msg) {
        logger.info("[TaskMgr] " + msg);
    }

}

let taskManager = new TaskManager();
taskManager.triggerCheckDeamon.bind(taskManager);
taskManager.startNextTask.bind(taskManager);


module.exports = {
  taskManager
};
