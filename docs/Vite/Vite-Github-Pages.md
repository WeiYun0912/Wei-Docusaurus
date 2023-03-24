---
title: "[vite] 將 Vite 專案部署至 Github Pages"
keywords: [react, react教學, vite, vite alias, alias]
description: 要將 Vite 部署至 Github Page 也非常簡單，先在你要部署的專案底下安裝 gh-pages 套件。
author: WeiYun0912
og:title: 將 Vite 專案部署至 Github Pages
og:description: 要將 Vite 部署至 Github Page 也非常簡單，先在你要部署的專案底下安裝 gh-pages 套件。
sidebar_position: 2
---

要將 Vite 部署至 Github Page 也非常簡單，先在你要部署的專案底下安裝 gh-pages 套件。

```
npm install gh-pages --save-dev
```

接著到 vite.config.js 中設定你的 Base URL。

在 base 的地方填上 `/你的Github Repo名稱/`，像我的 Repo 名稱是 `vite-react-project`，就要填上 `/vite-react-project/`。

```js title='vite.config.js' showLineNumbers
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-react-project/",
  plugins: [react()],
});
```

最後在 package.json 內將 deploy 的指令補上：

```json showLineNumbers {10,11}
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}

```

最後執行以下指令：

```
npm run deploy
```

接著到你的 Github Repo 的 Settings，並在右邊選單中找到 Pages。

![Image](https://i.imgur.com/faaXufa.png)

就可以看到你的專案被[部署成功](https://weiyun0912.github.io/vite-react-project/)了，要是沒有看到網址的話要等一下，不會在 deploy 之後馬上顯示出來。

![Image](https://i.imgur.com/n1Ygm5k.png)
