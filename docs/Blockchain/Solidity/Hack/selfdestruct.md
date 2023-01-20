---
title: "[solidity hack] Selfdestruct"
keywords: [solidity]
---

## 說明

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Hack/Selfdestruct)

[影片連結](https://www.youtube.com/watch?v=iAYbLLM7AzQ&feature=youtu.be)

Selfdestruct 能夠將智能合約銷毀，並將合約內的所有以太幣轉移到其他智能合約。

假使有一智能合約名為 EtherGame，每個使用者可以在該智能合約存入以太幣，而當智能合約的以太幣總數量到達 10 的時候，系統會將最後一個存入以太幣的使用者取回所有智能合約的以太幣，使用者一次只能存入一枚以太幣。

![Image](https://i.imgur.com/lmlQydS.png)

假設 EtherGame 存入的以太幣數量來到了 9 枚，下一位存入以太幣的時候將能夠將 10 枚以太幣全部取走。

![Image](https://i.imgur.com/D2vuwLf.png)

正當一名使用者準備存入最後一枚以太幣時，另一名攻擊者準備利用 Selfdesturct 攻擊 EtherGame。

![Image](https://i.imgur.com/bnavUvh.png)

攻擊者將智能合約部署後，將 EtherGame 的智能合約地址傳入 attack function，並利用 Selfdesturct 將智能合約銷毀，發送以太幣到 EtherGame。

攻擊者使用 Selfdesturct 發送 1 枚以太幣成功將 EtherGame 智能合約內的以太幣永遠無法領取出來。

![](https://i.imgur.com/8cUxNVD.png)

## 解決方法

解決的方法是將 EtherGame 的 despoit function 改寫，之所以會被 Selfdestruct 攻擊是因為 EtherGame 在取得智能合約以太幣餘額時，是使用 address(this).balance，這段程式碼會直接取得當下智能合約的以太幣餘額。

只要將 balance 改成全域的狀態變數，並在每次使用者發送以太幣的時候更新 balance 即可解決，因為 Selfdesturct 是發送以太幣到 "智能合約" 不是 balance 狀態變數，所以 EtherGame 的使用者還是能夠正常執行。

![Image](https://i.imgur.com/F9k8kc8.png)

值得一提的是，Selfdesturct 還是能夠強制發送以太幣到 EtherGame，但發送到 EtherGame 的以太幣將永遠無法提領出來。

![Image](https://i.imgur.com/73rYFFa.png)

所以可以寫個 function，在遊戲結束的時候才能將剩餘的以太幣提取出來。

![Image](https://i.imgur.com/K0NodZy.png)

假設使用者 A 是 EtherGame 的贏家，他成功存入了最後一顆以太幣，使 balance 等於 10 以太幣，在遊戲運行的過程中，有一攻擊者發送了 5 顆以太幣想來攻擊 EtherGame，使該智能合約的以太幣為 15 枚。

![Image](https://i.imgur.com/chQ1ZDz.png)

而使用者 A 使用 claimReward function 將他所應得的以太幣領回，此時智能合約的以太幣剩下 5 枚。

![Image](https://i.imgur.com/BbW9x8L.png)

而這時部署合約的擁有者即可透過 withdrawAfterEnd function，將剩餘的以太幣領回。

![Image](https://i.imgur.com/wXSIiHN.png)
