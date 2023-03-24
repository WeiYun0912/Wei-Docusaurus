---
title: "[javascript] 使用 PostCss 開發 CSS"
keywords: [CSS, css, postcss]
description: 使用 Postcss 開發 CSS
author: WeiYun0912
og:title: 使用 Postcss 開發 CSS
og:description: 使用 Postcss 開發 CSS
sidebar_position: 2
---

import Figure from "@site/src/components/mdHelper/Figure";

[PostCSS](https://postcss.org/) 是一套使用 JavaScript 轉換 CSS 語法的開發工具，善用社群的[各種 Plugins](https://www.postcss.parts/)，能夠幫助我們提高開發 CSS 的效率。

## 初始化與安裝

```
npm init -y && npm i -D postcss postcss-cli
```

```
npm i -D autoprefixer postcss-assets postcss-import postcss-preset-env precss postcss-uncss uncss
```

安裝完 PostCSS 和相關插件後，在 `package.json` 檔案中，新增編譯並輸出的指令。

格式為：`postcss css檔案名稱(entry) -o 編譯後輸出的檔案位置與名稱 -w`。

`-w` 指的是 watch，就跟使用 webpack 開發時一樣，使用 watch 能在每次儲存後馬上重新編譯並輸出，這樣就不用一直執行重複的指令。

```json title=package.json showLineNumbers
{
  "name": "postcss-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "postcss ./style.css -o public/style.css",
    "watch": "postcss ./style.css -o public/style.css -w"
  },
  ...
}
```

## 安裝 VS Code 擴充套件

因為待會在 CSS 的檔案中會去使用到原生 CSS 不支援的寫法，要是沒有安裝擴充套件的話，CSS 檔案會一片紅，並且會抓不到 Emmet。

在 VS Code Extensions 的地方搜尋 `PostCSS Intellisense and Highlighting` 並安裝。

![Image](https://i.imgur.com/lJsYJ8h.png)

接著打開 VS Code 的 `setting.json`，如果不知道怎麼開的話，可以按下 `Ctrl+P`，然後輸入 `open settings`，並找到 User Settings 打開即可。

![Image](https://i.imgur.com/NW3rSDp.png)

在 `emmet.includeLanguages` 的地方加上 `"postcss" : "css"`。

```json
{
  ...
  "emmet.includeLanguages": {
    "postcss": "css"
  },
  ...
}
```

## 新增檔案

在根目錄新增一個檔案名為 `style.css`，這是待會要使用 PostCSS 撰寫的 CSS 檔案，也是我們的檔案進入點(entry)。

之後再新增一個資料夾名為 `public`，並在該資料夾內新增 `index.html`，到目前為止你的檔案結構應該會長這樣。

![Image](https://i.imgur.com/kksNzBa.png)

在 index.html 檔案中，將下面的程式碼貼上，在程式碼第八行的地方可以看到我們引入了 `style.css`，但目前 public 資料夾內還沒有這支檔案，但待會使用 PostCSS 編譯 CSS 檔案時，會自動將編譯後的結果輸出在 public 資料夾底下。

```html title='index.html' showLineNumbers {8}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body></body>
</html>
```

## PostCSS Config

接著在根目錄新增一個檔案名為 `postcss.config.js`，這是 PostCSS 的設定檔，要在 PostCSS 中使用插件的話都是在這支檔案設定。

:::note 重要
每次更改 postcss.config.js 時，都需要重啟 Server 才能正常運作。
:::

現在就一次將剛剛安裝的所有插件新增至 PostCSS 的設定檔。

```js title=postcss.config.js showLineNumbers
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("precss"),
    require("postcss-import"),
    require("postcss-uncss")({
      html: ["public/index.html"],
    }),
    require("postcss-assets")({
      loadPaths: ["public/assets"],
    }),
  ],
};
```

執行以下指令來編譯並輸出 CSS 檔案：

```
npm run watch
```

接著進行測試，開啟根目錄的 `style.css` 並且在裡面隨便寫個樣式後按下儲存，如果有成功在 public 資料夾底下的 `style.css` 看到我們撰寫的樣式就代表成功了。

<Figure src="https://i.imgur.com/2v5TDTn.gif" />

## autoprefixer

[autoprefixer](https://github.com/postcss/autoprefixer) 插件會檢查我們撰寫的 CSS 樣式是不是每個瀏覽器都支援，通常要是撰寫較新的樣式，都會加上前綴來確保在每個瀏覽器都能正常運行，但我們沒有辦法仔細的檢查自己撰寫的樣式是不是已經支援所有的瀏覽器。

只要啟用 autoprefixer，在我們將 CSS 編譯後，autoprefixer 就會自動檢查我們寫的樣式，要是該樣式還不支援所有瀏覽器，就會自動加上前綴。

<Figure src="https://i.imgur.com/6YO4987.gif" />

<br />

```css title='style.css' showLineNumbers
body {
  margin: 40px;
}

p::selection {
  color: red;
}
```

## postcss-preset-env

[postcss-preset-env](https://github.com/csstools/postcss-preset-env) 能夠讓我們使用未來瀏覽器可能會新增的 CSS 功能，像是 `@custom-selector` 和 `@custom-viewport`。

<Figure src="https://i.imgur.com/X4oehS1.gif" />

<br />

```css title='style.css' showLineNumbers
@custom-selector :--box .box1, .box2, .box3;
@custom-media --viewport-small (width <= 500px);

:--box {
  width: 100px;
  height: 100px;

  @media (--viewport-small) {
    background-color: aqua;
  }
}
```

## precss

[precss](https://github.com/csstools/precss) 能夠讓我們在 CSS 中撰寫類似 SASS 的功能，像是自訂變數名稱。

<Figure src="https://i.imgur.com/CREf2q6.gif" />

<br />

```css title='style.css' showLineNumbers
@custom-selector :--box .box1, .box2, .box3;
@custom-media --viewport-small (width <= 500px);

$column: 100px;

:--box {
  width: calc($column * 3);
  height: 100px;

  @media (--viewport-small) {
    background-color: aqua;
  }
}
```

## postcss-import

[postcss-import](https://github.com/postcss/postcss-import) 能在 CSS 檔案中使用 `import` 的功能，所以現在你可以將 CSS 的邏輯拆成好幾個檔案，最後在 entry import 就可以了。

<Figure src="https://i.imgur.com/rVwLEFi.gif" />

<br />

```css title='variables.css' showLineNumbers
$background-color: cyan;
```

```css title='style.css' showLineNumbers
@custom-selector :--box .box1, .box2, .box3;
@custom-media --viewport-small (width <= 500px);
@import "variables";

$column: 100px;

:--box {
  width: calc($column * 3);
  height: 100px;

  @media (--viewport-small) {
    background-color: $background-color;
  }
}
```

## postcss-assets

[postcss-assets](https://github.com/borodean/postcss-assets) 是針對檔案路徑進行設定的插件，在 <a href="#postcss-config">PostCSS Config</a> 的第 13 行中，我們有在該插件中設定讀取路徑，為 public/assets。

所以現在可以在 CSS 檔案中使用 `resolve()` 直接讀取該目錄底下的資源，像是圖片。

![Image](https://i.imgur.com/bC6hpXO.png)

<Figure src="https://i.imgur.com/u7GuqRn.gif" />

<br />

又或是可以取得原始圖片的 `寬度` 和 `高度` 來設定 `width` 和 `height`。

<Figure src="https://i.imgur.com/ByRhLJU.gif" />

<br />

```css title='style.css' showLineNumbers
@custom-selector :--box .box1, .box2, .box3;
@custom-media --viewport-small (width <= 500px);
$column: 100px;
@import "variables";

:--box {
  width: width("css.png");
  height: height("css.png");
  background-image: resolve("css.png");

  @media (--viewport-small) {
    background-color: $background-color;
  }
}
```
