---
title: "[solidity] Visibility (Public Private External Internal)"
keywords: [solidity]
---

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Visibility)

[影片連結](https://www.youtube.com/watch?v=Bi7W2eYXH3s&t=1s)

## 說明

Solidity 的 function 和 variable visibility 共有四種，分別是 public、private、external、internal，今天就是要介紹以上四種的不同。

## public

被宣告為 public 的 function 或 variable 表示任何的合約都能夠使用，包刮合約本身、子合約(ChildContract)以及外部合約(OutsideContract)。

下圖的 Visbility 合約定義了一個 public 的 variable 與 public 的 function，因為設定為 public 的關係，使 ChildContract 和 OutsideContract 都能夠存取和執行 Visbility 的 variable 與 function。

![Image](https://i.imgur.com/1riWeaa.png)

## private

被宣告為 private 的 function 或 variable 只有合約本身才能夠做使用，其他的合約則無法使用。

![Image](https://i.imgur.com/A026HvD.png)

![Image](https://i.imgur.com/ySRHMVg.png)

## external

被宣告為 external 的 function 只有外部合約(OutsideContract)才能做使用，合約本身也無法使用。

![Image](https://i.imgur.com/J3IDn6T.png)

我們會發現子合約也沒有辦法使用 external function，這是因為子合約是繼承父合約的所有 function，所以 setMessage function 被子合約繼承後也是被宣告為 external，所以無法使用 external function。

![Image](https://i.imgur.com/1Y0EgUg.png)

結論就是只有外部合約能夠使用 external function

![Image](https://i.imgur.com/Xg32hnt.png)

## internal

被宣告為 internal 的 function 只有合約本身和子合約能夠使用。

![Image](https://i.imgur.com/rA1bAAD.png)

外部合約則是無法使用

![Image](https://i.imgur.com/GsRVo97.png)
