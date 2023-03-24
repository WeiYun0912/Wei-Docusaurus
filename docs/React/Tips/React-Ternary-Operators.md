---
title: "[react] React常用的JavaScript語法 - 三元運算子"
keywords: [react, react教學, javascript, ternary operators]
description: 在樣板字串還沒出現時，要在 JavaScript 串接字串是非常麻煩的事情，且也必須考慮到格式的問題。
author: WeiYun0912
og:title: React常用的JavaScript語法 - 三元運算子
og:description: 在樣板字串還沒出現時，要在 JavaScript 串接字串是非常麻煩的事情，且也必須考慮到格式的問題。
sidebar_position: 3
---

[影片連結](https://www.youtube.com/watch?v=5U7Y35_lGxI)

## JavaScript

適當的使用三元運算子可以幫助我們減少撰寫程式碼的行數，並增加可讀性。

下面的程式碼是去判斷 age 是否大於 24，如果結果為 true，就將 Alex 賦值給變數 name，為 false 就將 Bob 賦值給變數 name。

```js title='index.js' showLineNumbers
let age = 24;
let name = "";

if (age >= 24) {
  name = "Alex";
} else {
  name = "Bob";
}

console.log(name); // output : Alex
```

而我們可以使用三元運算子將上面的程式碼改寫成以下：

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

```js title='index.js' showLineNumbers
let age = 24;
let name = "";

age >= 24 ? (name = "Alex") : (name = "Bob");

console.log(name); // output : Alex
```

三元運算子的撰寫邏輯為：<Highlight color="#367E18">condition ? exprIfTrue : exprIfFalse</Highlight>

上面的程式碼還能在更精簡：

```js title='index.js' showLineNumbers
let age = 24;
let name = age >= 24 ? "Alex" : "Bob";

console.log(name); // output : Alex
```

而有時候我們並不在意條件為 false 時回傳的值為何，這時候可以使用 <Highlight color="gray">&&</Highlight> 運算子，意思就是前面的條件為 true 的話，才去執行後面的程式碼。

```js title='index.js' showLineNumbers
let age = 24;
let name = age >= 24 && "Alex";

console.log(name); // output : Alex
```

## React

我們可以使用三元運算子在 React 中判斷 jsx 或是 component 什麼時候該出現，現在點擊 Result 的按鈕，會將 showText 更改為 true，當 showText 為 true 時，就會顯示 Hello World 文字。

```jsx title='App.js' showLineNumbers live
function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {showText ? <p>Hello World</p> : null}
    </div>
  );
}
```

```jsx title='App.js' showLineNumbers live
function App() {
  const [showText, setShowText] = useState(false);

  const SayHello = () => <h1>Hello</h1>;

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {showText ? <SayHello /> : null}
    </div>
  );
}
```

而如果不在意 false 要顯示的值為何，則可以使用<Highlight color="gray">&&</Highlight>。

```jsx title='App.js' showLineNumbers live
function App() {
  const [showText, setShowText] = useState(false);

  const SayHello = () => <h1>Hello</h1>;

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {showText && <SayHello />}
    </div>
  );
}
```
