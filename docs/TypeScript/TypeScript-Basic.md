---
title: "[typescript] TypeScript 基礎 (使用 Vite 建立環境)"
keywords: [javascript, typescript]
description: "寫給自己看的 TypeScript 基礎筆記 (Union、Tuple、Objects、Type、Interface、Extends、Type Aliases、Literal Types、Assertions、Utility Types)"
author: WeiYun0912
og:title: "[typescript] TypeScript 基礎 (使用 Vite 建立環境)"
og:description: "寫給自己看的 TypeScript 基礎筆記 (Union、Tuple、Objects、Type、Interface、Extends、Type Aliases、Literal Types、Assertions、Utility Types)"
sidebar_position: 1
---

## 說明

要快速建立 TypeScript 的專案，可以使用 Vite，在 Terminal 輸入以下的指令即可：

```
npm create vite@latest 你的專案名稱 -- --template vanilla-ts
```

接著切換到你的專案目錄，執行以下指令，就把基本的環境建置好了：

```
npm install
```

將環境 Run 起來：

```
npm run dev
```

## Union

要讓一個變數擁有多種的型別，可以使用 `Union`：

```ts title="src/main.ts" showLineNumbers
let userId: string | number = ""; // userId 只能是 string 或 number 型別
userId = true; //Type 'boolean' is not assignable to type 'string | number'.
```

## Tuple

如果要嚴謹的定義陣列內的變數型別，則可以使用 `Tuple`：

```ts title="src/main.ts" showLineNumbers
let mixed: [string, number, boolean] = ["Wei", 123, true];

mixed[0] = 123; // Type 'number' is not assignable to type 'string'.
```

## Objects & type

定義 Object 內的 Type 可以先創建一個樣板，只要使用 `type` 關鍵字即可，其他變數要使用該樣板的話必須遵循裡面定義的 Type：

```ts title="src/main.ts" showLineNumbers
type Person = {
  name: string;
  age: number;
  friends: (string | number)[];
};

let Wei: Person = {
  name: "Wei",
  age: 25,
  friends: [1, 2, 3],
};

let Yun: Person = {
  name: "Wei",
  age: "26", // Type 'string' is not assignable to type 'number'.
  friends: [1, 2, 3],
};
```

另外，如果使用了 `Person` 當作樣板，變數也都需要將 Person 有的屬性定義出來，不然同樣會發生錯誤：

```ts title="src/main.ts" showLineNumbers
type Person = {
  name: string;
  age: number;
  friends: (string | number)[];
};

// Property 'friends' is missing in type '{ name: string; age: number; }' but required in type 'Person'.
let Wei: Person = {
  name: "Wei",
  age: 25,
};
```

這樣寫是不行的，因為 `Person` 內沒有 `email` 這個屬性：

```ts title="src/main.ts" showLineNumbers
type Person = {
  name: string;
  age: number;
  friends: (string | number)[];
};

let Wei: Person = {
  name: "Wei",
  age: 25,
  friends: [1, 2, 3],
  email: "test@gmail.com", // { email: string; }' is not assignable to type 'Person'
};

Wei.email = "test@gmail.com"; // Property 'email' does not exist on type 'Person'.
```

但我們可以讓 `Person` 內的屬性變為可選的，只要在屬性名稱後加上 `?` 即可：

```ts title="src/main.ts" showLineNumbers
type Person = {
  name: string;
  age: number;
  friends: (string | number)[];
  email?: string;
};

let Wei: Person = {
  name: "Wei",
  age: 25,
  friends: [1, 2, 3],
};
```

## Interface & Extends

假設我們有兩種型別需要定義，`Person` 和 `Employee`，對某些物件來說可能只會用到 Person 內定義的屬性，並不會使用到 Employee 內定義的屬性：

```ts title="src/main.ts" showLineNumbers
type Person = {
  personName: string;
  age: number;
  friends: (string | number)[];
  email?: string;
};

type Employee = {
  employeeName: string;
  salary: number;
};
```

這時候如果用 `type` 來實作的話，可以寫成這樣：

