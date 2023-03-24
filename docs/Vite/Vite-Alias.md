---
title: "[vite] Vite Alias"
keywords: [react, react教學, vite, vite alias, alias]
description: 在開發專案時，要是 import 的檔案路徑太多層，可以使用 Alias 來解決此問題。
author: WeiYun0912
og:title: Vite Alias
og:description: 在開發專案時，要是 import 的檔案路徑太多層，可以使用 Alias 來解決此問題。
sidebar_position: 3
---

在使用 Vite 開發專案時，要是 import 的檔案路徑太多層，可以使用 Alias 來解決此問題。

假設我在 Posts.jsx 要引入 apiSlice.js 這隻檔案，而我的檔案結構長這樣：

![Image](https://i.imgur.com/Yt6CkOt.png)

則在 Posts.jsx 需這樣寫：

```jsx title='Posts.jsx' showLineNumbers
import { useGetAllPostsQuery } from "../store/subFolder1/subFolder2/apiSlice";
```

如果覺得路徑太冗長，則可以在 vite.config.js 檔案內去設定 Alias。

意思是，當我們輸入 `@api` 時，它的路徑為 `src/store/subFolder1/subFolder2/` ，所以如果要引入 apiSlice.js 這隻檔案的話，只要寫成 `@api/apiSlice` 即可。

```js title='vite.config.js' showLineNumbers {10-13}
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@api",
        replacement: path.resolve(
          __dirname,
          "src/store/subFolder1/subFolder2/"
        ),
      },
    ],
  },
});
```

```jsx title='Posts.jsx' showLineNumbers
import { useGetAllPostsQuery } from "@api/apiSlice";
```
