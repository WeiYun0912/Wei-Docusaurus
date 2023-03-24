---
title: "[javascript] 使用 Skeleton 增加使用者體驗"
keywords: [CSS, css, skeleton]
description: 假設網頁需要在一開始載入過大的內容，導致網頁畫面渲染過久，使內容無法第一時間呈現給使用者，這就會降低使用者體驗，所以許多網頁在載入資源時會使用 Skeleton，避免使用者看到的畫面是空白的網頁。
author: WeiYun0912
og:title: 使用 Skeleton 增加使用者體驗
og:description: 假設網頁需要在一開始載入過大的內容，導致網頁畫面渲染過久，使內容無法第一時間呈現給使用者，這就會降低使用者體驗，所以許多網頁在載入資源時會使用 Skeleton，避免使用者看到的畫面是空白的網頁。
sidebar_position: 2
---

假設網頁需要在一開始載入過大的內容，導致網頁畫面渲染過久，使內容無法第一時間呈現給使用者，這就會降低使用者體驗，所以許多網頁在載入資源時會使用 Skeleton，避免使用者看到的畫面是空白的網頁。

Skeleton 的效果如下圖：

![Images](https://i.imgur.com/34V3pf0.gif)

今天的完成品如下圖所示：

![](https://i.imgur.com/cwsA34X.gif)

## 製作 Skeleton

首先先定義最基本的 HTML 結構，這邊會使用 `template` 標籤先自訂一個樣板和一個`div`標籤，該 div 標籤會拷貝 template 標籤內的結構。

製作 Skeleton 其實就只是將原本需載入內容的容器加上載入的動畫而已，以下 HTML 結構有加上 skeleton 的都是待會會在 css 設置動畫的 class，其餘 css 的部分就不多贅述。

```html title='index.html' showLineNumbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Skeleton</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="grid"></div>

    <template id="card-template">
      <div class="card">
        <div class="header">
          <img
            class="header-img skeleton"
            src="https://source.unsplash.com/100x100/?nature"
          />
          <div class="title" data-title>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>
        <div data-body>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </template>
    <script src="index.js"></script>
  </body>
</html>
```

首先先將 skeleton 的動畫定義出來

- 1 - 4 行：將 skeleton 透明度設置為 0.7，這麼做的原因是因為要是 skeleton 跟之後要載入的內容背景顏色相差過多，透明度能有效降低色差效果，並且將 skeleton 的載入動畫設定為無限播放 **(infinite)** 且當動畫結束時，會從動畫結束的地方在回到動畫開始的地方 **(alternate)**，簡單來說就是反向播放。
- 6 - 10 行：將要載入的文字內容加上間距和圓弧效果。
- 13 - 15 行：將最後一段文字和其他文字的寬度大小調整，以此達到視差效果。
- 18 - 26 行：skeleton 動畫效果，0% ~ 100%時將背景顏色進行更改。

```css title='style.css' showLineNumbers
.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

/* ------------以上為skeleton動畫的部分------------ */

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
}

.card {
  background-color: blue;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 16px;
  border-radius: 4px;
}

.header {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.header-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 1rem;
  flex-shrink: 0;
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  text-transform: capitalize;
  word-wrap: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
}
```

## 載入內容

接著來到載入內容的部分，這邊會使用 fetch 來取得文章 API，並將文章內容載入我們的畫面

API 網址為：https://jsonplaceholder.typicode.com/posts

- 1 - 2 行：抓取 DOM 節點。

- 3 - 5 行：因為是使用**template**標籤的關係，我們可以將**template**標籤內的結構拷貝，所以程式碼的意思是，將**template**內的結構拷貝到**grid**(class)，這邊**for**迴圈的**i<2**意思是畫面剛載入的時候，**有 2 個 skeleton 的結構顯示在畫面上。**

- 6 - 16 行：利用 fetch 取得外部 API 資源，並將取得的內容顯示在網頁上，這邊一樣是拷貝**template**結構並渲染到**grid**(class)，如此一來渲染出來的內容都有著 skeleton 的結構，有著 skeleton 的結構代表在載入內容時就不會讓使用者看到空白的畫面。

```js title='index.js' showLineNumbers
const grid = document.querySelector(".grid");
const cardTemplate = document.querySelector("#card-template");
for (let i = 0; i < 2; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}
fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
  .then((res) => res.json())
  .then((posts) => {
    grid.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.querySelector("[data-title]").textContent = post.title;
      div.querySelector("[data-body]").textContent = post.body;
      grid.append(div);
    });
  });
```

![](https://i.imgur.com/cwsA34X.gif)
