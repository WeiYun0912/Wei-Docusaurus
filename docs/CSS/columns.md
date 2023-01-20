---
title: "[css] 使用 Columns 調整電腦與手機的網頁畫面"
keywords: [CSS, css, columns]
description: flex 和 grid 讓我們能夠很簡單的去設定 RWD，讓網頁在電腦或手機畫面上都不會跑版，以 flex 來舉例。
author: WeiYun0912
og:title: 使用 Columns 調整電腦與手機的畫面。
og:description: flex 和 grid 讓我們能夠很簡單的去設定 RWD，讓網頁在電腦或手機畫面上都不會跑版，以 flex 來舉例。
sidebar_position: 1
---

flex 和 grid 讓我們能夠很簡單的去設定 RWD，讓網頁在電腦或手機畫面上都不會跑版，以 flex 來舉例，只需要使用 Media Query 在 width 等於手機 width 的時候，去調整 flex-direction 就好。

但除了這兩個語法外，我們也可以利用 `columns` 來調整畫面。

假設今天我們需要將文字分成兩列(column)，可以直接用 columns 語法達到這個效果。

<h3>調整前：</h3>

```html title="index.html" showLineNumbers
<div class="content">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
</div>
```

<div class="content"> 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
</div>

<h3>調整後：</h3>

```html title="index.html" showLineNumbers
<style>
  .content {
    columns: 2;
  }
</style>

<div class="content">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
</div>
```

<div class="content" style={{columns : 2}}> 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</p>
</div>

## 區塊

我們也可以把文字換成區塊，columns 語法一樣能正常運行。

```html title='index.html' showLineNumbers
<style>
  .content {
    columns: 2;
  }

  .content .box:nth-child(odd) {
    background-color: #dd5353;
  }

  .content .box:nth-child(even) {
    background-color: #ff731d;
  }
</style>

<div class="content">
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
</div>
```

<div class="content" style={{columns : 2}}> 
  <div style={{backgroundColor : "#DD5353"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</div>
  <div style={{backgroundColor : "#FF731D"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</div>
  <div style={{backgroundColor : "#DD5353"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</div>
  <div style={{backgroundColor : "#FF731D"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.</div>
</div>

## Media Query

但是當畫面縮小的時候會發現區塊內的文字被擠成一團了，畫面上的文字也不好閱讀。

![Image](https://i.imgur.com/RhWO2Iy.png)

這時我們可以使用 Media Query 來調整，當畫面縮小到一定大小時，直接將 column 改成 1，意思就是每一列只會顯示一個區塊。

```html title='index.html' showLineNumbers
<style>
  .content {
    columns: 2;
  }

  .content .box:nth-child(odd) {
    background-color: #dd5353;
  }

  .content .box:nth-child(even) {
    background-color: #ff731d;
  }

  @media (max-width: 40rem) {
    .content {
      columns: 1;
    }
  }
</style>

<div class="content">
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
  <div class="box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
  </div>
</div>
```

![Image](https://i.imgur.com/keQL2lY.png)

大家也可以用 CodeSandbox 來玩看看，將畫面縮小拉大，或是將 Media Query 註解掉，再縮小拉大，看會發生什麼事情。

<iframe src="https://codesandbox.io/embed/bitter-cloud-oqwkpf?fontsize=14&hidenavigation=1&theme=dark"
style={{width : "100%",height : "500px", overflow : "hidden"}} 
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>

## 瀏覽器兼容性

![Image](https://i.imgur.com/vPuLetW.png)
