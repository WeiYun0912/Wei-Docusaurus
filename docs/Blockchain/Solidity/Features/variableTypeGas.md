---
title: "[solidity] Varable Type Gas"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Variable%20Type%20Gas)

## 說明

在 Solidity 裡面，隨著宣告變數空間的大小，也會相對應地消耗不同的 gas。

比如宣告 uint256 與 uint8 的變數，並且賦予變數一個值，各自消耗的 gas 是不相同的。

這邊先提出一個問題，是 uint256 消耗的 gas 多還是 uint8?

我們知道 uint256 可表示的範圍為 2^256 -1 而 uint8 為 2^8-1，照理來說 uint256 可表示的範圍較廣，所消耗的 gas 應當要比 uint8 少很多，那我們直接來看是不是上述所說的那樣。

我們宣告兩個變數，一個是 uint8 型態名為 a，另一個是 uint256 型態名為 b，而各自都會有一個 function 來改變 a 和 b 的值，分別是 changeValueForUint8 和 changeValueForUint256，我們將智能合約部署後實際執行看看。

![Image](https://i.imgur.com/DAj4JGh.png)

changeValueForUint8 ： 49907 gas

![Image](https://i.imgur.com/HJxOxLq.png)

changeValueForUint256 ： 49871 gas

![Image](https://i.imgur.com/hGkDDQz.png)

由上述範例可以發現，uint8 型態的 gas 消耗量比 uint256 型態多出了 36。

[原因可以看這裡](https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256)

> The EVM works with 256bit/32byte words (debatable design decision). Every operation is based on these base units. If your data is smaller, further operations are needed to downscale from 256 bits to 8 bits, hence why you see increased costs.

## Deploy

我們也可以比較在部署智能合約的時候，如果變數全都使用 uint8 或 uint256，哪個所耗費的 gas 較多。

uint8 ： 151781 gas

![Image](https://i.imgur.com/bx6DYf5.png)

uint256 ： 129984 gas

![Image](https://i.imgur.com/H7r5ZUO.png)

## Without Public Deploy

但如果今天變數並不是 public 的話，部署消耗的 gas 就會有差異。

uint8 ： 84362 gas

![Image](https://i.imgur.com/S0JPNXw.png)

uint256 ： 92785 gas

![Image](https://i.imgur.com/o68A5r1.png)

可以發現當變數為非 public 的時候，uint256 所消耗之 gas 較多。
