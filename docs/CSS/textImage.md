---
title: "[css] 將文字的背景設定為圖片"
keywords: [CSS, css, skeleton]
description: 要將文字的背景設定為圖片的話，只要在文字設定 background-image後，之後使用 background-clip:text 和 color:transparent 即可。
author: WeiYun0912
og:title: 將文字的背景設定為圖片
og:description: 要將文字的背景設定為圖片的話，只要在文字設定 background-image後，之後使用 background-clip:text 和 color:transparent 即可。
---

import style from "./styles.module.css"

要將文字的背景設定為圖片的話，只要在文字設定 `background-image` 後，之後使用 `background-clip: text` 和 `color:transparent` 即可。

```css title='style.css' showLineNumbers
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.image p {
  font-size: 5em;
  background-image: url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-clip: text;
  background-position: center center;
  color: transparent;
}
```

```html title='index.html' showLineNumbers
<div class="image">
  <p>Image Text Transparent</p>
</div>
```

<div class={style.image}>
  <p>Image Text Transparent</p>
</div>
