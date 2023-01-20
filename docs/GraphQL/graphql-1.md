---
title: "[graphql] GraphQL 與 Apollo Server 使用教學 Part 1"
keywords: [graphql]
---

[影片講解 Part 1](https://www.youtube.com/watch?v=1GC4tPj-IjE)

[影片講解 Part 2](https://www.youtube.com/watch?v=jrlqFB7dkEw)

[影片講解 Part 3](https://www.youtube.com/watch?v=RkEUJFxB51o)

## 初始設定

在開發的時候建議使用 nodemon，這樣我們變更檔案存檔後就不用再重新啟動 server。

要使用 GrpahQL 必須先安裝以下套件

```powershell
npm install apollo-server
```

Apollo Server 裡面就包含使用 GraphQL 的工具與 Server。

安裝完以後直接將 Apollo Server 啟動

```javascript title="server.js" showLineNumbers
const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is ${url}`);
});
```

這邊如果直接執行該程式會報錯，因為我們還沒用定義 type 和 resolvers。

## 範例資料

因為 GraphQL 是查詢語言並不是資料庫，所以這邊我們必須要提供資料來做查詢。

本範例省略掉資料庫的連線設定與使用，如果需要連線資料庫的話推薦使用 Mongo DB。

```json title="tempData.js" showLineNumbers
const Books = [
  {
    id: 1,
    name: "WeiWei Adventure Ep1",
    author: "Wei",
    publish: "Wei's Publish",
  },

  {
    id: 2,
    name: "WeiWei Adventure Ep2",
    author: "Wei",
    publish: "Wei's Publish",
  },

  {
    id: 3,
    name: "WeiWei Adventure Ep3",
    author: "Wei",
    publish: "Wei's Publish",
  },
  {
    id: 4,
    name: "YunYun Adventure Ep1",
    author: "Yun",
    publish: "Yun's Publish",
  },
  {
    id: 5,
    name: "YunYun Adventure Ep2",
    author: "Yun",
    publish: "Yun's Publish",
  },
  {
    id: 6,
    name: "YunYun Adventure Ep3",
    author: "Yun",
    publish: "Yun's Publish",
  },
];

module.exports = Books;
```

## 型態

要定義 type 之前當然要知道 GraphQL 有提供哪些 type

<ul>
<li>Int : 32-bit 的整數型態</li>
<li>Float : 符號雙精度的小數點型態</li>
<li>String : UTF-8 字串型態</li>
<li>Boolean : 布林值型態 (true or false)</li>
<li>ID : 唯一編號</li>
</ul>

## 定義 type 與 resolvers

知道了有哪些型態以後就來先定義 type 吧，這邊先以書本為例子，
一本書會有書名、作者、出版社，當然，每本書都是獨一的，所以也必須加上 ID。

**type Query**裡面要放的是想查詢的資料與回傳格式，可以看到程式第 12 行，輸入 books 查詢後，回傳的是陣列型態，而該陣列裡面包含的型態就是程式碼第 4 行~第 9 行定義的型態。

```javascript title="typeDefs.js" showLineNumbers
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    author: String!
    publish: String!
  }

  type Query {
    books: [Book!]
  }
`;

module.exports = typeDefs;
```

:::note

在形態後面加上 ! 代表我們希望回傳的資料不要有 null 的值，如果回傳的值有 null 就會報錯。

:::

定義好 type 以後還沒結束，必須來實作 resolvers，這樣當下達指定的條件 server 才會回傳值給我們，本範例是使用上面的範例資料來做查詢。

```javascript title="resolvers.js" showLineNumbers
const Books = require("../tempData");

const resolvers = {
  Query: {
    books: () => {
      return Books;
    },
  },
};

module.exports = resolvers;
```

這邊先簡單的把範例資料回傳就好，這邊就如同前面提到的，回傳型態會是 Array。

## 啟動 Server

定義好 type 和 resolvers 以後將他引入至 server.js，之後就可以啟動 server 了！

server 預設的 port 是 4000

