---
title: "[blockchain] 以太坊區塊鏈開發工具 — 使用Truffle將智能合約部署至Rinkeby並驗證"
keywords: [blockchain]
---

## 說明

今天這篇是要來教如何利用 Truffle 部署智能合約到 Rinkeby 測試網路，並直接使用指令來驗證智能合約。

在開始之前先新增一個資料夾，而如果還沒安裝 Truffle 的話，先執行以下指令，我們還要另外安裝一個智能合約驗證套件**truffle-plugin-verify**和錢包套件**truffle-hdwallet-provider**。

```
npm install -g truffle truffle-plugin-verify
```

```
npm install --save truffle-hdwallet-provider
```

## Infura End Point

在正式部署智能合約之前，我們需要藉由 Infura 提供的服務來幫助連線到以太坊節點，Infura 是一個 BaaS(區塊鏈即服務)。

所以先到 [Infura](https://infura.io/) 官方註冊一個帳號，註冊成功後登入然後到後台頁面，點選右上角的**CREATE NEW PROJECT**。

![Image](https://i.imgur.com/3VXlyHr.png)

PROJECT 的部分選擇 Ethereum，PROJECT NAME 則是填寫自己的專案名稱，填寫完後按下**CREATE**。

![Image](https://i.imgur.com/jphs2qw.png)

建立成功後，會看到以下頁面，而我們需要的只有 ENDPOINTS 的部分，在 ENDPOINTS 之欄位選擇 RINKEBY，然後將第一個網址先保存下來，等下會在 Truffle 的設定檔貼上這個網址。

![Image](https://i.imgur.com/FBINQwi.png)

## Etherscan API Key

而如果要直接使用指令驗證智能合約的話，我們還需要去申請 Etherscan 的 API，到 [Etherscan](https://etherscan.io/) 申請帳號並登入到後台，之後點擊**OTHERS**的**API Keys**，並在**My API Keys**的右邊點擊**Add**按鈕，申請一個新的 API KEY。

![Image](https://i.imgur.com/4KUANpT.png)

## Truffle Deploy Verify

現在我們可以在 Rinkeby 部署和驗證智能合約了。

在一開始創建的資料夾底下執行以下指令：

```
truffle init
```

執行完後，資料夾底下應該會有這些檔案：

![Image](https://i.imgur.com/cLNiN5x.png)

打開**truffle-config.js**，並將以下的程式碼貼上，同時將以下欄位補齊：

- mnemonic：錢包私鑰，注意不要用到正式網路的私鑰，也不要將私鑰上傳到 Github 或其他公開的網路空間，作者之前不小心將測試網的帳號私鑰上傳到 Github，結果測試用的以太幣都被盜光了。
- infuraEndPoint：貼上剛剛在 Infura 申請的 Rinkeby EndPoint。
- etherscanAPIKey：貼上剛剛在 Etherscan 申請的 API Key。

```javascript
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "錢包某位使用者的私鑰";
var infuraEndPoint = "剛剛申請的 Rinkeby Infura EndPoints";
var etherscanAPIKey = "剛剛申請的 Etherscan API Key";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, infuraEndPoint);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanAPIKey,
  },
  compilers: {
    solc: {
      version: "^0.4.26",
    },
  },
};
```

以上欄位都填寫完成後，就可以來部署智能合約了，執行以下指令，將合約部署到 Rinkeby：

```
truffle migrate --network rinkeby
```

成功後會出現以下畫面，我們就可以利用 contract address 去找到[我們剛部署的合約了](https://rinkeby.etherscan.io/address/0x9447D2b77c373be6eb126ADf266542f6576529Bb)。

![Image](https://i.imgur.com/D6LynyN.png)

但在合約的 Contract 頁面可以看到，該份合約是還沒有被驗證過的，以往我們要驗證的時候都需要選擇 Solidity 使用的版本並貼上程式碼，但現在我們可以靠一行指令來幫我們自動驗證智能合約。

![Image](https://i.imgur.com/0Ssf3YJ.png)

回到我們的專案底下，執行以下指令來驗證智能合約：

```
npx truffle run verify 智能合約名稱 --network rinkeby
```

在"智能合約名稱"的地方要填寫我們剛剛部署的合約名稱，Truffle 預設的智能合約名稱為 Migrations。

```
npx truffle run verify Migrations --network rinkeby
```

成功後看到以下畫面：

![Image](https://i.imgur.com/LB1kepu.png)

接著回到我們剛剛部署的智能合約頁面，重新整理後會發現合約已經成功被驗證了。

![Image](https://i.imgur.com/grM9zbB.png)
