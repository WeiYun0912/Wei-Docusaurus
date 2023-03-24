---
title: "[storybook] Storybook 介紹與實作"
keywords: [react, react教學, storybook]
description: 今天如果是想要看到的是各個元件之間，或是畫面的變化，例如：按鈕樣式、頁面樣式等，就可以使用 Storybook，來講述你元件與畫面的故事。
author: WeiYun0912
og:title: Storybook 介紹
og:description: 今天如果是想要看到的是各個元件之間，或是畫面的變化，例如：按鈕樣式、頁面樣式等，就可以使用 Storybook，來講述你元件與畫面的故事。
sidebar_position: 1
---

## 說明

如果團隊要檢查各個成員之間更改了哪些程式碼，可以使用版本控制工具，例如：Git。

但今天如果是想要看到的是各個元件之間，或是畫面的變化，例如：按鈕樣式、頁面樣式等，就可以使用 Storybook，來講述你元件與畫面的故事。

Storybook 也支援 Markdown 語法，所以針對一些教學需要用文字來表達的話也可以。

在開始之前，可以先到官方的[Showcase](https://storybook.js.org/showcase)，體驗一下使用 Storybook 帶來的好處。

## 安裝

要使用 Storybook，必須先有一份 React 專案，這邊用 Vite 快速建立一份 React 專案。

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
  const style = {
    width: "200px",
    backgroundColor: "cyan",
  };

  return <div style={style}>Box</div>;
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

![Image](https://i.imgur.com/G6GMqpN.png)

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

## PropTypes

如果要讓使用者能夠和 Component 互動的話，需要去定義 Component 的 [PropTypes](https://storybook.js.org/docs/react/writing-docs/doc-block-argstable)。

```jsx title='Box.jsx' showLineNumbers
import React from "react";
import PropTypes from "prop-types";

const Box = () => {
  const style = {
    width: "200px",
    backgroundColor: "cyan",
  };

  return <div style={style}>Box</div>;
};

export default Box;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  show: PropTypes.bool,
};
```

重新整理後就會在 stories 的 control 中看到我們定義的 prop 。

![Image](https://i.imgur.com/0YCQX6k.png)

那要怎麼讓 Box Component 接收到這些 prop 呢?

一旦我們設定好 PropTypes 後，Box Component 其實就已經能接收到這些 prop 了。

```jsx title='Box.jsx' showLineNumbers
import React from "react";
import PropTypes from "prop-types";

const Box = ({ backgroundColor, label, size, show }) => {
  console.log(backgroundColor, label, size, show);
  const style = {
    width: "200px",
    backgroundColor: "cyan",
  };

  return <div style={style}>Box</div>;
};

export default Box;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  show: PropTypes.bool,
};
```

打開 console 後，會發現只有`label`有值，其他的都是 undefined。

![Image](https://i.imgur.com/3qqhnx7.png)

這時候我們可以在 controls 的地方去選取 backgroundColor，size 的部分選擇 sm，show 的部分選擇 true。

![Image](https://i.imgur.com/wbIgLXs.png)

再看一次 console，就會看到我們的 prop 有成功輸出了。

![Image](https://i.imgur.com/HLy5d5Q.png)

所以現在可以將傳入的參數帶進 Component 裡面並做一些判斷。

```jsx title='Box.jsx' showLineNumbers {5-7,10,11,14}
import React from "react";
import PropTypes from "prop-types";

const Box = ({ backgroundColor, label, size, show }) => {
  let scale = 1;
  if (size == "sm") scale = 0.5;
  if (size == "md") scale = 0.75;
  const style = {
    width: "200px",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    backgroundColor,
  };

  return <>{show && <div style={style}>{label}</div>}</>;
};

export default Box;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  show: PropTypes.bool,
};
```

![Images](https://i.imgur.com/LYH6YZh.gif)

## Default Props

如果我們希望 Component 在剛載入的時候就有預設 prop 的話，可以在 Component 中定義 `defaultProps`。

```jsx title='Box.jsx' showLineNumbers {26-31}
import React from "react";
import PropTypes from "prop-types";

const Box = ({ backgroundColor, label, size, show }) => {
  let scale = 1;
  if (size == "sm") scale = 0.5;
  if (size == "md") scale = 0.75;
  const style = {
    width: "200px",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    backgroundColor,
  };

  return <>{show && <div style={style}>{label}</div>}</>;
};

export default Box;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  show: PropTypes.bool,
};

Box.defaultProps = {
  backgroundColor: "cyan",
  label: "Hello I'm Box.",
  show: true,
  size: "lg",
};
```

![Image](https://i.imgur.com/4jzd1er.png)

## 建立多份 stories

現在可以建立基於 Box Component 的其他 stories，例如：尺寸較小的 Box(sm)、尺寸中型的 Box(md)。

我們可以先創建一個樣板(Template)，樣板會接收到參數，之後將該參數傳至 Box Component，以此方式建立多份 story。

:::note
💡 Template.bind({}) 是 標準的 JavaScript 技巧，用來複製函式。此技巧是用來讓每個輸出的 story 可以設定各自的參數，但使用完全相同的方法。

來源：https://storybook.js.org/tutorials/intro-to-storybook/react/zh-TW/simple-component/
:::

```jsx title='Box.stories.jsx' showLineNumbers
import Box from "./Box";

export default {
  title: "Component/Box",
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const largeBox = Template.bind({});

largeBox.args = {
  label: "Large Box",
  size: "lg",
};

export const mediumBox = Template.bind({});

mediumBox.args = {
  label: "Medium Box",
  size: "md",
};

export const smallBox = Template.bind({});

smallBox.args = {
  label: "Small Box",
  size: "sm",
};
```

![Images](https://i.imgur.com/TBjsLso.gif)

## Controls

我們也可以[自訂 control 的 type](https://storybook.js.org/docs/react/essentials/controls)，像是在 label prop 的地方，我們想要呈現的是下拉式選單，並且有值能夠讓使用者自行選取。

```jsx title='Box.stories.jsx' showLineNumbers {6-10}
import Box from "./Box";

export default {
  title: "Component/Box",
  component: Box,
  argTypes: {
    label: {
      options: ["選項1", "選項2", "選項3"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Box {...args} />;

export const largeBox = Template.bind({});

largeBox.args = {
  label: "Large Box",
  size: "lg",
};

export const mediumBox = Template.bind({});

mediumBox.args = {
  label: "Medium Box",
  size: "md",
};

export const smallBox = Template.bind({});

smallBox.args = {
  label: "Small Box",
  size: "sm",
};
```

![Images](https://i.imgur.com/FwnKt9Y.gif)

## Decorators

如果希望在每一個 story 底下的 Component 都能夠套樣相同的 CSS，則可以使用 Decorators 來達到該功能。

先建立一個 Center 的 HOC，在裡面撰寫置中的 CSS：

```jsx title='Center.jsx' showLineNumbers {6-10}
import React from "react";

const Center = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
```

之後打開 `.storybook` 資料夾內的 `preview.jsx`，直接 export decorators，decorators 內自帶參數 Story，可以把它想像成我們的所有 stories 底下的 Component。

所以現在是使用 Center HOC 將所有的 Component 包住，以此套用置中 CSS。

:::note
如果是使用 vite 開發的話，preview 檔案的結尾記得要改成`.jsx`。
:::

```jsx title='preview.jsx' showLineNumbers {13-19}
import Center from "../src/stories/Center";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];
```

![Image](https://i.imgur.com/3b95utO.png)

## Addon

我們也可以在 Storybook 專案內安裝額外的插件，這邊示範如何使用 `addon-viewport` 插件。

```
npm i @storybook/addon-viewport
```

接著打開 `preview.jsx`，在 `parameters` 的地方加上 viewport，並把 addon-viewport 的 INITIAL_VIEWPORTS 給帶入。

```jsx title='preview.jsx' showLineNumbers {2,11-13}
import Center from "../src/stories/Center";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];
```

回到畫面，在上方的 size of preview 多了更多的尺寸讓我們去做選擇，方便進行測試。

![Image](https://i.imgur.com/1nXtP8C.png)

## Chromatic

```yml title="chromatic.yml"
# Workflow name
name: "Chromatic Deployment"

# Event for the workflow
on: push

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
        #👇 Adds Chromatic as a step in the workflow
      - uses: chromaui/action@v1
        # Options required for Chromatic's GitHub Action
        with:
          #👇 Chromatic projectToken, see https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/ to obtain it
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.GITHUB_TOKEN }}
```
