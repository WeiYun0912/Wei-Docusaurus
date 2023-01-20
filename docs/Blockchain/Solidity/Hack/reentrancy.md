---
title: "[solidity hack] Reentrancy 重入攻擊"
keywords: [solidity]
---

## 說明

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Hack/Reentrancy)

[影片連結](https://www.youtube.com/watch?v=q7ZN6Lurs1U)

假使有一智能合約名為 CryptoCurrencyStore，該合約實作了存款與取款功能，而使用者 A 和使用者 B 存入了兩枚以太幣，單位為 wei。

![Image](https://i.imgur.com/wxUahGk.png)

該智能合約的存款與取款 function 如下圖：

![Image](https://i.imgur.com/6oCl0cM.png)

這時攻擊者發現了 CryptoCurrencyStore 的合約漏洞，並自行部署了一個智能合約，名為 AttackCryptoCurrencyStore，要來將 CryptoCurrencyStore 合約內的以太幣全數轉移到攻擊者的合約。

攻擊者在部署 AttackCryptoCurrencyStore 時會將 CryptoCurrencyStore 的合約地址傳入建構式，以此方便呼叫 CryptoCurrencyStore 內的 function。

一旦執行 attack function，就能將 CryptoCurrencyStore 內的以太幣全數清零並轉移到 AttackCryptoCurrencyStore。

![Image](https://i.imgur.com/7zGQ8qW.png)

其攻擊流程為：

1. 攻擊者呼叫 attack function
2. 執行 CryptoCurrencyStore 的 deposit function 進行存款，再呼叫 withdraw function 進行提款。
3. 當 withdraw function 執行到 (bool sent, ) = msg.sender.call{value: userBalance}("") 這段時，將會觸發 AttackCryptoCurrencyStore 的 fallback。
4. fallback function 內又會再呼叫 withdraw function，所以又會從 withdraw function 的第一段開始執行。
5. 因過程中不會觸發到 require(sent, "Failed to send Ether")，導致攻擊者的以太幣並不會被 balances[msg.sender] = 0 初始化。
6. 透過不斷地惡意循環，最終 CryptoCurrencyStore 內的以太幣將全數轉移至 AttackCryptoCurrencyStore。

![](https://i.imgur.com/qHom4et.png)

## nonReentrant

要有效抵擋重入攻擊，可以利用 modifier 設定變數 state 來讓攻擊者的 fallback 無法重複執行。

當攻擊者執行 withdraw function 時，因為有 nonReentrant modifier 的關係，第一次執行 lockedState 會被更改為 true，而當觸發到攻擊者的 fallback 時，會再一次的執行 withdraw，但因為這時 lockedState 為 true，使攻擊者並無法通過 require(!lockedState, "Block re-entrancy")，最終該筆交易將被 revert。

![Image](https://i.imgur.com/AOyo9hl.png)

![Image](https://i.imgur.com/qT0z93p.png)

## Updated balance before sent ether

另一種防範方式是先扣除使用者的存款餘額，再將錢轉至使用者的帳號地址內。

![Image](https://i.imgur.com/T0bE4kn.png)

## Slither

使用 Slither 測試原本無防護機制的程式碼：

![Image](https://i.imgur.com/acU3o47.png)

設定防護機制後：

![Image](https://i.imgur.com/USDRZA6.png)
