---
title: "[javascript] 使用 Intersection Observer API 實作 Infinite Scroll 與 Lazy Loading"
keywords: [javascript, css, infinite scroll, lazy loading]
description: 這次要來介紹 IntersectionObserver API，有了該API可以很簡單的做到Infinite Scroll和Lazy Loading，在過去要偵測到元素是否已經進入使用者的畫面範圍需要花費許多功夫。
author: WeiYun0912
og:title: 使用 Intersection Observer API 實作 Infinite Scroll 與 Lazy Loading
og:description: 這次要來介紹 IntersectionObserver API，有了該API可以很簡單的做到Infinite Scroll和Lazy Loading，在過去要偵測到元素是否已經進入使用者的畫面範圍需要花費許多功夫。
sidebar_position: 1
---

[程式碼由這個影片產出](https://www.youtube.com/watch?v=2IbRtjez6ag)

[影片連結](https://www.youtube.com/watch?v=r9ppY3wzQok&t=1s)

這次要來介紹 IntersectionObserver API，有了該 API 可以很簡單的做到 Infinite Scroll 和 Lazy Loading，在過去要偵測到元素是否已經進入使用者的畫面範圍需要花費許多功夫，而透過 IntersectionObserver，我們可以確切的掌握元素是否已經進入或離開使用者的畫面範圍，效果如下圖。

![](https://i.imgur.com/b3hjuCH.gif)

## 初始化

```html title='index.html' showLineNumbers
<div class="card-container">
  <div class="card">First card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Last card</div>
</div>
```

card class 預設的 opacity 為 0，意思就是完全透明，所以目前在畫面上是看不到任何元素的，而我們希望當 card 進入到使用者的畫面範圍時，card 能夠由右至左進入，所以 card 預設的位置是在 translateX(100px)，而當 card 被加上 show class 以後，位置會移至 translateX(0)，並將 card 的透明度設定為 1，讓它顯示在畫面上。

```css title="style.css"
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.card {
  background: #fff;
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transform: translateX(100px);
  opacity: 0;
  transition: 150ms;
  color: #000;
}

.card.show {
  transform: translateX(0);
  opacity: 1;
}
```

在 card class 後加上 show class 就會讓 card 顯示在畫面上。

```html title='index.html' showLineNumbers {2,4}
<div class="card-container">
  <div class="card show">First card</div>
  <div class="card">Card</div>
  <div class="card show">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Last card</div>
</div>
```

![Image](https://i.imgur.com/dRNlUAp.png)

## Lazy Loading

首先我們需要抓取到所有 class 為 card 的元素，接著在實作 IntersectionObserver API，IntersectionObserver 內會自帶一個 entries 參數，我們先將它 console 出來。

```js title='app.js' showLineNumbers
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});
```

當打開 console 的時候會發現沒有任何東西輸出在 console，這是因為我們還需要告訴 observer 我們要`觀察`哪個元素，當它出現的時候才會觸發 console。

```js title='app.js' showLineNumbers
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});

observer.observe(cards[0]); //觀察第一個class為card的元素
```

這時候打開 console 後就會看到結果了，可以看到圖中的 isIntersecting 為 true，代表該元素已經被`觀察`過了，另外還有一個 target，target 為觀察到的 DOM 元素，可以順便試試看將滾輪上下滑動的時候會不會再次出現該 console。

有了 isIntersecting 和 target 就可以來實作 Lazy Loading 了。

```js title='app.js' showLineNumbers
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //當元素被觀察到，就在該元素加上show class。
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});
```

結果如下，可以發現當元素被觀察到的時候，會加上 show class，讓元素顯示在畫面上，而一旦離開觀察範圍時，show class 又會被移除。

![Image](https://i.imgur.com/2eUTayJ.gif)

如果不想要被觀察過的元素再次去執行 observer 裡面的程式碼的話，可以改寫成這樣：

```js title='app.js' showLineNumbers {9-13}
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //當元素被觀察到，就在該元素加上show class。
    entry.target.classList.toggle("show", entry.isIntersecting);

    //當元素「已經」被觀察過了
    if (entry.isIntersecting) {
      //就使用unobserve取消觀察
      observer.unobserve(entry.target);
    }
  });
});

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});
```

可以發現，被觀察過的元素因為被取消觀察(unobserve)，所以`再次`被觀察到的時候，不會執行任何程式碼。

![Image](https://i.imgur.com/jWJrrI8.gif)

## 預載入 preloading

如果想要實現預載入的功能，或是說預觀察元素的話，可以在 IntersectionObserver 的 API 的第二個參數加上 rootMargin。

```js title='app.js' showLineNumbers {18}
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //當元素被觀察到，就在該元素加上show class。
      entry.target.classList.toggle("show", entry.isIntersecting);

      //當元素「已經」被觀察過了
      if (entry.isIntersecting) {
        //就使用unobserve取消觀察
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "100px",
  }
);

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});
```

加上 rootMargin 後，會發現在我們滑動到底下的元素之前，該元素就已經先被渲染出來了，所以我們並不會看到元素的動畫，而預載入的範圍可以根據自己的需求去設定。

![Image](https://i.imgur.com/wdcgw59.gif)

## Infinite Scroll

先來講一下使用 observer 實作 Infinite Scroll 的原理。

也就是在`最後一個元素被觀察到(observe)時`時，馬上新增多個新的元素在最後一個元素後面。

```html title='index.html' showLineNumbers
<div class="card-container">
  <div class="card">First card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Last card</div>
</div>
```

所以理想的結果是這樣：

```html title='index.html' showLineNumbers {19-25}
<div class="card-container">
  <div class="card">First card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Last card</div>
  <!-- <div class="card">Last card</div> 被 observe 了往後多加5個元素  -->
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <div class="card">Card</div>
  <!-- ↑↑↑ 所以這個元素就變成了最後一個元素了 -->
</div>
```

所以這邊宣告一個新的 IntersectionObserver API，`專門觀察最後一個元素`，當最後一個元素被觀察到時，就在往後添加數個元素。

```js title='app.js' showLineNumbers {27-36,38-39,46-56}
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //當元素被觀察到，就在該元素加上show class。
      entry.target.classList.toggle("show", entry.isIntersecting);

      //當元素「已經」被觀察過了
      if (entry.isIntersecting) {
        //就使用unobserve取消觀察
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "100px",
  }
);

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});

const lastCardObserver = new IntersectionObserver((entries) => {
  //因為只觀察最後一個元素，所以 index 為 0 的位置只會是最後一個元素的entry。
  let lastCard = entries[0];

  //當最後一個元素的 isIntersecting 為 false 時就不做任何事情。
  if (!lastCard.isIntersecting) return;

  //載入新的元素
  loadCard();
});

//只觀察最後一個元素
lastCardObserver.observe(document.querySelector(".card:last-child"));

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});

// 當最後一個元素被觀察到時，會觸發該 function，新增10個 class 為 card 的 div 元素，
// 並在新元素被建立出來的同時，馬上觀察 (observe) 該元素。
const loadCard = () => {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
};
```

但上述的程式碼實際執行的話會有問題。

當我們滑到最後一個元素(Last Card)時，新的元素被建立出來了，但再繼續往下滑時，會發現沒有任何新的元素被載入，也就是我們的 loadCard function 沒有被執行到。

![Image](https://i.imgur.com/SrOmaRD.gif)

這是因為當新的元素被建立，原本的`最後一個元素`，已經不是原本的 Last Card 了，所以程式碼的部分還要再做修改。

```js title='app.js' showLineNumbers {34-35,37-38}
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //當元素被觀察到，就在該元素加上show class。
      entry.target.classList.toggle("show", entry.isIntersecting);

      //當元素「已經」被觀察過了
      if (entry.isIntersecting) {
        //就使用unobserve取消觀察
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "100px",
  }
);

//觀察所有的card
cards.forEach((card) => {
  observer.observe(card);
});

const lastCardObserver = new IntersectionObserver((entries) => {
  //因為只觀察最後一個元素，所以 index 為 0 的位置只會是最後一個元素的entry。
  let lastCard = entries[0];

  //當最後一個元素的 isIntersecting 為 false 時就不做任何事情。
  if (!lastCard.isIntersecting) return;

  // 載入新的元素
  loadCard();

  //取消觀察原本的最後元素
  lastCardObserver.unobserve(lastCard.target);

  //觀察新的最後元素
  lastCardObserver.observe(document.querySelector(".card:last-child"));
});

cards.forEach((card) => {
  observer.observe(card);
});

//只觀察最後一個元素
lastCardObserver.observe(document.querySelector(".card:last-child"));

// 當最後一個元素被觀察到時，會觸發該 function，新增10個 class 為 card 的 div 元素，
// 並在新元素被建立出來的同時，馬上觀察 (observe) 該元素。
const loadCard = () => {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
};
```

![Image](https://i.imgur.com/tTXdYFt.gif)
