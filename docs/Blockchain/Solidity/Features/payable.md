---
title: "[solidity] Payable"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Payable)

## 說明

如果要讓使用者的以太坊地址能夠轉帳的話，需將 address 宣告為 payable，而宣告為 payable 的
function，則是能夠接收使用者的轉帳，要是沒有指定轉帳地址的話，轉帳的錢會自動轉到該智能合約內。

在下圖的 deposit function，雖然我們沒有定義任何的功能在裡面，但由於該 function 是宣告為 payable，導致使用者能直接透過 deposit 發送以太幣到智能合約。

![Image](https://i.imgur.com/qEAeAHU.png)

![Image](https://i.imgur.com/LutwVSa.png)

我們也可以在 deposit function 加一些條件判斷，像是使用者至少要發送 1 枚以太幣。

![Image](https://i.imgur.com/vl8zLMd.png)

而如果 function 沒有宣告為 payable 的話，是不能接收以太幣轉帳的。

![Image](https://i.imgur.com/JYWr0Qi.png)

我們也可以利用 msg.value 來讓使用者發送以太幣給其他使用者，msg.value 是取得 function 呼叫者所發送的以太幣數量，而如果要在 function 內使用 msg.value，則 function 也需宣告為 payable。

![Image](https://i.imgur.com/Q0iNxpz.png)

![Image](https://i.imgur.com/iVNy1dY.png)

![Image](https://i.imgur.com/5vH1O9P.png)

今天這篇的篇幅有點短，但因為 payable 就只是讓 function 或 address 具備轉帳與收費的功能，所以沒有太多可以講。
