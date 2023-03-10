---
title: "[react] React Router DOM v6.4 介紹"
keywords: [react, react教學, javascript, react-router-dom, react-router]
description: React教學 - React Router v6.4 介紹 (loader、useNavigation、ErrorHandling、useRouteError)
author: WeiYun0912
og:title: React Router DOM v6.4 介紹
og:description: React教學 - React Router v6.4 介紹 (loader、useNavigation、ErrorHandling、useRouteError)
---

## 說明

React Router DOM v6.4 版本新增了許多實用的功能，但如果要使用這些功能就不能用 v6 版本的 BrowserRouter，而是得使用新的 `createBrowserRouter` 和 `RouterProvider`，v6.4 版主要是著重在 data loading 和 date fetch 的部份。

之前在 [這部影片](https://www.youtube.com/watch?v=S69LZK3-Z5E) 有稍微介紹過，但介紹的功能沒有那麼多，這次就一次補完。

## Basic

### createBrowserRouter & RouterProvider

先將 `createBrowserRouter` 和 `RouterProvider` 引入，接著使用 createBrowserRouter 建立 Router 後，在 RouterProvider 將 router 傳遞進去。

```jsx title='App.jsx' showLineNumbers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

```jsx title='pages/Home.jsx' showLineNumbers
const HomePage = () => {
  return <div>Home</div>;
};

export default HomePage;
```

```jsx title='pages/Products.jsx' showLineNumbers
import React from "react";

const ProductsPage = () => {
  return <div>Products</div>;
};

export default ProductsPage;
```

:::note
將 path 指定為 '/' 的意思就是我們的 Domain， http://localhost:5173，如果網頁的網址為 http://example.com ，則 '/' 就是 http://example.com 。
:::

所以現在只要在網址輸入 http://localhost:5173(因環境而異) 就會渲染出 HomePage， http://localhost:5173/products，則渲染出 ProductsPage。

### createBrowserRouter & createRoutesFromElements & RouterProvider

如果不習慣用物件的方式定義 Router，也可以使用原本的 JSX 方式，只要引入 `createRoutesFromElements` 和 `Route` 即可。

```jsx title='App.jsx' showLineNumbers
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

### a tag & Link

在剛學 React Router 的時候，可能有些人會不懂為什麼要使用 Router 提供的 Link Component 來連結到我們其他的 Component，這是因為如果使用超連結 `a` 標籤的方式來指定路徑，當我們點擊 a 標籤時，瀏覽器會以為我們要到`新的頁面`，進而重新發送 Request 取得我們要的頁面，等同於重新整理 React Application 的意思，而重新整理頁面的話，我們的 React State 就會全部遺失，所以這顯然不是個好方法。

而 React Router 提供的 Link 能防止瀏覽器送出 Request(Prevent Default Behavior)，相反的，Link Component 檢查我們的 URL Path，如果有在 Router 中定義該 Path 的話，就直接渲染 Path 中定義的 element(component) 畫面。

```jsx title='pages/Home.jsx' showLineNumbers
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </div>
  );
};

export default HomePage;
```

### Layout & Outlet

現在如果要新增一個 Navbar 來讓使用者能夠到達其他頁面的話，我們可以在 Router 定義一個新的 Route。

先新增一個 Root Layout 和 Navbar：

```jsx title='pages/Root.jsx' showLineNumbers
const RootLayout = () => {
  return (
    <div>
      <h1>Root Layout</h1>
    </div>
  );
};

export default RootLayout;
```

```jsx title='components/MainNavigation.jsx' showLineNumbers
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
```

因為要讓 Navbar 顯示在`每一個頁面的上方`，所以要重新定義一下 Router，先回到 `App.jsx`，將 Router 改為以下：

```jsx title='App.jsx' showLineNumbers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

可以看到我們多了一個 `children` 的屬性，並將先前定義的 Route 搬到 children 裡面，但這時候回到畫面，只會看到 RootLayout 的畫面，原先 HomePage 的畫面消失了。

這是因為我們必須在 Parent Route(RootLayout) 中，引入 `Outlet` Component 並渲染，Outlet 的作用為讓 Parent Route 能夠渲染出 Child Route 的畫面。

```jsx title='Root.jsx' showLineNumbers
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
```

### Error Element

現在嘗試在網址的地方打上不存在的 Path，會看到以下 404 錯誤畫面：

![Image](https://i.imgur.com/f1QHShV.png)

如果要客製化 404 Not Found 頁面或是錯誤頁面，則可以在 Router 定義 `errorElement` 屬性，並把要顯示的 Component 定義好。

```jsx title='pages/Error.jsx' showLineNumbers
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <h1>An error occurred!!</h1>
        <p>Could not find this page</p>
      </div>
    </>
  );
};

