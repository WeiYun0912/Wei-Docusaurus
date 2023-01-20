---
title: "[solidity] Structs"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Structs)

## 說明

Struct 是 Solidity 裡面常用的一個型態，Struct 也常常跟 Mapping 一同使用。

假設今天要將汽車的廠牌、年份、車主等資料儲存到區塊鏈中，可以使用 Struct 型態來幫助我們。

我們先將 struct 定義好

![Image](https://i.imgur.com/cizZz9n.png)

而因為儲存的汽車數量會一直增加，所以使用陣列來儲存，而將資料儲存進陣列的方式有以下幾種：

![Image](https://i.imgur.com/jba1hnH.png)

當我們執行 addCars 時，汽車的資料會一筆一筆新增至 cars 陣列中，而我們也可以輸入 index 來找到剛剛新增的資料。

![Image](https://i.imgur.com/RWxOD1C.png)

但如果要一次取出全部的資料，需要額外寫查詢 function。

![Image](https://i.imgur.com/U5fZuf3.png)

![Image](https://i.imgur.com/XpJQISV.png)

## Updated Deleted

而如果要修改或刪除陣列裡面的內容，可以用以下方法：

當我們執行 changeCar function 以後，第一筆資料的 year 欄位會被修改為 1999，而第一筆資料的 owner 欄位會被清空成預設值，第二筆欄位則是會直接被刪除。

![Image](https://i.imgur.com/AluthPG.png)

![Image](https://i.imgur.com/hjQZTYU.png)

![Image](https://i.imgur.com/lcSo37T.png)

## Mapping

struct 也常常與 mapping 搭配使用，以下範例是當使用者執行 addCars 後，會將汽車的資料 mapping(映射)到使用者的地址，而輸入使用者的地址後即可找到汽車的資料。

![Image](https://i.imgur.com/UgejBGl.png)

![Image](https://i.imgur.com/iQtGkmP.png)
