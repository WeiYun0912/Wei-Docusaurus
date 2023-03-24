---
title: "[vscode] VS Code Emmet使用教學"
---

[影片連結](https://www.youtube.com/watch?v=EOFL8NJUlf8&ab_channel=WeiWei)

## Emmet 介紹

當我們於程式碼編輯器輸入我們的程式碼後，有時會看到該編輯器提醒我們有哪些語法可以使用，這就是 Emmet，Emmet 對於開發人員來說是個非常便利的外掛工具，如以下所示
![](https://i.imgur.com/5RcfHaa.gif)

現在打開 VS CODE 一起來使用 Emmet 吧，可以先在 html 的檔案內輸入！後按下 Tab 看看結果哦！

## Element Emmet

最基礎的就是使用 Tag 名稱觸發 Emmet，以下範例都可以直接在 VS CODE 中使用

```htmlembedded=
<!-- 按下tab即可看到結果 -->
h1  -> <h1></h1>
p   -> <p></p>
btn -> <Button></Button>
form -> <form action=""></form>
```

我們也可以幫這些 Tag 加上 class 或 id

```htmlembedded=
h1#h1 -> <h1 id="h1"></h1>
div.box -> <div class="box"></div>
.box -> <div class="box"></div>
```

## Attribute Emmet

接著我們可以幫我們的 Tag 加上一些屬性

```htmlembedded=
<!-- 按下tab即可看到結果 -->
input:text -> <input type="text" name="" id="">
form:get -> <form action="" method="get"></form>
p[color="#fff"] -> <p color="#fff"></p>
div[name='box' id='box'] -> <div name="box" id="box"></div>
```

## Text Emmet

剛剛使用的 Emmet 都沒有幫 Tag 加上文字，我們也可以使用 Emmet 補上文字，只要加上 **{}** 即可

```htmlembedded=
<!-- 按下tab即可看到結果 -->
h1{Hello World} -> <h1>Hello World</h1>
p{This is Test} -> <p>This is Test</p>
btn{Click Me} -> <button>Click me</button>
```

## Nesting Emmet

我們也可以直接使用階層式的 Emmet，上面都是使用單一 Tag 而已。

```htmlembedded=
<!-- 按下tab即可看到結果 -->
.parentBox>.childBox>h1{Inside Text} ->
<div class="parentBox">
    <div class="childBox">
        <h1>Inside Text</h1>
    </div>
</div>
```

也可以利用運算式來使用 Emmet

### 運算式 + (同階層)

```htmlembedded=
.box1+.box2+.box3 ->
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
```

### 運算式 \* (數量)

```htmlembedded=
.box*2 ->
<div class="box"></div>
<div class="box"></div>
```

## 客制化自己的 Emmet 以 VS CODE 為例 [影片](https://youtu.be/ymiX3x9Hjrg)

我們其實是可以客制化自己的 Emmet 的，透過客制化 Emmet 可以增進我們的開發速度。

在 VS CODE 中我們點選左上角**File**->**Preferences**->**User Snippets**之後會跳出以下視窗
![](https://i.imgur.com/0GZVVPZ.png)

這時候我們只要打上我們想要客製化的程式語言，就會出現對應語言的 json 檔，以下先以 JavaScript 為例

![](https://i.imgur.com/l3JOxA8.png)

打開 json 檔案後我們先介紹一下該 json 的結構

**_javascript.json_**

```json=
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
}
```

prefix

: prefix 內要輸入的是你要觸發 Emmet 提示的文字

body

: body 內要輸入的是觸發 Emmet 後要輸出的程式碼

description

: description 內要輸入的是該段 Emmet 的敘述，在提示時會出現。

$1,$2, $n....

: 在 body 的地方加上 **$1(or $2)** 可以讓設定多重選項，如果有設定到 **$2** 以上按下**Tab**後即可從 **$1 跳至設定$2** 的地方並再次觸發 Emmet，如下所示:

![](https://i.imgur.com/o0RXuvN.gif)

## Bonus

這邊將簡單設定 Axios 的 Snippets

**_javascript.json_**

```json=
{
	"Axios Request": {
		"prefix": "ar",
		"body": [
			"axios.${1|get,post,put,delete|}('${2:url}')",
			".then(res => res.json())",
			".then(data => {",
			"   $3",
			"})",
			".catch(err => console.log(err))"
		],
		"description": "Axios Request"
	}
}
```

成果如下

![](https://i.imgur.com/fQZACum.gif)
