---
title: "[vscode] 實用的 VS Code 套件 (網頁開發)"
keywords: [vscode, vscode extensions, extensions]
description: 實用的 VS Code 套件 (網頁開發)
author: WeiYun0912
og:title: 實用的 VS Code 套件 (網頁開發)
og:description: 常用的 VS Code 套件
sidebar_position: 1
---

[影片連結](https://www.youtube.com/watch?v=GXSs-BOIJgA)

## Auto Rename Tag

[安裝連結](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

`Auto Rename Tag` 套件在需要修改頭尾的 HTML 或 JSX 標籤時非常有用，當我們在標籤的頭修改標籤名稱時，該套件會連同結尾的標籤名稱一同修改，效果如下圖：

![Images](https://i.imgur.com/KHeLxZC.gif)

## Thunder Client

[安裝連結](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

在開發網站時，很多時候會需要使用到別人提供的 API，一般情況下會使用第三方軟體 `postman` 或 `insomnia` 來發送請求測試 API，並查看 API 給予的欄位與資料有哪些是我們會使用到的。

如果不想安裝額外的軟體，則可以在 VS Code 安裝 `Thunder Client` 套件，它與上述提到的軟體差不多，也能夠將你常使用到的 API 儲存或整理成一份資料夾。

![Image](https://i.imgur.com/75Y63c7.png)

## ES7+ React/Redux/React-Native snippets

[安裝連結](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

該套件是 React 相關語法的 [snippets](https://github.com/chillios-ts/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)，它將許多常用的語法寫成 snippets，讓我們在撰寫 React 的時候能夠提高開發效率。

個人較常使用的是 `rafce`、`rfce`、`rfc`、`rnf`。

![Images](https://i.imgur.com/Evghs3U.gif)

## TODO Highlight

[安裝連結](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

如果你常常忘記程式碼的哪個地方需要修改或是新增功能，則該套件非常適合你，安裝後只要在檔案中輸入 `// TODO:` 或 `// FIXME:`，之後在 VS Code 中按下 `Ctrl + P`或是 `F1`打開上方的命令列，然後輸入 `>TODO-Highlight: List ...`，不用全部輸入完，選開頭有 List 的即可。

之後就會在你 VS Code 的 Output 看到你在檔案中標示 TODO 或 FIXME 的行數，只要按下 `CTRL + 左鍵` 就可以快速移動到那一行。

![Images](https://i.imgur.com/QGajzvR.gif)

## Import Cost

[安裝連結](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

該套件能顯示引入套件所佔用的容量大小，如果容量過大就會顯示紅色的文字，綠色則是正常。

![Image](https://i.imgur.com/tfVjwUj.png)

## vscode-styled-components

[安裝連結](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

如果你是使用 `styled-component` 來開發的話，會發現使用 styled 時，並不會有 css 的提示文字讓我們能夠快速輸入，有時候不小心打錯一個字要 debug 就會非常麻煩。

安裝前：

![Images](https://i.imgur.com/6B8SOPz.gif)

安裝後：

![Images](https://i.imgur.com/9B74NrU.gif)
