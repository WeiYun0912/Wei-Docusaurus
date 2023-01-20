---
title: "[solidity] New"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/New)

[影片連結](https://youtu.be/Qon6xDCK-ls) (影片有將合約部署到 Rinkeby 並進行驗證)

## 說明

在 Solidity 中，我們可以使用 **new** 關鍵字來產生一個新的智能合約。

今天的範例是以使用者開銀行戶頭的概念來解說，能讓使用者開戶的合約為 AccountFactory，AccountFactory 有一個 createAddressContract function 能夠讓使用者進行開戶，而 accounts 陣列變數則是用來儲存開戶過的合約地址，方便進行查詢，而使用者的戶頭為 Account 合約，開戶的最低費用為 0.1 枚以太幣。

使用者在執行 createAddresContract 時，需輸入自己的以太坊地址並發送 0.1 枚以太幣，發送後的以太幣會自動存入使用者的 Account 合約戶頭。

![Image](https://i.imgur.com/vkkZT7x.png)

將 AccountFactory 合約編譯並部署，接著執行 createAddressContract 來進行開戶的動作，執行時需發送 0.1 枚以太幣並將需開戶的以太坊地址傳入，因為作者在選擇以太幣數量時打不出 0.1，所以這邊先用等同 0.1 以太幣的 Gwei，共 100000000 Gwei。

![Image](https://i.imgur.com/kCEee3x.png)

執行成功後，我們可以在 accounts 輸入 0 來查詢剛剛部署的合約地址。

![Image](https://i.imgur.com/dMdODtP.png)

而我們現在可以來查看這份智能合約的 bank 和 owner 是誰，將你查詢到的合約 address 複製，並在**CONTRACT**的地方選擇 Account，之後在底下的**At Address**貼上合約 address。

![Image](https://i.imgur.com/fhfvTSz.png)

點擊 **At Address** 後，會看到我們的 Account 合約，查詢 bank 和 owner 後可以發現， bank 的 address 為我們的 AccountFactory，而 owner 為我們在執行 createAddressContract 時所傳入的 address。

![Image](https://i.imgur.com/4wJleJK.png)
