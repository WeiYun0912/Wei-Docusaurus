---
title: "[css] 調整 Scroller Bar 的樣式"
keywords: [CSS, css, smooth scroll]
description: 如果一個頁面的內容太長，通常會為了讓使用者體驗不要太差而在頁面的右下角加上一個往上的箭頭。
author: WeiYun0912
og:title: 調整 Scroller Bar 的樣式
og:description: 如果一個頁面的內容太長，通常會為了讓使用者體驗不要太差而在頁面的右下角加上一個往上的箭頭。
sidebar_position: 2
---

import style from "./styles.module.css"

有時候在我們的網頁上會想要改變滾輪的樣式，這時候可以透過 webkit 來修改滾輪的樣式。

在網頁的預設滾輪樣式如下

```html title="index.html" showLineNumbers
<style>
  .scroll {
    overflow-y: scroll;
    height: 200px;
  }
</style>

<div class="scroll">....很多文字</div>
```

<div class={style.scroll}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam
    nisi illo similique odio accusamus consequatur, minima voluptate quo magnam,
    inventore doloremque itaque voluptatibus repellendus quos! Laudantium ex
    velit nobis magni impedit doloribus odio aspernatur dolores, aut saepe vel
    sunt sequi reprehenderit obcaecati accusamus maiores perspiciatis sint
    eveniet optio praesentium. Libero esse magnam reiciendis rem ab id culpa
    nulla ex nisi odit, totam et! Dolore dignissimos deserunt obcaecati rem
    illum consequuntur, dolores tempore iure rerum magni sunt aliquam incidunt
    asperiores voluptatum quas eveniet quos repellendus omnis eligendi
    exercitationem sint iste debitis natus. Blanditiis minima aut totam vel
    optio. Nihil, aliquam quidem quas magni facere dicta ut sint temporibus eius
    dolores iste soluta reiciendis delectus omnis harum obcaecati minus odit nam
    rem cupiditate numquam cum! Voluptas architecto accusantium maxime iste quos
    laborum eius sed? Nostrum veritatis consectetur voluptate, aliquid maxime
    quo. Quidem assumenda vitae, animi eveniet ex consequatur aliquid? Excepturi
    vitae quia architecto nam, totam, sed nostrum harum eum cumque incidunt
    officia accusantium ea tempora sunt. Dolore architecto hic, quae totam
    recusandae odio suscipit est quas quaerat adipisci neque iure exercitationem
    numquam quod laudantium ipsam nobis expedita itaque, unde accusamus corporis
    maxime quia. Voluptatibus corrupti officia quis nam odio, reprehenderit
    alias veniam molestias ullam ratione quia, dolores quaerat quam, repellendus
    quae qui fugiat dolorem provident facilis eaque dolor libero. Iste eos
    aspernatur ipsam, assumenda tenetur maxime harum vitae sequi magnam ducimus.
    Beatae dolorem dignissimos aspernatur tempora quo non cum assumenda

</div>

這樣的樣式可能不是我們想要的，來透過 webkit 來修改樣式吧！

較常用的有 `-webkit-scrollbar`、`-webkit-scrollbar-thumb`、`-webkit-scrollbar-track`。

- -webkit-scrollbar：整體滾輪的樣式
- -webkit-scrollbar-track：滾輪軌道的樣式
- -webkit-scrollbar：滾輪 bar 的樣式

讓我們先直接使用上述語法來調整滾輪樣式看看吧~

```html title="index.html" showLineNumbers
<style>
  .scrollStyle {
    overflow-y: scroll;
    height: 200px;
  }

  .scrollStyle::-webkit-scrollbar {
    width: 1vw;
  }

  .scrollStyle::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  .scrollStyle::-webkit-scrollbar-track {
    border-radius: 20px;
  }
</style>

<div class="scrollStyle">....很多文字</div>
```

<div class={style.scrollStyle} >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam
    nisi illo similique odio accusamus consequatur, minima voluptate quo magnam,
    inventore doloremque itaque voluptatibus repellendus quos! Laudantium ex
    velit nobis magni impedit doloribus odio aspernatur dolores, aut saepe vel
    sunt sequi reprehenderit obcaecati accusamus maiores perspiciatis sint
    eveniet optio praesentium. Libero esse magnam reiciendis rem ab id culpa
    nulla ex nisi odit, totam et! Dolore dignissimos deserunt obcaecati rem
    illum consequuntur, dolores tempore iure rerum magni sunt aliquam incidunt
    asperiores voluptatum quas eveniet quos repellendus omnis eligendi
    exercitationem sint iste debitis natus. Blanditiis minima aut totam vel
    optio. Nihil, aliquam quidem quas magni facere dicta ut sint temporibus eius
    dolores iste soluta reiciendis delectus omnis harum obcaecati minus odit nam
    rem cupiditate numquam cum! Voluptas architecto accusantium maxime iste quos
    laborum eius sed? Nostrum veritatis consectetur voluptate, aliquid maxime
    quo. Quidem assumenda vitae, animi eveniet ex consequatur aliquid? Excepturi
    vitae quia architecto nam, totam, sed nostrum harum eum cumque incidunt
    officia accusantium ea tempora sunt. Dolore architecto hic, quae totam
    recusandae odio suscipit est quas quaerat adipisci neque iure exercitationem
    numquam quod laudantium ipsam nobis expedita itaque, unde accusamus corporis
    maxime quia. Voluptatibus corrupti officia quis nam odio, reprehenderit
    alias veniam molestias ullam ratione quia, dolores quaerat quam, repellendus
    quae qui fugiat dolorem provident facilis eaque dolor libero. Iste eos
    aspernatur ipsam, assumenda tenetur maxime harum vitae sequi magnam ducimus.
    Beatae dolorem dignissimos aspernatur tempora quo non cum assumenda 
