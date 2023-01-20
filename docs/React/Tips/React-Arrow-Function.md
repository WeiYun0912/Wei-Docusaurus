---
title: "[react] React常用的JavaScript語法 - 箭頭函式"
keywords: [react, react教學, javascript, arrow function]
description: ES6 以後我們可以使用箭頭函式來宣告 function，在程式碼少的情況下，使用箭頭函式也能夠讓程式碼較易讀。
author: WeiYun0912
og:title: React常用的JavaScript語法 - 箭頭函式
og:description: ES6 以後我們可以使用箭頭函式來宣告 function，在程式碼少的情況下，使用箭頭函式也能夠讓程式碼較易讀。
sidebar_position: 1
---

[影片連結](https://www.youtube.com/watch?v=8SsraVLl3mQ)

## JavaScript

在 JavaScript ES6 以前，會用到 function keyword 加上 function name 來宣告一個 function。

```js name="index.js"  showLineNumbers
function sayHello(name) {
  console.log("Hello," + name); //output : Hello, WeiWei
}

sayHello("WeiWei");
```

而在 ES6 以後我們可以使用箭頭函式來宣告 function，在程式碼少的情況下，使用箭頭函式也能夠讓程式碼較易讀。

```js name="index.js" showLineNumbers
const sayHello = (name) => {
  console.log("Hello, " + name); //output : Hello, WeiWei
};

sayHello();
```

執行的結果是一樣的，但要注意，使用箭頭函式宣告 function 時，會有執行先後順序的問題，意思就是不能在定義箭頭函式前去呼叫這個 function。

```js name="index.js" showLineNumbers
// 無法成功執行 出現錯誤
sayHello(); //error : Cannot access 'sayHello' before initialization

const sayHello = (name) => {
  console.log("Hello, " + name); //output : Hello, WeiWei
};
```

```js name="index.js" showLineNumbers
// 成功執行
sayHi();

function sayHi() {
  console.log("Hi"); //output : Hi
}
```

這是因為 JavaScript 有 Hoisting 的特性，每次執行時，會將**function**提升到最上層，所以在上面那段程式碼真正執行的時候會變成下面那段程式碼，這也就說明了為什麼可以在**sayHi function**還沒宣告時，就去呼叫它。

```js name="index.js" showLineNumbers
// 實際執行的樣子 (Hoisting)
function sayHi() {
  console.log("Hi"); //output : Hi
}

sayHi();
```

那箭頭函式呢?

注意到我們是使用 const(或 let)，來宣告箭頭函式的，在 JavaScript 裡，const 和 let 的 Hoisting 和 var 跟 function 不同，所以在執行以下程式碼時才會有錯誤出現。

```js name="index.js" showLineNumbers
// 無法成功執行 出現錯誤
sayHello(); //error : Cannot access 'sayHello' before initialization

const sayHello = (name) => {
  console.log("Hello, " + name); //output : Hello, WeiWei
};
```

:::note 補充
var 是會被 Hoisting 的，但通常不會使用 var 去宣告變數，除非該變數在你的程式是被定義為可以隨意更改的。
:::

以上面的程式碼來看，假設箭頭函式內只有一行程式碼，它會自動將結果 return 回去，所以可以 **省略括號{}** 直接使用。

```js name="index.js" showLineNumbers
const sayHello = () => console.log("Hello"); //只有一行 自帶return

sayHello();
```

但如果程式碼有兩行以上的話，還是需要使用{}來宣告。

```js name="index.js" showLineNumbers
const sayHello = (name) => {
  let newName = "Yeh, " + name;
  return newName;
};

const newName = sayHello("WeiWei"); // output : Yeh, WeiWei
```

上面的程式碼其實也可以簡寫成

```js name="index.js" showLineNumbers
const sayHello = (name) => "Yeh, " + name;

const newName = sayHello("WeiWei"); // output : Yeh, WeiWei
```

## React

接著來看在 React 中，有哪些地方常常使用到箭頭函式的。

### Event

在 onChange 事件或是任何事件發生時，通常都會使用箭頭函式來定義接下來要做的事情，且該箭頭函式通常是沒有名稱的，也稱作匿名函式(anonymous function)。

```jsx name='App.js' showLineNumbers {4}
function App() {
  return (
    <div className="App">
      <input type="text" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default App;
```

如果不使用箭頭函式的話，就會像下面的程式碼一樣過於冗長。

```jsx name='App.js' showLineNumbers
function App() {
  return (
    <div className="App">
      <input
        type="text"
        onChange={function (e) {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
```

### Component

也可以使用箭頭函式來宣告 component，

```js name='App.js' showLineNumbers
const App = () => {
  return (
    <div className="App">
      <h1>Helo WeiWei</h1>
    </div>
  );
};

export default App;
```

要是不需要處理任何的變數邏輯，只專注於在畫面上的顯示，可以簡寫成以下：

```jsx name='App.js'
const App = () => (
  <div className="App">
    <h1>Helo WeiWei</h1>
  </div>
);

export default App;
```

### Hook

在使用 useEffect、useCallback、useMemo 等 hook，也較常使用箭頭函式來宣告。

```js name='App.js' showLineNumbers
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    //some code here...
  }, []);

  return (
    <div className="App">
      <h1>Helo WeiWei</h1>
    </div>
  );
};

export default App;
```

```js name='App.js' showLineNumbers
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    //some code here...
  }, []);

  return (
    <div className="App">
      <h1>Helo WeiWei</h1>
    </div>
  );
};

export default App;
```

不使用箭頭函式的話：

```js name='App.js' showLineNumbers
import { useEffect } from "react";

const App = () => {
  useEffect(function () {
    //some code here...
  }, []);

  return (
    <div className="App">
      <h1>Helo WeiWei</h1>
    </div>
  );
};

export default App;
```
