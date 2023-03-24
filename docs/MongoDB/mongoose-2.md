---
title: "[mongodb] MongoDB — Mongoose 介紹與使用教學 (下)"
keywords: [mongoDB, mongoose]
---

## 範例資料

經由前面新增的資料，資料庫內共有 3 筆資料，現在就來針對這 3 筆資料做查詢吧。

![Image](https://i.imgur.com/FbNuDDK.png)

## 查詢資料

因為語法的使用方式非常多樣，並不會全部介紹到，有興趣的可以看 [MongoDB Cheat Sheet](https://gist.github.com/codeSTACKr/53fd03c7f75d40d07797b8e4e47d78ec#chaining/)。

使用 **find** 即可將資料庫內的資料全部查詢出來。

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const findData = async () => {
  try {
    const user = await User.find();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

findData();
```

![Image](https://i.imgur.com/3K2QSmA.png)

如要針對特定條件進行搜尋的話，可以使用 MongoDB 本身提供 Operators 查詢語法，如果有想進一步了解的話，[可以看官方文檔](https://www.mongodb.com/docs/manual/reference/operator/query/)。

這邊提幾個常用的

- $gt (greater than) : 大於
- $gte (greater than equal) : 大於等於
- $lt (less than) : 小於
- $lte (less than equal) : 小於等於
- $in (in) : 指定範圍匹配的值
- $nin (not in) : 指定範圍不匹配的值

所以如果想查詢 **name 為 Wei 與 name 為 Alex 且 age 大於等於 18 的**則可以在 find 裡面傳入以下物件參數，

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const findData = async () => {
  try {
    const user = await User.find({
      name: { $in: ["Wei", "Alex"] },
      age: { $gte: 18 },
    });
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

findData();
```

![Image](https://i.imgur.com/u22I4JZ.png)

如果 Operators 用不習慣的話，也可以選擇使用類似 Mysql 的 select where，但必須先 where 後才能執行 select。

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const findData = async () => {
  try {
    //查詢name為Wei的，查詢到以後只顯示name欄位，其他欄位不要顯示。
    const user = await User.where("name").equals("Wei").select("name");
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

findData();
```

![Image](https://i.imgur.com/50c13Pz.png)

如果希望查詢結果能夠去除不想要的欄位，則可以在 select 語法中加上一個減號 **-**

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const findData = async () => {
  try {
    //查詢name為Wei的，查詢到以後不要把欄位名稱為name的顯示出來。
    const user = await User.where("name").equals("Wei").select("-name");
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

findData();
```

![Image](https://i.imgur.com/1YrgNi8.png)

## 更新資料

要更新資料的話可以使用 **updateOne** 或 **updateMany**。

updateOne 的第一個參數是查詢參數，查詢你想要更新的資料後，在第二個參數中傳入你要更改的欄位名稱與欄位值，而如果要開啟驗證機制的話，必需在第三個參數中將驗證機制設置為 true。

:::caution 注意事項
使用這兩個 function 的時候要注意，因 updateOne 和 updateMany 的預設驗證機制是關閉的，所以使用這兩個 function 更新資料的話，並不會通過我們在 Schema 建立的驗證規則，而是會直接無視規則更新資料。
:::

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const updateData = async () => {
  try {
    let opts = { runValidators: true }; //將驗證機制設置為true
    const userUpdateLog = await User.updateOne(
      { name: "Wei" }, //第一個參數 查詢參數 查詢name為Wei的資料
      { age: "30" }, //第二個參數 更改參數 將Wei的age改為30
      opts //第三個可選參數 將驗證機制設置為true
    );
    console.log(userUpdateLog);
  } catch (error) {
    console.log(error.message);
  }
};
updateData();
```

執行後的結果如下，可以看到更動的資料筆數(modifiedCount)為一筆。

![Image](https://i.imgur.com/dET0e0h.png)

可以試試看如果把第三個參數拿掉，並把 age 設定為 23，再去執行檔案會發生什麼事。

## 刪除資料

要刪除資料的話使用 **deleteOne** 與 **deleteMany**。

直接在 deleteOne 與 deleteMany function 中傳入要刪除的資料，一樣是使用查詢語法，查詢到以後將該筆資料刪除。

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const removeData = async () => {
  try {
    //只刪除一筆的話使用deleteOne 要一次刪除多筆的話使用 deleteMany
    const userRemoveLog = await User.deleteOne({ name: "Alex" });
    console.log(userRemoveLog);
  } catch (error) {
    console.log(error.message);
  }
};
removeData();
```

## Schema Methods

Schema 本身也有提供客製化的 function 供我們使用。

```javascript title="User.js" showLineNumbers
const mongoose = require("mongoose");

//定義欄位名稱與欄位型態
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      // validator為true時，才能通過驗證。
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} 並不是偶數`,
    },
  },
});

//不能用arrow func 因為會用到this
userSchema.methods.sayHello = function () {
  console.log(
    `Hi My name is ${this.name}, age ${this.age}, email ${this.email}`
  );
};

//定義Collection的名稱
module.exports = mongoose.model("User", userSchema);
```

接著回到 server.js 先針對資料進行查詢後，再去使用 sayHello function。

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const customFunction = async () => {
  try {
    const user = await User.findOne({ name: "Wei" });
    user.sayHello();
  } catch (error) {
    console.log(error.message);
  }
};

customFunction();
```

![Image](https://i.imgur.com/Yjw04XS.png)

## Schema Statics

Statics 則是可以直接自訂 query 的規則。

```javascript title="User.js" showLineNumbers
const mongoose = require("mongoose");

//定義欄位名稱與欄位型態
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      // validator為true時，才能通過驗證。
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} 並不是偶數`,
    },
  },
});

//找到age大於等於傳入進來的參數
userSchema.statics.findByAgeGreaterThanEqual = function (age) {
  return this.find({ age: { $gte: age } });
};

//定義Collection的名稱
module.exports = mongoose.model("User", userSchema);
```

接著回到 server.js 直接使用 findByAgeGreaterThanEqual。

```javascript
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const customFunction = async () => {
  try {
    //找到 age 欄位 大於等於 30 的資料
    const user = await User.findByAgeGreaterThanEqual(30);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

customFunction();
```

![Image](https://i.imgur.com/IGqEFxa.png)

## Schema Query

Query 定義的方法可以接在 find、findOne、where 之後使用，所以先前在 statics 定義的 findByAgeGreaterThanEqual function 也可以使用。

```javascript title="User.js" showLineNumbers
const mongoose = require("mongoose");

//定義欄位名稱與欄位型態
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      // validator為true時，才能通過驗證。
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} 並不是偶數`,
    },
  },
});

//找到age大於等於傳入進來的參數
userSchema.statics.findByAgeGreaterThanEqual = function (age) {
  return this.find({ age: { $gte: age } });
};

//chain query 只能在query function後面接著用 例如find findOne where
userSchema.query.byName = function (name) {
  return this.where({ name: name }).select(["name", "age"]);
};

//定義Collection的名稱
module.exports = mongoose.model("User", userSchema);
```

接著回到 server.js 在 findByAgeGreaterThanEqual 之後使用 byNameAndAge。

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const customFunction = async () => {
  try {
    const user = await User.findByAgeGreaterThanEqual(30).byName("Wei");
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

customFunction();
```

![Image](https://i.imgur.com/HqJ6WCx.png)

## Schema Virtual

最後如果要在應用程式內，傳遞查詢出來的值，可以使用 virtual 提供的 get function。

```javascript title="User.js" showLineNumbers
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    minLength: 10,
  },
  age: {
    type: Number,
    min: 1,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} 並不是偶數`,
    },
  },
});

//cross application
userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

module.exports = mongoose.model("User", userSchema);
```

直接在查詢後使用即可

```javascript title="server.js" showLineNumbers
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {
  console.log("connected");
});

const customFunction = async () => {
  try {
    const user = await User.findOne({ name: "Wei" });
    console.log(user.namedEmail);
  } catch (error) {
    console.log(error.message);
  }
};

customFunction();
```

![Image](https://i.imgur.com/EaAbWOn.png)
