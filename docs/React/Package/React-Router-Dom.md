---
title: "[react] React Router DOM v5 與 v6 之差異介紹"
keywords: [react, react教學, react router dom v6, react-router-dom v6]
description: 介紹 React Router v6 與 v5 之間的差異
author: WeiYun0912
og:title: React Router DOM v5 與 v6 之差異介紹
og:description: 介紹 React Router v6 與 v5 之間的差異。
---

[React Router Docs](https://reactrouter.com/docs/en/v6)

## Configuring Routes

跟前幾個版本差不多，在用 Router 的時候必須要先引入 BroswerRouter 來包住整個 component。

```javascript title="App.js" showLineNumbers
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- Routes：跟前版本的 Switch 的功用差不多，在 Routes 裡面的 component 都必須定義 Route，不然會報錯。

- Route：之前的使用方法是在 Route 上使用"component"屬性，現在改為 element 屬性，path 的設定一樣。

## Link

如果要到 Route 定義的 path，則可以使用 Link Component，使用的方法也非常簡單，只要在 Link 加上 to 屬性指向到 path 就好。

```javascript title="App.js" showLineNumbers
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## exact

之前的版本在定義 Route 的時候會發生一個情況，假如網頁的 url 是 localhost:3000/about，那假如我在 Router 的定義如下，則會連同 "/" 一起匹配到，所以都會在 path 是 "/" 的加上 exact，意思就是嚴格匹配，而在 v6 已經內建嚴格匹配了，所以不需要特別做設定。

```javascript title="舊版本(v5)" showLineNumbers
<Router>
  <Route path={"/"} exact component={Home} />
  <Route path={"/about"} component={About} />
</Router>
```

## NavLink

v5 版本的 activeClassName 已經被移除了，最新版的 className 會自帶 isActive 的參數，所以直接用該參數來判斷是否 active 就好。

```javascript showLineNumbers
<NavLink
  className={(navData) => (navData.isActive ? "active" : "")}
  to="/about"
>
  About
</NavLink>
```

## useNavigate

取代了 v5 的 useHistory，使用 useNavigate 可以很輕鬆的跳轉到其他 Route path，當然，也可以使用 Link Component，但就不能在 function 裡面去做使用。

在舊版的 useHistory 當我們網頁需要
回到上一頁或下一頁時會使用 history.goBack()或 history.goForward()

而在新版的 navigate 可以直接使用數字來代替

```javascript= title="About.js" showLineNumbers
import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <button onClick={() => navigate("/")}>Go To Home Page</button>
      <button onClick={() => navigate(1)}>1 step forward</button>
      <button onClick={() => navigate(-1)}>1 step back</button>
    </div>
  );
};

export default About;
```

## useParams

假使我們在一個頁面需要透過 url 的參數來取得資料，
例如：localhost:3000/profile/wei 、 localhost:3000/profile/yun

我們想要取得 url 後面的 wei 跟 yun，這時候可以透過 useParams 來幫助我們，但在 Route 的部分也要設定。

```javascript title="App.js" showLineNumbers
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:name" element={<Profile />} /> //加上 /:name
      </Routes>
    </Router>
  );
}

export default App;
```

```javascript title="Profile.js" showLineNumbers
import React from "react";
import { useParams } from "react-router";

const Profile = () => {
  const { name } = useParams(); //要跟Route設定的參數名稱一樣
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Profile;
```

現在在 url 要是輸入 localhost:3000/profile/wei 會看到以下畫面

![](https://i.imgur.com/QhSSIlx.png)

## useSearchParams

在網址如果有帶一些參數，則可以使用 useSearchParams 來取得該參數的值。

假設網址是：localhost:3000/profile/wei?sortby=id

```javascript title="Profile.js" showLineNumbers
import React from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("sortby")); //output : id
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Profile;
```

假設網址是：localhost:3000/profile/wei?test=1&test=2

要是參數有兩個同名稱但不同值的話，可以使用 getAll。

```javascript title="Profile.js" showLineNumbers
import React from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();
  let [searchParams] = useSearchParams();
  console.log(searchParams.getAll("test")); //output : ["1","2"]
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Profile;
```

## useRoutes

## 404 頁面

假設今天在 Routes 底下匹配不到 path，會出現空白頁面，這時候我們可以自訂 Error Component，當匹配不到時就會跳到該頁面。

**_App.js_**

```javascript title="App.js" showLineNumbers
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
```

:::note

在 path 的地方加上"\*"，意思就是 Routes 底下匹配不到的時候才會去匹配該 path，這邊要注意的是**path="\*"的 Route 必須放在最底下，因為 Routes 匹配是有優先順序的。**

:::