export default ErrorPage;
```

```jsx title='App.jsx' showLineNumbers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

### NavLink

如果想要讓使用者了解目前在哪個頁面，則可以使用 NavLink，NavLink 提供了 isActive 的屬性，當 isActive 為 true 時，代表使用者目前在該頁面，所以可以簡單做個判斷，並附上簡單的 CSS。

```jsx title='components/MainNavigation.jsx' showLineNumbers
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            // style={({ isActive }) => ({
            //   textDecoration: isActive ? "underline" : "none",
            // })} 這樣寫 inline-style 也可以 看個人
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            // style={({ isActive }) => ({
            //   textDecoration: isActive ? "underline" : "none",
            // })} 這樣寫 inline-style 也可以 看個人
          >
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
```

### useNavigate

有時候我們會希望觸發某個 function 後，導向到其他頁面，這時候就可以使用 useNavigate 來達到該功能。

這邊只是 Demo 用，後續不會將該程式碼新增到後面的教學。

```jsx title='pages/Home.jsx' showLineNumbers
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products"); // 當 navigateHandler function 觸發，導向到 /products
  }

  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </div>
  );
};

export default HomePage;
```

### Dynamic Routes

如果要達到動態 Route 的功能，只需在 path 後面加上 `:id` 即可。

```jsx title='App.jsx' showLineNumbers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

在 `ProductDetail.jsx` 中，只需將 `useParams` 引入，即可取得我們在 path 定義的 id。

```jsx title='pages/ProductDetail.jsx' showLineNumbers
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return <div>ProductDetail {params.productId}</div>;
};

export default ProductDetailPage;
```

然後將 `Products.jsx` 中的程式碼改成以下，就完成動態 Routes 的功能了：

```jsx title='pages/Products.jsx' showLineNumbers
import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
```

### Relative Path & Relative Route

假設我們想要在 `ProductDetail.jsx` 中，實作回到上一頁功能，也就是回到 `Product.jsx`，你可能會這樣做：

```jsx title='ProductDetail.jsx' showLineNumbers
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail {params.productId}</h1>
      <p>
        <Link to="..">Back</Link>
      </p>
    </div>
  );
};

export default ProductDetailPage;
```

:::note
`..` 是回到上一層的意思，而 `.` 是當前目錄。
:::

但當我們點擊 Back 後，會發現不是回到 `Product.jsx`，反而是回到 `Home.jsx`。

這就要從我們設定的 Router 開始解釋，先看一下先前設定的 Router，我們的 `Parent Route` 在程式碼第 3 行，也就是 `path:"/"`，而底下的 `Child Route` 為程式碼第 7 行至第 12 行。

這時候如果在 `path:"products/:productId"` 底下回到上一層，則是會回到 Parent Route，也就是 `path:"/"`。

```jsx title='App.jsx' showLineNumbers
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

這是因為 React Router Dom 的 Link Component 預設的 `relative` 屬性是 `route`，會根據我們設置的 Router 父子關係而有所不同。

但 relative 還有提供另一個值讓我們使用，叫做 `path`，將 relative 屬性更改為 path 後，就可以解決上述的問題。

path 屬性是將我們當前的網址移除一個 segment，所以假設我們的網址是 `http://localhost:5173/products/p1`，回到上一層 `..` 就是 `http://localhost:5173/products`。

```jsx title='ProductDetail.jsx' showLineNumbers
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail {params.productId}</h1>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetailPage;
```

### Index

再來看一下我們的 Router，不知道你有沒有發現我們的 `<HomePage />` 主頁面的 path 是空值 ""，空值的意思就是匹配到 Parent Route，也就是 path : "/"。

```jsx title='App.jsx' showLineNumbers
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

如果不想將 path 定義為空值來匹配 Parent Route 的話，可以改為 `index : true`，這樣定義跟 `path : "/"` 是一樣的。

```jsx title='App.jsx' showLineNumbers
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

## Advanced

### loader

如果要取得外部 API 資料的話，基本上都會使用 useEffect 搭配 Fetch Function，但 React Router Dom 也有提供 Data Fetching 的功能，叫做 `loader`。

要使用 loader 的話，先在 `Products.jsx` 定義它然後 export ，也順便將 `Products.jsx` 裡面的程式碼修改一下：

```jsx title='pages/Products.jsx' showLineNumbers
import React from "react";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  const data = await response.json();

  return data.products;
};
```

```jsx title='components/ProductsList.jsx' showLineNumbers
import React from "react";

const ProductsList = () => {
  return <div>ProductsList</div>;
};

export default ProductsList;
```

之後回到 `App.jsx` 在 `path: "products"` 的地方新增 loader 屬性，並將剛剛的 loader 帶進去。

