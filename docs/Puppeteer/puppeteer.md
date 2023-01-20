---
title: "[puppeteer] 爬蟲與瀏覽器自動化的好幫手 — Puppeteer"
keywords: [puppeteer]
---

[Github 連結](https://github.com/WeiYun0912/Puppeteer-Grab-Pngimg-Pictures)

## 說明

puppeteer 是 Google 官方出品的一個 Node 套件，其作用是能夠對瀏覽器做自動化的控制同時也能夠作為爬蟲來訪問頁面並搜集資料。

要使用 puppeteer **建議使用 7.6 版本以上的 Node**，因為 7.6 版本以上的才有支援**async/await**，沒錯~ 就是非同步，因為我們在瀏覽器上面做的動作，都必須要是非同步的。

這邊先簡單提一下利用 puppeteer 能達到的事情：

1. 能夠直接進入指定的網站，並截取當下的畫面，也可以滾動頁面到適當位置再進行截圖。
2. 能夠直接爬取 SPA 網站，並取得 html。
3. 自動化控制瀏覽器，類似 python 的 selenium，但 puppeteer 的語法更為直觀。

我們先來初始化專案，並安裝 puppetter。

```javascript
npm init -y
```

初始化完之後來安裝 puppetter

```javascript
npm -i puppeteer
```

## 爬取網站文字

我們來用巴哈當作爬取的對象 [網址點我](https://forum.gamer.com.tw/B.php?bsn=60076&subbsn=0)

在爬取之前先來了解一下如何開啟瀏覽器，開啟的瀏覽器預設是 Chromium，因為等等要執行的動作都是非同步，所以要加上 async。

```javascript
const puppeteer = require("puppeteer");
const start = async () => {
  const browser = await puppeteer.launch(); //啟動
  const page = await browser.newPage(); //開啟新頁面
  await page.goto("https://forum.gamer.com.tw/B.php?bsn=60076&subbsn=0"); //到指定網址
};

start();
```

透過以上程式碼，讓 Chromium 到達指定的網站，接著我們就可以來爬取網站的內容囉
我們打開開發者工具(F12)，可以發現文章的標題都放在**_b-list\_\_tile_** class 底下。

![](https://i.imgur.com/IKI6Jck.png)

知道了以上資訊後，就來爬取裡面的內容吧！

```javascript title="puppeteer.js" showLineNumbers
const puppeteer = require("puppeteer");
const start = async () => {
  const browser = await puppeteer.launch(); //啟動
  const page = await browser.newPage(); //開啟新頁面
  await page.goto("https://forum.gamer.com.tw/B.php?bsn=60076&subbsn=0"); //到指定網址

  const articles = await page.evaluate(() => {
    const article = document.querySelectorAll(".b-list__tile");
    return Array.from(article).map((a) => a.textContent);
  });

  console.log(articles);
};

start();
```

我們可以利用**page**提供的**evaluate function**來取得頁面的**html**，並且在裡面能使用基本的 DOM 語法，像是**document.getElementById**或是其他選擇器，但這邊一律建議使用**document.querySelector**來選取 DOM 元素。

因為我們是用**querySelectorAll**來選取元素，返回的內容是**NodeList**，**NodeList**本身不提供**map**方法，所以可以使用**Array.from**將其轉為**array**。

這邊要注意一點，就是程式碼**第 7 行**的**articles**並不是**function**，所以**console**的時候不需要加上()。

現在我們來執行程式吧！

```javascript
node .\app.js
```

程式運行後 console 後的結果如下：

```json
[
  "\n置頂\n【分流】進板圖招募 / 精華好文推薦 / 板務建議區\n",
  "\n置頂\n【認真求助】懇請正義人士提供死亡車禍現場行車紀錄器的畫面NEW456\n",
  "\n精華\n【公告】九月投票結果公告：大樓專區設立、嚴管政治筆戰NEW456\n",
  "\n置頂\n【招募】第九屆場外管理小組招募開始～NEW123\n",
  "\n精華\n【宣導】關於話題討論時，請勿刻意到其他地方鬧板_2021.10.13更新\n",
  "\n置頂\n【宣導】這幾天具爭議的勇造與圖片事件，請留意發表內容NEW678\n",
  "\n\n【閒聊】一百天後就會被桶的樓主12\n",
  "\n\n【情報】桐人是好人888990\n",
  "\n\n【可莉】可莉大戰爭8910\n",
  "\n\n【討論】各位當兵時有遇過小蜜蜂餐車嗎，聽說\"位階\"比營長還大\n",
  "\n\n【閒聊】巴哈商城也花了好幾萬，原來我都搶輸這種人123\n",
  "\n\n【問題】搶購默沙東「新冠口服藥」有進展！陳時中透露：快要簽約了12\n",
  "\n\n【問題】一人一個對自己長相最自卑ㄉ地方789\n",
  "\n\n【討論】承認歷史事實,承認中華民國國旗沾染無辜台灣人鮮血很困難嗎\n",
  "\n\n【問題】民進黨會因為這次大火丟掉多少選票？？？\n",
  "\n\n【問題】陳其邁鎮魂曲\n",
  "\n\n【學測】111學測集中串／ＤＣ群招生中，連結在主樓！招收老人中！585960\n",
  "\n\n【攻略】日本人要毀掉幾個經典才開心ㄚ？12\n",
  "\n\n【心得】唐可可的乳房123\n",
  "\n\n【閒聊】坐公車 明明不是馬上下車卻很愛坐外側的人\n",
  "\n\n【問題】有人要扁胡桃嗎12\n",
  "\n\n【討論】被幾百度的大火燒到是啥感覺啊12\n",
  "\n\n【自製遊戲】勇者之島 : 地下城(多人網頁遊戲) - 成長鑽石寶箱、巔峰對決活動!110811091110\n",
  "\n\n【問題】超商預約5倍卷會被收2元簡訊費？？\n",
  "\n\n【問題】人命好像越來越不值錢了。\n",
  "\n\n【問題】有人遇過那種私下跟平常反差很大的人嗎\n",
  "\n\n【心得】G邁是高雄有史以來最好的市長\n",
  "\n\n【問題】遭酸不讓座給小孩 女大生：不是博愛座也要？\n",
  "\n\n【心得】台灣人很喜歡二創別國的東西，然後還很自豪\n",
  "\n\n【情報】馬斯克想玩原神\n"
]
```

## 爬取網站圖片

現在我們來爬取網站的圖片，這邊改用[這個網站](https://pngimg.com/)。

這次分析過後發現圖片會放在**png_png** class 底下，而底下還有個**a**標籤。

![](https://i.imgur.com/wK2PwOV.png)

所以程式碼跟上面爬取文章標題的方式差不多

```javascript title="puppeteer.js" showLineNumbers
const puppeteer = require("puppeteer");
const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://pngimg.com/images/animals/walrus");

  const photos = await page.evaluate(() => {
    const photo = document.querySelectorAll(".png_png a img");
    return Array.from(photo).map((p) => p.src);
  });

  console.log(photos);
};

start();
```

運行的結果如下：

```json
[
  "https://pngimg.com/uploads/walrus/walrus_PNG9.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG8.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG7.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG6.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG5.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG4.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG3.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG2.png",
  "https://pngimg.com/uploads/walrus/walrus_PNG1.png"
]
```

## 將圖片下載到電腦

這邊我們可以用另外一種方式來抓取 DOM，也就是**page.\$eval** 和 **page.$$eval**，用法如以下程式碼

```javascript title="puppeteer.js" showLineNumbers
const puppeteer = require("puppeteer");
const cron = require("node-cron");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://pngimg.com/images/animals/walrus");
  const photos = await page.$$eval(".png_png a img", (imgs) => {
    return imgs.map((x) => x.src);
  });
};
```

而執行的結果跟上面一樣，而 **\$eval** 和 **\$\$eval** 差別在於，<br />**\$是 document.querySelector**，**$$是 document.querySelectorAll**。

那現在就讓我們來下載圖片吧~~

首先要先引入 fs/promises，之後利用 fs 將檔案下載存成 buffer，並將圖片儲存到根目錄。

:::note
備註：上網查了一下 fs/promises 在 node 12 好像被移除了，所以本範例是使用 14 版以上的 node。
:::

```javascript title="puppeteer.js" showLineNumbers
const fs = require("fs/promises");
const puppeteer = require("puppeteer");

const start = async () => {
  console.time("Test Grab Image Time");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(0);

  await page.goto("http://pngimg.com/images/animals/walrus");
  const photos = await page.$$eval(".png_png a img", (imgs) => {
    return imgs.map((x) => x.src);
  });

  console.log(photos);

  for (const photo of photos) {
    const imagePage = await page.goto(photo);
    console.log(`下載 ${photo.split("/").pop()} 中...`);
    fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
  }
};
```

執行以上程式碼後，圖片就成功下載下來嚕！

這邊還有一件事情需要注意，要是下載圖片過多，又或者是檔案太大，需要在**page.goto**加上之前加上**await page.setDefaultNavigationTimeout(0)**，才不會造成 Navigation Timeout 的問題。

## 自動化

現在我們來簡單的示範一下，如何點擊指定元素，並於指定元素上輸入文字。
這邊就以 [Google](https://www.google.com/) 來當範例吧！

```javascript title="puppeteer.js" showLineNumbers
const puppeteer = require("puppeteer");
const start = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www.google.com/");
  await page.click("[title='Google 搜尋']");
  await page.type("[title='Google 搜尋']", "Mr.robot season 4");
  await (await page.$('input[title="Google 搜尋"]')).press("Enter"); // $ = docuemnt.querySelector()
};

start();
```

## 結語

puppeteer 做為一個爬蟲與瀏覽器自動化的工具是非常實用，比起 python 的 selenium，puppeteer 的語法更為直觀，如果會使用基本的 DOM 語法的話，puppetter 會更好上手。
