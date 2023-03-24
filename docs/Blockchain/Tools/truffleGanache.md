---
title: "[blockchain] 以太坊區塊鏈開發工具 — Truffle Ganache 使用教學"
keywords: [blockchain]
---

[Github 連結](https://github.com/WeiYun0912/Truffle-Ganache)

[影片連結 ](https://www.youtube.com/watch?v=Z7CeH5srgdo)

[影片連結 Remix Ganache 補充說明](https://www.youtube.com/watch?v=CUrye6xuWJ0)

# Truffle Ganache 使用教學

今天這篇是要來教以太坊區塊鏈的工具 Truffle 和 Ganache，Truffle 可以幫助我們部署與測試智能合約，Ganache 則是可以幫助我們迅速架設本地端的區塊鏈網路環境。

本篇的 Ganache 是使用圖形化的介面來介紹，可以在[官方下載](https://trufflesuite.com/ganache/)。

前置工具：

- VSCode
- Node (作者是使用 14.16.1 版本)

## Ganache

下載完 Ganache 以後，打開會看到以下畫面，我們點擊**QUICKSTART**，Ganache 就會迅速的幫我們建立一個本地端的區塊鏈網路環境。

![Image](https://i.imgur.com/MMQlU6d.png)

可以看到 Ganache 預設有給我們 10 個測試帳號，每個帳號各持有 100 枚以太幣，而下圖較重要的部分是 RPC SERVER 和 NETWORK ID，透過以上兩個參數，我們可以利用 Truffle 來連線到本地端的區塊鏈，並利用 Truffle 部署與執行智能合約，而一旦連線成功，網路內的 Blocks 和 Transactions 等資訊都會顯示在 Ganache。

![Image](https://i.imgur.com/WRnwXGE.png)

## Truffle

將前置工具準備好後就可以來安裝 Truffle 了，執行以下指令即可進行全域安裝：

```
npm install -g truffle
```

之後先新增一個空的資料夾，接著在該資料夾底下輸入以下指令：

```
truffle init
```

指令成功執行後，該資料夾底下的檔案應該會有這些：

- contracts：智能合約檔案放置的資料夾，預設會有一個 Migrations 合約。
- migrations：部署智能合約的資料夾，預設會有一個部署 Migrations 合約的 js 檔案。
- test：撰寫智能合約測試的資料夾。
- truffle-config：智能合約版本與區塊鏈網路相關的設定。

![Image](https://i.imgur.com/g4hZW0w.png)

## Truffle Config

我們先來設定區塊鏈的網路環境，在那之前我們需要知道區塊鏈網路環境的一些參數，像是 RPC Server 和 Network ID，而以上兩個參數 Ganache 都有提供給我們。

- RPC SERVER : 127.0.0.1:7545
- NETOWRK ID : 5777

接著我們打開**truflle-config.js**，之後將**networks**的部分設定為下圖

![Image](https://i.imgur.com/d1ZisRb.png)

而因為本篇教學要部署的智能合約版本較高，為 0.8.0，作者 Truffle 預設的 Solidity Compiler 是 0.5.0 左右的版本，所以我們需要指定 Solidity 的版本，在**compilers**的地方將**solc**的**version**設定為 **0.8.0**，設定完以後就可以將該份檔案儲存關閉了。

![Image](https://i.imgur.com/TvcbO4Q.png)

## Truflle Compile

接著我們準備將智能合約部署到本地區塊鏈，本次教學要部署的[智能合約程式碼在這](https://github.com/WeiYun0912/Truffle-Ganache/blob/main/contracts/CryptoCurrencyStore.sol)，可以複製起來貼到**contracts**資料夾的 **sol** 檔案，並重新命名為**CryptoCurrencyStore.sol。**

![Image](https://i.imgur.com/SyNLyQB.png)

而在**migrations**資料夾的**1_initial_migration.js**裡面的內容也要更改一下，改為以下：

```javascript
const CryptoCurrencyStore = artifacts.require("CryptoCurrencyStore");

module.exports = function (deployer) {
  deployer.deploy(CryptoCurrencyStore);
};
```

![Image](https://i.imgur.com/9zfOp4p.png)

以上步驟都完成後，就可以來編譯智能合約了，執行以下指令：

```
truffle compile
```

執行成功後，專案資料夾底下會出現一個新的資料夾**build**，裡面就是 CryptoCurrencyStore 的 abi 檔案，可以打開看一下，確認有沒有問題。

![Image](https://i.imgur.com/ZVs5yBf.png)

## Connect Ganache

現在我們打開 Ganache，並切換到**CONTRACTS**介面，並點擊**LINK TRUFFLE PROJECTS**按鈕。

![Image](https://i.imgur.com/fLpHJoS.png)

在該介面點擊**ADD PROJECT**並將我們剛剛專案的**truflle-config.js**新增進來，新增完畢後，點右上角的**SAVE AND RESTART**，就完成 Truffle 與 Ganache 的連接了。

![Image](https://i.imgur.com/jE5iLEj.png)

## Truffle Deploy

我們再次到**CONTRACTS**介面，可以看到剛剛編譯的 CryptoCurrencyStore 合約出現在該介面了，但該合約還尚未在區塊鏈網路內部署。

![Image](https://i.imgur.com/u7E6gvZ.png)

回到專案資料夾底下，執行以下指令：

```
truffle deploy
```

然後再回到我們的 Ganache，可以看到合約已經成功被部署了，部署後的合約地址為：
0x6547d6999b26Bc85CE75125C739Aa4a40fb48bbf

![Image](https://i.imgur.com/BV3g0Ou.png)

## Truffle Console Send Transaction

而要執行智能合約的 function，我們必須進入到區塊鏈網路，執行以下指令來連線到區塊鏈網路：

```
truffle console
```

進到 console 模式後，我們可以直接輸入 CryptoCurrencyStore 來查看合約是不是確實有部署到區塊鏈，輸入完送出後，可以看到我們的智能合約程式碼以及其他資訊。

![Image](https://i.imgur.com/r1sSieu.png)

現在我們可以來使用 CryptoCurrencyStore 裡面的 function，並發送一筆交易到區塊鏈網路，執行以下指令來將 CryptoCurrencyStore 的 function 賦予給 demo 變數，at 的第一個參數必須填寫你部署後的智能合約地址。

```
var demo;
CryptoCurrencyStore.at("0x6547d6999b26Bc85CE75125C739Aa4a40fb48bbf").then(data => demo = data);
```

之後我們執行 CryptoCurrencyStore 的 deposit function，來儲存 10 枚以太幣到該智能合約，from 要填寫的地址使用 Ganache 提供給我們的使用者地址(ACCOUNTS)即可。

```
demo.deposit({from : "0x568Bc88199838cF8979a4b82bB1f98E16b986ac5", value : 10000000000000000000})
```

## Results

執行成功後，回到 Ganache 會看到該使用者少了 10 枚以太幣，這也代表該 function 成功被執行了。

![Image](https://i.imgur.com/FZyHqr5.png)

### BLOCKS

而在 BLOCKS 介面可以看到該區塊鏈網路的區塊數量，第一個區塊為我們部署智能合約的時候所產生，第二個區塊為使用 deposit function 的時候所產生。

![Image](https://i.imgur.com/zRkbvEA.png)

### TRANSACTIONS

TRANSACTIONS 介面則可以看到有兩筆，一筆是合約部署時所產生(CONTRACT CREATION)，一筆則是使用 deposit function 所產生(CONTRACT CALL)。

![Image](https://i.imgur.com/L77pO8p.png)

我們點擊 CONTRACT CALL 的那一筆交易後可以看到該次交易所使用的智能合約與 FUNCTION 名稱，該次交易觸發的 EVENT 也會一併顯示。

![Image](https://i.imgur.com/3Z9adXY.png)

### CONTRACTS

到 CONTRACTS 介面點擊 CryptoCurrencyStore 後，可以看到該合約的狀態，可以看到合約的 BALANCE 為 10 枚以太幣，也就是我們剛剛執行 deposit function 所儲存的以太幣數量。

![Image](https://i.imgur.com/ZWgJAwM.png)

### EVENTS

EVENTS 介面則是可以看該區塊鏈網路內發生的所有 EVENT。

![Image](https://i.imgur.com/CUtXvxi.png)

點擊後也可以看到詳細的資訊，包刮 RETURN VALUES。

![Image](https://i.imgur.com/eyrVJ8v.png)
