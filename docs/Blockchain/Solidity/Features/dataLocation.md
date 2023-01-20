---
title: "[solidity] Data Location"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Data%20Location)

[影片連結](https://youtu.be/T2D3OBRR4zY)

## 說明

Solidity 在讀取資料或修改資料時，常會使用到 storage 與 memory 語法，使用 storage 語法，新增或修改後的資料會儲存至區塊鏈，而 memory 通常是用來讀取資料並不會更動到區塊鏈上儲存的資料。

## Storage

假設今天有一個 function，執行後會增加使用者的餘額，"增加"這個事件對區塊鏈來說就是一個新增或修改的動作，所以在取出使用者資料時，應使用 storage。

![Image](https://i.imgur.com/PS71xTe.png)

假使我們傳入的值為 10，則執行完後使用者的餘額(balance)應為 10。

![Image](https://i.imgur.com/fToHGoS.png)

## Memory

現在將上述的範例改為 memory，再實際執行一次看看。

![Image](https://i.imgur.com/7Gd52UT.png)

可以看到執行了 addUserBalance function 後，使用者的餘額並沒有增加，意思就是宣告為 memory 的變數，在執行完 function 後就會直接將暫存的值給移除，並不會修改到變數本身的值。

![Image](https://i.imgur.com/vNoz0lW.png)

所以 memory 通常只用來驗證使用者的某個欄位是否有符合條件式，例如使用者的餘額是否大於 0?

![Image](https://i.imgur.com/pIiyW4v.png)

## Calldata

calldata 與 memory 的作用相似，但 calldata 只能使用在 function 的輸入參數，且被宣告為 calldata 的參數是**不可再做修改的**，直接來看例子：

當我們將參數宣告為 calldata 時，再將該參數的值修改，則會跳出錯誤提示並無法成功部署合約，當宣告為 memory 的參數值是可以修改的，但是使用 calldata 來傳入參數則會節省一些 gas 費用。

![Image](https://i.imgur.com/alsZLXD.png)

changeUserNameMemory ： 51880 gas

![Image](https://i.imgur.com/oLAw4z8.png)

changeUserNameCalldata : 51301 gas

![Image](https://i.imgur.com/LE8jZKk.png)

## 補充

假使要更新狀態變數時，應要依據更新的欄位多寡來選擇該使用何種方式，目前作者常用到的方式都是 storage，經過幾次的比較也發現 storage 比較省 gas，但是在一些情況下可能用 index 找值的方式會較省 gas。

![Image](https://i.imgur.com/bl83R9S.png)

addUserBalanceWithStorage : 50620 gas (使用 storage 的方式)

![Image](https://i.imgur.com/z03HZYo.png)

addUserBalanceWithoutStorage : 50706 gas (使用 index 找值的方式)

![Image](https://i.imgur.com/MILS55i.png)
