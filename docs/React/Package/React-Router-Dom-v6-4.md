---
title: "[react] React Router DOM v6.4 詳細介紹"
keywords: [react, react教學, javascript, react-router-dom, react-router]
description: React教學 - React Router v6.4 詳細介紹 (loader、useNavigation、ErrorHandling、useRouteError)
author: WeiYun0912
og:title: React Router DOM v6.4 詳細介紹
og:description: React教學 - React Router v6.4 詳細介紹 (loader、useNavigation、ErrorHandling、useRouteError)
---

import CenterImage from "@site/src/components/mdHelper/CenterImage";

## 資料夾與檔案結構 (建議先將檔案建好)

```
src
|   App.js
|   ...
|
└─── components
│   │   MainNavigation.jsx
|   |   ProductItems.jsx
|   |   ProductList.jsx
|   |   ProductForm.jsx
|   |   ProductDeferTest.jsx
│
└─── pages
│   │   Error.jsx
│   │   Home.jsx
│   │   ProductAction.jsx
│   │   ProductRoot.jsx
│   │   ProductDetail.jsx
│   │   Products.jsx
│   │   Root.jsx
```

## 說明

React Router DOM v6.4 版本新增了許多實用的功能，但如果要使用這些功能就不能用 v6 版本的 BrowserRouter，而是得使用新的 `createBrowserRouter` 和 `RouterProvider`，v6.4 版主要是著重在 data loading 和 date fetch 的部份。

之前在 [這部影片](https://www.youtube.com/watch?v=S69LZK3-Z5E) 有稍微介紹過，但介紹的功能沒有那麼多，這次就一次補完。

[完整程式碼](https://github.com/WeiYun0912/react-router-dom-v6.4)

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

```jsx title='Root.jsx' showLineNumbers {1,8}
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

```jsx title='App.jsx' showLineNumbers {13}
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

```jsx title='components/MainNavigation.jsx' showLineNumbers {2,10-20,23-34}
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

```jsx title='pages/Home.jsx' showLineNumbers {2,5,7-9}
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

```jsx title='App.jsx' showLineNumbers {21}
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

```jsx title='pages/ProductDetail.jsx' showLineNumbers {1,4,6}
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return <div>ProductDetail {params.productId}</div>;
};

export default ProductDetailPage;
```

然後將 `Products.jsx` 中的程式碼改成以下，就完成動態 Routes 的功能了：

```jsx title='pages/Products.jsx' showLineNumbers {4-8,15-19}
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

```jsx title='ProductDetail.jsx' showLineNumbers {10}
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

```jsx title='App.jsx' showLineNumbers {3,12}
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

```jsx title='ProductDetail.jsx' showLineNumbers {10-12}
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

```jsx title='App.jsx' showLineNumbers {7}
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

```jsx title='App.jsx' showLineNumbers {7}
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

```jsx title='pages/Products.jsx' showLineNumbers {10-16}
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
const ProductsList = () => {
  return <div>ProductsList</div>;
};

export default ProductsList;
```

之後回到 `App.jsx` 在 `path: "products"` 的地方新增 loader 屬性，並將剛剛的 loader 帶進去。

```jsx title='App.jsx' showLineNumbers {7,20}
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

```jsx title='pages/Products.jsx' showLineNumbers {2,6,7}
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

```jsx title='components/ProductsList.jsx' showLineNumbers {2,5,6}
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

```jsx title='pages/Root.jsx' showLineNumbers {1,5,10}
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

```jsx title='pages/Products.jsx' showLineNumbers {8-10,20-25}
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

```jsx title='pages/Products.jsx' showLineNumbers {17}
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

![Image](https://i.imgur.com/ynKtbNZ.png)

這是因為我們在 Router 中有定義 `errorElement`，當錯誤發生時，React Router Dom 會先檢查在該 path 底下有沒有定義 errorElement，沒有的話就往上尋找(Bubble Up)，找到之後就渲染出 errorElement 的畫面。

```jsx title='App.jsx' showLineNumbers {5}
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

```jsx title='pages/Products.jsx' showLineNumbers {16-20}
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

```jsx title='pages/Error.jsx' showLineNumbers {10-12,14-17}
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

不知道你會不會覺得上述的 Error Handling 方式都有些麻煩，要使用 `Response` 建立一個物件，並使用 `JSON.stringify` 將資料轉成 Json 字串，拿資料的時候又要利用 `JSON.parse` 將資料轉換回來。

所以 React Router Dom 提供了 `json` 方法讓我們能更方便的處理 Error 訊息。

將 `Products.jsx` 和 `Error.jsx` 中的程式碼改為以下即可：

```jsx title='pages/Products.jsx' showLineNumbers {2,17}
import { useLoaderData, json } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  return <ProductsList />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://aaaaaaadummyjson.com/products?limit=5");

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data.products;
  }
};
```

```jsx title='pages/Error.jsx' showLineNumbers {11}
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!!";
  let message = "Could not find this page";

  if (error.status === 500) {
    message = error.data.message;
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

### Dynamic Routes & loader

現在先將 `Products.jsx` 、 `ProductsList.jsx` 的程式碼改成以下：

```jsx title='pages/Products.jsx' showLineNumbers
import { useLoaderData, json } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  return <ProductsList data={data} />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data.products;
  }
};
```

現在可以使用 id 來找到單一個產品的詳細資料了。

```jsx title='components/ProductList.jsx' showLineNumbers {1,10-12}
import { Link } from "react-router-dom";

