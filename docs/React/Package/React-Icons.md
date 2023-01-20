---
title: "[react] React Icons"
keywords: [react, react教學, react-icons]
description: React Icons 是一款熱門的 Icon 套件，它將各大 Icon Library 彙整在一起，讓我們在 React 專案內可以很快速的挑選想要的 Icon，也可以針對 Icon 的大小即顏色進行調整。
author: WeiYun0912
og:title: React Icons
og:description: React Icons 是一款熱門的 Icon 套件，它將各大 Icon Library 彙整在一起，讓我們在 React 專案內可以很快速的挑選想要的 Icon，也可以針對 Icon 的大小即顏色進行調整。
---

[官網](https://react-icons.github.io/react-icons/)

[完整程式碼](https://github.com/WeiYun0912/React-Icons)

## 說明

React Icons 是一款熱門的 Icon 套件，它將各大 Icon Library 彙整在一起，讓我們在 React 專案內可以很快速的挑選想要的 Icon，也可以針對 Icon 的大小即顏色進行調整。

在官方的左選單可以看到有非常多的 Icon Library 讓我們去使用。

![Image](https://i.imgur.com/uxZRCTd.png)

也可以在左選單針對你想要 Icon 名稱進行搜尋

![Image](https://i.imgur.com/oXfAFul.png)

該套件的 Icon 命名規則為，Icon Library 的名稱縮寫加上 Icon 名稱。

舉例來說，Bootstrap Icons 為 bs，所以只要看到 Icon 名稱前面有加上 Bs 的，就是 Boostrap 的 Icon。

![Image](https://i.imgur.com/ox6JgQs.png)

## 安裝使用

執行以下指令來安裝 React Icons：

```
npm install react-icons --save
```

我已經先將基本的 CSS 樣式寫好了，只要貼到 App.css 就好。

```css title='App.css' showLineNumbers
.header {
  height: 60px;
  background-color: #06283d;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.info {
  display: flex;
  align-items: center;
  margin-right: 30px;
  gap: 15px;
}

.info .item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
```

而 App.js 的程式碼如下：

```jsx title='App.js' showLineNumbers
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <span>Home</span>
          </div>
          <div className="item">
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

目前的畫面如下圖所示：

![Image](https://i.imgur.com/r0ftNvo.png)

現在我們希望在 `Home` 文字的旁邊能夠加上一個房子的 Icon。

到官網挑選後，決定使用 Font Awesome 的 Home Icon，所以在專案直接到套件的 fa(font awesome)資料夾匯入該 Icon 即可。

```jsx title='App.js' showLineNumbers {2,13}
import "./App.css";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="item">
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

![Image](https://i.imgur.com/IB9xf48.png)

如果要調整 Icon 的大小與顏色，可以加上 size 和 color。

```jsx title='App.js' showLineNumbers {13}
import "./App.css";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <FaHome size={40} color="#FB2576" />
            <span>Home</span>
          </div>
          <div className="item">
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

![Image](https://i.imgur.com/yfizwZJ.png)

現在也在 `Shop` 文字的旁邊加上一個購物袋的 Icon，

```jsx title='App.js' showLineNumbers {2,17}
import "./App.css";
import { FaHome, FaShoppingBag } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <FaHome size={40} color="#FB2576" />
            <span>Home</span>
          </div>
          <div className="item">
            <FaShoppingBag />
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

現在問題來了，新引入的 Icon 它的樣式是沒有經過任何調整的，所以如果希望它和 Home Icon 的大小和顏色都一樣的話，就要在寫一次 size 和 color，非常的麻煩。

![Image](https://i.imgur.com/zPHoDCG.png)

## Icon Context

為了解決 Icon 樣式統一的問題，官方提供了 Icon Context 來讓我們使用，它和 Context API 一樣，需要包覆整個 React Application，之後只要在 Icon Context 內去調整預設的 Icon 樣式即可。

```jsx title='index.js' showLineNumbers {5,8}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";

ReactDOM.render(
  //將預設Icon樣式調整為 size : 40 , color : "#FB2576"
  <IconContext.Provider value={{ size: 40, color: "#FB2576" }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IconContext.Provider>,
  document.getElementById("root")
);
```

下圖為 IconContext 能夠使用的 props：

![Image](https://i.imgur.com/lj60PcB.png)

現在回到網頁，並**重新整理**，成功的話就會看到購物袋的 Icon 樣式被修改了。

![Image](https://i.imgur.com/MGPoTZk.png)

如果要複寫的話也很簡單，在 Icon 直接加上原本的 color 或 size 即可。

```js title='App.js' showLineNumbers {17}
import "./App.css";
import { FaHome, FaShoppingBag } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <FaHome size={40} color="#FB2576" />
            <span>Home</span>
          </div>
          <div className="item">
            <FaShoppingBag color="#fff" />
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

![Image](https://i.imgur.com/6tnGpbx.png)

:::note 備註
你也可以直接在 Icon 寫你自己的 CSS，只要使用 style prop 即可。
:::
