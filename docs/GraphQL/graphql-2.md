---
title: "[graphql] GraphQL 與 Apollo Server 使用教學 Part 2"
keywords: [graphql]
---

[影片講解 Part 1](https://www.youtube.com/watch?v=1GC4tPj-IjE)

[影片講解 Part 2](https://www.youtube.com/watch?v=jrlqFB7dkEw)

[影片講解 Part 3](https://www.youtube.com/watch?v=RkEUJFxB51o)

## Args

假設今天想要單獨查詢書本的資訊要怎麼做呢?
一般的作法都是利用 **id** 來找尋資料，而在 GraphQL 一樣可以靠外部參數來找尋特定的資料，來看以下範例：

在 type 定義時必須多加一條規則，也就是程式碼第 13 行，括號的意思是接收的參數名稱與參數型態。

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
    book(id: ID): Book
  }
`;

module.exports = typeDefs;
```

同樣的也必須在 resolvers 實作，先來看如何傳入外部參數。

在下方的 Variables 內定義 bookId，名稱可以自己取，但要跟 query 傳入的名稱一樣。

![](https://i.imgur.com/GiVNlXo.png)

```javascript title="resolvers.js" showLineNumbers
const Books = require("../tempData");

const resolvers = {
  Query: {
    books: () => {
      return Books;
    },

    book: (parent, args) => {
      console.log(args); // output : { id : '1' }
      return Books.find((book) => book.id === +args.id);
    },
  },
};

module.exports = resolvers;
```

## Context

Context 有點像是 Middleware，Context 可以拿來做一些驗證，像是 JWT，直接來看範例。

要啟用 Context 必須在 Server 做設定，這邊直接回傳 request。

```javascript title="server.js" showLineNumbers
const { ApolloServer } = require("apollo-server");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return req;
  },
});

server.listen().then(({ url }) => {
  console.log(`Server Url : ${url}`);
});
```

回傳的 context 可以在 resolvers 做使用

```javascript title="resolvers.js" showLineNumbers
const { Authors, Books } = require("../tempData");

const resolvers = {
  Query: {
    books: (parent, args, context) => {
      console.log(context.headers);
      return Books;
    },
  },
};

module.exports = resolvers;
```

直接在後台查詢 books 後查看 TERMINAL。

![](https://i.imgur.com/q2BM0We.png)

## Context 2

當然，也可以直接將範例資料傳入 Context，之後就不用在 resolvers 去引入範例資料！

**_server.js_**

```javascript title="server.js" showLineNumbers
const { ApolloServer } = require("apollo-server");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");
const { Books } = require("./tempData");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Books,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server Url : ${url}`);
});
```

```javascript title="resolvers.js" showLineNumbers
const resolvers = {
  Query: {
    books: (parent, args, context) => {
      return context.Books;
    },
  },
};

module.exports = resolvers;
```

![](https://i.imgur.com/Ch6sQDM.png)

## Fragment

當回傳值太多的時候，或是多個 type 回傳的值都一樣時可以使用**Fragment**來簡化，直接來看以下範例。

假設要回傳的值有以下：

```graphql
query Books {
  books {
    id
    name
    author
    publish
  }
}
```

則可以利用**Fragment**來將要回傳的值個別獨立出來。

```graphql
query Books {
  books {
    ...BookFragement
  }
}

fragment BookFragement on Book {
  id
  name
  author
  publish
}
```

![](https://i.imgur.com/ujs5Idd.png)

## Interface

善用**Interface**能夠有效管理型態，Interface type 可以提供一組 fields 讓不同的物件(Object)共享，我們直接來看範例。

我們用以下範例來看，如果要在 GraphQL 回傳下面的範例資料，則必須在定義 type 的時候把所有需要的欄位補上。

```json title="tempData.js" showLineNumbers
const Animals = [
  {
    name: "狼蛛",
    footLength: 123,
  },
  {
    name: "奇異鳥",
    footLength: 123,
    wingLength: 456,
    wing: false,
  },
];
```

像是這樣

```javascript title="typeDefs.js" showLineNumbers
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Animal {
    name: String
    footLength: Int
    wingLength: Int
    wing: Boolean
  }

  type Query {
    animals: [Animal!]!
  }
`;

module.exports = typeDefs;
```

**_resolvers.js_**

```javascript
const { Animals } = require("./tempData");

const resolvers = {
  Query: {
    animals: () => {
      return Animals;
    },
  },
};

module.exports = resolvers;
```

但會發現執行 query 後，第一筆資料的其他欄位會是 null，這並不是我們想要的結果，因為如果該 type 有加上  ! 的話，回傳的資料含有 null 就會報錯。

![](https://i.imgur.com/hXxxMWh.png)

這時候，可以利用 interface 來解決上述的問題~

```javascript title="typeDefs.js" showLineNumbers
const { gql } = require("apollo-server");

const typeDefs = gql`
  interface Animal {
    name: String
    footLength: Int
  }

  type Spider implements Animal {
    name: String
    footLength: Int
  }

  type Bird implements Animal {
    name: String
    footLength: Int
    wingLength: Int
    wing: Boolean
  }

  type Query {
    animals: [Animal]
  }
`;

module.exports = typeDefs;
```

可以看到我們把範例資料的共同鍵值抽取出來，獨立成另外的 type ，這邊要注意，只要該 type 有 implements interface，一定要把 interface 內的 type 在重新定義一次且型態都要一樣，類似抽象類別。

```javascript title="resolvers.js" showLineNumbers
const { Animals } = require("./tempData");

const resolvers = {
  Animal: {
    __resolveType(obj) {
      //檢查obj裡面是否有wingLength的鍵值(key)
      if (obj.wingLength) {
        //有的話就回傳Bird的type
        return "Bird";
      }

      //沒有的話就回傳 Spider type
      return "Spider";
    },
  },

  Query: {
    animals: () => {
      return Animals;
    },
  },
};

module.exports = resolvers;
```

那 query 的部分要怎麼下呢?

```graphql
query Query {
  animals {
    ... on Spider {
      name
      footLength
    }
    ... on Bird {
      name
      wingLength
      footLength
      wing
    }
  }
}
```

![](https://i.imgur.com/XRtadKz.png)

## Union

Union 與 Interface 蠻相似的，可以看到以下的定義方式與 Interface 的差異， 最大的差異就在於如果 type 有 implements interface，則該 type 必須將 interface 的內的 type 全部定義，否則會報錯，而 Union 則不用。

```javascript title="tempData.js" showLineNumbers
const Animals = [
  {
    name: "狼蛛",
    footLength: 123,
  },
  {
    name: "奇異鳥",
    wingLength: 456,
  },
];
```

```javascript title="typeDefs.js" showLineNumbers
const { gql } = require("apollo-server");

const typeDefs = gql`
  union Animal = Spider | Bird

  type Spider {
    name: String
    footLength: Int
  }

  type Bird {
    name: String
    wingLength: Int
  }

  type Query {
    animals: [Animal]
  }
`;

module.exports = typeDefs;
```

```javascript title="resolvers.js" showLineNumbers
const { Animals } = require("./tempData");

const resolvers = {
  Animal: {
    __resolveType(obj) {
      if (obj.footLength) {
        return "Spider";
      }

      if (obj.wingLength) {
        return "Bird";
      }
    },
  },

  Query: {
    animals: (parent, args, context) => {
      return Animals;
    },
  },
};

module.exports = resolvers;
```

![](https://i.imgur.com/isxCIF5.png)
