---
title: "[blockchain] 以太坊區塊鏈開發工具 — 使用Hardhat對智能合約進行測試與部署"
keywords: [blockchain]
---

[Github 連結](https://github.com/WeiYun0912/Hardhat)

## 說明

本篇教學有參考該部[官方的教學](https://hardhat.org/tutorial/)，並在 testing 章節有使用官方的程式碼。

Hardhat 是一個用來測試與部署以太坊智能合約的工具，與 Truffle 做的事情差不多，今天主要來介紹一些 Hardhat 常用的功能，不會比較和 Truffle 的不同之處。

要使用 Hardhat 需要先使用 npm 來安裝，或是其他的套件安裝工具。

```
npm install -g hardhat
```

安裝完畢後執行以下指令：

```
npx hardhat
```

執行成功後會出現以下畫面

![Image](https://i.imgur.com/4Ocz1uY.png)

我們直接對**Create a basic sample project**按下 Enter 即可，Hardhat 會幫助我們創建基本的專案。

建立完專案後，Hardhat 會要求我們安裝其他的相依套件，執行以下指令來進行安裝，安裝的時間可能會有點久：

```
npm install --save-dev "hardhat@^2.9.5" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"
```

而以上步驟都執行成功後，我們的資料夾結構會跟下圖一樣。

- contracts：撰寫智能合約的資料夾。
- scripts：腳本資料夾，通常是用來部署智能合約用。
- test：針對智能合約的各種功能進行測試。
- hardhat.config.js：hardhat 的基本環境設定檔。

![Image](https://i.imgur.com/tEtt163.png)

## Hardhat Config

我們打開 hardhat.config.js 檔案，預設的程式碼為以下：

![Image](https://i.imgur.com/b80eh3t.png)

可以看到程式碼中有一個**task**語法，如要執行 task 的程式碼，只要執行以下指令即可：

```
npx hardhat [taskname]
```

```
npx hardhat accounts
```

而預設的 accounts task 是將 hardhat 預設的使用者地址輸出，所以執行完後我們會看到以下畫面：

![Image](https://i.imgur.com/r9xfFdr.png)

我們也可以自訂自己的 task ，將以下程式碼複製貼上至 hardhat.config.js：

```javascript
task("sayHi", "User say Hi", async () => {
  const accounts = await ethers.getSigners();
  console.log(`${accounts[0].address} say hi`);
});
```

![Image](https://i.imgur.com/JvDGzCb.png)

可以發現我們並沒有像範例中的 accounts task，在取得 accounts 時使用 hre.ethers，這是因為在第一行程式碼 require("@nomiclabs/hardhat-waffle")，就已經將 ethers 給引入進來了。

## Hardhat Network Config

而因為待會將使用 hardhat 來部署智能合約到 Rinkeby 測試網，所以需要先進行 networks 的設定，將以下程式碼貼至 hardhat.config.js 並覆蓋掉原本的 module.exports：

```javascript
const INFURA_URL = "貼上你的 Infura Rinkeby EndPoint";
const PRIVATE_KEY =
  "貼上你的 Rinkeby 錢包帳號私鑰 (注意不要將私鑰上傳到任何地方)";
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

如果不知道怎麼取得 Infura 的 EndPoint 可以看[這篇](https://github.com/WeiYun0912/Truffle-Rinkeby)。

## Hardhat Compile and Deploy

我們現在可以來將智能合約進行編譯，因為在一開始的專案設定，hardhat 已經有預設幫我們建立一個基本的智能合約，叫做 Greeter.sol。

![Image](https://i.imgur.com/eQMrySk.png)

執行以下指令來編譯智能合約：

```
npx hardhat compile
```

編譯成功後會出現以下訊息，之後會在我們的專案資料夾中，看到兩個資料夾，**artifacts**和**cache**，為智能合約編譯後的相關檔案，例如 abi。

![Image](https://i.imgur.com/E3UwHRw.png)

而確定編譯的結果沒有問題後，我們要來看怎麼將合約進行部署，打開 scripts 資料夾裡面的 sample-script.js，並將以下程式碼全部覆蓋到該 script 檔：

```javascript
async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

接著執行以下指令，來將智能合約部署至 Rinkeby：

```
npx hardhat run .\scripts\sample-script.js --network rinkeby
```

![Image](https://i.imgur.com/YTRXBEZ.png)

接著將該 address 貼至 Rinkeby 來查看是否有成功部署

```
https://rinkeby.etherscan.io/address/你的智能合約address
```

![Image](https://i.imgur.com/zn9pNMw.png)

## Hardhat Testing

現在也可以來針對智能合約的某些功能進行測試，hardhat 預設的 test 資料夾內含有 Greeter 智能合約的測試範例，我們可以執行一次測試指令來運行測試範例。

![Image](https://i.imgur.com/ByC5QdU.png)

```
npx hardhat test
```

![Image](https://i.imgur.com/qAKd4ay.png)

## Hardhat Another Testing

我們也可以自己撰寫一個智能合約來進行測試，在 contracts 新增一個新的 sol 檔案，並命名為 Token.sol，並將以下程式碼貼至 Token.sol：

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "Wei";
    uint256 public totalSupply = 10000000;
    address public owner;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log("Sender balance is %s tokens", balances[msg.sender]);
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}

```

可以看到程式碼內實作了轉帳 transfer 與查詢餘額 balanceOf 之功能，我們要對這兩個 function 來進行測試。

將程式碼貼上後，需再執行一次編譯指令：

```
npx hardhat compile
```

編譯成功後，在 test 資料夾新增一個 Token.js，接著就可以來撰寫我們的測試程式碼了。

- Line 1：引入 chai 測試套件的 expect 功能
- Line 4 ~ 7：初始化變數，並使用 ethers 取得 Token 合約，並將部署後的結果儲存至 token 變數，一旦 deploy 成功，則 token 變數可以使用 Token 合約內的所有 function。
- Line 8 ：使用 ethers 取得測試人員的錢包地址，並將前三位的地址賦值給 owner、addr1、addr2。
- Line 12 ~ 14：檢查 Token 智能合約的部署者是否與 owner 地址相同。
- Line 16 ~ 19：檢查 Token 智能合約的總發行量(totalSupply)是否與部署者 owner 所持有的數量相同。

![Image](https://i.imgur.com/V6MTOc0.png)

而我們現在可以執行一次 test 指令，來看 test 的結果為何，執行以下指令來進行測試：

```
npx hardhat test .\test\Token.js
```

![Image](https://i.imgur.com/NjljlFe.png)

可以看到我們撰寫的 test 通過了，現在我們可以來測試 transfer 功能。

- Line 24 ~ 26：利用 Token 智能合約的 transfer 功能，將 50 枚 token 轉帳給 addr1，轉帳動作結束後，利用 balanceOf 來取得 addr1 目前的 token 餘額，最後去判斷 addr1 的餘額是否等於 50。
- Line 28 ~ 32：使用 addr1 發送 50 枚 token 給 addr2，之後一樣利用 balanceOf 取得 addr2 的 token 餘額，接著再確認 addr2 的餘額是否為 50，因 addr1 已將 50 枚 token 轉帳給 addr2，所以最後需要再驗證 addr1 的 token 餘額是否為 0。

![Image](https://i.imgur.com/LXofKkr.png)

我們再執行一次測試指令

```
npx hardhat test .\test\Token.js
```

![Image](https://i.imgur.com/4oqYHXX.png)
