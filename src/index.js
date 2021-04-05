const comicUtil = require('./comic-util.js');

let comicId = 7340;
let from = 137;
let to = 138;
for(let i = from ; i <= to ; i++) {
	comicUtil.addDownloadComicTask(comicId, i);
}