const ProductsList = ({ data }) => {
  return (
    <div>
      <h1>Products List</h1>
      {data.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <Link to={"/products/" + product.id}>
            <img width={100} src={product.images[0]} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
```

接著在 `components` 資料夾底下 新增 `ProductItem.jsx`，並修改 `ProductDetail.jsx` 內的程式碼：

```jsx title='components/ProductItem.jsx' showLineNumbers
const ProductItem = () => {
  return <div>ProductItem</div>;
};

export default ProductItem;
```

當我們使用 loader 時，它會自帶兩個參數，一個是 `request` 另一個則是 `params`，我們可以使用 params 來取得 id，跟 useParams 的用途是一樣的。

這邊也直接將取得的 data 傳遞至 `ProductItem` Component。

```jsx title='pages/ProductDetail.jsx' showLineNumbers {}
import { useLoaderData, json } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductDetailPage = () => {
  const data = useLoaderData();
  return <ProductItem data={data} />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.productId;
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data;
  }
};
```

別忘記定義完 loader 後，也要在該 path 引入，所以回到 `App.jsx`，將 loader 新增至 `path: "products/:productId"`。

```jsx title='App.jsx' showLineNumbers {6-8,27}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
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
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
        loader: ProductDetailLoader,
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

現在可以可以修改 `ProductItem.jsx` 內的程式碼了：

```jsx title='components/ProductItem.jsx' showLineNumbers
import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  return (
    <div>
      <p>{data.title}</p>
      <img width={100} src={data.images[0]} />
      <br />
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
};

export default ProductItem;
```

### useRouteLoaderData

`useRouteLoaderData` 是讓 Child Route 可以去使用 Parent Route 所定義的 loader。

先在 `App.jsx` 的 Parent Route 的地方新增 id 和 loader：

```jsx title='App.jsx' showLineNumbers {17-20}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
import ProductsPage, { loader as ProductsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: () => {
      return "Hello World";
    },
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        loader: ProductsLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
        loader: ProductDetailLoader,
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

接著我們可以在底下的 Child Route 使用 `useRouteLoaderData`，將 `Home.jsx` 程式碼改為以下，即可取得 Parent Route loader 回傳的值：

```jsx title='pages/Home.jsx' showLineNumbers {2,5,6}
import { Link, useRouteLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useRouteLoaderData("root"); // 依靠 id 取得 root loader 的值
  console.log(data); // Hello World
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

### action

如果我們要提交表單的資料，則可以使用 action，action 和 loader 非常類似，但 action 可以接收表單內的資料，所以 action 通常是拿來發 Post Request，action 和 loader 一樣，都必須在 path 中去定義。

要讓 action 能夠接收表單資料，得先引入 React Router Dom 的 `Form`，所以先來新增兩個檔案，`ProductForm.jsx` 和 `ProductAction.jsx` 。

```jsx title='components/ProductForm.jsx' showLineNumbers
import { Form } from "react-router-dom";

const ProductForm = () => {
  return (
    <Form method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </p>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default ProductForm;
```

我們也可以引入 `redirect`，假設 Post Request 發送成功的話，就導向至主頁面。

```jsx title='pages/ProductAction.jsx' showLineNumbers {1,11-16,28}
import { redirect } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const ProductActionPage = () => {
  return <ProductForm />;
};

export default ProductActionPage;

export const action = async ({ request, params }) => {
  const data = await request.formData(); // 接收 Form 表單裡面的資料
  const productData = {
    title: data.get("title"),
    price: data.get("price"),
    description: data.get("description"),
  };

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  }

  return redirect("/");
};
```

定義完 action 以後，將 `ProductAction.jsx` 的 path 定義一下，同時將 action 傳入：

```jsx title='App.jsx' showLineNumbers {9-11,36-40}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
import ProductActionPage, {
  action as ProductAction,
} from "./pages/ProductAction";
import ProductsPage, { loader as ProductsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: () => {
      return "Hello World";
    },
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        loader: ProductsLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
        loader: ProductDetailLoader,
      },
      {
        path: "products/add",
        element: <ProductActionPage />,
        action: ProductAction,
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

`Home.jsx` 中的程式碼也要修改一下，才能進入到 `products/add`：

```jsx title='App.jsx' showLineNumbers {13-15}
import { Link, useRouteLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useRouteLoaderData("root");
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <p>
        Go to <Link to="/products/add">add product</Link>
      </p>
    </div>
  );
};

export default HomePage;
```

### Form Submitting

前面提到 `useNavigation` 時，有提到 useNavigation 能取得當前的 `state`，而當我們的 `Form 表單正在送出處理時`，state 會是 submitting，所以我們也可以利用這一個特性來告知使用者目前表單的處理狀況。

將 `ProductForm.jsx` 的程式碼修改為以下：

```jsx title='components/ProductForm.jsx' showLineNumbers {2,4,5,21}
import { Form, useNavigation } from "react-router-dom";

const ProductForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </p>
      <button type="submit">{isSubmitting ? "Submit..." : "Submit"}</button>
    </Form>
  );
};

