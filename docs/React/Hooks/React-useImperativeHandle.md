---
title: "[react] React useImperativeHandle"
keywords: [react, react hook, react教學, useLayoutEffect]
description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
author: WeiYun0912
og:title: React useImperativeHandle
og:description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
sidebar_position: 1
---

[程式碼連結](https://github.com/WeiYun0912/React-useImperativeHandle)

## useRef

如果要在 React 使用像是 input focus 的 DOM 方法，可以透過 useRef 來達到以上需求。

```jsx title='App.js' showLineNumbers
import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <button onClick={focusInput}>Focus</button>

      <input type="text" placeholder="type..." ref={inputRef} />
    </div>
  );
}

export default App;
```

但要是今天 input 是被包裝在 Component 內的話，ref 就不會起作用，因為 ref 是綁定在 Component 上，並不是 input jsx。

```jsx title='App.js' showLineNumbers
import { useRef } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <button onClick={focusInput}>Focus</button>
      <Input ref={inputRef} />
    </div>
  );
}

export default App;
```

```jsx title='Input.js' showLineNumbers
import React from "react";

const Input = () => {
  return (
    <>
      <h2>Input</h2>
      <input type="text" placeholder="type..." />
    </>
  );
};

export default Input;
```

## forwardRef

而我們可以使用 forwardRef 來取得 Parent Component(App.js)傳遞過來的 ref。

在 Input Component 使用 forwardRef，並將 ref 輸出到 console。

```jsx title='Input.js' showLineNumbers
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  console.log(ref);

  return (
    <>
      <h2>Input</h2>
      <input type="text" placeholder="type..." />
    </>
  );
});

export default Input;
```

可以看到我們成功取得了從 Parent Component 傳遞過來的 ref 了。

![Image](https://i.imgur.com/QWKrqgR.png)

## useImperativeHandle

接著可以透過 useImperativeHandle 來綁定 function 給 Parent Component 使用。

這邊要注意的是，我們一樣需要在 Input Component 使用 useRef，並將 ref 綁定在 input jsx 標籤上，這樣才能知道待會要 focus 哪一個元素。

```jsx title='Input.js' showLineNumbers
import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      <h2>Input</h2>
      <input type="text" placeholder="type..." ref={inputRef} {...props} />
    </>
  );
});

export default Input;
```

綁定完 function 後，現在可以在 Parent Component 去使用 focusInput function 了

```jsx title='App.js' showLineNumbers
import { useRef } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);

  //使用Child Component綁定的focusInput function
  const focusInput = () => {
    inputRef.current.focusInput();
  };

  return (
    <div className="App">
      <button onClick={focusInput}>Focus</button>

      <Input ref={inputRef} />
    </div>
  );
}

export default App;
```
