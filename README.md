# 8comic Downloader

## Intro

* A simple program for downloading 8comic's images, by a rough solution.
* Developed by Node.js, and just a prototype, so maybe there are some bugs.
* 本程式僅供程式學習與網路測試，請勿做為商業或任何不法用途。

## How To Use

**step 1. Modify src/index.js**

```js
// download target: https://comicbus.live/online/a-7340.html?ch=1
comicUtil.downloadComic('./output', 7340, 1); // 設定漫畫id, 章節
```

**step 2. Ｒun script**
```bash
$ node src/index.js
```

**step 3. Check `output` folder**
