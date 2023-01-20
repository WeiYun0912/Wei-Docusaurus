---
title: "[css] 使用 Smooth 來讓滾動軸更滑順"
keywords: [CSS, css, smooth scroll]
description: 如果一個頁面的內容太長，通常會為了讓使用者體驗不要太差而在頁面的右下角加上一個往上的箭頭。
author: WeiYun0912
og:title: 使用 Smooth 來讓滾動軸更滑順
og:description: 如果一個頁面的內容太長，通常會為了讓使用者體驗不要太差而在頁面的右下角加上一個往上的箭頭。
sidebar_position: 2
---

如果一個頁面的內容太長，通常會為了讓使用者體驗不要太差而在頁面的右下角加上一個往上的箭頭，點擊後就會回到頁面最上方，我們可以利用 JavaScript 來實作這個功能。

會用那麼多文字的原因是因為要把畫面撐高。

```html title='index.html' showLineNumbers
<div class="goTop">
  <img
    src="https://img-premium.flaticon.com/png/512/2267/premium/2267904.png?token=exp=1633625403~hmac=19e87d3285d74591879065f2a97e8afc"
    width="50"
    alt="Image Not Found"
  />
</div>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
```

```css title='style.css' showLineNumbers
p {
  font-size: 5em;
}

.goTop {
  background: #e13834;
  border-radius: 20px;
  width: max-content;
  padding: 0.5em;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
```

只要將 scrollTo function 內的 behavior 設定為 smooth，在按下置頂按鈕往上滑動時，就會變得比較滑順。

```js title='app.js' showLineNumbers
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelector(".goTop").addEventListener("click", scrollToTop);
```

<iframe src="https://codesandbox.io/embed/scroll-to-top-n6xe9?fontsize=14&hidenavigation=1&theme=dark"
style={{width : "100%",height : "500px", overflow : "hidden"}} 
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