```jsx title='App.jsx' showLineNumbers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage, { loader as ProductsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        loader: ProductsLoader,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

:::caution
注意 loader 是在 Client-Side 執行，並不是 Server-Side，所以你可以在 loader 裡面使用任何瀏覽器的 Function，例如：localStorage、cookie 等。
:::

現在進入到 Products 頁面，應該會發現 Products 頁面卡了一下才顯示畫面，這時候可以開啟 Networks 來看一下，會發現進來 Products 頁面時，我們發了一筆 API Request。

![Image](https://i.imgur.com/gH7oINr.png)

:::caution
React Router Dom 會等到 `loader 執行完`，才去渲染畫面，意思就是要等資料取完才會渲染畫面，後面會講在取資料時要怎麼顯示 Loading 文字在畫面上。
:::

如果要取得 API 資料的話，我們可以在 `Products.jsx` 引入 `useLoaderData`。

```jsx title='pages/Products.jsx' showLineNumbers
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const products = useLoaderData();
  console.log(products);
  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  const data = await response.json();

  return data.products;
};
```

![Image](https://i.imgur.com/yEQmH2r.png)

### loader scope

可以發現我們在 `Products.jsx` 中渲染了 `ProductsList` Component，而因為 ProductsList 包含在 Products 底下，所以 ProductsList 也可以使用 useLoaderData 來取得 API 資料。

```jsx title='pages/Products.jsx' showLineNumbers
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  const data = await response.json();

  return data.products;
};
```

```jsx title='components/ProductsList.jsx' showLineNumbers
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const products = useLoaderData();
  console.log("ProductsList : ", products);
  return <div>ProductsList</div>;
};

export default ProductsList;
```

![Image](https://i.imgur.com/vizTGhi.png)

### useNavigation

前面有提到，loader 執行完才會渲染畫面，所以我們可以使用 `useNavigation`，來判斷目前的狀態為何。

useNavigation 會提供 `state`，當我們在取得資料時，state 為 `loading`，而其他時間則為 `idle`，所以可以判斷當下的 state 是否為 loading。

```jsx title='pages/Root.jsx' showLineNumbers
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <MainNavigation />
      {navigation.state === "loading" ? <h1>Loading..</h1> : <Outlet />}
    </div>
  );
};

export default RootLayout;
```

### Error Handling & Custom Errors

我們當然也可以客製化錯誤訊息，將 `Products.jsx` 的程式碼改成以下：

```jsx title='Products.jsx' showLineNumbers
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <h1>{data.message}</h1>;
  }

  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://aaaaaaadummyjson.com/products?limit=5");

  if (!response.ok) {
    return {
      isError: true,
      message: "Something went wrong!!!",
    };
  } else {
    const data = await response.json();

    return data.products;
  }
};
```

到 Products 頁面就會看到我們的錯誤訊息：

![Image](https://i.imgur.com/9wrszAO.png)

### Error Handling & Custom Errors (Bubble Up)

上述的客製化錯誤訊息算是比較偷懶的做法，所以我們可以使用較正式的做法，先將 `Products.jsx` 的程式碼改為以下：

```jsx title='Products.jsx' showLineNumbers
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://aaaaaaadummyjson.com/products?limit=5");

  if (!response.ok) {
    throw { message: "Something went wrong!!!" };
  } else {
    const data = await response.json();

    return data.products;
  }
};
```

再次來到 Products 頁面後，會發現這次出現的錯誤訊息是之前在 `Error.jsx` 定義的訊息。

```jsx title='Error.jsx' showLineNumbers
import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <h1>An error occurred!!</h1>
        <p>Could not find this page</p>
      </div>
    </>
  );
};

export default ErrorPage;
```

![Image](https://i.imgur.com/ynKtbNZ.png)

這是因為我們在 Router 中有定義 `errorElement`，當錯誤發生時，React Router Dom 會先檢查在該 path 底下有沒有定義 errorElement，沒有的話就往上尋找(Bubble Up)，找到之後就渲染出 errorElement 的畫面。

```jsx title='App.jsx' showLineNumbers
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        loader: ProductsLoader,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

### useRouteError

現在可以再更進階一點，根據 `status code` 給予不同的錯誤訊息，將 `Products.jsx` 程式碼改為以下：

```jsx title='Products.jsx' showLineNumbers
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products111?limit=5");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Something went wrong!!!" }), {
      status: 500,
    });
  } else {
    const data = await response.json();
    return data.products;
  }
};
```

在 `Error.jsx` 中，使用 `useRouteError` 將錯誤資訊取出來，並做判斷來顯示不同的文字。

```jsx title='Error.jsx' showLineNumbers
import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!!";
  let message = "Could not find this page";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find this page";
  }

  return (
    <>
      <MainNavigation />
      <div>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
```

### json

更新中....
