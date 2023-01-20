---
title: "[react] React Slick"
keywords: [react, react-slick]
description: React-Slick 套件能夠讓我們快速的建立輪播效果(carousel)，這篇主要介紹 slick 參數及 CSS 如何設定。
author: WeiYun0912
og:title: React Slick
og:description: React-Slick 套件能夠讓我們快速的建立輪播效果(carousel)，這篇主要介紹 slick 參數及 CSS 如何設定。
---

[影片講解](https://www.youtube.com/watch?v=ELgevELiOxc)

[程式碼](https://github.com/WeiYun0912/react-slick-demo)

React-Slick 套件能夠讓我們快速的建立輪播效果(carousel)，這篇主要介紹 Slick 參數及 CSS 如何設定。

![images](https://i.imgur.com/IG3h5mU.gif)

## 安裝

```
npm install react-slick slick-carousel
```

## 範例資料

先在專案底下新增範例資料，名為 `movies.json`。

```json title='movies.json' showLineNumbers
[
  {
    "name": "coco",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
  {
    "name": "Orphan: First Kill",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg"
  },
  {
    "name": "Top Gun: Maverick",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    "name": "One Piece Film Red",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg"
  },
  {
    "name": "Spider-Man: No Way Home",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
  },
  {
    "name": "Lightyear",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg"
  },
  {
    "name": "Welcome to the Club",
    "url": "https://www.themoviedb.org/t/p/w220_and_h330_face/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg"
  }
]
```

接著在 `App.jsx` 中將範例資料引入，並直接使用 map function 讀取範例資料並讓圖片顯示出來。

```jsx title='App.jsx' showLineNumbers
import movies from "./movies.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
```

CSS 的部分也先進行一些簡單的設定：

```css title='App.css' showLineNumbers
.App {
  margin-top: 20px;
  padding: 0 calc(3.5vw + 80px);
  position: relative;
}

.wrap {
  width: 300px;
  outline: none;
}

img {
  border: 4px solid transparent;
  border-radius: 4px;
  margin: auto;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 20%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  max-width: 100%;
}

img:hover {
  border: 4px solid rgba(249, 249, 249, 0.8);
}
```

## Slider

接著就可以使用 Slider 來建立輪播效果了，在 `App.jsx` 中引入 Slider 和 CSS。

記得我們自己的 **CSS 一定要放在 React-Slick 的 CSS 的下方**，這樣才能夠去覆寫 Slick 原本的 CSS，不這麼做的話要去覆寫 Slick CSS 只能用 !important 的方式。

```jsx title='App.jsx' showLineNumbers {5}
import movies from "./movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
```

現在回到畫面上應該只會看到左右兩邊有箭頭，畫面上僅有一張圖片。

![Image](https://i.imgur.com/46FGxX1.png)

這是因為我們需要透過參數傳遞的方式，告訴 Slider 我們要去啟用哪些功能或是哪些設定。

簡單介紹一下一些基礎參數，這邊使用圖片當範例說明：

- dots：在 Slider 底下會看到點點(dots)，也稱 paging，可以使用這些 dots 移至其他 page，而滑動的距離會根據 `slidesToScroll` 來決定一次要滑動幾張圖片。
- infinite：如設定為 true，當 Slider 滑到最後一張圖片時，下一張圖片會自動回到第一張圖片。
- speed：滑動的時間，單位為毫秒。
- slidesToShow：一次要顯示幾張圖片。
- slidesToScroll：一次滑動要顯示幾張圖片。
- autoplay：如設定為 true，則圖片會自動進行輪播，當滑鼠移至 Slider 時才會停下。

```jsx title='App.jsx' showLineNumbers
import movies from "./movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
```

![Image](https://i.imgur.com/6pBkjTr.png)

## 設定 dot(paging) 的 CSS

要去覆寫 Slick 套件裡面的 CSS，都必須使用 Classname 的方式來覆寫，經過觀察後得知，dots 底下的按鈕是使用偽元素，而當前的 dot 會有 `slick.active` 的 Class，我們可以試著將當前 dot 設定為白色。

```css title='App.css' showLineNumbers {25-27}
.App {
  margin-top: 20px;
  padding: 0 calc(3.5vw + 80px);
  position: relative;
}

.wrap {
  width: 300px;
  outline: none;
}

img {
  border: 4px solid transparent;
  border-radius: 4px;
  margin: auto;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 20%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  max-width: 100%;
}

img:hover {
  border: 4px solid rgba(249, 249, 249, 0.8);
}

.slick-dots li.slick-active button:before {
  color: #fff;
}
```

![Image](https://i.imgur.com/qjsbuoi.png)

## RWD 設定

目前 Slider 還沒有支援 RWD，所以當畫面縮小的時候，我們的圖片就會全部擠在一起。

![Image](https://i.imgur.com/eBmqOm6.png)

所以可以在設定中加上 RWD 參數：

```jsx title='App.jsx' showLineNumbers {15-23}
import movies from "./movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import settings from "./settings";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
```

現在只要畫面的`寬度小於480px`，就只顯示一張圖片，而滑動也是，一次只滑動一張圖片。

![Image](https://i.imgur.com/m6QMlrT.png)

## 將設定檔獨立成一份檔案

在設定 RWD 的時候不知道你有沒有發現，我們的設定檔的程式碼越來越長了，如果今天有非常多的 breakpoint 需要設定，則會更於冗長，所以可以把它獨立成一份檔案，要使用的時候在引入就好了。

```jsx title='settings.jsx' showLineNumbers
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
```

```jsx title='App.jsx' showLineNumbers
import movies from "./movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
```

## Custom Paging 設定

如果想要自訂自己的 Paging，則可以在參數中加上 `customPaging function`，該 function 有自帶一個參數，是我們的 Slider 讀取到的圖片數量(index，由 0 開始計算)，所以現在可以將 Paging 改成圖片的方式顯示，除此之外在參數中加上`centerMode : true`，讓我們選取到的圖片可以顯示在畫面中間的位置。

由於需要讀取到圖片，所以在設定檔中將圖片的位置宣告成一個陣列，讓我們的 customPaging 可以利用 index 去讀取。

```jsx title='settings.jsx' showLineNumbers {27-33}
const imagesDots = [
  "https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  customPaging: (i) => {
    return (
      <a>
        <img src={imagesDots[i]} />
      </a>
    );
  },
};

export default settings;
```

![Image](https://i.imgur.com/TrDoWl5.png)

## 調整 Paging CSS

現在可以發現我們的 Paging 的圖片非常小張，現在來調整 Paging 的圖片大小。

在那之前還需要加上 dots 的 class 名稱，方便做調整：

```jsx title='settings.jsx' showLineNumbers
const imagesDots = [
  "https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg",
  "https://www.themoviedb.org/t/p/w220_and_h330_face/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dotsClass: "slick-dots slick-thumb",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  customPaging: (i) => {
    return (
      <a>
        <img src={imagesDots[i]} />
      </a>
    );
  },
};

export default settings;
```

```css title='App.css' showLineNumbers
.App {
  margin-top: 20px;
  padding: 0 calc(3.5vw + 80px);
  position: relative;
}

.wrap {
  width: 300px;
  outline: none;
}

img {
  border: 4px solid transparent;
  border-radius: 4px;
  margin: auto;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 20%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  max-width: 100%;
}

img:hover {
  border: 4px solid rgba(249, 249, 249, 0.8);
}

.slick-dots li.slick-active button:before {
  color: #fff;
}

.slick-thumb {
  bottom: -120px;
}

.slick-thumb > li {
  width: 60px;
  margin: 0 20px;
}
```

![Image](https://i.imgur.com/3KrKrET.png)

## Active CSS

最後再來調整一點 CSS，當圖片被選到時，就將圖片調整成全彩的，其他沒被選到的圖片就設定為黑白的。

```css title='App.css' showLineNumbers
.App {
  margin-top: 20px;
  padding: 0 calc(3.5vw + 80px);
  position: relative;
}

.wrap {
  width: 300px;
  outline: none;
}

img {
  border: 4px solid transparent;
  border-radius: 4px;
  margin: auto;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 20%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  max-width: 100%;
}

img:hover {
  border: 4px solid rgba(249, 249, 249, 0.8);
}

.slick-dots li.slick-active button:before {
  color: #fff;
}

.slick-thumb {
  bottom: -120px;
}

.slick-thumb > li {
  width: 60px;
  margin: 0 20px;
}

.slick-thumb li.slick-active img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.slick-thumb li img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.slick-slide:not(.slick-current) div div img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
```

![Image](https://i.imgur.com/Z0p7OpC.png)
