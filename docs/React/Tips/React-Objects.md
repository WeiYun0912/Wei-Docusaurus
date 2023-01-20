---
title: "[react] React常用的JavaScript語法 - 物件"
keywords: [react, react教學, javascript, objects]
description: 我們也可以複製物件的 key 和 value 到新的物件，只要在新物件中使用其餘語法(rest syntax)即可。
author: WeiYun0912
og:title: React常用的JavaScript語法 - 物件
og:description: 我們也可以複製物件的 key 和 value 到新的物件，只要在新物件中使用其餘語法(rest syntax)即可。
sidebar_position: 4
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

## JavaScript

要定義一個物件的方式如下，由一個 key(鍵值) 和 value(值) 所組成：

```js title='index.js' showLineNumbers
let name = "Apple";
let color = "red";

let food = {
  name: name, // key : value
  color: color, // key : value
};

console.log(food); // output : { name: 'Apple', color: 'red' }
```

如果變數名稱和要放進物件內的 key 相同，則可以不必填寫 value。

### Rest Syntax

```js title='index.js' showLineNumbers
let name = "Apple";
let color = "red";

let food = {
  name, // 這樣寫等同於 name : name
  color, // 這樣寫等同於 color : color
};

console.log(food); // output : { name: 'Apple', color: 'red' }
```

我們也可以複製物件的 key 和 value 到新的物件，只要在新物件中使用其餘語法(rest syntax)即可，但要是在新物件中定義了與原先物件相同的 key 不同的 value，則會直接覆寫掉原先物件原本的 key 和 value。

```js title='index.js' showLineNumbers
let food = {
  name: "Apple",
  color: "red",
  price: 20,
  quantity: 1,
};

let food2 = {
  ...food, // ... 代表其餘語法 將原先物件的key 和 value全部複製過來
  color: "green",
};

console.log(food2); // output : { name: 'Apple', color: 'green', price: 20, quantity: 1 }
```

:::note 備註
... 代表其餘語法，意思是將原先物件的 key 和 value 全部複製過來，但要是在新的物件中定義了與原先物件相同的 key 不同的 value，則會直接在新物件中進行覆寫。
:::

### Destructuring Assignment

如果要取出物件內的值(value)，通常會使用 <Highlight color="gray">.</Highlight> 的方式來去取得。

```js title='index.js' showLineNumbers
let food = {
  name: "Apple",
  color: "red",
  price: 20,
  quantity: 1,
};

let name = food.name;
let color = food.color;
let price = food.price;

console.log(name, color, price); // output : Apple red 20
```

但如果要取得的值過多的話，就需要寫非常多行程式碼，而我們可以使用解構賦值的方式來快速取得物件內的值：

```js title='index.js' showLineNumbers
let food = {
  name: "Apple",
  color: "red",
  price: 20,
  quantity: 1,
};

let { name, color, price } = food;

console.log(name, color, price); // output : Apple red 20
```

也可以將取出來的值重新命名：

```js title='index.js' showLineNumbers
let food = {
  name: "Apple",
  color: "red",
  price: 20,
  quantity: 1,
};

let { name: newName, color: newColor, price: newPrice } = food;

console.log(newName, newColor, newPrice); // output : Apple red 20
```

## React

現在按下 Result 的按鈕，會發現原本顯示在畫面上的 age 和 sex 的值不見了，這是因為我們的 <Highlight color="gray">changeUseData</Highlight> function 在傳入物件值的時候，並沒有將 age 和 sex 填寫進去。

```jsx title='App.js' showLineNumbers live
function App() {
  const [user, setUser] = useState({
    name: "WeiWei",
    age: 24,
    sex: "male",
  });

  const changeUserData = () => {
    setUser({
      name: "Alex",
    });
  };

  return (
    <div className="App">
      <button onClick={changeUserData}>Click</button>
      <p>name : {user.name}</p>
      <p>age : {user.age}</p>
      <p>sex : {user.sex}</p>
    </div>
  );
}
```

這時可以使用其餘語法來幫助我們將剩下的 key 和 value 填寫進去：

```jsx title='App.js' showLineNumbers live
function App() {
  const [user, setUser] = useState({
    name: "WeiWei",
    age: 24,
    sex: "male",
  });

  const changeUserData = () => {
    setUser({
      ...user,
      name: "Alex",
    });
  };

  return (
    <div className="App">
      <button onClick={changeUserData}>Click</button>
      <p>name : {user.name}</p>
      <p>age : {user.age}</p>
      <p>sex : {user.sex}</p>
    </div>
  );
}
```
