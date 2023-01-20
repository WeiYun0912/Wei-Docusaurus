---
title: "[solidity] Fallback Receive"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Fallback%20Receive)

[影片講解](https://www.youtube.com/watch?v=qse3c0VePfU)

## 說明

fallback 是當智能合約接收到以太幣的時候會觸發，或是當外部呼叫到不存在的智能合約 function 時觸發，而 receive 則是只會在接收到以太幣的時候被觸發。

fallback 與 receive 的不同之處在於，fallback 可以接收外部訊息(msg.data)，而 receive 則是無法接收外部訊息。

![Image](https://i.imgur.com/suMvj4Q.png)

當我們在 reveice function 時帶入 msg.data 時，編譯器會報出錯誤訊息顯示 msg.data 並不能在 receive function 內使用。

![Image](https://i.imgur.com/WlBCszf.png)

而當我們將上述的合約部署後，會發現沒有能夠呼叫的 function，這是因為 fallback 和 receive 是被動觸發，只有達到特殊條件時才會被觸發。

![Image](https://i.imgur.com/lOKInPt.png)

而我們可以使用 Low level interaction 直接發送交易，或是直接寫一個新的智能合約專門發送以太幣到 FallbackRecevie 合約，這邊我們先使用 Low level 的方式來發送交易，在發送交易的時候記得要附上以太幣。.

## Low level interactions

我們先不附帶任何 CALLDATA 來發送交易(Transact)，看是 fallback 被觸發還是 receive。

![Image](https://i.imgur.com/DN4Hxme.png)

可以看到，因為在 CALLDATA 沒有附帶任何資料，所以是 receive 被觸發。

![Image](https://i.imgur.com/NcgYGZ7.png)

而現在我們附帶 CALLDATA 然後再發送一次交易。

![Image](https://i.imgur.com/XcZrQxC.png)

因為有附帶 CALLDATA 的關係，所以是 fallback 被觸發。

![Image](https://i.imgur.com/JzW5WJA.png)

而如果我們把 receive function 移除後，重新部署 FallbackReceive 合約，再實際執行一次不附帶 CALLDATA 的交易，看看會發生什麼事。

可以看到 fallback 被觸發了，這是因為我們原本應該要觸發的是 receive，而 receive 在 FallbackReceive 合約內並不存在，這就是我們一開始提到的 "當外部呼叫到不存在的智能合約 function 時，fallback 也會觸發"。

![Image](https://i.imgur.com/heRwzoY.png)

作者在網路上有看到一個蠻容易理解的流程，把它畫成流程圖給大家看：

![Image](https://i.imgur.com/IwzMRcO.png)
