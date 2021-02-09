const comicUtil = require('./comic-util.js');

for(let i = 10 ; i <= 20 ; i++) {
	comicUtil.addDownloadComicTask(102, i);
}
