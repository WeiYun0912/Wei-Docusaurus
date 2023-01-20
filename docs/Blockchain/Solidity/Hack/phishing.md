---
title: "[solidity hack] 利用 tx.origin 做釣魚式攻擊"
keywords: [solidity]
---

## 說明

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Hack/Phishing%20Transaction%20Origin)

[影片連結](https://youtu.be/9sDd-VCQwXc)

今天要介紹如何智能合約的釣魚攻擊，假設 Alice 是某個儲存以太幣智能合約的 owner，在該合約中，只能 owner 能夠將以太幣轉出給其他人，而該智能合約在判斷 owner 的方式為(tx.origin == owner)，這樣的寫法會有什麼漏洞就是今天要介紹的主題。

tx.origin 為交易的最初發起者，在 Solidity 中，要是錯誤的去使用 tx.origin 來做判斷的話，可能會為智能合約帶來極大的風險。

假使今天 Alice 呼叫了 A 合約的某個 function，而 A 的 function 又去呼叫 B 合約的某個 function，如下圖所示，則在 B 合約的 msg.sender = B 合約，但 tx.origin = Alice。

![Image](https://i.imgur.com/uhFneXH.png)

而現在有個合約能夠儲存以太幣，名為 EtherStore，該合約所包含的 function 如下圖：

- constructor：建構時將 owner 設定為部署該合約的使用者，以我們的例子就是 Alice。
- deposit：使用者可以利用該 function 存入以太幣到 EtherStore 合約。
- transfer：轉帳 function，在一開始會判斷 tx.origin 是否為 owner。

![Image](https://i.imgur.com/b8S3rWF.png)

這樣的合約看似沒有什麼太大的問題，但攻擊者可以利用 tx.origin 的特性來攻擊 EtherStore，將該合約內的以太幣全數提領到自己的地址。

而攻擊的方式就是誘使 Alice 來執行攻擊者的智能合約 function，下圖為攻擊者撰寫的釣魚智能合約。

- constructor：取得 EtherStore 的 address，就能使用 EtherStore 裡面的 function，並將 owner 設定為攻擊者本人。
- attack：使用 EtherStore 的 transfer function，這裡可以發現要是今天由攻擊者本人來執行 attack function，並不會有任何作用，因為攻擊者並不是 EtherStore 的 owner，但要是今天是 Alice 來執行 attack 的話，該 function 就能成功被執行，一旦成功執行，EtherStore 內的以太幣將全數提領到攻擊者的地址。

![Image](https://i.imgur.com/X7C0HXt.png)

## 實際執行

Alice(0xAb8...)為 EtherStore 的 owner，而目前 EtherStore 有各個使用者存入的以太幣，共 10 枚。

![Image](https://i.imgur.com/YTMfb0b.png)

而假設今天 Alice 點擊了 Attack 智能合約的 attack function，則 EtherStore 的以太幣將轉移到攻擊者的地址。

![Image](https://i.imgur.com/2f10FVM.png)

## 解決方法

我們知道問題是出在 EtherStore 的 transfer function，由於該 function 是利用 tx.origin 來判斷執行 transfer 的使用者是否為 owner，才會有釣魚漏洞的情況發生。

我們只要將 tx.origin 改成 msg.sender 即可。

![Image](https://i.imgur.com/8MlWEKk.png)

現在 Alice 執行 Attack 合約的 attack function，msg.sender 會為 Attack 合約的 address，而 Attack 並不是 EtherStore 的 owner，所以該攻擊無效。
