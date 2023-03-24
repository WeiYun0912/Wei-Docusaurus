---
title: "[react] React 使用 Google 帳號登入網站"
keywords: [react, react教學, javascript, firebase, google auth]
description: 而登入的方式我們使用彈出視窗 (signInWithPopup) 的方式，意思是點擊登入按鈕後，會有視窗彈出，詢問使用者要用哪隻 Google 帳號登入。
author: WeiYun0912
og:title: React 使用 Google 帳號登入網站
og:description: 而登入的方式我們使用彈出視窗 (signInWithPopup) 的方式，意思是點擊登入按鈕後，會有視窗彈出，詢問使用者要用哪隻 Google 帳號登入。
---

[影片連結](https://www.youtube.com/watch?v=Xuy2fuE2qAI)

## 安裝

```
npx create-react-app 你的專案名稱
```

```
npm install firebase react-rotuer-dom
```

## 新增 Firebase 專案

先到 firebase 官網登入，登入後點右上角的 Go to console

![Image](https://i.imgur.com/NdKy76W.png)

之後按下新增專案

![Image](https://i.imgur.com/Te3DU1A.png)

輸入專案名稱後按繼續，如果不需要 Google Analytics 提供的分析功能可以選擇關閉，之後再按下建立專案。

![Image](https://i.imgur.com/oHJCDPi.png)

專案建立成功後，會來到專案的後台頁面，我們點擊網頁應用程式。

![Image](https://i.imgur.com/98torjO.png)

輸入應用程式的名稱後，按下註冊應用程式，會看到 firebase 提供給我們的設定檔。

![Image](https://i.imgur.com/Cl7h1Xe.png)

將設定檔先複製下來，並在你的 React 專案新增一個 js 檔案，這邊我是在 React 專案底下建立一個 config 資料夾，之後在該資料夾新增 firebase.js，並將設定檔貼上。

```js title='firebase.js' showLineNumbers
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 把你的firebase app 設定檔 貼上來
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

之後回到 firebase 的專案後台，點擊 Authentication，再點擊開始使用。

![Image](https://i.imgur.com/AUjgTLN.png)

在供應商的地方選擇 Google

![Image](https://i.imgur.com/z9eDrLj.png)

記得要在右上角的地方按下啟用，並填寫專案支援電子郵件，設定完後按下儲存。

![Image](https://i.imgur.com/d0Zqhwp.png)

看到 Google 的狀態為已啟用的話，就代表我們的 firebase 應用程式專案現在支援 Google Auth 了，現在來開始寫程式吧~

![Image](https://i.imgur.com/0JVmD96.png)

## 資料夾與檔案結構

[程式碼連結](https://github.com/WeiYun0912/React-Google-Auth)

```
src
|   App.js
|   index.js
|   ...
|
└─── components
│   │   Navbar.js
│
└─── config
│   │   firebase.js
│
└─── pages
│   │   Home.js
│   │   Login.js
│   │   User.js
│
└─── utils
│   │   ProtectedRoutes.js
```

![Image](https://i.imgur.com/yBppZua.png)

## 初始化

首先在 App.js 引入了 3 個頁面和 1 個 component。

頁面的部分一共有 3 個檔案，分別是 Home、Login、User。

component 則是僅有 1 個檔案，Navbar。

```js title='App.js' showLineNumbers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
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
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/user">User</Link>
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

```jsx title='User.js' showLineNumbers
import React from "react";

const User = () => {
  return <div>😀 User Page</div>;
};

export default User;
```

## 使用 Google Auth

我們需要在 firebase 的檔案新增一些程式碼，在 `firebase.js` 中引入 `getAuth` 和 `GoogleAuthProvider`，這邊宣告了兩個變數，分別是 auth 與 provide。

auth：在 getAuth function 中將 app 變數傳遞進去並 export。

provider：將 GoogleAuthProvider export，這樣才能去使用 Google 帳號登入的服務。

```js title='firebase.js' showLineNumbers
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 貼上你自己的firebase 應用程式設定檔
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provide = new GoogleAuthProvider();
```

接著開啟`Login.js`，我們需要在 Login 檔案中撰寫登入的方法。

首先引入 useNavigate，在使用者成功登入後，使用 navigate 將使用者導向 Home 頁面。

而登入的方式我們使用彈出視窗 (signInWithPopup) 的方式，意思是點擊登入按鈕後，會有視窗彈出，詢問使用者要用哪隻 Google 帳號登入，這邊需要將剛剛宣告的 auth 和 provide 引入並將這兩個變數傳遞至 signInWithPopup function 中。

```jsx title='Login.js' showLineNumbers
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    //點擊按鈕後，彈出登入視窗，詢問使用者要用哪隻帳號進行登入，並將結果保存至result變數。
    const result = await signInWithPopup(auth, provide);
    console.log(result);
    //登入成功後，將使用者導向主頁面。
    navigate("/");
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
```

現在就可以來進行登入的動作，登入成功的話，就會被導向至主頁面，並將 result 變數顯示在 console。

![Image](https://i.imgur.com/LK4L9Uy.gif)

而在 console 可以看到帳號的資訊

![Image](https://i.imgur.com/8MrN1KQ.png)

只要有成功取得帳號資訊，就代表登入成功了！

## Auth

而你現在可能會想說，那要如何在其他頁面中去取得登入的資訊呢？

只要在其他頁面中，引入`auth`即可，auth 為我們在 firebase.js 中使用 getAuth function 去取得驗證狀態的一個變數。

而你可以將這個 auth 視為一個全域的 state，意思就是只要登入後，任何頁面都能夠去使用這個 auth 變數，那我們先在`User.js`中引入 auth，並將它 console.log 查看一下裡面的內容。

```jsx title='User.js' showLineNumbers
import React from "react";
import { auth } from "../config/firebase";

const User = () => {
  console.log(auth);
  return <div>😀 User Page</div>;
};

export default User;
```

可以看到在 auth 物件變數中，有一個 currentUser，而 currentUser 內就是我們登入的帳號資訊，那現在就把這些資訊顯示在畫面上吧。

![Image](https://i.imgur.com/xy0oRRF.png)

將帳號名稱、信箱及大頭貼顯示到畫面上：

```jsx title='User.js' showLineNumbers
import React from "react";
import { auth } from "../config/firebase";

const User = () => {
  console.log(auth);
  return (
    <div>
      <p>{auth?.currentUser.displayName}</p>
      <p>{auth?.currentUser.email}</p>
      <img src={auth?.currentUser.photoURL} alt="" />
    </div>
  );
};

export default User;
```

![Image](https://i.imgur.com/aXza8Rw.png)

## Proteceted Routes

我們也可以建立簡單的 Protected Routes，來確認使用者是否使用 Google 帳號進行登入，如果登入的話就能看到 User Route 和裡面的內容。

要是沒有登入的話，又使用網址的方式進入 User 頁面的話，就會被重新導至主頁面。

```jsx title='App.js' showLineNumbers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/user" element={<User />} />
          </Route>
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
import { auth } from "../config/firebase";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      {auth?.currentUser?.displayName && <Link to="/user">User</Link>}
    </div>
  );
};

export default Navbar;
```

```jsx title='ProtectedRoutes.js' showLineNumbers
import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const ProtectedRoutes = () => {
  return auth?.currentUser?.displayName ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
```
