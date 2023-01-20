---
title: "[react] React常用的JavaScript語法 - 樣板字串"
keywords: [react, react教學, javascript, template string]
description: 在樣板字串還沒出現時，要在 JavaScript 串接字串是非常麻煩的事情，且也必須考慮到格式的問題。
author: WeiYun0912
og:title: React常用的JavaScript語法 - 樣板字串
og:description: 在樣板字串還沒出現時，要在 JavaScript 串接字串是非常麻煩的事情，且也必須考慮到格式的問題。
sidebar_position: 2
---

[影片連結](https://www.youtube.com/watch?v=ik6r85_Q9h4)

## JavaScript

在樣板字串還沒出現時，要在 JavaScript 串接字串是非常麻煩的事情，且也必須考慮到格式的問題。

假設有一包陣列，而我們需要將陣列內的 name 通通串接成一個字串變數，則不使用樣板字串的程式碼如下：

```js title='index.js' showLineNumbers
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName = pokemons[0].name + pokemons[1].name + pokemons[2].name;

console.log(allPokemonName); // output : BulbasaurIvysaurVenusaur
```

:::note 備註
這邊先不考慮使用到 Array Function 來串接字串
:::

而如果又需要在各個 name 之間加上空格的話，又必須改寫成以下：

```js title='index.js' showLineNumbers
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName =
  pokemons[0].name + " " + pokemons[1].name + " " + pokemons[2].name;

console.log(allPokemonName); // output : Bulbasaur Ivysaur Venusaur
```

如果要換行的話也一樣：

```js title='index.js' showLineNumbers
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName =
  pokemons[0].name + "\n" + pokemons[1].name + "\n" + pokemons[2].name;

console.log(allPokemonName);
//output :
//Bulbasaur
//Ivysaur
//Venusaur
```

接著我們來試著改寫成樣板字串，樣板字串需用重音符 **``** 將整個字串包住：

```js title=index.js showLineNumbers
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName = `${pokemons[0].name} ${pokemons[1].name} ${pokemons[2].name}`;

console.log(allPokemonName); // output : Bulbasaur Ivysaur Venusaur
```

:::note 備註
在樣板字串中，**${}** 內可以放我們的變數。
:::

改寫成樣板字串後，可以看到程式碼變的非常的整齊，也較易讀，在裡面輸入的空格也會直接被讀取到。

需要換行的話，也只要在變數後加個 Enter 就行了：

```js title='index.js' showLineNumbers
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName = `
${pokemons[0].name} 
${pokemons[1].name} 
${pokemons[2].name}
`;

console.log(allPokemonName);
//output :
//Bulbasaur
//Ivysaur
//Venusaur
```

## React

現在在 Result 的地方輸入文字，目前還尚未使用到樣板字串，所以如果需要在文字之間加上空格或是其他符號的話，一樣要使用 **+** 來串接字串。

```jsx title='App.js' showLineNumbers live
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <br />
      {"Hello" + " | " + value}
    </div>
  );
}
```

改為樣板字串後：

```jsx title='App.js' showLineNumbers live
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <br />
      {`Hello | ${value}`}
    </div>
  );
}
```

現在把剛剛測試用的陣列給引入，並使用 map function 將資料給顯示到畫面上，下方程式碼為尚未使用樣板字串的寫法，可以看到在 img src 的地方程式碼變的較不易讀。

```jsx title='App.js' showLineNumbers live
function App() {
  const pokemons = [
    {
      dexId: 1,
      name: "Bulbasaur",
    },
    {
      dexId: 2,
      name: "Ivysaur",
    },
    {
      dexId: 3,
      name: "Venusaur",
    },
  ];
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {pokemons.map((pokemon) => (
        <>
          <p>{pokemon.name}</p>
          <img
            src={
              "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00" +
              pokemon.dexId +
              ".png"
            }
          />
        </>
      ))}
    </div>
  );
}
```

:::note 備註
神奇寶貝的圖片是從這個網址找的：https://www.pokemon.com/us/pokedex/

觀察之後得知該，網站是使用神奇寶貝的圖鑑編號去取得圖片，所以我們可以將陣列內的 dexId 當作我們的圖鑑編號去該網站取得圖片。
:::

而改寫成樣板字串後：

```jsx title='App.js' showLineNumbers live
function App() {
  const pokemons = [
    {
      dexId: 1,
      name: "Bulbasaur",
    },
    {
      dexId: 2,
      name: "Ivysaur",
    },
    {
      dexId: 3,
      name: "Venusaur",
    },
  ];
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {pokemons.map((pokemon) => (
        <>
          <p>{pokemon.name}</p>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.dexId}.png`}
          />
        </>
      ))}
    </div>
  );
}
```
