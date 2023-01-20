---
title: "[solidity] Overflow and Underflow"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Overflow%20Underflow)

## 說明

在 Solidity 0.8.0 版本以前，使用 uint 型態會發生 Overflow 和 Underflow 之問題，而 0.8.0 版本以下的 Solidity 通常會使用 OpenZeppelin 的 SafeMath 來防止該問題發生。

![Image](https://i.imgur.com/QM5SBde.png)

在 0.8.0 版本後的 Solidity 改善了此問題，當一筆交易發生 Overflow 或 Underflow 時，會自動中斷該次交易並跳出錯誤提示。

![Image](https://i.imgur.com/ON9puMi.png)

![Image](https://i.imgur.com/KH1zlQa.png)

但如果在 Underflow 或 Overflow 時，加上 unchecked 指令，Solidity 將不檢查是否發生 Overflow 或 Underflow 之問題，交易一樣能成功執行。

![Image](https://i.imgur.com/Cuchwvd.png)

![Image](https://i.imgur.com/weA9nhK.png)

![Image](https://i.imgur.com/3rBSdsV.png)
