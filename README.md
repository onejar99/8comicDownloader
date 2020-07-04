# 8comic Downloader

## Introduction

* A simple program for downloading 8comic's images, by a rough solution.
* Developed by Node.js, and just a prototype, so maybe there are bugs.
* 本程式僅供程式學習與網路測試，請勿做為商業或任何不法用途。

## How To Use

### Prerequisite

1. Install Node.js environment.
2. Download this source code.

> If you have no idea how to install Node.js, you cann refer to following:
> * [[Node.js] 安裝 NVM (Node Version Manager) 來切換 Node.js 版本 for Windows](https://www.onejar99.com/nvm-install-for-windows/)
> * [[Node.js] 安裝 NVM (Node Version Manager) 來切換 Node.js 版本 for MacOS/CentOS/Ubuntu](https://www.onejar99.com/nvm-install-for-unix-like/)

### Step 1. Modify src/index.js

```js
// download target: https://comicbus.live/online/a-7340.html?ch=1
comicUtil.downloadComic('./output', 7340, 1); // 設定漫畫id, 章節
```

### Step 2. Run script

```bash
$ node src/index.js
```

### step 3. Check `output` folder


## Appendix. How To Use By Docker

Of course, if you prefer to use docker, it also works:

```bash
$ git clone https://github.com/onejar99/8comicDownloader.git
$ cd 8comicDownloader
$ vi src/index.js
$ docker run -ti --rm -v $(pwd):/8comicDownloader
root@f2bf5f9b0c03:/# cd 8comicDownloader
root@f2bf5f9b0c03:/8comicDownloader# node src/index.js
```