```ts title="src/main.ts" showLineNumbers
type Person = {
  personName: string;
  age: number;
  friends: (string | number)[];
  email?: string;
};

type Employee = {
  employeeName: string;
  salary: number;
};

type PersonEmployee = Person & Employee {

let Wei: PersonEmployee = {
  personName: "Wei",
  age: 25,
  friends: [1, 2, 3],
  employeeName: "front-end developer",
  salary: 50000,
};
```

但問題出現了，如果我們想要讓 `PersonEmployee` 也有自己的屬性的話該怎麼辦？

答案是我們可以使用 `interface` 取代 `type`，並用 `extends` 延伸其他先前定義的屬性：

```ts title="src/main.ts" showLineNumbers {13}
interface Person = {
  personName: string;
  age: number;
  friends: (string | number)[];
  email?: string;
};

interface Employee = {
  employeeName: string;
  salary: number;
};

interface PersonEmployee extends Person, Employee {
  bossName?: string;
}

let Wei: PersonEmployee = {
  personName: "Wei",
  age: 25,
  friends: [1, 2, 3],
  employeeName: "front-end developer",
  salary: 50000,
  bossName: "Yun",
};
```

所以可以這樣說， `type` 較屬於靜態定義，而 `interface` 則可以搭配 `extends` 來達到動態定義。

## Type Aliases

如果有重複的型別定義，可以使用 `type` 將型別儲存成一個樣板：

```ts title='src/main.ts' showLineNumbers
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Person = {
  id: stringOrNumber;
  friends: stringOrNumberArray;
};
```

## Literal Types

我們也可以指定變數能填寫的值：

```ts title='src/main.ts' showLineNumbers
let username: "Wei" | "Yun" | "John";
//Type '"Alex"' is not assignable to type '"Wei" | "Yun" | "John"'.
username = "Alex"; //
```

## Function

如果 Function 需要接收外部參數，則需要定義參數的型別：

```ts title='src/main.ts' showLineNumbers
//Parameter 'a' implicitly has an 'any' type.
//Parameter 'b' implicitly has an 'any' type.
const add = (a, b) => {
  return a + b;
};
```

需更改成這樣：

```ts title='src/main.ts' showLineNumbers
const add = (a: number, b: number) => {
  return a + b;
};
```

也可以指定 Function 的回傳值型別：

```ts title='src/main.ts' showLineNumbers
const add = (a: number, b: number): number => {
  return a + b;
};
```

如果沒有任何回傳值的話，可以寫成 `void`：

```ts title='src/main.ts' showLineNumbers
const log = (message: any): void => {
  console.log(message);
};
```

也可以更改成 `Type Aliases` 的方式：

```ts title='src/main.ts' showLineNumbers
type addFunction = (a: number, b: number) => number;

const add: addFunction = (a, b) => {
  return a + b;
};
```

用 `interface` 來寫的話，則寫成以下：

```ts title='src/main.ts' showLineNumbers
interface addFunction {
  (a: number, b: number): number;
}

const add: addFunction = (a, b) => {
  return a + b;
};
```

Function 接收的外部參數，可以給予預設值：

```ts title='src/main.ts' showLineNumbers
const add = (a: number = 10, b: number) => {
  return a + b;
};

add(undefined, 10); // 20
add(15, 10); // 25
```

我們可以使用 `Rest Parameters` 來將傳遞進 Function 的參數一併處理：

```ts title='src/main.ts' showLineNumbers
const sum = (...nums: number[]) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
};

sum(1, 2, 3, 4); // 10
```

如果有一個不會有回傳值的 Function，則 TypeScript 會自動將它定義為 `never`，像是 `無限迴圈` 和 `錯誤處理`。

另外要特別提一點，`never` 是所有型別的子型別(Bottom Type)。

```ts title='src/main.ts' showLineNumbers
const infiniteLoop = () => {
  let i: number = 0;
  while (true) {
    i++;
  }
};

const errorHandler = (errorMessage: any) => {
  throw new Error(errorMessage);
};
```

