---
title: "[solidity] Event"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Event)

# 說明

在以太坊區塊鏈中要是儲存大量的狀態變數，則需花費較多的費用，因此 Solidity 也提供日誌(Log)功能，也就是 event 語法，我們可以將重要的資料儲存在日誌中，這樣能節省更多的 gas，但儲存在日誌的資料將**無法進行修改和刪除**，不像一般的狀態變數可以依靠 function 去修改變數的值。

宣告完 event 以後，需要在 function 內去觸發(emit)它，並把想要儲存在日誌內的資料傳遞進去。

![Image](https://i.imgur.com/bauevty.png)

因為在 Remix 編譯器上看不出其效果，所以作者這邊先將[合約](https://rinkeby.etherscan.io/address/0x59a6a1be7e430b0613db39fb59873415c813837d#events)部署至 Rinkeby 測試網路，並在 etherscan 上去查看合約的日誌內容。

在合約的 Events 頁面就可以看到我們剛剛觸發的 event，當我們在開發 DAPP 時，event 通常會搭配 web3.js 來記錄使用者在 DAPP 上所做的操作，善用 event 能夠使 DAPP 更具備靈活性。

![Image](https://i.imgur.com/juPt6n7.png)

但這邊你可能會有一個疑問，在上圖中，我們看到 Events 是公開的，且只要每觸發一次就會記錄一筆，那這樣假設今天 Events 的資料非常多，當 DAPP 讀取 Events 時，就需要把所有的 Events 先載入後再過濾，那如果要讓使用者只看到自己所觸發的 Events 不就會有效能問題嗎?

所以在使用 event 語法時，我們可以在參數中加上 indexed。

![Image](https://i.imgur.com/aPV8RZ3.png)

被加上 indexed 的參數，日後可以作為資料搜尋的依據，以上圖來說，sender 被宣告為 indexed，假設使用者 A 執行了 sendSomeToken function 並觸發了 Transfer event，則日後可以利用使用者 A 的 address 過濾掉除了使用者 A 以外的 Events，這麼一來就解決了上述提到的效能問題。

而一個 event 最多宣告 3 個 indexed 的參數，被宣告為 indexed 的參數會顯示在 Events 頁面的 topic。.

![Image](https://i.imgur.com/AVhTBtZ.png)
