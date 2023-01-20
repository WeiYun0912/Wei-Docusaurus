---
title: "[react] React useRef"
keywords: [react, react hook, react教學, useRef]
description: useRef通常是用來取得DOM元素，透過useRef能夠操作DOM元素本身。
author: WeiYun0912
og:title: React useRef
og:description: useRef通常是用來取得DOM元素，透過useRef能夠操作DOM元素本身。
sidebar_position: 1
---

[影片連結](https://www.youtube.com/watch?v=Re9fOu6SfnE)

useRef 通常是用來訪問 DOM 元素，透過 useRef 能夠操作 DOM 元素，去取得元素的屬性(Attribute)，較常用的為使用 useRef 取得 input 的值(value)。

如果 input 是使用 useState 來取值的話，那每次對 input 輸入文字時都會重新渲染畫面(rerender)，因為 state 改變了，但如果利用 useRef 的話並不會有重新渲染的問題，因為它是直接進入 DOM 元素內取得值。

## useState

在正式使用 useRef 之前，先來看看上述所說明的差異，將以下程式碼貼至 App.js。

```js title="App.js" showLineNumbers
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  console.log("App render...");

  const submitHandler = () => {
    console.log(value);
  };

  return (
    <>
      <div className="App">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={submitHandler}>Submit</button>
        <br />
        input text : {value}
      </div>
    </>
  );
}

export default App;
```

現在只要在 input 內輸入任何文字，該 input 就會觸發 onChange 並透過 setValue 去更改 value，而 React 就會偵測到 state(value)被改變了，所以幫我們重新 rerender 整個 App Component。

![Image](https://i.imgur.com/uMFhG2X.png)

## useRef

如果你不希望在輸入 input 的時候，Component 不斷的被重新 rerender 的話，那可以使用 useRef，先來看以下程式碼。

```js title="App.js" showLineNumbers
import { useRef } from "react";
import "./App.css";

function App() {
  // highlight-next-line
  const inputRef = useRef(null);

  console.log("App render...");

  const submitHandler = () => {
    console.log(inputRef);
  };

  return (
    <>
      <div className="App">
        // highlight-next-line
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
}

export default App;
```

我們使用了 useRef 建立了一個 ref 名為 inputRef，並將 inputRef 掛載在 input JSX 標籤上，並且在 button 被點擊後，將 inputRef 顯示在 console。

現在點擊 button 以後，你會發現在 console 出現了一個 object。

![Image](https://i.imgur.com/yPth5wl.png)

接著可以進一步查看該 object 內的 current 是什麼，**所以現在將 submitHandler 內的 inputRef 改為 inputRef.current (line 10)，然後再點擊一次 button。**

可以看到 inputRef.current 回傳的是 **input DOM 元素(element)**

![Image](https://i.imgur.com/qx1Iwx3.png)

那既然能夠取得 DOM 元素，是不是可以透過 DOM 去取得標籤的 Attribute?

沒錯！ 所以現在將程式碼改為以下：

```js title="App.js" showLineNumbers
import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  console.log("App render...");

  const submitHandler = () => {
    console.log(inputRef.current.value); //取得input value
    console.log(inputRef.current.type); //取得input type
    inputRef.current.type = "password"; //將該input的type更改為password
    console.log(inputRef.current.type); //取得input type
  };

  return (
    <>
      <div className="App">
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
}

export default App;
```

接著在 input 內輸入任意文字後按下按鈕。

![Image](https://i.imgur.com/MMiLipc.gif)

你會發現透過 ref 成功取得了 input 的 value，也將 input 的 type 更改為 password 了！

而因為是使用 ref 取得 DOM 元素後再去取得 value，所以在這個過程中並不會去更改到 state，react 當然就不會重新 rerender component。

## 使用 ref 控制 scroll bar

我們還可以透過 ref 去取得其他 Attribute，下面的程式碼是透過 ref 取得 div 的 offsetTop 後，使用 BOM 提供的 scrollTo 去控制 scroll bar 要滑動到的位置。

```js title="App.js" showLineNumbers {5,6,8-19,24-26,28-33}
import { useRef } from "react";
import "./App.css";

function App() {
  const cyanRef = useRef(null);
  const orangeRef = useRef(null);

  const goOrange = () => {
    window.scrollTo({
      top: orangeRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const goCyan = () => {
    window.scrollTo({
      top: cyanRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="App">
        <div style={{ height: "600px", backgroundColor: "cyan" }} ref={cyanRef}>
          <button onClick={goOrange}>Go Orange</button>
        </div>

        <div
          style={{ height: "600px", backgroundColor: "orange" }}
          ref={orangeRef}
        >
          <button onClick={goCyan}>Go Cyan</button>
        </div>
      </div>
    </>
  );
}

export default App;
```

<img src="https://i.imgur.com/W2qzsQj.gif" width="400" />

## 補充

最後再來講一下關於 input 取值你應該使用 useRef 還是 useState?

這取決於你要實作的功能，假設你是需要在使用者一輸入文字後，**馬上**取得使用者當前輸入的文字並做一些驗證判斷，然後將提示文字顯示在 input 下方，例如：文字長度是否大於 10、文字是否有包含特殊文字等，那就使用 useState，這樣就能在 input 被輸入的第一時間取得裡面的值。

但如果你是希望使用者按下送出按鈕後，才去一個一個驗證使用者輸入的 input 有沒有符合你自己定義的規則，然後再顯示提示文字的話，那就使用 useRef。