![Image](https://i.imgur.com/aMWmnjx.png)

![Image](https://i.imgur.com/dvzW8TR.png)

`never` 型別較常用在錯誤處理的方面，像是 `Type Guard`，如果傳入 string 或 number 以外的型別，TypeScript 會自動判斷傳進來的型別均為 never，這也是為什麼回傳 `errorHandler` 時不會發生錯誤，因為 `errorHandler` 為 never 型別。

```ts title='src/main.ts' showLineNumbers
const errorHandler = (errorMessage: any) => {
  throw new Error(errorMessage);
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return errorHandler("Error");
};
```

## Assertions

如果使用 DOM 方法去取得元素控制權的話，TypeScript 會隨著取得的方式不同而給予不同的型別。

如果使用指定 ID 或 Class 的方式來取得元素，TypeScript 會不知道我們要取得的是哪種標籤元素，進而回傳 Element 型別。

![Image](https://i.imgur.com/3aTaXEv.png)

要是直接告訴 TypeScript，我們要取得的是 span 或 p，TypeScript 就會知道要回傳該元素的型別。

![Image](https://i.imgur.com/pDhj7uX.png)

所以要用 ID 、 Class 或其他選擇器取得元素的話，會用 `as` 關鍵字，也就是斷言(Assertion)，直接定義型別，因為我們知道要取得的元素是什麼型別，但 TypeScript 不知道：

```ts title='src/main.ts' showLineNumbers
const spanId = document.querySelector("#span") as HTMLSpanElement;
const pId = document.querySelector("#p") as HTMLParagraphElement;
```

你可能也有看過這樣的寫法，這樣寫也是屬於斷言的一種：

```ts title='src/main.ts' showLineNumbers
const spanId = <HTMLSpanElement>document.querySelector("#span");
const pId = <HTMLParagraphElement>document.querySelector("#p");
```

## Index Signatures & keyof Assertions

假設今天有一物件，名為 `bill`，而該物件對應的型別為 `Menu`。

```ts title='src/main.ts' showLineNumbers
interface Menu {
  Pizza: number;
  Burger: number;
  Water: number;
}

const bill: Menu = {
  Pizza: 200,
  Burger: 120,
  Water: 30,
};

console.log(bill.Pizza); //200
```

如果今天需要將 bill 物件內的值全部加起來，可能會這樣做：

```ts title='src/main.ts' showLineNumbers
interface Menu {
  Pizza: number;
  Burger: number;
  Water: number;
}

const bill: Menu = {
  Pizza: 200,
  Burger: 120,
  Water: 30,
};

const todayBill = (): number => {
  let total = 0;
  for (const billKey in bill) {
    // No index signature with a parameter of type 'string' was found on type 'Menu'.
    total += bill[billKey];
  }

  return total;
};
```

但 TypeScript 會跳出錯誤提示，說我們沒有添加 `index signature`，這通常會在動態載入的情況下發生。

要修正這個錯誤只要添加 `index signature` 即可：

```ts title='src/main.ts' showLineNumbers
interface Menu {
  [index: string]: number;
}

const bill: Menu = {
  Pizza: 200,
  Burger: 120,
  Water: 30,
};

const todayBill = (): number => {
  let total = 0;
  for (const billKey in bill) {
    total += bill[billKey];
  }

  return total;
};

console.log(todayBill());
```

這樣寫的意思是我們的物件內的 key 都是 string，而 key 對應的值都是 number。

如果不想提供 index signature 的話，則可以使用 `keyof` 取代之：

```ts title='src/main.ts' showLineNumbers
interface Menu {
  Pizza: number;
  Burger: number;
  Water: number;
}

const bill: Menu = {
  Pizza: 200,
  Burger: 120,
  Water: 30,
};

const todayBill = (): number => {
  let total = 0;
  for (const billKey in bill) {
    total += bill[billKey as keyof Menu];
  }

  return total;
};

console.log(todayBill());
```

或是搭配 `typeof` 直接從物件取得 type：

```ts title='src/main.ts' showLineNumbers
interface Menu {
  Pizza: number;
  Burger: number;
  Water: number;
}

const bill: Menu = {
  Pizza: 200,
  Burger: 120,
  Water: 30,
};

const todayBill = (): number => {
  let total = 0;
  for (const billKey in bill) {
    total += bill[billKey as keyof typeof bill];
  }

  return total;
};

console.log(todayBill());
```

## Utility Types

### Partial

如果只想提取物件內部分的值，不想全部提取的話，可以使用 `Partial` 關鍵字：

```ts title='src/main.ts' showLineNumbers
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "1",
  title: "Project",
  grade: 0,
};

const assignGraded: Assignment = updateAssignment(assign1, { grade: 100 });
```

### Required

如果在物件型別內有使用到 `?` 可選關鍵字，但又想讓某個物件變數必須將所有型別都定義且附值，則可以使用 `Required` 關鍵字：

```ts title='src/main.ts' showLineNumbers
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const assign1: Assignment = {
  studentId: "1",
  title: "Project",
  grade: 100,
};

//因為有使用到 Required，所以 assign2 必須定義 verified。
const assign2: Required<Assignment> = {
  studentId: "1",
  title: "Project",
  grade: 100,
  verified: true,
};
```

### Record

如果想限制變數內能使用的 key 和 value 的 type，則可以使用 `Record` 關鍵字：

```ts title='src/main.ts' showLineNumbers
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};
```

同樣的也可以限制能輸入的值：

```ts title='src/main.ts' showLineNumbers
type Students = "Wei" | "Yun";
type Grades = "A" | "B" | "C" | "D";

// key 只能是 Wei 或 Yun
// value 只能是 A B C D
const finalGrades: Record<Students, Grades> = {
  Wei: "A",
  Yun: "B",
};
```

改為 interface：

```ts title='src/main.ts' showLineNumbers
type Students = "Wei" | "Yun";

interface Grades {
  assign1: number;
  assign2: number;
}

const finalGrades: Record<Students, Grades> = {
  Wei: {
    assign1: 100,
    assign2: 90,
  },
  Yun: {
    assign1: 95,
    assign2: 90,
  },
};
```

### Pick

如果想限制變數能使用的 key，則可以使用 `Pick` 關鍵字：

```ts title='src/main.ts' showLineNumbers
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

type AssignResult = Pick<Assignment, "studentId" | "grade">;

// score 物件只能定義 studentId 和 grade
const score: AssignResult = {
  studentId: "1",
  grade: 100,
};
```

### Omit

同上，如果想讓變數不能使用特定 key 的話，則可以使用 `Omit` 關鍵字：

```ts title='src/main.ts' showLineNumbers
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

type AssignResult = Omit<Assignment, "studentId" | "grade">;

// score 物件不能定義 studentId 和 grade
const score: AssignResult = {
  title: "Project",
};
```

### Exclude

如果想把某個值排除在外的話，可以使用 `Exclude` 關鍵字：

```ts title='src/main.ts' showLineNumbers
type Grades = "A" | "B" | "C" | "D";

// type adjustedGrade = "A" | "B" | "C"
type adjustedGrade = Exclude<Grades, "D">;
```

### Extract

如果想把某個值提取出來的話，可以使用 `Extract` 關鍵字：

```ts title='src/main.ts' showLineNumbers
type Grades = "A" | "B" | "C" | "D";

// type highGrade = "A" | "B"
type highGrade = Extract<Grades, "A" | "B">;
```

### NonNullable

如果想排除 `undefined` 和 `null` 的話，則可以使用 `NonNullable` 關鍵字：

```ts title='src/main.ts' showLineNumbers
type Grades = "A" | "B" | "C" | "D" | undefined | null;

// type onlyValidValues = "A" | "B" | "C" | "D"
type onlyValidValues = NonNullable<Grades>;
```

### ReturnType

如果想要直接取得 Function Return 的型別又不想定義 Type 的話，可以使用 `ReturnType` 關鍵字：

```ts title='src/main.ts' showLineNumbers
//不使用 ReturnType
type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number): newAssign => {
  return { title, points };
};
```

```ts title='src/main.ts' showLineNumbers
//使用 ReturnType
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// type NewAssign = {
//     title: string;
//     points: number;
// }
type NewAssign = ReturnType<typeof createNewAssign>;
```
