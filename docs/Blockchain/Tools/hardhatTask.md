---
title: "[blockchain] 以太坊區塊鏈開發工具 — Hardhat Task 介紹"
keywords: [blockchain]
---

## 說明

因為作者使用 Hardhat 部署智能合約到 Rinkeby 時一直沒有反應，所以本次的教學改成使用 Ropsten 測試網路。

可以先到以下兩個網站領 Ropsten 測試網的以太幣

https://faucet.dimensions.network/

https://faucet.metamask.io/

Hardhat 的 task 功能能夠讓我們自行撰寫 js 腳本來測試智能合約，除了能夠在本地端進行測試，我們也可以針對測試網的智能合約來測試，像是 Rinkeby、Kovan、Ropsten 等，可以直接針對智能合約的 function 和 variable 進行測試，今天就是要教如何利用 task 功能 來使用測試網的智能合約。

因為相關的 Hardhat 指令在[這篇](https://github.com/WeiYun0912/Hardhat)就已經有介紹過了，所以本篇不會再重複太多之前已經介紹過的步驟。

要使用 Hardhat 需要先使用 npm 來安裝，或是其他的套件安裝工具。

```
npm install -g hardhat
```

執行以下指令來建立基本的 hardhat 專案，選**Create a basic sample project**。

```
npx hardhat
```

建立完成後，就可以來設定相關的參數了。

## Hardhat Config

現在開啟 hardhat.config.js，我們要來設定部署智能合約的測試網路，而本篇一樣會用到 Infura 提供的 End Point，不知道如何使用的可以看[這篇](https://github.com/WeiYun0912/Truffle-Rinkeby)，而這此我們要使用的是 Ropsten 測試網，所以記得在選取 End Point 的時候要改為 Ropsten。

與先前的教學不同，我們這次將使用 dotenv 套件來儲存我們的環境變數，以免我們將重要的一些參數上傳到公開的網路。

執行以下指令來安裝 dotenv 套件：

```
npm install dotenv
```

之後在專案底下新增一個檔案，命名為 **.env** ，作者的.env 檔案內的相關參數如下圖：

- RINKEYBY_INFURA_URL：貼上你的 Infura Rinkeby End Point。
- ROPSTEN_INFURA_URL：貼上你的 Infura Ropsten End Point。
- KOVAN_INFURA_URL：貼上你的 Infura Kovan End Point。
- PRIVATE_KEY：貼上你的錢包私鑰，再次提醒不要將私鑰上傳到任何公共的網路空間。

而本次教學是使用 Ropsten 測試網路，但還是會教大家如何設定其他兩個測試網。

![Image](https://i.imgur.com/z9YgFAp.png)

設定完.env 以後，將以下的程式碼貼至 hardhat.config.js：

```javascript
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEYBY_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    kovan: {
      url: process.env.KOVAN_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    ropsten: {
      url: process.env.ROPSTEN_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
```

## Hardhat Deploy

現在我們要先來撰寫智能合約，再將該智能合約透過 Hardhat 部署至 Ropsten 測試網。

在 contracts 資料夾底下新增一個檔案，名為 Test.sol，並將以下程式碼貼上：

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    string public message;
    uint256 public number;

    function setMessage(string memory _message) public returns (bool) {
        message = _message;
        return true;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}
```

合約內的程式碼只是簡單的將 message 和 number 變數賦值而已。

接著執行以下指令來編譯智能合約：

```
npx hardhat compile
```

之後我們需要修改部署的程式碼，打開 scripts 內的 sample-script.js 並將以下程式碼貼上並覆蓋掉原本的：

```javascript
async function main() {
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();

  await test.deployed();

  console.log("Test deployed to:", test.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

修改完後執行以下指令，來將智能合約部署至 Ropsten 測試網：

```
npx hardhat run .\scripts\sample-script.js --network ropsten
```

成功後會出現以下畫面：

![Image](https://i.imgur.com/L3qtrCu.png)

本篇教學的智能合約部署至 Ropsten 測試網後的地址為 0xF127342553a9890aC6017b346c8B8056D0ed1E23。

現在你也可以將你部署後的地址貼至 Ropsten 的 Etherscan

```
https://ropsten.etherscan.io/address/你部署在Ropsten的智能合約地址
```

![Image](https://i.imgur.com/qsu4itv.png)

## Hardhat Tasks

接著我們要來撰寫 task 腳本來使用 Test 智能合約內的 function，setMessage 和 setNumber，同時也會將 message 和 number 變數的值利用 task 腳本取得。

在我們的專案底下新增一個資料夾，名為 tasks，並在 tasks 資料夾再新增一個檔案，名為 Test.js。

我們先撰寫個簡單的 task，這個 task 一旦運行後，會使用 Test 合約內的 setMessage 來將 message 變數賦值，這個 task 的名稱我們命名為 **write-message**。

- Line 1：設定 task 的名稱，待會執行 npx hardhat 時，會看到我們設定的 task 與說明。
- Line 2：設定智能合約部署後的地址，使用 addParam 表示我們在執行 write-message task 時，需附上 contract 參數，而使用的方式為 --contract contractAddress。
- Line 3：設定 message 變數的值，使用的方式為 --value messageValue。
- Line 4：setAction 能將我們設定的參數帶到 function 內使用。
- Line 5 ~ 6：taskArgs 參數能夠接收我們傳入的參數，而參數名稱我們已經在 addParam 宣告了，分別是 contract 和 value。
- Line 7 ~ 15：取得 Test 智能合約的 function。
- Line 17 ：使用 Test 合約內的 setMessage，一旦這行被成功執行後，將會發送一筆 transaction 至 Ropsten 測試網路。

![Image](https://i.imgur.com/o2Lvqks.png)

```javascript
task("write-message", "Writes the message")
  .addParam("contract", "The Test Contract")
  .addParam("value", "The value")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const messageValue = taskArgs.value;
    const TestContract = await ethers.getContractFactory("Test");

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const testContract = await new ethers.Contract(
      contractAddr,
      TestContract.interface,
      signer
    );

    let result = await testContract.setMessage(messageValue);

    console.log(result);
  });
```

設定完 task 後，我們還需要在 hardhat.config.js 引入該 task。

在 hardhat.config.js 加入以下程式碼：

```javascript
require("./tasks/Task");
```

之後執行以下指令來使用我們的 task：

```
npx hardhat write-message --contract 你的Ropsten智能合約地址 --value 123 --network ropsten
```

成功後，我們會看到 transaction 的 receipt。

![Image](https://i.imgur.com/ZxNJzaH.png)

接著回到 Ropsten 的 Etherscan，可以看到我們剛剛的 transaction 已經被執行了，而使用的 function 為 setMessage。

![Image](https://i.imgur.com/HwCKUzf.png)

而現在我們也可以在撰寫一個 task，來讀取 message 變數，將以下程式碼貼至 tasks 資料夾底下的 Test.js：

程式碼的部分與 write-message 差不多，只有在 result 變數的地方需要做更改，因宣告在智能合約上的變數會以 function 的方式呈現，所以我們要取得 message 時，需加上()，即 testContract.message()。

```javascript
task("read-message", "Reads the message")
  .addParam("contract", "The Test Contract")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const TestContract = await ethers.getContractFactory("Test");

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const testContract = await new ethers.Contract(
      contractAddr,
      TestContract.interface,
      signer
    );

    let result = await testContract.message();

    console.log(result);
  });
```

執行以下指令來讀取 message 變數：

```
npx hardhat read-message --contract 你的Ropsten智能合約地址 --network ropsten
```

![Image](https://i.imgur.com/S8rnLVD.png)

而如果要確認 task 有沒有被成功被引入，則可以執行以下指令：

```
npx hardhat
```

在 AVAILABLE TASKS 的地方，可以看到我們剛剛新增的 task，write-message 和 read-message。

![Image](https://i.imgur.com/IIoJvsK.png)

setNumber 的 task 程式碼與 setMessage 的程式碼差不多，所以這邊就不多做一次了，想要嘗試的人可以自行撰寫 task 看看。