</div>

調整完以後會發現，怎麼原本的滾輪消失了??

這是因為一旦我們調整滾輪的樣式，原本的滾輪樣式就會全部被覆蓋，所以通常調整滾輪樣式的時候，會重新自訂一個新的滾輪樣式，我們先給 thumb 和 track 不同的背景顏色來看看效果如何。

<div class={style.flex}>

`thumb` 和 `track` 的顏色分別為

<div class={style.thumb}></div>
<div class={style.track}></div>

</div>

通常 scrollbar 的 width 不會調成 px，因為這樣縮放的時候 width 會固定，調為 1 或 2vw 較合適

```html title='index.html' showLineNumbers
<style>
  .scrollStyle {
    overflow-y: scroll;
    height: 200px;
  }
  .scrollStyle::-webkit-scrollbar {
    width: 1vw;
  }

  .scrollStyle::-webkit-scrollbar-thumb {
    background-color: #28c7fa;
    border-radius: 20px;
  }

  .scrollStyle::-webkit-scrollbar-track {
    background-color: #a1eafb;
    border-radius: 20px;
  }
</style>
<div class="scrollStyle">....很多文字</div>
```

<div class={style.scrollStyle2} >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam
    nisi illo similique odio accusamus consequatur, minima voluptate quo magnam,
    inventore doloremque itaque voluptatibus repellendus quos! Laudantium ex
    velit nobis magni impedit doloribus odio aspernatur dolores, aut saepe vel
    sunt sequi reprehenderit obcaecati accusamus maiores perspiciatis sint
    eveniet optio praesentium. Libero esse magnam reiciendis rem ab id culpa
    nulla ex nisi odit, totam et! Dolore dignissimos deserunt obcaecati rem
    illum consequuntur, dolores tempore iure rerum magni sunt aliquam incidunt
    asperiores voluptatum quas eveniet quos repellendus omnis eligendi
    exercitationem sint iste debitis natus. Blanditiis minima aut totam vel
    optio. Nihil, aliquam quidem quas magni facere dicta ut sint temporibus eius
    dolores iste soluta reiciendis delectus omnis harum obcaecati minus odit nam
    rem cupiditate numquam cum! Voluptas architecto accusantium maxime iste quos
    laborum eius sed? Nostrum veritatis consectetur voluptate, aliquid maxime
    quo. Quidem assumenda vitae, animi eveniet ex consequatur aliquid? Excepturi
    vitae quia architecto nam, totam, sed nostrum harum eum cumque incidunt
    officia accusantium ea tempora sunt. Dolore architecto hic, quae totam
    recusandae odio suscipit est quas quaerat adipisci neque iure exercitationem
    numquam quod laudantium ipsam nobis expedita itaque, unde accusamus corporis
    maxime quia. Voluptatibus corrupti officia quis nam odio, reprehenderit
    alias veniam molestias ullam ratione quia, dolores quaerat quam, repellendus
    quae qui fugiat dolorem provident facilis eaque dolor libero. Iste eos
    aspernatur ipsam, assumenda tenetur maxime harum vitae sequi magnam ducimus.
    Beatae dolorem dignissimos aspernatur tempora quo non cum assumenda 
</div>

## 練習

現在我們來打造出像下圖一樣的 scrollbar 吧!

![](https://i.imgur.com/pMdt4V1.png)

```html title='index.html' showLineNumbers
<style>
  .scrollStyle {
    width: 800px;
    overflow-x: scroll;
  }
  .content {
    width: 1000px;
  }
  .scrollStyle::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .scrollStyle::-webkit-scrollbar-thumb {
    background-color: rgba(219, 219, 219, 1);
    border-radius: 20px;
  }
</style>

<div class="scrollStyle">
  <div class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus totam.
    Eligendi, soluta consequatur expedita illum aut enim quasi ipsam. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Alias, minus totam.
    Eligendi, soluta consequatur expedita illum aut enim quasi ipsam.
  </div>
</div>
```

<div class={style.scrollStyle3}>
    <div class={style.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus
        totam. Eligendi, soluta consequatur expedita illum aut enim quasi ipsam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus
        totam. Eligendi, soluta consequatur expedita illum aut enim quasi ipsam.
    </div>
</div>
