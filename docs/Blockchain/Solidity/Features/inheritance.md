---
title: "[solidity] Inheritance"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Inheritance)

## 說明

Solidity 也支援繼承功能，假使今天有兩個合約，分別為 A 合約與 B 合約，而 B 合約要實作的 function 功能，A 合約都有，則 B 合約可以繼承 A 合約來簡化程式碼。

要繼承 A 合約的話，只要在 B 合約加上 "is A" 即可，is 在 Solidity 內就是繼承的意思。

![Image](https://i.imgur.com/OV7O3Fu.png)

將 B 合約部署後，會看到 A 合約的 function 可以直接做使用。

![Image](https://i.imgur.com/GV89ZOG.png)

而假設我們想要在 B 合約修改 A 合約原有的 function，則需要在 A 合約的 function 宣告 virtual，而 B 合約修改的 function 需宣告為 override。

![Image](https://i.imgur.com/GVVTvkg.png)

實際執行後，可以看到 sayHello 的回傳值是 B 合約定義的"Hello Hello"。

![Image](https://i.imgur.com/tqJ7iRK.png)

而假使 A 合約在建構時需傳入參數，則 B 合約也需傳入相對應的參數，而 A 合約的狀態變數也會一同繼承到 B 合約。

![Image](https://i.imgur.com/NiXGkee.png)

![Image](https://i.imgur.com/Q4V3cnb.png)

## Multi Inheritance (多重繼承)

如要使用多重繼承，只要在繼承的合約之間利用 , 區隔開來即可。

![Image](https://i.imgur.com/VrC80PA.png)

![Image](https://i.imgur.com/HDyW8dJ.png)
