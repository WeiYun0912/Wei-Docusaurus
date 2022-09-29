這篇是要來教如何使用**Redux Toolkit**，和以往不同，**Redux Toolkit**簡化了許多，在 Toolkit 還沒出來時，使用**Redux**來管理與操作**State**非常麻煩，今天的範例就簡單做個輸入資料然後登入的動作。

## 初始化

在開始之前先使用 npm 來安裝**Redux Toolkit**吧！

```javascript
npm i react-redux @reduxjs/toolkit
```

使用**Redux Toolkit**之前，我們需要先做初始化的動作，我們先在**_index.js_**檔案做初始化，您也可選擇額外創建一個檔案，在裡面做初始化並**Export**。

**_index.js_**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

我們首先利用**configureStore**來建立**Store**，而**Store**內的**reducer**就是我們管理**State**的**Function**，這部份待會再來做定義。

跟以往一樣，我們需要一個**redux**的**Provider**來將**store**傳到子組件。

## 建立 reducer

而現在可以先來創建我們的第一個**reducer**，在**src**目錄下新建一個資料夾，名為**reducers**，而繼續在該資料下創建新的檔案，名為**userSlice.js**。

**_userSlice.js_**

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { name, age, email } = action.payload;
      state.value = {
        name,
        age,
        email,
        isLogin: true,
      };
    },
    setLogout(state, action) {
      state.value = initialState;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
```

這邊有幾個部分要介紹

==name==:這個 Slice 的名稱，建議取跟檔名有關係的。

==initialState==:初始化的 State，在該部分需要定義初始的 State，如程式碼 3~9 行。

==reducers==:最重要的部分，在裡面我們可以定義改變 State 的 function，而 function 內預設會帶入兩個參數，分別是**state**和**action**。

==state==:state 為我們在 initialState 內定義的變數，我們可以直接透過物件訪問的方式來修改 state，像是**state.name="wei"**。

==action==:如果有外部參數傳進來的話，我們可以利用 action 來取得，在 action 物件裡面還會有個 payload，所以記得取得**外部參數**的時候要使用**action.payload**，也可以使用**解構**的方式。

建立完以後，在**index.js**的部分要改成以下：

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./reducers/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

程式碼第十行的部分，要將剛剛定義的 Slice 加入到 reducer 內，而前面定義的名稱很重要，後續要將 State 取出必須先訪問該名稱才能取得資料。

## Components

我們先來建立等等會用到的 component，會有 3 個。

在 Profile 中，先將**LoginComponent**和**NotLoginComponent**引入，待會我們會利用**useSelector hook**，將原先定義的**State**內的**login**取出，來判斷現在使用者登入狀態還是未登入狀態。

**_Profile.js_**

```javascript
import React from "react";
import LoginComponent from "./LoginComponent";
import NotLoginComponent from "./NotLoginComponent";
const Profile = () => {
  return (
    <div>
      <h1>Profile Info</h1>
      <LoginComponent />
      <NotLoginComponent />
    </div>
  );
};

export default Profile;
```

**LoginComponent**中，我們會將使用者輸入的資料顯示，並且有一個登出的按鈕，按出之後會再回到輸入資料的畫面。

**_LoginComponent.js_**

```javascript
import React from "react";

const LoginComponent = () => {
  const handleLogout = () => {};
  return (
    <div>
      <p>Name:</p>
      <p>Age:</p>
      <p>Email:</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginComponent;
```

**NotLoginComponent**中，會要求使用者輸入資料，按下登入後會將**State login**改為**true**並看到輸入的資料。

**_NotLoginComponent.js_**

```javascript
import React from "react";
const NotLoginComponent = () => {
  const handleLogin = () => {};
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder="name" name="name" id="name" />
      <br />
      <label htmlFor="age">Age:</label>
      <input type="text" placeholder="age" name="age" id="age" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" placeholder="email" name="email" id="email" />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default NotLoginComponent;
```

## useSelector

當我們需要取出**store**內的**State**時，需要使用**useSelector**來幫助我們取出**State**的值，現在先來看怎麼取得我們最初定義的**State**吧！

現在來利用**userSelector**，將**State**取出，並判斷使用者是否為登入狀態。

**_Profile.js_**

```javascript
import React from "react";
import { useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import NotLoginComponent from "./NotLoginComponent";
const Profile = () => {
  const state = useSelector((state) => state.user);
  return (
    <div>
      <h1>Profile Info</h1>
      {state.isLogin ? <LoginComponent /> : <NotLoginComponent />}
    </div>
  );
};

export default Profile;
```

## useDispatch

而當我們要使用 reducer 時，需要使用 useDispatch 來幫助我們呼叫 reducer 內的 function，在本次範例中只有定義兩個 function，分別是 **setLogin** 和 **setLogout**，現在就來使用看看吧~

因為我不想要在輸入 input 時不斷**Rerender**，所以我會選擇使用**useRef**而不是**useState**。

這邊使用了**useDispatch**去改變**State**，所以**React**會幫我們**Rerender**。

**_NotLoginComponent.js_**

```javascript
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducers/userSlice";
const NotLoginComponent = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const handleLogin = () => {
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    const emailValue = emailRef.current.value;
    dispatch(setLogin({ name: nameValue, age: ageValue, email: emailValue }));
  };
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="name"
        name="name"
        id="name"
        ref={nameRef}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input type="text" placeholder="age" name="age" id="age" ref={ageRef} />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        placeholder="email"
        name="email"
        id="email"
        ref={emailRef}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default NotLoginComponent;
```

**_LoginComponent.js_**

```javascript
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogout } from "../reducers/userSlice";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <div>
      <p>Name:{state.name}</p>
      <p>Age:{state.age}</p>
      <p>Email:{state.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginComponent;
```

## Action Creator

因為在 reducer 內的 function 不能使用 async/await，也就是不能處理非同步事件，所以在這邊我們可以來自訂自己的 Action。

我們修改一下上面的**userSlice.js**，透過**action creator**來取得**外部 api 的資料**。

API 網址：https://randomuser.me/api/

**_userSlice.js_**

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile(state, action) {
      state.user = action.payload.results[0];
    },
  },
});

//因為reducers內不能使用非同步 所以必須建立自己的action並dispatch資料進去
export const fetchUserProfile = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Fetch Fail!!!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(userAction.setUserProfile(userData));
    } catch (error) {}
  };
};

export const userAction = userSlice.actions;

export default userSlice.reducer;
```

而在**App.js**內只要**dispatch**我們的**action creator**即可！

**_App.js_**

```javascript
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Profile from "./component/Profile";
import { fetchUserProfile } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
```

**_Profile.js_**

```javascript
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const UserProfile = () => (
    <>
      <p>name : {user.name.first}</p>
      <p>gender : {user.gender}</p>
      <p>phone : {user.phone}</p>
    </>
  );
  return (
    <div>
      <h1>User Profile</h1>
      {user?.name ? <UserProfile /> : null}
    </div>
  );
};

export default Profile;
```
