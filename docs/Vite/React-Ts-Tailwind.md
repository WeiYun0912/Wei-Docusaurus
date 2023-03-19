---
title: "[vite] 使用 Vite 快速建立 React + TypeScript + Tailwind CSS 專案"
keywords: [react, react教學, vite, cra, typescript, tailwind]
description: 使用 Vite 快速建立 React + TypeScript + Tailwind CSS 專案。
author: WeiYun0912
og:title: 使用 Vite 快速建立 React + TypeScript + Tailwind CSS 專案
og:description: 使用 Vite 快速建立 React + TypeScript + Tailwind CSS 專案。
sidebar_position: 1
---

先建立 React + TypeScript 專案

```
npm create vite@latest react-ts-tailwind -- --template react-ts
```

安裝 Tailwind CSS 和其他相依套件：

```
npm install -D tailwindcss postcss autoprefixer
```

初始化：

```
npx tailwindcss init -p
```

打開 `tailwind.config.cjs` 將以下程式碼貼上：

```js title='tailwind.config.cjs' showLineNumbers
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

打開 `index.css` 將以下程式碼貼上：

```css title='index.css' showLineNumbers
@tailwind base;
@tailwind components;
@tailwind utilities;
```

最後再安裝個 `Prettier`：

```
npm install -D prettier prettier-plugin-tailwindcss
```
