# 8comic Downloader

## Introduction

* A simple program for downloading 8comic's images, by a rough solution.
* Developed by Node.js, and just a prototype, so maybe there are bugs.
* 本程式僅供程式學習與網路測試，請勿做為商業或任何不法用途。

## How To Use

### Prerequisites

1. Install Node.js environment.
2. Download this source code.

> If you have no idea how to install Node.js, you can refer to following:
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


## How To Use By Docker

Of course, if you prefer to use docker, it also works:

```bash
$ git clone https://github.com/onejar99/8comicDownloader.git
$ cd 8comicDownloader
$ vi src/index.js
$ docker run -ti --rm -v $(pwd):/8comicDownloader node:lts /bin/bash
# in docker container
root@f2bf5f9b0c03:/# cd 8comicDownloader
root@f2bf5f9b0c03:/8comicDownloader# node src/index.js
```

If you are a Windows OS user:

```bash
> docker run -ti --rm -v %cd%:/8comicDownloader node:lts /bin/bash
# in docker container
root@f2bf5f9b0c03:/# cd 8comicDownloader
root@f2bf5f9b0c03:/8comicDownloader# node src/index.js
```

> NOTE: If you are a Windows OS user, you must adopt the docker usage, or you maybe cannot execute it well because of a known issue caused by dependencies: https://github.com/onejar99/8comicDownloader/issues/1


## Throttling (Rate Limiter)

* Requirement description: https://github.com/onejar99/8comicDownloader/issues/3
* Currently settings: 10 images per second
* There are 2 versions spiked:
    - support waiting (adopted): based on https://github.com/jhurliman/node-rate-limiter
    - not support waiting: based on https://github.com/animir/node-rate-limiter-flexible


## Task Manager

* Requirement description: https://github.com/onejar99/8comicDownloader/issues/2
* Currently settings: 3 chapters concurrently


## Change Log

* v1.2.0 - 2021/04/05
    * Fixed for 8comic new web url
    * Added task manager mechanism
    * Added retry mechanism for ECONNREFUSED
    * Added retry mechanism for HTTP request exception
    * Enhanced performance by tuning throttling rate and skipping existing files
* v1.1.0 - 2021/01/31
    * Fixed for 8comic revision (v20210131)
    * Added logger
    * Added throttling
    * Added docker quick launch script for docker on Windows
    * Upgraded axios for fixing vulnerable dependencies
* v1.0.0 - 2020/07/05
    * First Release
    * Support Basic downloading feature.
