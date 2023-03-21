---
title: "[typescript] TypeScript Zod"
keywords: [javascript, typescript]
description: "TypeScript Zod"
author: WeiYun0912
og:title: "[typescript] TypeScript Zod"
og:description: "TypeScript Zod"
sidebar_position: 1
---

## 官方文件

[Zod](https://zod.dev/?id=table-of-contents)

## 環境設定

先初始化 TypeScript 專案：

```
npm create vite@latest 你的專案名稱 -- --template vanilla-ts
```

接著安裝 Zod：

```
npm install zod
```

並確保 `tsconfig.json` 的 `strict` 欄位為 `true`：

```json title='tsconfig.json' showLineNumbers {8}
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ESNext", "DOM"],
    "moduleResolution": "Node",
    "strict": true,
    "resolveJsonModule": true,
    "isolatedModules": false,
    "esModuleInterop": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## Basic

### Primitives

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();
```

### parse

要使用 Zod 進行型別驗證的話，必須先定義型別，在使用 `parse` 來驗證你的變數是否有包含該型別。

要是 parse 驗證通過的話，就會直接輸出變數的值

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const MessageSchema = z.string();

const message = "Hello World";

console.log(MessageSchema.parse(message)); // Hello World
```

但如果變數不符合我們定義的型別類型，VS Code 雖然不會有提示，但是瀏覽器的 console 會有錯誤出現：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const MessageSchema = z.string();

const message = 123;

//error
console.log(MessageSchema.parse(message));
```

![Image](https://i.imgur.com/qidGx37.png)

### safeParse

如果不想讓程式因為錯誤而中斷執行，則可以改用 `safeParse`，safeParse 會回傳一個物件，裡面就包含驗證成功或失敗的訊息：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const MessageSchema = z.string();

const message = 123;

//error
console.log(MessageSchema.safeParse(message));
```

![Image](https://i.imgur.com/IZVS9gh.png)

與失敗不同，驗證通過的話，該物件內會有變數的資料：

```ts title='src/main.ts' showLineNumbers {7}
import { z } from "zod";

const MessageSchema = z.string();

const message = "Hello World";

console.log(MessageSchema.safeParse(message));
```

![Image](https://i.imgur.com/aFNYKRB.png)

### object

如果要定義一個物件型別，則可使用 `z.object` 搭配 `z.infer`：

```ts title='src/main.ts' showLineNumbers {3-6,15}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
});

/**
 * type User = {
 *   username: string;
 *   age: number;
 * }
 */

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  username: "Wei",
  age: 25,
};

console.log(Wei);
```

### optional

在 TypeScript 內，如果要讓型別是可選的話，則會在型別名稱加上 `?`，而如果是使用 Zod 則需要在型別後面加上 `.optional()`：

```ts title='src/main.ts' showLineNumbers {5}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  username: "Wei",
  age: 25,
};

console.log(Wei);
```

### Error Handling

如果需要詳細查看型別錯誤給予的錯誤訊息，則可以先判斷 `safeParse().success` 回傳的結果是否回 false，false 就代表有錯誤發生：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  //highlight
  username: z.string(),
  age: z.number().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  //error
  username: 1,
  age: -1,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
}
```

