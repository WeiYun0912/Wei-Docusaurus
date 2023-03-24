---
title: "[react] React常用的JavaScript語法 - 可選鏈"
keywords: [react, react教學, javascript, optional chaining]
description: 要是我們並不清楚取得的資料是否為物件，又使用物件取值的方式去呼叫，且沒有做任何的判斷，程式就會報出錯誤
author: WeiYun0912
og:title: React常用的JavaScript語法 - 可選鏈
og:description: 要是我們並不清楚取得的資料是否為物件，又使用物件取值的方式去呼叫，且沒有做任何的判斷，程式就會報出錯誤
sidebar_position: 5
---

## JavaScript

要是我們並不清楚取得的資料是否為物件，又使用物件取值的方式去呼叫，且沒有做任何的判斷，程式就會報出錯誤：

```js title='index.js' showLineNumbers
let food = null;

console.log(food.name); // error : Cannot read properties of null (reading 'name')
```

所以判斷一個物件裡面有沒有我們要取得的 key，可以使用以下方法來確認：

```js title='index.js' showLineNumbers
let food = { name: "apple" };

if (food != null) {
  console.log(food.name); // output : apple
}

// or

if (food) {
  console.log(food.name); // output : apple
}
```

或是使用可選鏈(optional chaining)，來檢查該物件內是否有我們要取得的 key：

```js title='index.js' showLineNumbers
let food = { name: "apple" };

if (food?.name) {
  console.log(food.name); // output : apple
}

//不會進到這個if 因為food物件內並沒有名為color的key
if (food?.color) {
  console.log(food.color);
}
```

:::note 備註
可選鏈的使用方式為在物件名稱的後面加上 ?.

而 food?.name 為檢查 food 物件內有沒有名為 name 的 key。

:::

假釋今天物件內有其他 function，可以使用可選鏈先確認 function 是否存在，存在的話再執行它：

```js title='index.js' showLineNumbers
let food = {
  name: "apple",
  color: "red",
  getFoodData: () => {
    console.log("getFoodData..."); // output : getFoodData...
  },
};

food?.getFoodData?.();
```

## React

現在使用 fetch API 來取得 jsonplaceholder 的提供的 posts 資料，並把 limit 設置為 5，這樣我們每次 fetch 只會取得 5 筆 post 的資料。

```js title='App.js' showLineNumbers {2,20-22}
function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    };

    getPostData();
  }, []);

  console.log(posts); // output : (5) [{…}, {…}, {…}, {…}, {…}]

  return (
    <div className="App">
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
```

但使用上面的寫法只要重新整理網頁後，程式就會報出錯誤，這是因為 posts 這個 state 在初始化時為 null，而 null 這個型態並沒有支援 map function，所以才會出現錯誤訊息。

![Image](https://i.imgur.com/CP48IGk.png)

而我們可以在程式中加上判斷，判斷 posts 是否為 null，如果是的話就回傳 Loading 文字。

```jsx title='App.js' showLineNumbers {18-20}
function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    };

    getPostData();
  }, []);

  console.log(posts);

  if (posts == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
```

![Image](https://i.imgur.com/ZWBtwq4.gif)

或是直接在 posts 後面加上可選鏈，這樣就不用撰寫多餘的判斷程式碼：

```jsx title='App.js' showLineNumbers {20-22}
function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    };

    getPostData();
  }, []);

  console.log(posts); // output : (5) [{…}, {…}, {…}, {…}, {…}]

  return (
    <div className="App">
      {posts?.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
```
