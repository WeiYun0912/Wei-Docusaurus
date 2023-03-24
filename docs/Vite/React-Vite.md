---
title: "[vite] 使用 Vite 快速建立 React 專案"
keywords: [react, react教學, vite, cra]
description: 當一個專案的檔案數量太多時，使用 cra 開啟 server 的速度就會變得非常慢，在 HMR 的速度上也會受影響。
author: WeiYun0912
og:title: 使用 Vite 快速建立 React 專案
og:description: 當一個專案的檔案數量太多時，使用 cra 開啟 server 的速度就會變得非常慢，在 HMR 的速度上也會受影響。
sidebar_position: 1
---

[影片連結](https://www.youtube.com/watch?v=L2st9fjYjZM&t=3s&ab_channel=WeiWei)

## 說明

以往在學習 React 時，總是會使用 `create-react-app` 簡稱 cra，來建立我們的 React 專案，使用 cra 的好處在於，許多的設定不用自己去調整，像是 Hot Module Replacement(HMR)、Babel 轉譯等。

但是當一個專案的檔案數量太多時，使用 cra 開啟 server 的速度就會變得非常慢，在 HMR 的速度上也會受影響。

這是因為 cra 的打包工具是使用 Webpack，而 Webpack 的運作方式為，先將檔案進行打包編譯，在啟動 Dev Server(開發伺服器)，當我們去請求 Server 時，Server 會直接給予打包後的結果。

這也是為什麼只要當檔案數量一多起來，Webpack 速度就逐漸變緩慢的原因，因為要打包的檔案太多了。

![Image](https://i.imgur.com/vUyq4N2.png)

## Vite

Vite 為 Vue 社群提供的打包工具，它的特色就是非常的快，但 Vite 並不是只能使用在 Vue，它也支援原生 JS、React、Svelete 等網頁 Library 和 Framework 的打包。

Vite 與 Webpack 最大的差異為 Vite 是直接將程式原始碼交給瀏覽器去處理，略過了 Webpack 打包編譯的部分，且 Vite 是使用 esBuild 來打包檔案，並由 Go 語言所開發而成，另外，不同於 Webpack，在啟動 Vite 時，會直接開啟 Dev Server，並不會將檔案編譯打包後才啟動。

而當我們去訪問頁面時，Vite 會根據我們請求的頁面模組(module)進行即時編譯，再將結果回傳給我們，這也是為什麼兩者打包工具之間的速度會有較大的差異。

![Image](https://i.imgur.com/6jy4nMk.png)

## 使用 Vite 建立 React 專案

在使用 Vite 以前，要注意 Node 的版本應為 14.18+ 或 16+。

:::note
Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
:::

執行以下指令來使用 Vite 快速建立 React 專案：

```
npm create vite@latest 你的專案名稱 -- --template react
```

如果是要建立 TypeScript 專案的話，改成以下指令：

```
npm init vite@latest 你的專案名稱 -- --template react-ts
```

之後再切換到專案目錄並執行以下指令，這邊就可以開始感受使用 Vite 建立 React 專案有多快速了。

```
npm install
```

而我們使用 Vite 建立的 React 專案有幾點需要注意：

1. Component 檔案名稱不能是.js 結尾，應更改為.jsx。
2. index.html 是在專案根目錄，並非 public 資料夾。
3. 如需將網頁進行部署，需在 vite.config.js 中去定義 Base URL。

接著在專案目錄執行以下指令來開啟我們的 React 專案。

```
npm run dev
```

成功開啟後，會看到以下畫面：

![Image](https://i.imgur.com/Jv4Wltj.png)

而從建立 React 專案到開啟 React 專案，僅花了 2 分鐘左右的時間，相比 cra 真的快上許多。

![Image](https://i.imgur.com/sLBF232.png)

在我的電腦上，使用 cra 建立一個全新 React 專案的時間為 15 分鐘左右

![Image](https://i.imgur.com/x1rwsm3.png)

## 在舊專案使用 Vite

https://github.com/WeiYun0912/starmovie

要在已經使用 cra 的 React 專案改為 Vite 的話需要經過以下幾個步驟。

:::danger
建議是先將舊的專案備份，這樣途中要是出錯的話還能還原到 cra 的環境。
:::

### 刪除 react-scripts 並安裝 Vite

cra 是使用 react-scripts 來啟動專案，而 Vite 並不需要使用到 react-scripts，所以直接將該套件刪除，刪除該套件也需要花一點時間。

```
npm uninstall react-scripts
```

接著安裝 Vite 到 devDependencies：

```
npm install vite @vitejs/plugin-react --save-dev
```

### 修改 package.json 的 scripts

將 Vite 的指令新增至 package.json 的 scripts 中，並把 react-scripts 的指令移除。

```json title="package.json" showLineNumbers
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}

```

### 建立 Vite Config

之後在專案根目錄建立一個檔案名為 vite.config.js，並將以下程式碼貼上：

```js title='vite.config.js' showLineNumbers
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### 移動 index.html

將 public 資料夾內的 index.html 移動到專案根目錄，並將 `%PUBLIC_URL%`給移除，並在 body 引入 `src/index.jsx` 檔案，type 記得定義為 module。

如果你的 React 專案有使用到 require 的記得要通通改成 import，專案內的 Component js 檔案也要更改為.jsx。

```html title="index.html" showLineNumbers {5,12,13,19}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

此時你的根目錄應該會像這樣

![Image](https://i.imgur.com/9VbQxr0.png)

### 開啟專案

將以上設定調整完後，執行以下指令來啟動專案：

```
npm run dev
```

![Image](https://i.imgur.com/isk8nh5.png)
