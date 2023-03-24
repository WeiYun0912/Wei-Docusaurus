---
title: "[solidity] Enum"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Enum)

[影片解說](https://youtu.be/8antG483vJI)

# 說明

Solidity 也支援 enum 語法，假使今天想為某個事件添增不同的階段，則可以考慮使用 enum，這邊使用商品訂單的運輸狀態來當範例。

假設一筆訂單有五種狀態，待出貨(Pending)、運送中(Shipped)、訂單完成(Completed)、訂單取消(Canceled)以及預設狀態(None)。

則可以宣告為以下

![Image](https://i.imgur.com/vj69Pxg.png)

而宣告完後，enum 會根據我們宣告的狀態順序給定不同的數字，初始狀態為 0，後續則使用遞增的方式來表示，以上圖範例來說，None(0)、Pending(1)、Shipped(2).....。

而我們可以透過 Function 來改變階段，當 order function 執行完畢後，status 為 1(Pending)。

![Image](https://i.imgur.com/K1VDluo.png)

善用 enum 能夠讓程式碼的可讀性增強，舉個例子，我們可以利用 require 搭配 enum 來判斷訂單目前是否已達到某個階段，如果是的話才會接著改變訂單的狀態。

![Image](https://i.imgur.com/sRlIH7r.png)

## With Struct and Mapping

enum 也可以宣告在 Sturct 裡面，再利用 mapping 為每個使用者建立獨立的狀態。

但以下範例的運作方式是有誤的，應該還要先判斷交易的發起者是不是 buyer 本人，不然其他使用者可以拿別的使用者地址來做為輸入依據。

![Image](https://i.imgur.com/XaYABPo.png)
