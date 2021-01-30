# memo

## Situation

`downloadSinglePage` was broken:
```bash
8comicDownloader$ node src/index.js
task start: 7340 5
get page count: 31
(node:14114) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): ReferenceError: document is not defined
(node:14114) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:14114) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): ReferenceError: document is not defined
(node:14114) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): ReferenceError: document is not defined
(node:14114) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 4): ReferenceError: document is not defined
```

## Target Examples

```
https://comicbus.live/online/a-7340.html?ch=1-2
https://img2.8comic.com/3/7340/1/002_AQU.jpg
```
```
https://comicbus.live/online/a-7340.html?ch=5-4
https://img1.8comic.com/3/7340/5/004_F89.jpg
```
```
https://comicbus.live/online/a-7839.html?ch=370-3
https://img8.8comic.com/3/7839/370/003_9N2.jpg
```

## memo

* page_script_7430_5_4.js: source of page https://comicbus.live/online/a-7340.html?ch=5-4
* test-7430_5-4.js: prototype code

```bash
8comicDownloader$ node experiment_8comic_sources/v20210131/test-7340_1-2.js
//img2.8comic.com/3/7340/1/002_AQU.jpg
8comicDownloader$ node experiment_8comic_sources/v20210131/test-7340_5-4.js
//img1.8comic.com/3/7340/5/004_F89.jpg
8comicDownloader$
```
