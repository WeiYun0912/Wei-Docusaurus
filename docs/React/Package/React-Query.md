---
title: "[react] React Query 教學"
keywords: [react, react hook, react教學, react query]
description: React 在 data fetch 上是較不方便的，不依靠第三方工具來處理資料的話，以下的功能需經過複雜的處理才有辦法達成。
author: WeiYun0912
og:title: React Query 教學
og:description: React 在 data fetch 上是較不方便的，不依靠第三方工具來處理資料的話，以下的功能需經過複雜的處理才有辦法達成。
---

[Github 連結](https://github.com/WeiYun0912/React-Query-Note)

api 網址：https://swapi.dev/api/planets/

```javascript
npm install react-query
```

## Without React Query

React 在 data fetch 上是較不方便的，不依靠第三方工具來處理資料的話，以下的功能需經過複雜的處理才有辦法達成：global state、success or error status、cache、background updating...。

`Hook：useState、useEffect`

```javascript showLineNumbers
import React, { useEffect, useState } from "react";

const WithoutReactQuery = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchSWData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");

        if (response.status !== 200 && !response.ok)
          throw new Error("Fetch data fail.");

        const data = await response.json();
        setData(data.results);
        console.log(data.results);
        setSuccess(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchSWData();
  }, []);

  return (
    <div>
      {success && JSON.stringify(data)}
      {errorMessage}
    </div>
  );
};

export default WithoutReactQuery;
```

![](https://i.imgur.com/iJMjHPV.png)

## Initialization

和 graphQL 的 Apollo client 一樣，都需要先提供 Provider 才能使用其他功能。

```javascript title="index.js" showLineNumbers
import ReactDOM from "react-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

```css title="index.css" showLineNumbers
body {
  margin: 0;
  font-family: sans-serif;
  background: #222;
  color: #ddd;
  text-align: center;
}
.App {
  width: 960px;
  margin: 0 auto;
}
h1 {
  color: #ffff57;
  font-size: 4em;
  letter-spacing: 2px;
}
button {
  margin: 0 10px;
  background: transparent;
  border: 3px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  color: #ccc;
  font-size: 1.2em;
  cursor: pointer;
}
button:hover {
  color: #fff;
  border-color: #fff;
}
.content {
  text-align: left;
}

.card {
  padding: 8px 16px;
  background: #1b1b1b;
  margin: 16px 0;
  border-radius: 20px;
}
.card p {
  margin: 6px 0;
  color: #999;
}
.card h3 {
  margin: 10px 0;
  color: #ffff57;
}
```

## useQuery

### Data structure

[doc](https://react-query.tanstack.com/reference/useQuery)

從上面的文件可以看到 useQuery 能夠解構哪些資料與狀態出來使用，這邊介紹幾個比較常用的。

`data：取得的API資料`

`dataUpdatedAt：取得的資料時間，以status為success時為基準，為timestamp格式。`

`status：資料取得成功或失敗，讀取時會回傳loading，成功會回傳success，失敗則回傳error。`

### Implementation

useQuery 所需要的參數有兩個，一個是鍵值名稱，另一個則是 data fetching 的 function。

`const result = useQuery(queryKey,queryFunction)`

先定義好 fetch function

```javascript showLineNumbers
const fetchPlanets = async ({ queryKey }) => {
  const response = await fetch(`https://swapi.dev/api/planets/`);
  return response.json();
};
```

之後使用 useQuery hook 並將取得的資料解構並顯示在畫面上

```javascript title="Planets.js" showLineNumbers
import { useQuery } from "react-query";

const timeToDate = (time) => {
  let t = new Date(time);
  return t.toLocaleString();
};

const Planets = () => {
  const fetchPlanets = async () => {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    return response.json();
  };
  const { data, dataUpdatedAt, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h3>Data updated at ： {timeToDate(dataUpdatedAt)}</h3>
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
```

```javascript title="Planets.js" showLineNumbers
import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
```

### Mechanism

如果 fetch 的 data 有問題(網址打錯、提供錯誤參數等)，React Query 會自動 retry(refetch)三次，三次都取得不到 data 的話則會顯示 error。

另外，React Query 也有 Window Refocus Refetching 的功能，意思是當瀏覽器切換到其他分頁再切換回來時，會重新 Fetch data，從下圖可以很明顯的觀察到。

![](https://i.imgur.com/u2AepDh.gif)

這些設定值是可以更改的，文件上也有寫哪些參數是可以自行設定的。

```javascript showLineNumbers
const { data, dataUpdatedAt, status } = useQuery("planets",fetchPlanets,
    {
      retry : 1,
      refetchOnWindowFocus : false,
      ...
    }
);
```

## React Query DevTools (config)

React Query 也有提供開發管理工具 **React Query Dev Tools**

![](https://i.imgur.com/NT7Td7t.png)

```javascript title="index.js" showLineNumbers
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Query key

```javascript title="Planets.js" showLineNumbers
import { useQuery } from "react-query";
import Planet from "./Planet";

const timeToDate = (time) => {
  ...
};

const Planets = () => {
  const fetchPlanets = async ({ queryKey }) => {
    console.log(queryKey)
    const response = await fetch(
      `https://swapi.dev/api/planets/`
    );
    return response.json();
  };

  const { data, dataUpdatedAt, status } = useQuery(["planets", "hello","world"],fetchPlanets);

  return (
    ...
  );
};

export default Planets;
```

![](https://i.imgur.com/NgtfXRx.png)

### Pagination Implementation

上面提供的 api 有 page 的查詢參數可以使用，所以就來實作 Pagination 吧，page 的上一頁與下一頁邏輯就先簡單略過。

`第一頁：https://swapi.dev/api/planets/?page=1`
`第二頁：https://swapi.dev/api/planets/?page=2`

```javascript title="Planets.js" showLineNumbers
import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const timeToDate = (time) => {
  let t = new Date(time);
  return t.toLocaleString();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const fetchPlanets = async ({ queryKey }) => {
    const response = await fetch(
      `https://swapi.dev/api/planets/?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, dataUpdatedAt, status } = useQuery(
    ["planets", page],
    fetchPlanets
  );

  return (
    <div>
      <h3>Data updated at ： {timeToDate(dataUpdatedAt)}</h3>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>

      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
```

當我們點選下一頁再點選上一頁時，會發現原本的資料不會有 loading 的畫面出現(閃一下)，這是因為 React Query 有 cache 的機制，預設的 cache 時間是 5 分鐘，也可以自行設定。

![](https://i.imgur.com/kLaVBCT.gif)

如果不想要點選下一頁有 loading 閃一下的狀況出現，可以設定**keepPreviousData**為**true**，意思是當下一筆資料載入時，先保存當上一筆的資料直到下一筆資料載入完成才顯示出來。

![](https://i.imgur.com/YmI3c9H.gif)

## Reference

[React Query](https://react-query.tanstack.com/)
[The Net Ninja](https://www.youtube.com/watch?v=x1rQ61otgtU&list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani&index=2)
