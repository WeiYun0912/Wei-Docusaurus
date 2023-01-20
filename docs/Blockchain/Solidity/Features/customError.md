---
title: "[solidity] Custom Error"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Custom%20Error)

## 說明

在 Solidity 0.8.0 版本前，當不符合程式所制定之條件時，可以利用 revert 或 require 來中止交易並回傳錯誤提示，以 revert 舉例，當使用者觸發 revert 時，會消耗一定數量的 gas，且會隨著回傳的提示文字來增加 gas 的數量。

![Image](https://i.imgur.com/mnr5twV.png)

而使用 Custom Error 的話，則可以降低 gas 的消耗數量。

![Image](https://i.imgur.com/6B7Axgk.png)

Custom Error 也能自訂參數，當錯誤發生的時候會以 JSON 的方式顯示，能讓 DAPP 較好處理錯誤資訊，但顯示資料也代表需要額外花費 gas。

![Image](https://i.imgur.com/YlLo2p5.png)
