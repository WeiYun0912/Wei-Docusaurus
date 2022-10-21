---
title: Storybook 介紹與實作
keywords: [react, storybook]
description: 1
author: WeiYun0912
og:title: Storybook 介紹
og:description: 1
sidebar_position: 1
---

[Storybook Args Table](https://storybook.js.org/docs/react/writing-docs/doc-block-argstable)

[Storybook Controls](https://storybook.js.org/docs/react/essentials/controls)

## 說明

如果團隊要檢查各個成員之間更改了哪些程式碼，可以使用版本控制工具，例如：Git。

但今天如果是想要看到的是各個元件之間，或是畫面的變化，例如：按鈕樣式、頁面樣式等，就可以使用 Storybook，來講述你元件與畫面的故事。

Storybook 也支援 Markdown 語法，所以針對一些教學需要用文字來表達的話也可以。

在開始之前，可以先到官方的[Showcase](https://storybook.js.org/showcase)，體驗一下使用 Storybook 帶來的好處。

## 安裝

要使用 Storybook，必須先將有一份 React 專案，這邊先用 Vite 快速建立一份 React 專案。

```
npm create vite@latest 你的專案名稱 -- --template react && npm install
```

接著在該專案目錄底下安裝 Storybook：

```
npx sb init --builder @storybook/builder-vite
```

:::note
安裝的時間會有點久是正常的
:::

安裝成功後會看到專案多了 `.storybook` 資料夾，在 src 裡面也可以看到 `stories` 資料夾，裡面已經有預設的 stories 了，執行以下指令來開啟 Storybook：

```
npm run storybook
```

![Image](https://i.imgur.com/yWUGkAI.png)

## 建立 stories

現在可以建立我們的第一個 stories，在 stories 資料夾內新增一個名為 `Box.jsx` 和 `Box.stories.jsx` 的檔案。

```jsx title='Box.jsx' showLineNumbers
import React from "react";

const Box = () => {
  return <div>Box</div>;
};

export default Box;
```

```jsx title='Box.stories.jsx' showLineNumbers
import Box from "./Box";

export default {
  title: "Box",
  component: Box,
};

export const largeBox = () => <Box />;
```

現在在畫面上可以看到 Box 底下有一個 Large Box，也就是剛剛建立的 stories。

![Image](https://i.imgur.com/R4NWhAu.png)

如果日後 stories 太多需要分類的話，只需要在 title 的地方做更改即可。

```jsx title='Box.stories.jsx' showLineNumbers {4}
import Box from "./Box";

export default {
  //將Box分類到Component
  title: "Component/Box",
  component: Box,
};

export const largeBox = () => <Box />;
```

![Image](https://i.imgur.com/Z2F4bax.png)


## 施工中 🚧