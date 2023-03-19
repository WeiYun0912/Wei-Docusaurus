---
title: "[react native] React Native Expo 在手機上開發與測試應用程式 (不連到同一個 WIFI 的方法)"
keywords: [react native, expo]
---

簡單介紹一下要如何使用 Expo 在自己的手機上開發 React Native 應用程式，如果之前有相關經驗，應該知道要這麼做的話，需要讓手機跟電腦連到同一個 WIFI，但這就有點麻煩了。

首先要先在自己的手機安裝，Expo Go 的 APP：

- IOS：https://apps.apple.com/tw/app/expo-go/id982107779
- Android：https://play.google.com/store/apps/details?id=host.exp.exponent&hl=zh_TW&gl=US

接著回到 React Native Expo 專案底下，先在 Terminal 輸入以下指令來安裝 `expo cli`：

```
npm install -g expo-cli
```

安裝完後，再輸入以下指令來啟動應用程式：

```
expo-cli start --tunnel
```

接著在你的手機上，開啟 Expo Go App，並掃描畫面上看到的 QR Code。

![Image](https://i.imgur.com/D1NQuNC.png)

等它跑一下，就可以在你的手機上看到畫面了：

![Image](https://i.imgur.com/5J4jkp3.png)

![Image](https://i.imgur.com/sn3j0bx.png)
