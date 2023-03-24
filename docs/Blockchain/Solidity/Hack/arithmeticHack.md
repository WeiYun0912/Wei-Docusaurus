---
title: "[solidity hack] Overflow and Underflow"
keywords: [solidity]
---

## 說明

[Github 連結](https://github.com/WeiYun0912/SmartContracts/tree/main/Hack/Arithmetic%20Overflow%20and%20Underflow)

在 Solidity 裡面如果變數宣告為 uint256 則會有溢出(overflow)或下溢(underflow)之問題，即超出變數表示的範圍(2^256 -1)。

![Image](https://i.imgur.com/QM5SBde.png)

假使有一智能合約名為 TimeLock，可以將 TimeLock 想像成是一個質押以太幣的智能合約，質押進去的以太幣，需經過一個禮拜後才能領出，類似鎖倉之概念，而如果想要延長質押時間，則可以透過 increaseLockTime function 來延長時間。

這邊注意到的是，該合約是利用 uint256 來計算質押後能領回的時間，為當下時間加上一個禮拜(block.timestamp + 1 weeks)，而正如同前面所說的，在 solidity 使用 uint 型態會有 overflow 或 underflow 之問題。

![Image](https://i.imgur.com/WnyDB8I.png)

攻擊者打算部署攻擊 TimeLock 的合約，名為 AttackTimeLock，攻擊者利用 overflow 或 underflow 之特性，即可繞過 lockTime 所設定的質押時間，直接將存入的以太幣馬上領回。

TimeLock 的合約漏洞為 increaseLockTime，我們可以直接利用該 function 搭配 overflow 來將質押的時間歸 0。

![Image](https://i.imgur.com/GkqIeUA.png)

首先我們先假設 t 為當下存入的時間，也就是 block.timestamp。

:::note
uint256 最大可表示的範圍為 2^256-1，超出的話即 overflow，在 uint256，2^256=0。
:::

其觸發的流程為：

1. 攻擊者利用 TimeLock 的 deposit function 存入了一顆以太幣，而 deposit function 會記錄攻擊者智能合約地址的鎖定時間，lockTime[msg.sender] = block.timestamp + 1 weeks。
2. 這時攻擊者利用 uint256 overflow 的特性，設定 increaseLockTime function 來將質押的時間歸 0。
3. 將傳入值設定為，type(uint).max +1，表示 uint 的最大範圍+1，因超出範圍導致 overflow 發生，使該值輸出為 0，再利用 type(uint).max +1 減去 當下存入的時間，timeLock.lockTime(address(this))，即 type(uint).max + 1 - timeLock.lockTime(address(this))。
4. 這時該智能合約的地址在 lockTime 內會變成 0，攻擊者即可領出剛存入的以太幣。

但上述的攻擊方式並不會對 TimeLock 合約造成太大的影響，因為攻擊者只是將存入的以太幣馬上領回而已，並不會動用到其他人所存入的以太幣。

## Another case

假設有一智能合約，名為 game，該智能合約能夠讓遊戲玩家購買稀有的寶物兌換卷，其 function 說明如下：

- buyRareTicket：使用 20 枚以太幣可購買一張兌換卷。
- useRareTicket：使用兌換卷後，即可取得稀有的遊戲物品，使用者能夠一次使用多張。
- getRareTicketAmount：查詢使用者的兌換卷剩下幾張。

![Image](https://i.imgur.com/xNkILQI.png)

眼尖的你可能發現了，該合約使用的單位都是 uint8，而 uint8 最多能表示的範圍為 255，且在 useRareTicket function 內依靠的是外部參數 \_amount，透過\_amount 來扣除使用者的兌換卷。

而使用者 A 發現了該漏洞，決定利用漏洞來一次拿到 255 張兌換卷，其流程如下：

1. 使用者 A 先利用 buyRareTicket function 購買 1 張兌換卷。
2. 之後在 useRareTicket function 傳入 2。
3. 因為使用者 A 只有一張兌換卷的關係，導致 underflow 發生，underflow 讓使用者的 ticket 變成 255 張。

![](https://i.imgur.com/2CFAWcs.png)

## 解決方法

在 solidity 0.8.0 版本以前，都會有 overflow 和 underflow 之情況發生，而在 0.8.0 版本後，發生 overflow 或 underflow 時，將會自動將該次交易中斷並提示錯誤。

![Image](https://i.imgur.com/LUt1VDz.png)
