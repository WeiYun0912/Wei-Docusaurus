---
title: "[solidity] 利用 keccak256 hash function 來為使用者分配角色權限"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Access%20Control)

[影片連結](https://youtu.be/eYG-XAKaxqU)

## 說明

在 Solidity 中，我們可以制定哪些 Function 能夠讓哪些角色使用，而制定的方式有很多種，本篇是使用 keccask256 Hash 的方式來取得角色名稱，並在使用 Function 的時候去判斷使用者的角色是否有權限執行。

在今天的智能合約我們定義了兩種角色，分別是 ADMIN 和 USER，而我們會利用 keccak256 Hash Function 來取得這兩個角色的 Hash。

![Image](https://i.imgur.com/Oqe64Us.png)

使用 keccak256 時要注意，如果你傳入兩個以上的參數進去，必須要用 abi.encodePacked 來將你的參數打包，不然編譯器會報錯。

![Image](https://i.imgur.com/8JdFHQH.png)

![Image](https://i.imgur.com/eZjeLIi.png)

之後我們定義一個 Double Mapping 的變數，名為 roles，主要是來判斷使用者目前是屬於 ADMIN 還是 USER。

第一個傳入的參數是 ADMIN 或 USER 的 Hash，第二個傳入的參數是使用者的 Address，要是使用者為 ADMIN 的話，傳入 ADMIN Hash 與使用者的 Address 後，roles 應回傳 true。

![Image](https://i.imgur.com/6esAMIY.png)

現在需要先取得 ADMIN 和 USER 的 Hash，所以先將合約進行部署。

ADMIN Hash：0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
USER Hash：0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96

![Image](https://i.imgur.com/j6y4OTe.png)

之後在建構式的時候，直接將部署該智能合約的使用者定義為 ADMIN。

![Image](https://i.imgur.com/Bymq6F5.png)

定義完建構式後，就來測試部署智能合約的使用者是否為 ADMIN，將 ADMIN Hash 與使用者的 Address 傳入 roles，而回傳的為 true，代表該使用者目前為 ADMIN。

![Image](https://i.imgur.com/ThKBsC6.png)

最後就可以來實作 ADMIN 分配角色給其他使用者的 Function 了，當然我們也可以撤銷(Revoke)使用者的角色。

![Image](https://i.imgur.com/AnrYlyn.png)
