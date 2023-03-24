---
title: "[solidity] View Pure"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/View%20Pure)

[影片連結](https://www.youtube.com/watch?v=bQIlnjAhrhY)

## 說明

在 Solidity 裡面，function 可以被宣告為 view 或是 pure。

- view：當 function 宣告為 view 時，表示我們需要去讀取智能合約的狀態變數。

- pure：當 function 宣告為 pure 時，表示我們不會去讀取智能合約的狀態變數。

因 viewFunction 回傳了狀態變數 num，所以在這期間有做一個讀取的動作，而 pureFunction 則是沒有動用到任何智能合約的狀態變數。

![Image](https://i.imgur.com/prNi7Od.png)

再來看其他範例

addToNum function 因為讀取了狀態變數 num，所以因宣告為 view，add function 並無讀取到任何狀態變數，只是將輸入進來的值 x 和 y 做相加並回傳。

![Image](https://i.imgur.com/lUA7lww.png)

在 gas 花費上，因為 view 會讀取到狀態變數，所以會比 pure 花上較多的 gas，但因為 view 和 pure 實際上只會用來查詢變數當下的值為何，並不會送出 transaction，所以這個花費比較也不具有意義。

addToNum：24166 gas

![Image](https://i.imgur.com/3nU7FEe.png)

add： 22313 gaw

![Image](https://i.imgur.com/eyk3gZR.png)

而假設我們將 addToNum(view)更改為 pure，則會出現錯誤提示，將無法部署智能合約。

![Image](https://i.imgur.com/bM6XlAp.png)

但是將 add(pure) 改為 view 時，雖然會出現警告提示，但我們同樣能部署智能合約。

![Image](https://i.imgur.com/OApiV9E.png)

![Image](https://i.imgur.com/dBexSQb.png)
