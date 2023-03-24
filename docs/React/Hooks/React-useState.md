---
title: "[react] React useState"
keywords: [react, react hook, react教學, useState]
description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
author: WeiYun0912
og:title: React useState
og:description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
sidebar_position: 1
---

## Updated State (Previous State)

在使用 useState 更新 state 時，通常會使用到 useState 給予我們的 function 來更新 state，用以下程式碼簡單做個解釋。

在一開始我們使用 useState 將 count 設定為 0，而 `increment`、`decrement` 和 `reset` function，可以將 count 的值透過 `setCount` 進行更新，使用 `setCount` function 後，React 也會將畫面重新渲染(re-render)。

```jsx title='App.jsx' showLineNumbers live
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

這時候把 increment 內的程式碼做個修改，加上 `setTimeout`，2 秒後再將 state 更新。

```jsx title='App.jsx' showLineNumbers live
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

於是我們先點擊 Increment 按鈕後，馬上點擊 Reset 按鈕，會發現過了 2 秒後，count 變成 2 了，這並不合理，在正常的邏輯下，按下 Increment 按鈕 2 秒後會將 count + 1，而因為按下 Reset 按鈕觸發了 reset function，將 count 設置為 0，則最後的結果 count 應當要為 1。

這是因為 setCount 這個 function 是屬於非同步的，並沒有辦法馬上得知我們更改了 state，所以會去拿`當下的state進行處理，並不會拿更新之後的`。

而有一個辦法能夠解決此問題，就是在 setCount function 中，將一個重要的參數引入，就是 `previous state`，一般會簡寫成 `prevState`，使用 prevState 就能夠取得最新的 state。

可以測試一下，按下 Increment 按鈕後，馬上再按下 Reset 按鈕，這時候會發現 count 的值為 1。

```jsx title='App.jsx' showLineNumbers live
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 2000);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Lazy Initial

## Form State (Input)

## useForm (Custom Hook)

## Object State
