---
title: "[solidity] Immutable"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Immutable)

[影片連結](https://www.youtube.com/watch?v=Q-nQd0ns9Tk)

## 說明

Solidity 0.6.5 版本更新了一個新的關鍵字，immutable，被宣告為 immutable 的變數只有在建構式的時候可以賦予值，或是在部署前就將該變數的值先附值。

![Image](https://i.imgur.com/wlUuRYJ.png)

immutable 並不允許透過任何 function 來修改它的值，如果我們利用 function 去改變 immutable 變數的值將會有錯誤出現。

![Image](https://i.imgur.com/k5Bn7L2.png)

而錯誤提示也是告訴我們，immutable 的值只能在一開始的時候賦值或是 constructor 的時候賦值。

![Image](https://i.imgur.com/q0HdVa1.png)

## Gas

假設今天有類似 owner 這樣的變數只有一開始會需要被附值，則可以宣告為 immutable，現在來比較一下使用和不使用 immutable 所消耗的 gas 差異為何。

![Image](https://i.imgur.com/GaSGkFp.png)

不使用 immutable ： 52644 gas

![Image](https://i.imgur.com/vvqtQ2o.png)

![Image](https://i.imgur.com/Z85dAfX.png)

使用 immutable ： 50191 gas

![Image](https://i.imgur.com/0jGXSHX.png)

可以看到前後的差異，使用 immutable 的話可以省下將近 2500 的 gas。