```javascript title="server.js" showLineNumbers
const { ApolloServer } = require("apollo-server");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server Url : ${url}`);
});
```

```javascript
nodemon server.js
```

![](https://i.imgur.com/4OLUyts.png)

接著在瀏覽器就可以輸入 localhost:4000 進入到後台，畫面如下：

![](https://i.imgur.com/2tfzPh3.png)

可以在左手邊的 Fields 看到剛剛定義的 books！

現在直接來下 query，來看回傳的是不是範例資料內的資料~

在**Operations**輸入

```graphql showLineNumbers
query {
  books {
    id
    name
    author
    publish
  }
}
```

也就是我們一開始定義的型態，按下 Run 以後回傳的值如下：

![](https://i.imgur.com/W1ocQZE.png)

而我們也可以定義 query 的名稱，定義的方式非常簡單，只要在 query 後面加上要自訂的名稱就好，如下：

```graphql showLineNumbers
query Books {
  books {
    id
    name
    author
    publish
  }
}
```

![](https://i.imgur.com/XiMS0MD.png)

## Parent

GrpahQL 也可以有階層式的查詢，在以上的範例資料不好做示範，所以這邊來更新一下範例資料，因為只是簡單的示範，欄位名稱上先不要求嚴謹，在以下範例資料把作者獨立出來，並把書本的作者欄位改成對應的 ID 值。

```js title="tempData.js" showLineNumbers
const Authors = [
  {
    id: 1,
    name: "Wei",
  },
  {
    id: 2,
    name: "Yun",
  },
];

const Books = [
  {
    id: 1,
    name: "WeiWei Adventure Ep1",
    author: 1,
    publish: "Wei's Publish",
  },

  {
    id: 2,
    name: "WeiWei Adventure Ep2",
    author: 1,
    publish: "Wei's Publish",
  },

  {
    id: 3,
    name: "WeiWei Adventure Ep3",
    author: 1,
    publish: "Wei's Publish",
  },
  {
    id: 4,
    name: "YunYun Adventure Ep1",
    author: 2,
    publish: "Yun's Publish",
  },
  {
    id: 5,
    name: "YunYun Adventure Ep2",
    author: 2,
    publish: "Yun's Publish",
  },
  {
    id: 6,
    name: "YunYun Adventure Ep3",
    author: 2,
    publish: "Yun's Publish",
  },
];

module.exports = { Authors, Books };
```

在定義 type 的地方也要改一下

```javascript title="typeDefs.js" showLineNumbers
const { gql } = require("apollo-server");

/* Book內的author型態 改為 [Author!] */
const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    author: Author!
    publish: String!
  }
  type Author {
    id: ID!
    name: String!
  }
  type Query {
    books: [Book!]
  }
`;

module.exports = typeDefs;
```

來看一下階層式查詢的範例

```graphql
query Books {
  books {
    id
    name
    publish
    author {
      id
      name
    }
  }
}
```

型態定義好了，那要怎麼查詢到書本的作者呢?

這時候就輪到 **Parent** 登場了~ 直接來看範例

我們必須在 Book 型態底下去實作 author 的 resolver。

```javascript title="resolvers.js" showLineNumbers
const { Authors, Books } = require("../tempData");

const resolvers = {
  Query: {
    books: () => {
      return Books;
  },

  Book: {
    author: (parent) => {
      console.log(parent);
    },
  },
};

module.exports = resolvers;
```

這邊先不 return 值，先在後台的**Operation**輸入以下 Query，來查看 parent 裡面的值是什麼。

```graphql
query Books {
  books {
    id
    name
    publish
    author {
      id
      name
    }
  }
}
```

執行後，會在 TERMINAL 看到以下畫面

![](https://i.imgur.com/5bziUoM.png)

這時候"Parent"這個單字應該很明顯了，就是取得父階層的值，那現在把 resolvers 實作完吧！

```javascript title="resolvers.js" showLineNumbers
const { Authors, Books } = require("../tempData");

const resolvers = {
  Query: {
    books: () => {
      return Books;
    },
  },

  Book: {
    author: (parent) => {
      return Authors.find((author) => author.id === parent.author);
    },
  },
};

module.exports = resolvers;
```

![](https://i.imgur.com/lDVEbuu.png)
