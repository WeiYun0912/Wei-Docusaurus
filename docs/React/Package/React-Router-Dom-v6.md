---
title: "[react] React Router DOM v6 介紹"
keywords: [react, react教學, javascript, react-router-dom, react-router]
description: React教學 - React Router v6 介紹 (Link、NavLink、Nested Routes、Outlet、useLocation、useRoutes、useNavigate)
author: WeiYun0912
og:title: React Router DOM v6 介紹
og:description: React教學 - React Router v6 介紹 (Link、NavLink、Nested Routes、Outlet、useLocation、useRoutes、useNavigate)
---

[影片介紹](https://www.youtube.com/watch?v=gV07Tqi0i_o)

## 安裝

```
npm install react-router-dom
```

## 初始檔案

先在 `src` 資料夾建立一個 `pages` 的資料夾，並將以下六個檔案新增進去。

`pages/Home.jsx`、`pages/Header.jsx`、`pages/Products.jsx`、`pages/Product.jsx`、`pages/Features.jsx`、`pages/NotFound.jsx`

```jsx title='Home.jsx' showLineNumbers
import React from "react";

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
```

```jsx title='Header.jsx' showLineNumbers
import React from "react";

const Header = () => {
  return (
    <nav>
      <span>Home</span> | <span>Products</span>
    </nav>
  );
};

export default Header;
```

```jsx title='Products.jsx' showLineNumbers
import React from "react";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
    </>
  );
};

export default Products;
```

```jsx title='Product.jsx' showLineNumbers
import React from "react";

const Product = () => {
  return <h1>Product</h1>;
};

export default Product;
```

```jsx title='Features.jsx' showLineNumbers
import React from "react";

const Features = () => {
  return <h1>Features</h1>;
};

export default Features;
```

```jsx title='NotFound.js' showLineNumbers
import React from "react";

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

export default NotFound;
```

## BrowserRouter

接著在 `main.jsx` 中，引入 `BrowserRouter`，將整個 Application 包起來，會在 main 引入 BrowserRouter 的原因是因為，後面會用到 useRoutes，如果不把 BrowserRouter 包在上層的話會出錯。

```jsx title='main.jsx' showLineNumbers
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## Routes and Route

現在來到 `App.jsx`，將 `Routes` 和 `Route` 引入，這邊要注意的是，Route 必須包在 Routes 裡面，而 Routes 裡面只接收 Route，如果直接將 Component 放在 Routes 裡面渲染的話，會出現錯誤，我們也順便將 `Header`、`Home`、`Products` 和 `Product` 引入。

在 Route 中，必須定義路徑 `path` 和 `element`，path 填入指定的路徑位置，指定完後待會將使用 `Link` Component 來連結到你指定的路徑，並渲染出 element(component) 的內容。

```jsx title='App.jsx' showLineNumbers {1,3-6,10-15}
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
```

這時候可以先打開瀏覽器，在網址上輸入，`127.0.0.1:port/products`，以我自己舉例，port 的位置是 5173，就輸入 `http://127.0.0.1:5173/products`，就可以看到 Products Component 的畫面了。

![Image](https://i.imgur.com/s4MNPMe.png)

而輸入 `http://127.0.0.1:5173/products/123`，則會看到 Product Component 的畫面。

## useParams

如果要取得 `http://127.0.0.1:5173/products/123` 後面的 `123`，則必須在 `Product.jsx` 中引入 useParams。

```jsx title='Product.jsx' showLineNumbers
import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return <h1>Product {id}</h1>;
};

export default Product;
```

![Image](https://i.imgur.com/pdfG3PS.png)

## Link

我們也可以使用 `Link` Component 的 `to` 屬性，來告訴瀏覽器我們要去哪一個 path，當然 path 是你自己要在 Route 定義的。

打開 `Header.jsx` 引入 Link，Home 和 Products 使用 Link 包起來。

```jsx title='Header.jsx' showLineNumbers {2,8,12}
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>{" "}
      |{" "}
      <span>
        <Link to="/products">Products</Link>
      </span>
    </nav>
  );
};

export default Header;
```

Link 除了有 to 屬性可以使用外，還有其他實用的屬性，像是 `replace`、`reloadDocument`、`state`，我們一個一個介紹。

### replace

如果不想要使用者進到某個頁面還能使用 `上一頁` 的功能，則可以在 Link 加上 `replace` 屬性。

```jsx title='Header.jsx' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <span>
        <Link to="/" replace>
          Home
        </Link>
      </span>{" "}
      |{" "}
      <span>
        <Link to="/products" replace>
          Products
        </Link>
      </span>
    </nav>
  );
};
export default Header;
```

### reloadDocument

如果想要使用者到該頁面 `重新整理` 整個頁面的時候，可以在 Link 加上 `reloadDocument` 屬性。

```jsx title='Header.jsx' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <span>
        <Link to="/" reloadDocument>
          Home
        </Link>
      </span>{" "}
      |{" "}
      <span>
        <Link to="/products" reloadDocument>
          Products
        </Link>
      </span>
    </nav>
  );
};
export default Header;
```

### state

Link 也可以傳遞 state 到要導向的頁面，但該頁面就必須使用 `useLocation` 來取得傳遞過去的 state。

```jsx title='Header.jsx' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>{" "}
      |{" "}
      <span>
        <Link to="/products" state={{ name: "wei" }}>
          Products
        </Link>
      </span>
    </nav>
  );
};
export default Header;
```

在 `Products` 引入 useLocation，來取得 state。

```jsx title='Products.jsx' showLineNumbers
import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Products</h1>
    </>
  );
};

export default Products;
```

![Image](https://i.imgur.com/GQTswcg.png)

## NavLink

NavLink 和 Link 差不多，都是拿來導向頁面的，但 NavLink 有個 isActive 參數，可以判斷使用者目前是在哪個 Route。

```jsx title='Header.jsx' showLineNumbers
import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <span>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </span>{" "}
      |{" "}
      <span>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
      </span>
    </nav>
  );
};
export default Header;
```

![Image](https://i.imgur.com/iXksAJz.png)

## 404 Not Found

如果希望使用者到其他不存在的頁面能夠顯示 404 Not Found 的話，則可以在 Route 的地方`將path定義為 "*"`，更改成這樣後，當匹配到 `/home` 和 `/products` 以外的網址，都將導向至 NotFound 頁面。

```jsx title='App.jsx' showLineNumbers {6,14}
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
```

## Nested Routes

我們也可以使用 Nested Routes 將 Route 進行簡單的分類，順便將 `Features` 引入進行測試。

在第 17 行的地方，在 Route 上加上 `index`，意思是當我們到 `/products` 時，因為還沒有匹配到底下的 `:id` 和 `features`，正常的情況下是不會渲染出任何畫面的，所以先將 `Products` 當做 `/products` 的主頁面。

```jsx title='App.jsx' showLineNumbers {8,16-20}
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
```

## Outlet

在 Products 頁面中，我們還沒有使用 Link 讓使用者能夠導向 Product 和 Features 頁面，現在時候有兩種做法來實現這個功能。

第一種做法是直接在 Products 頁面引入 Link 導向到其他頁面，第二種做法是新增一個檔案，將 Link 引入並使用，這邊我們採用第二種做法。

在 pages 資料夾，新增一個檔案，名為 `ProductLayout.jsx`，並將以下程式碼貼上：

```jsx title='ProductLayout.jsx' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <nav>
        <span>
          <Link to="/products/1">Product 1</Link>
        </span>
        |<span>
          <Link to="/products/2">Product 2</Link>
        </span>|<span>
          <Link to="/products/3">Product 3</Link>
        </span>|<span>
          <Link to="/products/features">Product Features</Link>
        </span>
      </nav>
    </>
  );
};

export default ProductLayout;
```

接著回到 App.jsx，將 ProductLayout 引入，並在 17 行的地方將 element 宣告為 ProductLayout，這樣設定後，只要是在 `/products` 底下的 Route，都會渲染出 ProductLayout。

這邊你可以把 `/products` 當作 `parent route`，而包在裡面的當作 `children route`，這點很重要。

```jsx title='App.jsx' showLineNumbers {9,17}
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import ProductLayout from "./pages/ProductLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
```

這時候你會發現一件事，點了畫面中的 Product 和 Product Features，網址有跟著變動，但畫面卻沒有顯示內容，這是不正常的。

![](https://i.imgur.com/vSTPMkx.gif)

而我們只要在 ProductLayout 中引入 `Outlet` Component，並將他渲染在畫面上即可解決這個問題。

```jsx title='ProdcutLayout.jsx' showLineNumbers
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <nav>
        <span>
          <Link to="/products/1">Product 1</Link>
        </span>
        |<span>
          <Link to="/products/2">Product 2</Link>
        </span>|<span>
          <Link to="/products/3">Product 3</Link>
        </span>|<span>
          <Link to="/products/features">Product Features</Link>
        </span>
      </nav>
      <Outlet />
    </>
  );
};

export default ProductLayout;
```

Outlet 通常在父路由(parent route)中使用，目的是讓子路由(child route)能夠被匹配並將該子路由的 element 渲染到畫面上。

關於 Outlet，官方的定義為：

:::note
An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
:::

## Advanced 404 Not Found (useNavigate)

useNavigate 可以讓我們自行決定在什麼樣的情況下，該導向哪個頁面，例如使用者今天訪問了不存在的 Route，這時候會導向 404 Not Found 的頁面，而我們可以使用 useNavigate 讓使用者回到某個正常的頁面，像是首頁(Home)。

現在打開 `NotFound.jsx`，將以下程式碼新增進去：

```jsx title='NotFound.jsx' showLineNumbers
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/"); //1秒後導向主頁面
    }, 1000);
  }, []);
  return <h1>404 Not Found</h1>;
};

export default NotFound;
```

![](https://i.imgur.com/bKejl5s.gif)

## useRoutes

最後來介紹一下 `useRoutes`，useRoutes 是一個能夠實現分類 Route 的 Hook，先在 `src` 目錄底下新增一個資料夾，名為 `routes`，並在裡面新增一個檔案，名為`productRoutes.jsx`，接著將以下程式碼新增進去。

這邊我們只展示將 `products routes` 抽離出來的方法，所以就會省略了 `Home` 你當然也可以自己完成它。

```jsx title='productRoutes.jsx' showLineNumbers
import Features from "../pages/Features";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import ProductLayout from "../pages/ProductLayout";
import Products from "../pages/Products";

const productRoutes = [
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      { path: "", element: <Products /> },
      { path: ":id", element: <Product /> },
      { path: "features", element: <Features /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default productRoutes;
```

回到 `App.jsx`，將 useRoutes 和 productRoutes 引入，

```jsx title='App.jsx' showLineNumbers
import { Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import productRoutes from "./routes/productRoutes";
function App() {
  const productRouting = useRoutes(productRoutes);
  return (
    <div className="App">
      <Header />
      {productRoutes}
    </div>
  );
}

export default App;
```
