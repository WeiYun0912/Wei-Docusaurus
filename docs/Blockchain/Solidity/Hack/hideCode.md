---
title: "[solidity hack] 讓使用者執行惡意程式碼與注意事項"
keywords: [solidity]
---

## 說明

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Hack/Hide%20Code)

[影片連結](https://www.youtube.com/watch?v=pvj6a_LZ_xs)

**今天這篇介紹強烈建議看影片，因為影片還會將合約部署到 Rinkeby，並將合約驗證讓合約程式碼公開，看了會比較有感覺。**

今天要來介紹的是智能合約如何讓使用者來執行惡意程式碼。

我們一共會有三個簡單的合約，而可以看到 Store 和 Hack 合約內的程式碼幾乎一樣，都有一個 event 和一個 function，兩者只有在 emit event 的時候帶入的文字不一樣而已。

而我們的合約 A 是要來執行 Store 合約內的 deposit function，所以在建構的時候會帶先傳入 Store 的合約地址。

![Image](https://i.imgur.com/QXHKGJS.png)

那如果我們今天在建構時，傳入的地址是 Hack 合約而不是 Store 合約的呢?

現在就來實際執行一次看看吧~

我們先將 Hack 合約進行部署並將 Hack 的地址複製起來，之後再來部署 A 合約並傳入 Hack 合約的地址。

![Image](https://i.imgur.com/4g9Q64g.png)

部署成功後，我們直接執行 A 合約的 callStore function。

![Image](https://i.imgur.com/KrJU5Hq.png)

可以看到我們的 callStore 成功執行了，且在 logs 的地方顯示的是 Hack 合約內 deposit function 的 emit "Hack..."。

![Image](https://i.imgur.com/hZgWXNC.png)

這就成功的讓使用者以為執行的是 Store 合約的 deposit function，但實際上是執行 Hack 合約的 deposit function。

## 解決方法

我們可以直接在 A 合約建構的時候來初始化合約，並在建構式的時候不帶入任何的參數，如下圖：

![Image](https://i.imgur.com/ND5FzN1.png)

如果堅持要使用原本的方式來部署合約，我們也可以在 Store 加上 public，讓使用者自行驗證 store 的合約位址是否有包含惡意程式碼。

![Image](https://i.imgur.com/kakBdzD.png)

![Image](https://i.imgur.com/awZ4Sti.png)
