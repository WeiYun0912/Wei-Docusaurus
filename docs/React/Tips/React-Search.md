---
title: "[react] React 初學者常犯的錯誤 - 搜尋陣列資料"
keywords: [react, Docusaurus, docusaurus, docusaurus 教學, Algolia, algolia]
description: 在剛開始學習 React 時，常常會被 state 搞得團團轉的，像是在 input 內輸入字串來搜尋陣列內的資料
author: WeiYun0912
og:title: React 初學者常犯的錯誤 - 搜尋陣列資料
og:description: 在剛開始學習 React 時，常常會被 state 搞得團團轉的，像是在 input 內輸入字串來搜尋陣列內的資料
sidebar_position: 6
---

在剛開始學習 React 時，常常會被 state 搞得團團轉的，像是在 input 內輸入字串來搜尋陣列內的資料，就用了很多方式來達到這個功能，現在就來看幾個錯誤的示範。

## 初始化

首先先建立一個陣列 state 名為 items，再建立一個 ref 綁定在 input 上，讓我們待會能夠取得 input 內的文字，而當我們在 input 內輸入文字並按下新增資料按鈕後，該文字就會顯示在畫面上，可以在 Result 的地方自己試試看。

```jsx title='App.js' showLineNumbers live
function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const addItem = () => {
    const searchText = inputRef.current.value;
    setItems((prev) => [...prev, searchText]);
  };

  return (
    <div className="App">
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button onClick={addItem}>新增資料</button>

      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

## 錯誤示範 1

而現在我們想要去搜尋新增的資料，所以多新增了一個搜尋資料用的 input，在該 input 內輸入文字後，就會將符合搜尋文字的資料顯示在畫面上。

可以在 Result 的地方先新增 2~3 筆資料，之後去搜尋你新增的資料。

```jsx title='App.js' showLineNumbers live
function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const addItem = () => {
    const searchText = inputRef.current.value;
    setItems((prev) => [...prev, searchText]);
  };

  const searchItem = (e) => {
    const searchText = e.target.value;
    setItems((prev) => {
      return prev.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={searchItem} placeholder="搜尋資料..." />
      <br />
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button onClick={addItem}>新增資料</button>

      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

但這時候你會發現，資料成功新增了沒錯，搜尋一開始也有搜尋到，但當我們要二次搜尋的時候，會發現原本的資料消失了。

![Image](https://i.imgur.com/CWX1QPc.gif)

這是因為在搜尋資料的時候，搜尋到符合的條件就會顯示在畫面上，`並且將不符合條件的資料移除陣列`，這也就導致了上述的結果發生。

```jsx title='App.js' showLineNumbers {4,5}
const searchItem = (e) => {
  const searchText = e.target.value;
  setItems((prev) => {
    return prev.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  });
};
```

## 錯誤示範 2

所以我們再新增一個新的 state 名為 filteredItems，專門將過濾後的資料儲存，並顯示在畫面上。

```jsx title='' showLineNumbers live
function App() {
  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const inputRef = useRef(null);

  const addItem = () => {
    const searchText = inputRef.current.value;
    setItems((prev) => [...prev, searchText]);
    setFilteredItems((prev) => [...prev, searchText]);
  };

  const searchItem = (e) => {
    const searchText = e.target.value;
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <input type="text" onChange={searchItem} placeholder="搜尋資料..." />
      <br />
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button onClick={addItem}>新增資料</button>

      {filteredItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

雖然達到我們要的功能了，但會發現我們宣告了兩個非常相似的 state。

![images](https://i.imgur.com/BCVDHBE.gif)

```jsx title='App.js' showLineNumbers {1,2,6,7,12-14}
const [items, setItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);

const addItem = () => {
  let searchText = inputRef.current.value;
  setItems((prev) => [...prev, searchText]);
  setFilteredItems((prev) => [...prev, searchText]);
};

const searchItem = (e) => {
  const searchText = e.target.value;
  setFilteredItems(
    items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    )
  );
};
```

## 較正確的方式

而較正確的方式為，宣告一個 state 名為 query，並將 query 做為搜尋的字串去搜尋我們新增的資料。

跟前面不同的地方在於，我們移除了 `searchItem` 新增了一個 `filteredItems` 變數，並將搜尋的結果保存在該變數中。

只要每次 query state 被改變，React 幫我們重新渲染(re-render)畫面時，`filteredItems` 的結果也就會跟著變動。

所以可以利用 state re-render 的特性來達到我們一開始的需求，並不需要建立重複的 state。

```jsx title='App.js' showLineNumbers live
function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const addItem = () => {
    const searchText = inputRef.current.value;
    setItems((prev) => [...prev, searchText]);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜尋資料..."
      />
      <br />
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button onClick={addItem}>新增資料</button>

      {filteredItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

而如果不希望搜尋結果沒有變更的情況下 `filteredItems` 一直被重新建立的話，可以使用 useMemo 來解決該問題。

```jsx title='App.js' showLineNumbers live
function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  const addItem = () => {
    const searchText = inputRef.current.value;
    setItems((prev) => [...prev, searchText]);
  };

  console.log("rerender");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜尋資料..."
      />
      <br />
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button onClick={addItem}>新增資料</button>

      {filteredItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

## 參考資料

https://www.youtube.com/watch?v=E1cklb4aeXA
