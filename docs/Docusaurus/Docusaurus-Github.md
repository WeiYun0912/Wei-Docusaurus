---
title: "[docusaurus] 將 Docusaurus 專案部署至 Github Page"
keywords: [react, Docusaurus, docusaurus, docusaurus 教學, github page]
description: 在 docusaurus.config.js 檔案中，將 url 更改為 https://你的Github帳號.github.io，baseUrl 改成 /你的Github Repo名稱/。
author: WeiYun0912
og:title: 將 Docusaurus 專案部署至 Github Page
og:description: 在 docusaurus.config.js 檔案中，將 url 更改為 https://你的Github帳號.github.io，baseUrl 改成 /你的Github Repo名稱/。
sidebar_position: 1
---

安裝 gh-pages 套件：

```
npm install gh-pages --save-dev
```

在 docusaurus.config.js 檔案中，將 url 更改為 `https://你的Github帳號.github.io` ，baseUrl 改成 `/你的Github Repo名稱/`。

```js title='docusaurus.config.js' showLineNumbers
const config = {
  title: "Wei Site",
  tagline: "Wei Site",
  url: "https://你的Github帳號.github.io",
  baseUrl: "/你的Github Repo名稱/",
  ...
};
```

之後就可以執行部署指令

```
npm run deploy
```

這時候會跳出錯誤提示，告訴我們還要設定 GIT_USER 才能成功部署。

![Image](https://i.imgur.com/nHhn44R.png)

所以加上 GIT_USER 參數後再部署一次：

```
cmd /C 'set "GIT_USER=你的GIT使用者帳號" && npm run deploy'
```
