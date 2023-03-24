---
title: "[react] React 使用 Lazy 與 Suspense 動態載入 Component"
keywords: [react, react教學, lazy, suspense]
description: 如果我們網站 Component 非常多，有些 Component 可能使用者不會常去使用到，但使用者進到網站時一樣會載入該 Component，這時候就可以使用 lazy 和 suspense 來達到動態載入 Component 的功能，
author: WeiYun0912
og:title: React 使用 Lazy 與 Suspense 動態載入 Component
og:description: 如果我們網站 Component 非常多，有些 Component 可能使用者不會常去使用到，但使用者進到網站時一樣會載入該 Component，這時候就可以使用 lazy 和 suspense 來達到動態載入 Component 的功能，
---

[影片連結](https://www.youtube.com/watch?v=CPFutYbNamA)

當我們使用 React 開發網站時，一進入到網站，React 就會將我們所有用到的 Component 給載入進來。

舉例來說，我們現在有三個 Component，分別是：`Home`、`Items`、`About`。

```jsx title='App.jsx' showLineNumbers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Items from "./component/Items";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

![Image](https://i.imgur.com/2e77XKH.png)

在 Network 的部分也可以看到這三個 Component 被載入。

![Image](https://i.imgur.com/utSxLVU.png)

## Lazy & Suspense

如果我們網站 Component 非常多，有些 Component 可能使用者不會常去使用到，但使用者進到網站時一樣會載入該 Component，這時候就可以使用 `lazy` 和 `suspense` 來達到動態載入 Component 的功能，也就是在必要的時候才去讀取該 Component。

這邊將 `Items` 與 `About` Component 使用 lazy 動態載入的方式做處理。

```jsx title='App.jsx' showLineNumbers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { lazy, Suspense } from "react";

const Items = lazy(() => import("./component/Items"));
const About = lazy(() => import("./component/About"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
```

這時候可以發現，一開始載入時，Items 和 About 並沒有載入。

![Images](https://i.imgur.com/QK5k6dP.gif)

當我們進到 Items 和 About 頁面時，才會將這兩個 Component 載入。

![Images](https://i.imgur.com/3akZ9FG.gif)