![Image](https://i.imgur.com/shlNKfI.png)

如果只想要單純的顯示錯誤訊息，則需要安裝 Zod 的驗證套件 `zod-validation-error`：

```
npm install zod-validation-error
```

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
const UserSchema = z.object({
  //highlight
  username: z.string({ invalid_type_error: "username 欄位應為字串型別" }),
  age: z.number().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  //error
  username: 1,
  age: -1,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(fromZodError(result.error));
}
```

![Image](https://i.imgur.com/w9aumTa.png)

### default

在定義型別的同時，Zod 也允許我們定義預設值，在型別後面使用 `default` 即可：

```ts title='src/main.ts' showLineNumbers {4}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().default("user"),
  age: z.number().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  age: 25,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/HhROkVE.png)

甚至可以在 `default` 內使用其他 Function：

```ts title='src/main.ts' showLineNumbers {4}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().default("user-" + crypto.randomUUID()),
  age: z.number().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  age: 25,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/I7ft0Uh.png)

## Validation

除了可以定義型別外，Zod 也提供許多驗證方法讓我們使用，詳細的可以參考[官網](https://zod.dev/?id=basic-usage)，這邊簡單介紹幾個。

### max & min (Number & Strings)

如果型別為 `Number`，則 `max` 和 `min` 是用來設定最大和最小值應為多少，型別為 `String` 的話，則是設定字串長度最大和最小應為多少：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
      //highlight
  username: z.string().max(2,{message : "username 欄位的字串最大長度應為 2"}),
    //highlight
  age: z.number().min(1,{message : "age 欄位的最小值應為 1"}).optional(),
});
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  //error
  username: "Wei", //字串最大長度應為 2
  //error
  age: -1, //數字最小值應為 0
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/hSwFHrG.png)

### email (Strings)

判斷字串是否為 `email` 格式：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  //highlight
  email: z.string().email().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  username: "Wei",
  age: 25,
  //error
  email: "yher25gmail.com",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/HwtBGpN.png)

### url (Strings)

判斷字串是否為 `url` 格式：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  //highlight
  website: z.string().url().optional(),
});

type User = z.infer<typeof UserSchema>;

const Wei: User = {
  username: "Wei",
  age: 25,
  //error
  website: "httpsweiyun0912.github.io/Wei-Docusaurus/",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/w1HDvP8.png)

### enum

使用 `enum` 能限制輸入的值：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  //highlight
  hobby: z.enum(["Sleep", "Eat", "Drink"]), // hobby 只能接收 "Sleep", "Eat", "Drink"
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 25,
  //error
  hobby: "",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/aShr7vs.png)

你也可以把 `enum` 要放的值宣告成一個陣列，像是這樣：

```ts title='src/main.ts' showLineNumbers {3,8,16}
import { z } from "zod";

const hobbies = ["Sleep", "Eat", "Drink"];

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  hobby: z.enum(hobbies),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 25,
  hobby: "Eat",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

雖然執行起來沒問題，但編譯器會出現錯誤，這是因為我們的 `hobbies` 陣列是能改變的， Zod 不知道我們的陣列是屬於哪種型別，要修正這個錯誤只要在陣列後面加上斷言即可：

```ts title='src/main.ts' showLineNumbers {3}
import { z } from "zod";

const hobbies = ["Sleep", "Eat", "Drink"] as const;

// 這樣也可以
// const hobbies = <const>["Sleep","Eat","Drink"] ;

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  hobby: z.enum(hobbies),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 25,
  hobby: "Eat",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

### nativeEum

如果想要用 `TypeScript` 來另外定義 `enum` 的話，則可以使用 `nativeEum`：

```ts title='src/main.ts' showLineNumbers {3-7,12,20}
import { z } from "zod";

enum Hobbies {
  Sleep = "sleep",
  Eat = "eat",
  Drink = "drink",
}

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  hobby: z.nativeEnum(Hobbies),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 25,
  hobby: Hobbies.Eat,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/TAWoogd.png)

## Object

Zod 物件支援的方法有些都是我們在 TypeScript 中有使用過的，例如：`partial`、`pick`、`omit` 等。

### partial

使用 `partial` 能夠讓所有型別變為可選的：

```ts title='src/main.ts' showLineNumbers {11,13}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];

const UserSchema = z
  .object({
    username: z.string(),
    age: z.number(),
    hobby: z.enum(hobbies),
  })
  .partial();

type User = z.infer<typeof UserSchema>;
```

![Image](https://i.imgur.com/PvtTgHr.png)

這樣寫也可以：

```ts title='src/main.ts' showLineNumbers {13-15,17}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  hobby: z.enum(hobbies),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
};

const result = UserSchema.partial().safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/f7Ykorb.png)

### pick

使用 `pick` 能從物件挑出要的型別：

```ts title='src/main.ts' showLineNumbers {10,12}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];
const UserSchema = z
  .object({
    username: z.string(),
    age: z.number(),
    hobby: z.enum(hobbies),
  })
  .pick({ username: true });

type User = z.infer<typeof UserSchema>;
```

![Image](https://i.imgur.com/FbV79Pi.png)

### omit

使用 `omit` 能排除不要的型別：

```ts title='src/main.ts' showLineNumbers {10,12}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];
const UserSchema = z
  .object({
    username: z.string(),
    age: z.number(),
    hobby: z.enum(hobbies),
  })
  .omit({ username: true });

type User = z.infer<typeof UserSchema>;
```

![Image](https://i.imgur.com/4gLuIgp.png)

### extend

使用 `extend` 能添加新的型別至現有的型別物件：

```ts title='src/main.ts' showLineNumbers {10,12}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];
const UserSchema = z
  .object({
    username: z.string(),
    age: z.number(),
    hobby: z.enum(hobbies),
  })
  .extend({ email: z.string() });