export default ProductForm;
```

### defer & Await

要 Demo `defer` 和 `Await`的話，我們需要再新增兩個檔案，`ProductDeferTest.jsx` 和 `ProductRoot.jsx`。

```jsx title='components/ProductDeferTest.jsx' showLineNumbers
const ProductDeferTest = () => {
  return <div>ProductDeferTest</div>;
};

export default ProductDeferTest;
```

```jsx title='pages/ProductRoot.jsx' showLineNumbers
import { Outlet } from "react-router-dom";
import ProductDeferTest from "../components/ProductDeferTest";

const ProductRoot = () => {
  return (
    <>
      <ProductDeferTest />
      <Outlet />
    </>
  );
};

export default ProductRoot;
```

之後再將 `App.jsx` 內的 Router 更改一下：

```jsx title='App.jsx' showLineNumbers {14,27-47}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
import ProductActionPage, {
  action as ProductAction,
} from "./pages/ProductAction";
import ProductsPage, { loader as ProductsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductRoot from "./pages/ProductRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: () => {
      return "Hello World";
    },
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductRoot />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: ProductsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetailPage />,
            loader: ProductDetailLoader,
          },
          {
            path: "add",
            element: <ProductActionPage />,
            action: ProductAction,
          },
        ],
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

現在進入到 path 為 products 底下的頁面，都會看到 `ProductRoot.jsx` 內的文字 `ProductDeferTest`。

但不知道你有沒有發現一個問題，我們的 `ProductDeferTest` 文字，是等 `loader` 處理完 API 資料，並顯示在畫面上後才出現，如果今天 `ProductRoot.jsx` 內要顯示的畫面對使用者來說是重要的，這樣的使用者體驗就不太好。

<CenterImage src="https://i.imgur.com/8co037C.gif" />

以 `Products.jsx` 為例，我們可以先將原本的 loader 程式碼搬移出去，建立另外一個 Function，名為 `loadProducts`，並在原本的 loader return `defer` 並執行 loadProducts。

```jsx title='pages/Products.jsx' showLineNumbers {1,12-22,24-28}
import { useLoaderData, json, defer } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();

  return <ProductsList data={data} />;
};

export default ProductsPage;

const loadProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data.products;
  }
};

export const loader = async () => {
  return defer({
    data: loadProducts(),
  });
};
```

:::note
defer 內能執行多個 Promise Function，只要給不同的 key 即可，以上述的例子來看，我們的 loadProducts() 對應的 key 為 data，所以在使用 useLoaderData 時，需要將 data 解構出來做使用。
:::

接著需要搭配 Suspense 和 Await，讓資料讀取的時候能顯示文字在畫面上，等到資料讀取完畢後，才會顯示 ProductsList Component 裡面的內容。

```jsx title='pages/Products.jsx' showLineNumbers {1-2,6-14}
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data}>
        {(loadProducts) => <ProductsList data={loadProducts} />}
      </Await>
    </Suspense>
  );
};

export default ProductsPage;

const loadProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data.products;
  }
};

export const loader = async () => {
  return defer({
    data: loadProducts(),
  });
};
```

<CenterImage src="https://i.imgur.com/dj4uRt2.gif" />
