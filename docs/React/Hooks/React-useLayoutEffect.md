---
title: "[react] React useLayoutEffect"
keywords: [react, react hook, react教學, useLayoutEffect]
description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
author: WeiYun0912
og:title: React useLayoutEffect
og:description: useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生...
sidebar_position: 1
---

## useEffect

如果在頁面初始化的時候需要動態的去設定元素的 style，例如 top px，用 useEffect 來處理的話元素一開始會出現在原本的位置，之後才到指定的位置，**這是因為 useEffect 會在 DOM 生成完畢後才 Effect**。

```jsx title='App.js' showLineNumbers live
function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current == null) return;

    popup.current.style.marginTop = `50px`;
  }, [show]);

  return (
    <div className="App">
      <div>
        <button ref={button} onClick={() => setShow((prev) => !prev)}>
          Click
        </button>
        {show && <div ref={popup}>popup!!!</div>}
      </div>
    </div>
  );
}
```

可以看到下圖元素會有閃爍的問題，這是因為一開始該元素會在原始的位置，在 DOM 渲染完以後才會到指定位置，這是使用 useEffect 的效果。

![Image](https://i.imgur.com/j7B9nBp.gif)

## useLayoutEffect

而 useLayoutEffect 則是在 DOM 生成前就 Effect，所以可以避免上面的情況發生。

```jsx title='App.js' showLineNumbers live
function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;

    popup.current.style.marginTop = `50px`;
  }, [show]);

  return (
    <div className="App">
      <div>
        <button ref={button} onClick={() => setShow((prev) => !prev)}>
          Click
        </button>
        {show && <div ref={popup}>popup!!!</div>}
      </div>
    </div>
  );
}
```

![Image](https://i.imgur.com/y1xjRyF.gif)
