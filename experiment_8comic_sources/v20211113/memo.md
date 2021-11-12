# memo

## Situation

`downloadSinglePage` was broken:
```bash
(node:79) UnhandledPromiseRejectionWarning: ReferenceError: document is not defined
    at ge (/8comicDownloader/src_tmp/653/1074/script_653_1074-2.js:22:77)
    at Object.getImgUrl (/8comicDownloader/src_tmp/653/1074/script_653_1074-2.js:22:28528)
    at downloadSinglePage (/8comicDownloader/src/comic-util.js:91:22)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
(node:79) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:79) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

## Target Examples

```
https://comicabc.com/online/new-653.html?ch=1074-7
https://img8.8comic.com/4/653/1074/007_CHT.jpg
```
```
https://comicabc.com/online/new-7340.html?ch=1-2
https://img2.8comic.com/3/7340/1/002_AQU.jpg
```
```
https://comicabc.com/online/new-7340.html?ch=5-4
https://img1.8comic.com/3/7340/5/004_F89.jpg
```
```
https://comicabc.com/online/new-7839.html?ch=370-3
https://img8.8comic.com/3/7839/370/003_9N2.jpg
```

## memo

* page_script_653_1074_7.js: js source snippet of page https://comicabc.com/online/new-653.html?ch=1074-7
```
<script src="/js/nview.js?20180806"></script>
<script src="/js/comicview.js"></script>
<script>
function request(queryStringName){........;var pt='[ '+pi+' ]';var nt='[ '+ni+' ]';spp();
</script>
```
* test-7430_5-4.js: prototype code

```bash
root@41a120790c17:/8comicDownloader/experiment_8comic_sources/v20211113# node test-653_1074-7.js
//img8.8comic.com/4/653/1074/007_CHT.jpg
root@41a120790c17:/8comicDownloader/experiment_8comic_sources/v20211113# node test-7340_5-4.js
//img1.8comic.com/3/7340/5/004_F89.jpg
root@41a120790c17:/8comicDownloader/experiment_8comic_sources/v20211113#
```
