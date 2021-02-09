const fs = require('fs')
const request = require('request')
const axios = require('axios');

const downloadAndSave = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

// replacing the file if it already exists.
const generateFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
}

const getUrlHtmlAsync = (url) => {    
  return axios.get(url).then((response)=>{
      return response.data;
  }, (e)=>{
      throw `Oops! HTTP Request exception.`;
  });
};

function paddingZero(num, length) {
  for(var len = (num + "").length; len < length; len = num.length) {
      num = "0" + num;            
  }
  return num;
}

function createFolder(dirPath){
  if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
  }
}

function isFileExisted(filePath){
  return fs.existsSync(filePath);
}

module.exports = {
  downloadAndSave, paddingZero, createFolder, getUrlHtmlAsync, generateFile, isFileExisted
};
