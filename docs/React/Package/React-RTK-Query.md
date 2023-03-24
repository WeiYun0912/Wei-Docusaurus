---
title: "[react] React 使用 RTK Query 來獲取 API 資料"
keywords: [react, react教學, react-icons]
description: 如果要使用 Redux Toolkit 的 slice 實作 async await 去取得 API 資料的話，會需要自訂一個 action creator，在 action creator 裡面還需要使用到 dispatch，這是一件不太方便的事情。
author: WeiYun0912
og:title: React 使用 RTK Query 來獲取 API 資料
og:description: 如果要使用 Redux Toolkit 的 slice 實作 async await 去取得 API 資料的話，會需要自訂一個 action creator，在 action creator 裡面還需要使用到 dispatch，這是一件不太方便的事情。
---

import Link from "@docusaurus/Link";

## 安裝

```
npm install react-redux @reduxjs/toolkit
```

## 資料夾與檔案結構

[程式碼連結](https://github.com/WeiYun0912/rtk-query)

```
src
|   App.js
|   index.js
|   ...
|
└─── components
│   │   Post.js
|   |   TestAPI.js
│
└─── store
│   │   index.js
│   │
│   └─── api
│   │   │   apiSlice.js
```

![Image](https://i.imgur.com/TbwsjIW.png)

## 說明

在 <Link to="/docs/React/Package/Redux-Toolkit">這篇文章</Link> 的最後有提到，如果要使用 Redux Toolkit 的 slice 實作 async await 去取得 API 資料的話，會需要自訂一個 action creator，在 action creator 裡面還需要使用到 dispatch，這是一件不太方便的事情。

所以 Redux Toolkit 有提供一套解決方法給我們使用，叫做 Redux Toolkit Query，以下簡稱 RTK Query。

RTK Query 是專門用來取得 API 資料的一個套件，它提供了以下幾個優點：

- 能夠追蹤 API 的載入狀態，以便顯示 Loading 畫面。
- 要是兩個以上的 Component 呼叫了同樣的 API，並不會發送兩次 Request 出去，只會送一次 Request。
- 在使用者與畫面互動時，能夠將取得到的 API 資料使用 cache 暫存，以此保持良好的使用者體驗。

## ApiProvider

先介紹第一種 RTK Query 的使用方法，要使用 RTK Query 一樣要引入 Provider 包住我們的整個 React Application，而 RTK 有提供另外一個 Provider 給 RTK Query 使用，叫做 ApiProvider。

ApiProvder 不能夠與 store 的 Provider 一同使用，會有問題，官方也有特別說明這點。

:::danger
Using ApiProvider together with an existing Redux store will cause them to conflict with each other.
:::

```jsx title='App.js' showLineNumbers
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
    //錯誤的程式碼，ApiProvider 不能夠與 Provide r一同使用。
    <ApiProvider>
      <Provider store={store}>
        <div className="App">...</div>
      </Provider>
    </ApiProvider>
  );
}

export default App;
```

但這是有解決辦法的，我們待會介紹到第二種使用方法的時候會說明。

現在來使用 RTK Query 撰寫抓取 API 資料的程式碼吧，範例程式碼會使用 JSONPlaceholder 提供的 posts API 來實作 RTK Query。

[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

先使用 createApi 來建立我們的 API 服務，在 createApi 內需要填入 3 個參數：

- reducerPath : reducer 的 path 名稱，通常會設定跟 API 服務一樣的名稱。
- baseQuery : 使用 fetchBaseQuery 後，可以設定 API 的 baseUrl。
- endPoints : 定義要呼叫的 API Function 名稱，而 RTK Query 會自動將裡面定義的 Function 處理成 Hook 讓我們去使用。

```jsx title='apiSlice.js' showLineNumbers
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      /* 因為有設定baseUrl的關係，不用填寫完整的 API 網址。
      當呼叫該Function時，是去 https://jsonplaceholder.typicode.com/posts 取得資料 */
      query: () => "posts", // https://jsonplaceholder.typicode.com/posts
    }),
  }),
});

// RTK Query 會自動將 endPoints 內定義的 Function 輸出成 Hook。
// 格式為 use + 定義的 Function 名稱 + Query
export const { useGetAllPostsQuery } = postsApi;
```

:::note 備註
使用 query 發送的是 GET Request，如果要發送 Post 的話要更改為 Mutation。
:::

接著在 App.js 去引入 ApiProvider，而 ApiProvider 還需要提供一個 prop，叫做 api，這邊就直接將我們剛剛定義的 API 服務傳入即可。

Post 和 TestAPI 為待會測試 RTK Query 是否能夠成功執行的 Component。

```jsx title='index.js' showLineNumbers
import "./App.css";
import Post from "./components/Post";
import TestAPI from "./components/TestAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { postsApi } from "./store/api/apiSlice";

function App() {
  return (
    //錯誤的程式碼，ApiProvider不能夠與Provider一同使用。
    <ApiProvider api={postsApi}>
      <div className="App">
        <Post />
        <TestAPI />
      </div>
    </ApiProvider>
  );
}

export default App;
```

現在來 Post Component 內測試是否能使用 RTK Query 去獲取 JSONPlaceholder 的 API 資料。

只要將 RTK Query 提供給我們的 Hook 引入並直接使用即可。

```jsx title='Post.js' showLineNumbers {2,5,6,8-11,13}
import React from "react";
import { useGetAllPostsQuery } from "../store/api/apiSlice";

const Post = () => {
  //將資料解構出來
  const { data, isLoading } = useGetAllPostsQuery();

  //判斷是否正在載入API資料
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("Posts", data);

  return <h1>Post</h1>;
};

export default Post;
```

接著打開 console，確認一下是否有取得到 API 資料。

可以看到我們成功使用 RTK Query 取得到 API 資料了。

![Image](https://i.imgur.com/WNSBxvR.png)

在 TestAPI Component 也去使用 useGetAllPostsQuery Hook。

```jsx title='TestAPI.js' showLineNumbers {2,5,6,8-11,13}
import React from "react";
import { useGetAllPostsQuery } from "../store/api/apiSlice";

const TestAPI = () => {
  //將資料解構出來
  const { data, isLoading } = useGetAllPostsQuery();

  //判斷是否正在載入API資料
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("TestAPI", data);

  return <h1>TestAPI</h1>;
};

export default TestAPI;
```

![Image](https://i.imgur.com/5SHTU4z.png)

在正常的情況下，我們在兩個 Component 都去呼叫了 JSONPlaceholder 的 API，所以應該會發送兩次的 Request 出去。

但實際上我們只發送了一次 Request 就取得了資料，這也是前面提到的 RTK Query 的優點，要是多個 Component 發送請求給同一個 API，RTK Query 只會發送一次 Request。

![Image](https://i.imgur.com/l7z9Liq.png)

## Provider

而前面有提到，store 使用的 Provider 並不能與 ApiProvider 一同使用，這邊官方有提供相對應的[解決方法](https://redux-toolkit.js.org/rtk-query/overview#configure-the-store)，只要在 configureStore 內去定義 API 服務的 reducerPath 和 reducer 即可。

```jsx title='store/index.js' showLineNumbers {2,6,11,12}
import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    // ...其他slice
  },

  //使用 api middleware 可以啟用 caching、invalidation、polling 功能。
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
```

```jsx title='App.js' showLineNumbers {4,5,11,16}
import "./App.css";
import Post from "./components/Post";
import TestAPI from "./components/TestAPI";
import { Provider } from "react-redux";
import store from "./store";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { postsApi } from "./store/api/apiSlice";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
        <TestAPI />
      </div>
    </Provider>
  );
}

export default App;
```

現在再次回到網頁重新整理，一樣可以看到我們的 API 資料有成功的取回。

![Image](https://i.imgur.com/ktqjky1.png)

## 補充

如果 API 需要帶入參數來取得資料的話，可以使用以下的做法：

```jsx title='apiSlice.js' showLineNumbers {13-15,19}
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts", // https://jsonplaceholder.typicode.com/posts
    }),

    getPostById: builder.query({
      query: (id) => `posts?id=${id}`, // https://jsonplaceholder.typicode.com/posts?id=1
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
```

```jsx title='Post.js' showLineNumbers {2,5,6}
import React from "react";
import { useGetPostByIdQuery } from "../store/api/apiSlice";

const Post = () => {
  //取得id為1的文章
  const { data, isLoading } = useGetPostByIdQuery(1);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("Posts", data);

  return <h1>Post</h1>;
};

export default Post;
```

![Image](https://i.imgur.com/RsPMCWt.png)