type User = z.infer<typeof UserSchema>;
```

![Image](https://i.imgur.com/XmStSU4.png)

### merge

如果在原先的物件型別內想要結合其他物件型別的所有欄位，則可以使用 `merge`：

```ts title='src/main.ts' showLineNumbers {5-9,17,19}
import { z } from "zod";

const hobbies = <const>["Sleep", "Eat", "Drink"];

const FoodSchema = z.object({
  name: z.string(),
  price: z.number(),
  amount: z.number(),
});

const UserSchema = z
  .object({
    username: z.string(),
    age: z.number(),
    hobby: z.enum(hobbies),
  })
  .merge(FoodSchema);

type User = z.infer<typeof UserSchema>;
```

![Image](https://i.imgur.com/Kq8M2r4.png)

### passthrough

如果在物件內傳入了一個額外的屬性，且該屬性沒有在型別物件內定義，預設的情況下是不會接收到這個屬性的：

```ts title='src/main.ts' showLineNumbers {3-5,11}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 20,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/24aW1sb.png)

如果堅持要把額外的屬性接收的話，可以使用 `passthrough`：

```ts title='src/main.ts' showLineNumbers {7}
import { z } from "zod";

const UserSchema = z
  .object({
    username: z.string(),
  })
  .passthrough();

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 20,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/PkdydN1.png)

### strict

同上節，不想要接收額外屬性的話，可以使用 `strict`：

```ts title='src/main.ts' showLineNumbers {7}
import { z } from "zod";

const UserSchema = z
  .object({
    username: z.string(),
  })
  .strict();

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  age: 20,
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

![Image](https://i.imgur.com/6Kj68DC.png)

## array

如果要讓陣列內的元素都是某一型別且不為空的話，則可以這樣寫：

```ts title='src/main.ts' showLineNumbers {5,12}
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  friends: z.array(z.string()).nonempty(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  friends: ["1", "2", "3"],
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

## tuple

使用 Tuple 能嚴謹定義陣列內的型別：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  friends: z.tuple([z.string(), z.string()]), //只能裝兩個字串元素
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  friends: ["1", "2"],
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

如果想要讓 Tuple 更加彈性的話，可以使用 `rest`：

```ts title='src/main.ts' showLineNumbers
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  // 第一個元素和第二個元素為字串型別，剩下的元素僅能是數字型別
  friends: z.tuple([z.string(), z.string()]).rest(z.number()),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  username: "Wei",
  //error
  friends: ["1", "2", "3"], // 發生錯誤，第三個元素應為 數字型別
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

## union

如果要讓一個欄位有兩種型別的話，可以這樣寫：

```ts title='src/main.ts' showLineNumbers {4,11}
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().or(z.number()), // id 可以是 字串型別 或 數字型別
  username: z.string(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  id: "1",
  username: "Wei",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

或是用 `union`：

```ts title='src/main.ts' showLineNumbers {4,11}
import { z } from "zod";

const UserSchema = z.object({
  id: z.union([z.string(), z.number()]), // id 可以是 字串型別 或 數字型別
  username: z.string(),
});

type User = z.infer<typeof UserSchema>;

const Wei = {
  id: "1",
  username: "Wei",
};

const result = UserSchema.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

## record

如果不想定義物件的 key 名稱，但又想指定物件內的值都一定要是某種型別，則可以使用 `record`：

```ts title='src/main.ts' showLineNumbers {3}
import { z } from "zod";

const UserMap = z.record(z.string()); // 物件內的值(value) 僅能是 字串型別

const Wei = {
  id: "1",
  username: "Wei",
  aaa: "test",
};

const result = UserMap.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

我們也可以定義 key 的型別：

```ts title='src/main.ts' showLineNumbers {3}
import { z } from "zod";

const UserMap = z.record(z.string(), z.string()); // {string : string}

const Wei = {
  id: "1kk",
  username: "Wei",
};

const result = UserMap.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

當然你也可以結合先前學到的 validation：

```ts title='src/main.ts' showLineNumbers {4}
import { z } from "zod";

// key 的字串長度最少為 1, value 的字串長度最多為 30
const UserMap = z.record(z.string().min(1), z.string().max(30));

const Wei = {
  id: "1kk",
  username: "Wei",
};

const result = UserMap.safeParse(Wei);

if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result);
}
```

## 參考資料

[Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
