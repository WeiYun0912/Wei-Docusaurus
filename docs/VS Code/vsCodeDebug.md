---
title: "[vscode] 使用 VS Code 進行 Debug (JavaScript)"
keywords: [vscode, vscode debug, debug, live server]
description: 但如果只有單螢幕的話要把畫面切來切去 Debug，這會非常麻煩，所以我們可以直接用 VSCode 提供的 Debug 功能。
author: WeiYun0912
og:title: 使用 VS Code 進行 Debug (JavaScript)
og:description: 但如果只有單螢幕的話要把畫面切來切去 Debug，這會非常麻煩，所以我們可以直接用 VSCode 提供的 Debug 功能。
sidebar_position: 1
---

我們常常會用瀏覽器提供的開發者工具來 Debug，在程式碼裡面輸入 console.log()，然後在瀏覽器按下 F12 選擇 console 來查看結果。

![](https://i.imgur.com/XoWTRhd.png)

但如果只有單螢幕的話要把畫面切來切去 Debug，這會非常麻煩，所以我們可以直接用 VSCode 提供的 Debug 功能。

先在 VSCode 安裝 **Live Server** 擴充套件

![](https://i.imgur.com/87QQwR1.png)

然後新增一個資料夾後，用 VSCode 打開，並在裡面新增兩個檔案，**index.html** 和 **app.js**

![](https://i.imgur.com/4djQh4X.png)

之後在 VSCode 按下左邊選單的 **Run and Debug**

![](https://i.imgur.com/VGmeetr.png)

點擊 **create a launch.json file** 然後選擇 Chrome，成功後會出現以下畫面，並且在根目錄會出現 **.vscode**的資料夾

![](https://i.imgur.com/JbsMNIw.png)

還記得我們剛剛安裝的擴充套件 **Live Server** 嗎？ 你應該不希望**每次存檔後都還要按下重新整理吧？**

我們先把**launch.json**檔案設定一下，將以下設定檔直接貼上就好。

:::note 備註
url 的部分是 Live Server 運作的 port，如果 port 有改過的話記得不要照我的填，我的 port 是套件預設。
:::

```json title="launch.json"
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:5500",
      "name": "Open index.html",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

改好以後，我們開啟**app.js**並在 VSCode 右下角按下 **Go Live**。

![](https://i.imgur.com/MtnxTtY.png)

可以看到**Live Server**幫我們開啟了網頁，現在可以把這個網頁關閉。

之後回到**Run and Debug**按下左上角的**綠色開始鍵**，成功後會打開網頁，

並且在 VSCode 的**DEBUG CONSOLE**會看到我們的 console

![](https://i.imgur.com/qi6KhYR.png)

現在試著在 app.js 在輸入一條 console，然後按下存檔~

成功的話你會看到以下畫面，因為有**Live Server**的關係，我們不需要手動將網頁重新整理！

![](https://i.imgur.com/vyUtT9u.png)
