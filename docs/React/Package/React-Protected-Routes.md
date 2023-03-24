---
title: "[react] React Protected Routes"
keywords: [react, react教學, react protected routes]
description: 今天要來介紹如何使用 React Router 來實作 Protected Routes，意思是我們可以將 Route 設定權限，當使用者登入時或具備某些權限才能夠訪問該 Route (頁面)。
author: WeiYun0912
og:title: React Protected Routes
og:description: 今天要來介紹如何使用 React Router 來實作 Protected Routes，意思是我們可以將 Route 設定權限，當使用者登入時或具備某些權限才能夠訪問該 Route (頁面)。
---

[影片連結](https://www.youtube.com/watch?v=8TuUURngweE)

## 安裝

```
npx create-react-app 你的專案名稱
```

```
npm install react-router-dom
```

## 資料夾與檔案結構

[程式碼連結](https://github.com/WeiYun0912/React-Protected-Routes)

```
src
|   App.js
|   index.js
|   ...
|
└─── components
│   │   Navbar.js
│
└─── pages
│   │   Home.js
│   │   Login.js
│   │   Accounts.js
│   │   Dashboard.js
│
└─── utils
│   │   ProtectedRoutes.js
```

![Image](https://i.imgur.com/8TaIBmQ.png)

## 初始化

今天要來介紹如何使用 React Router 來實作 Protected Routes，意思是我們可以將 Route 設定權限，當使用者登入時或具備某些權限才能夠訪問該 Route (頁面)。

基本的 Router 定義就先不介紹，因為主要是 focus 在 Protected Routes 的部分。

首先在 App.js 引入了 4 個頁面和 1 個 component。

頁面的部分一共有 4 個檔案，分別是 Home、Login、Dashboard、Accounts。

component 則是僅有 1 個檔案，Navbar。

另外，還有一個 user 物件，判斷使用者是否已經登入，預設為尚未登入 false，true 的化為登入。

```jsx title='App.js' showLineNumbers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = { login: false };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Accounts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

```jsx title='Navbar.js' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |
      <Link to="/account"> Account</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
```

```jsx title='Home.js' showLineNumbers
import React from "react";

const Home = () => {
  return <div>🥴 Home Page</div>;
};

export default Home;
```

```jsx title='Login.js' showLineNumbers
import React from "react";

const Login = () => {
  return <div>😇 Login Page</div>;
};

export default Login;
```

```jsx title='Dashboard.js' showLineNumbers
import React from "react";

const Dashboard = () => {
  return <div>🥰 Dashboard Page (Need Protected)</div>;
};

export default Dashboard;
```

```jsx title='Accounts.js' showLineNumbers
import React from "react";

const Accounts = () => {
  return <div>😀 Accounts Page (Need Protected)</div>;
};

export default Accounts;
```

而我們希望在 Dashboard 和 Account 頁面是當使用者登入後才能夠訪問的，**要是使用者在沒登入的情況下訪問該頁面，將會被導向 Home 頁面。**

## Protected Routes

知道以上需求後，可以開始建立我們的 Protected Routes，在該檔案中引入 Navigate 和 Outlet，並判斷使用者是否為登入狀態，是的話回傳 Outlet，不是的話就使用 Navigate 將使用者導向主頁面。

```jsx title='ProtectedRoutes.js' showLineNumbers
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user }) => {
  return user.login ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
```

:::note 備註
Outlet 會在待會將 ProtectedRoutes.js 引入 App.js 時說明它的用處。
:::

定義完 Protected Routes 後，就將它引入到 App.js，可以看到在 Route 的地方，ProtectedRoutes 包住了 Dashboard 和 Accounts，這也稱作**巢狀路由(Nested Routes)**，且我們也將 user 物件傳入 ProtectedRoutes 中，這樣才能判斷使用者目前登入的狀態為何。

```jsx title='App.js' showLineNumbers {11,20-23}
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const user = { login: false };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Accounts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

現在到網頁點擊 Account 和 Dashboard，會發現被重新導向 Home 頁面了，這是因為目前 user 物件的 login 為 false。

![Image](https://i.imgur.com/KsnIQL5.gif)

而現在只要將 login 更改為 true 後，再次點擊 Account 和 Dashboard。

![Image](https://i.imgur.com/b735QNs.gif)

還記得剛剛還沒說明的 Outlet 嗎?

Outlet 通常在父路由(parent route)中使用，目的是讓子路由(child route)能夠被匹配並將該子路由的 element 渲染到畫面上。

而關於 Outlet，官方的定義為：

:::note
An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
:::

## Protected Routes 權限設定

但一般網頁並不會只有判斷登入與登出兩種狀態，還需要考慮到使用者的權限為一般會員還是管理員，因應不同的權限，可訪問的頁面也不同，所以我們在 user 物件中傳入 permission 屬性，型態為陣列，因為待會會用到陣列的方法來判斷使用者的權限。

除此之外，我們也宣告了一個物件 Permission，用來讓 Route 知道哪些權限的使用者能夠訪問該 Route。

```jsx title='App.js' showLineNumbers {10-13,16,24-42}
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const Permission = {
  User: "User",
  Admin: "Admin",
};

function App() {
  //使用者權限為一般使用者 User
  const user = { login: true, permission: ["User"] };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          /*權限為 Admin 的能夠訪問 Accounts 頁面*/
          <Route
            element={
              <ProtectedRoutes user={user} Permission={[Permission.Admin]} />
            }
          >
            <Route path="/account" element={<Accounts />} />
          </Route>
          /*權限為 User 和 Admin 的能夠訪問 Dashboard 頁面*/
          <Route
            element={
              <ProtectedRoutes
                user={user}
                Permission={[Permission.Admin, Permission.User]}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

而在 ProtectedRoutes 內，只要使用 find 判斷使用者的權限 (permission) 內是否有包含 (includes) Route 所需要的權限 (Permission) 即可。

```jsx title='ProtectedRoutes.js' showLineNumbers
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ user, Permission }) => {
  //user物件內的permission為 permission : ["User"]
  //Account 頁面  permission 僅有 Admin 能訪問
  //Dashboard 頁面  permission User 和 Admin 都能訪問
  return user.login &&
    user.permission.find((per) => Permission.includes(per)) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export default ProtectedRoutes;
```

當使用者為 User 權限時

![Image](https://i.imgur.com/x0R3lhs.gif)

當使用者為 Admin 權限時

![Image](https://i.imgur.com/cPRUDSA.gif)
