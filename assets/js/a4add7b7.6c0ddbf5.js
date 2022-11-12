"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"React Redux Toolkit \u6559\u5b78",keywords:["react","react\u6559\u5b78","redux toolkit"],description:"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528Redux Toolkit\uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0cRedux Toolkit \u7c21\u5316\u4e86\u8a31\u591a\u3002",author:"WeiYun0912","og:title":"React Redux Toolkit \u6559\u5b78","og:description":"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528Redux Toolkit\uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0cRedux Toolkit \u7c21\u5316\u4e86\u8a31\u591a\u3002"},i=void 0,s={unversionedId:"React/Package/Redux-Toolkit",id:"React/Package/Redux-Toolkit",title:"React Redux Toolkit \u6559\u5b78",description:"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528Redux Toolkit\uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0cRedux Toolkit \u7c21\u5316\u4e86\u8a31\u591a\u3002",source:"@site/docs/React/Package/Redux-Toolkit.md",sourceDirName:"React/Package",slug:"/React/Package/Redux-Toolkit",permalink:"/Wei-Docusaurus/docs/React/Package/Redux-Toolkit",draft:!1,tags:[],version:"current",frontMatter:{title:"React Redux Toolkit \u6559\u5b78",keywords:["react","react\u6559\u5b78","redux toolkit"],description:"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528Redux Toolkit\uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0cRedux Toolkit \u7c21\u5316\u4e86\u8a31\u591a\u3002",author:"WeiYun0912","og:title":"React Redux Toolkit \u6559\u5b78","og:description":"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528Redux Toolkit\uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0cRedux Toolkit \u7c21\u5316\u4e86\u8a31\u591a\u3002"},sidebar:"tutorialSidebar",previous:{title:"React Slick",permalink:"/Wei-Docusaurus/docs/React/Package/React-Slick"},next:{title:"Tips",permalink:"/Wei-Docusaurus/docs/category/tips"}},p={},l=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u5efa\u7acb reducer",id:"\u5efa\u7acb-reducer",level:2},{value:"Components",id:"components",level:2},{value:"useSelector",id:"useselector",level:2},{value:"useDispatch",id:"usedispatch",level:2},{value:"Action Creator",id:"action-creator",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src\n|   App.js\n|   index.js\n|\n\u2514\u2500\u2500\u2500 components\n\u2502   \u2502   Login.js\n\u2502   \u2502   NotLogin.js\n\u2502   \u2502   Profile.js\n\u2502\n\u2514\u2500\u2500\u2500 reducers\n    \u2502   userSlice.js\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IgFtEGXjl7Y"},"\u5f71\u7247\u9023\u7d50")),(0,a.kt)("p",null,"\u9019\u7bc7\u662f\u8981\u4f86\u6559\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Redux Toolkit")," \uff0c\u548c\u4ee5\u5f80\u4e0d\u540c\uff0c",(0,a.kt)("strong",{parentName:"p"},"Redux Toolkit")," \u7c21\u5316\u4e86\u8a31\u591a\uff0c\u5728 Toolkit \u9084\u6c92\u51fa\u4f86\u6642\uff0c\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Redux")," \u4f86\u7ba1\u7406\u8207\u64cd\u4f5c ",(0,a.kt)("strong",{parentName:"p"},"state")," \u975e\u5e38\u9ebb\u7169\uff0c\u4eca\u5929\u7684\u7bc4\u4f8b\u5c31\u7c21\u55ae\u505a\u500b\u8f38\u5165\u8cc7\u6599\u7136\u5f8c\u767b\u5165\u7684\u52d5\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u958b\u59cb\u4e4b\u524d\u5148\u4f7f\u7528 npm \u4f86\u5b89\u88dd",(0,a.kt)("strong",{parentName:"p"},"Redux Toolkit"),"\u5427\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"npm i react-redux @reduxjs/toolkit\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Redux Toolkit")," \u4e4b\u524d\uff0c\u6211\u5011\u9700\u8981\u5148\u505a\u521d\u59cb\u5316\u7684\u52d5\u4f5c\uff0c\u6211\u5011\u5148\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"index.js"))," \u6a94\u6848\u505a\u521d\u59cb\u5316\uff0c\u60a8\u4e5f\u53ef\u9078\u64c7\u984d\u5916\u5275\u5efa\u4e00\u500b\u6a94\u6848\uff0c\u5728\u88e1\u9762\u505a\u521d\u59cb\u5316\u4e26 ",(0,a.kt)("strong",{parentName:"p"},"export")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport "./index.css";\nimport App from "./App";\nimport { configureStore } from "@reduxjs/toolkit";\nimport { Provider } from "react-redux";\n\nconst store = configureStore({\n  reducer: {},\n});\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,a.kt)("p",null,"\u6211\u5011\u9996\u5148\u5229\u7528 ",(0,a.kt)("strong",{parentName:"p"},"configureStore")," \u4f86\u5efa\u7acb ",(0,a.kt)("strong",{parentName:"p"},"store")," \uff0c\u800c ",(0,a.kt)("strong",{parentName:"p"},"store")," \u5167\u7684",(0,a.kt)("strong",{parentName:"p"},"reducer"),"\u5c31\u662f\u6211\u5011\u7ba1\u7406 ",(0,a.kt)("strong",{parentName:"p"},"state")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"function")," \uff0c\u9019\u90e8\u4efd\u5f85\u6703\u518d\u4f86\u505a\u5b9a\u7fa9\u3002"),(0,a.kt)("p",null,"\u8ddf\u4ee5\u5f80\u4e00\u6a23\uff0c\u6211\u5011\u9700\u8981\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"redux")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"Provider")," \u4f86\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"store")," \u50b3\u905e\u5230\u5b50\u7d44\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5efa\u7acb-reducer"},"\u5efa\u7acb reducer"),(0,a.kt)("p",null,"\u800c\u73fe\u5728\u53ef\u4ee5\u5148\u4f86\u5275\u5efa\u6211\u5011\u7684\u7b2c\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"reducer")," \uff0c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"src")," \u76ee\u9304\u4e0b\u65b0\u5efa\u4e00\u500b\u8cc7\u6599\u593e\uff0c\u540d\u70ba ",(0,a.kt)("strong",{parentName:"p"},"reducers")," \uff0c\u800c\u7e7c\u7e8c\u5728\u8a72\u8cc7\u6599\u4e0b\u5275\u5efa\u65b0\u7684\u6a94\u6848\uff0c\u540d\u70ba",(0,a.kt)("strong",{parentName:"p"},"userSlice.js"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="userSlice.js" showLineNumbers',title:'"userSlice.js"',showLineNumbers:!0},'import { createSlice } from "@reduxjs/toolkit";\n\nconst initialState = {\n  profile: {\n    name: "",\n    age: 0,\n    email: "",\n    login: false,\n  },\n};\n\nconst userSlice = createSlice({\n  name: "user",\n  initialState: initialState,\n  reducers: {\n    setLogin(state, action) {\n      const { name, age, email } = action.payload;\n      state.value = {\n        name,\n        age,\n        email,\n        isLogin: true,\n      };\n    },\n    setLogout(state, action) {\n      state.value = initialState;\n    },\n  },\n});\n\nexport const { setLogin, setLogout } = userSlice.actions;\n\nexport default userSlice.reducer;\n')),(0,a.kt)("p",null,"\u9019\u908a\u6709\u5e7e\u500b\u90e8\u5206\u8981\u4ecb\u7d39"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name:\u9019\u500b Slice \u7684\u540d\u7a31\uff0c\u5efa\u8b70\u53d6\u8ddf\u6a94\u540d\u6709\u95dc\u4fc2\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initialState :\u521d\u59cb\u5316\u7684 state\uff0c\u5728\u8a72\u90e8\u5206\u9700\u8981\u5b9a\u7fa9\u521d\u59cb\u7684 state\uff0c\u5982\u7a0b\u5f0f\u78bc 3~9 \u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"reducers :\u6700\u91cd\u8981\u7684\u90e8\u5206\uff0c\u5728\u88e1\u9762\u6211\u5011\u53ef\u4ee5\u5b9a\u7fa9\u6539\u8b8a state \u7684 function\uff0c\u800c function \u5167\u9810\u8a2d\u6703\u5e36\u5165\u5169\u500b\u53c3\u6578\uff0c\u5206\u5225\u662f ",(0,a.kt)("strong",{parentName:"p"},"state")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"action")," \u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"state:state \u70ba\u6211\u5011\u5728 initialState \u5167\u5b9a\u7fa9\u7684\u8b8a\u6578\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u900f\u904e\u7269\u4ef6\u8a2a\u554f\u7684\u65b9\u5f0f\u4f86\u4fee\u6539 state\uff0c\u50cf\u662f ",(0,a.kt)("strong",{parentName:"p"},'state.name="wei"')," \u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"action:\u5982\u679c\u6709\u5916\u90e8\u53c3\u6578\u50b3\u9032\u4f86\u7684\u8a71\uff0c\u6211\u5011\u53ef\u4ee5\u5229\u7528 action \u4f86\u53d6\u5f97\uff0c\u5728 action \u7269\u4ef6\u88e1\u9762\u9084\u6703\u6709\u500b payload\uff0c\u6240\u4ee5\u8a18\u5f97\u53d6\u5f97",(0,a.kt)("strong",{parentName:"p"},"\u5916\u90e8\u53c3\u6578"),"\u7684\u6642\u5019\u8981\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"action.payload"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u69cb"),"\u7684\u65b9\u5f0f\u3002"))),(0,a.kt)("p",null,"\u5efa\u7acb\u5b8c\u4ee5\u5f8c\uff0c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"index.js")," \u7684\u90e8\u5206\u8981\u6539\u6210\u4ee5\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport "./index.css";\nimport App from "./App";\nimport { configureStore } from "@reduxjs/toolkit";\nimport { Provider } from "react-redux";\nimport userSlice from "./reducers/userSlice";\nconst store = configureStore({\n  reducer: {\n    user: userSlice,\n  },\n});\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,a.kt)("p",null,"\u7a0b\u5f0f\u78bc\u7b2c\u5341\u884c\u7684\u90e8\u5206\uff0c\u8981\u5c07\u525b\u525b\u5b9a\u7fa9\u7684 slice \u52a0\u5165\u5230 reducer \u5167\uff0c\u800c\u524d\u9762\u5b9a\u7fa9\u7684\u540d\u7a31\u5f88\u91cd\u8981\uff0c\u5f8c\u7e8c\u8981\u5c07 state \u53d6\u51fa\u5fc5\u9808\u5148\u8a2a\u554f\u8a72\u540d\u7a31\u624d\u80fd\u53d6\u5f97\u8cc7\u6599\u3002"),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"\u6211\u5011\u5148\u4f86\u5efa\u7acb\u7b49\u7b49\u6703\u7528\u5230\u7684 component\uff0c\u6703\u6709 3 \u500b\u3002"),(0,a.kt)("p",null,"\u5728 Profile \u4e2d\uff0c\u5148\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"Login")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"NotLogin")," \u5f15\u5165\uff0c\u5f85\u6703\u6211\u5011\u6703\u5229\u7528 ",(0,a.kt)("strong",{parentName:"p"},"useSelector hook")," \uff0c\u5c07\u539f\u5148\u5b9a\u7fa9\u7684 ",(0,a.kt)("strong",{parentName:"p"},"state")," \u5167\u7684 ",(0,a.kt)("strong",{parentName:"p"},"login")," \u53d6\u51fa\uff0c\u4f86\u5224\u65b7\u73fe\u5728\u4f7f\u7528\u8005\u767b\u5165\u72c0\u614b\u9084\u662f\u672a\u767b\u5165\u72c0\u614b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Profile.js" showLineNumbers',title:'"Profile.js"',showLineNumbers:!0},'import React from "react";\nimport Login from "./Login";\nimport NotLogin from "./NotLogin";\nconst Profile = () => {\n  return (\n    <div>\n      <h1>Profile Info</h1>\n      <Login />\n      <NotLogin />\n    </div>\n  );\n};\n\nexport default Profile;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Login")," \u4e2d\uff0c\u6211\u5011\u6703\u5c07\u4f7f\u7528\u8005\u8f38\u5165\u7684\u8cc7\u6599\u986f\u793a\uff0c\u4e26\u4e14\u6709\u4e00\u500b\u767b\u51fa\u7684\u6309\u9215\uff0c\u6309\u51fa\u4e4b\u5f8c\u6703\u518d\u56de\u5230\u8f38\u5165\u8cc7\u6599\u7684\u756b\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Login.js" showLineNumbers',title:'"Login.js"',showLineNumbers:!0},'import React from "react";\n\nconst Login = () => {\n  const handleLogout = () => {};\n  return (\n    <div>\n      <p>Name:</p>\n      <p>Age:</p>\n      <p>Email:</p>\n      <button onClick={handleLogout}>Logout</button>\n    </div>\n  );\n};\n\nexport default Login;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NotLogin")," \u4e2d\uff0c\u6703\u8981\u6c42\u4f7f\u7528\u8005\u8f38\u5165\u8cc7\u6599\uff0c\u6309\u4e0b\u767b\u5165\u5f8c\u6703\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"state login")," \u6539\u70ba ",(0,a.kt)("strong",{parentName:"p"},"true")," \u4e26\u770b\u5230\u8f38\u5165\u7684\u8cc7\u6599\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="NotLogin.js" showLineNumbers',title:'"NotLogin.js"',showLineNumbers:!0},'import React from "react";\nconst NotLogin = () => {\n  const handleLogin = () => {};\n  return (\n    <div>\n      <label htmlFor="name">Name:</label>\n      <input type="text" placeholder="name" name="name" id="name" />\n      <br />\n      <label htmlFor="age">Age:</label>\n      <input type="text" placeholder="age" name="age" id="age" />\n      <br />\n      <label htmlFor="email">Email:</label>\n      <input type="text" placeholder="email" name="email" id="email" />\n      <br />\n      <button onClick={handleLogin}>Login</button>\n    </div>\n  );\n};\n\nexport default NotLogin;\n')),(0,a.kt)("h2",{id:"useselector"},"useSelector"),(0,a.kt)("p",null,"\u7576\u6211\u5011\u9700\u8981\u53d6\u51fa ",(0,a.kt)("strong",{parentName:"p"},"store")," \u5167\u7684 ",(0,a.kt)("strong",{parentName:"p"},"state")," \u6642\uff0c\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"useSelector")," \u4f86\u5e6b\u52a9\u6211\u5011\u53d6\u51fa ",(0,a.kt)("strong",{parentName:"p"},"state")," \u7684\u503c\uff0c\u73fe\u5728\u5148\u4f86\u770b\u600e\u9ebc\u53d6\u5f97\u6211\u5011\u6700\u521d\u5b9a\u7fa9\u7684 ",(0,a.kt)("strong",{parentName:"p"},"state")," \u5427\uff01"),(0,a.kt)("p",null,"\u73fe\u5728\u4f86\u5229\u7528 ",(0,a.kt)("strong",{parentName:"p"},"userSelector")," \uff0c\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"state")," \u53d6\u51fa\uff0c\u4e26\u5224\u65b7\u4f7f\u7528\u8005\u662f\u5426\u70ba\u767b\u5165\u72c0\u614b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Profile.js" showLineNumbers',title:'"Profile.js"',showLineNumbers:!0},'import React from "react";\nimport { useSelector } from "react-redux";\nimport Login from "./Login";\nimport NotLogin from "./NotLogin";\nconst Profile = () => {\n  const state = useSelector((state) => state.user);\n  return (\n    <div>\n      <h1>Profile Info</h1>\n      {state.isLogin ? <Login /> : <NotLogin />}\n    </div>\n  );\n};\n\nexport default Profile;\n')),(0,a.kt)("h2",{id:"usedispatch"},"useDispatch"),(0,a.kt)("p",null,"\u800c\u7576\u6211\u5011\u8981\u4f7f\u7528 reducer \u6642\uff0c\u9700\u8981\u4f7f\u7528 useDispatch \u4f86\u5e6b\u52a9\u6211\u5011\u547c\u53eb reducer \u5167\u7684 function\uff0c\u5728\u672c\u6b21\u7bc4\u4f8b\u4e2d\u53ea\u6709\u5b9a\u7fa9\u5169\u500b function\uff0c\u5206\u5225\u662f ",(0,a.kt)("strong",{parentName:"p"},"setLogin")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"setLogout"),"\uff0c\u73fe\u5728\u5c31\u4f86\u4f7f\u7528\u770b\u770b\u5427~"),(0,a.kt)("p",null,"\u56e0\u70ba\u6211\u4e0d\u60f3\u8981\u5728\u8f38\u5165 input \u6642\u4e0d\u65b7 ",(0,a.kt)("strong",{parentName:"p"},"Rerender"),"\uff0c\u6240\u4ee5\u6211\u6703\u9078\u64c7\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"useRef")," \u800c\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"useState"),"\u3002"),(0,a.kt)("p",null,"\u9019\u908a\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"useDispatch")," \u53bb\u6539\u8b8a ",(0,a.kt)("strong",{parentName:"p"},"state")," \uff0c\u6240\u4ee5",(0,a.kt)("strong",{parentName:"p"},"React"),"\u6703\u5e6b\u6211\u5011 ",(0,a.kt)("strong",{parentName:"p"},"Rerender")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="NotLogin.js" showLineNumbers',title:'"NotLogin.js"',showLineNumbers:!0},'import React, { useRef } from "react";\nimport { useDispatch } from "react-redux";\nimport { setLogin } from "../reducers/userSlice";\nconst NotLogin = () => {\n  const dispatch = useDispatch();\n  const nameRef = useRef();\n  const ageRef = useRef();\n  const emailRef = useRef();\n  const handleLogin = () => {\n    const nameValue = nameRef.current.value;\n    const ageValue = ageRef.current.value;\n    const emailValue = emailRef.current.value;\n    dispatch(setLogin({ name: nameValue, age: ageValue, email: emailValue }));\n  };\n  return (\n    <div>\n      <label htmlFor="name">Name:</label>\n      <input\n        type="text"\n        placeholder="name"\n        name="name"\n        id="name"\n        ref={nameRef}\n      />\n      <br />\n      <label htmlFor="age">Age:</label>\n      <input type="text" placeholder="age" name="age" id="age" ref={ageRef} />\n      <br />\n      <label htmlFor="email">Email:</label>\n      <input\n        type="text"\n        placeholder="email"\n        name="email"\n        id="email"\n        ref={emailRef}\n      />\n      <br />\n      <button onClick={handleLogin}>Login</button>\n    </div>\n  );\n};\n\nexport default NotLogin;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useDispatch } from "react-redux";\nimport { useSelector } from "react-redux";\nimport { setLogout } from "../reducers/userSlice";\n\nconst Login = () => {\n  const dispatch = useDispatch();\n  const state = useSelector((state) => state.user);\n  const handleLogout = () => {\n    dispatch(setLogout());\n  };\n  return (\n    <div>\n      <p>Name:{state.name}</p>\n      <p>Age:{state.age}</p>\n      <p>Email:{state.email}</p>\n      <button onClick={handleLogout}>Logout</button>\n    </div>\n  );\n};\n\nexport default Login;\n')),(0,a.kt)("h2",{id:"action-creator"},"Action Creator"),(0,a.kt)("p",null,"\u56e0\u70ba\u5728 reducer \u5167\u7684 function \u4e0d\u80fd\u4f7f\u7528 async/await\uff0c\u4e5f\u5c31\u662f\u4e0d\u80fd\u8655\u7406\u975e\u540c\u6b65\u4e8b\u4ef6\uff0c\u6240\u4ee5\u5728\u9019\u908a\u6211\u5011\u53ef\u4ee5\u4f86\u81ea\u8a02\u81ea\u5df1\u7684 action\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u4fee\u6539\u4e00\u4e0b\u4e0a\u9762\u7684 ",(0,a.kt)("strong",{parentName:"p"},"userSlice.js")," \uff0c\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"action creator")," \u4f86\u53d6\u5f97",(0,a.kt)("strong",{parentName:"p"},"\u5916\u90e8 api \u7684\u8cc7\u6599"),"\u3002"),(0,a.kt)("p",null,"API \u7db2\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://randomuser.me/api/"},"https://randomuser.me/api/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="userSlice.js" showLineNumbers',title:'"userSlice.js"',showLineNumbers:!0},'import { createSlice } from "@reduxjs/toolkit";\n\nconst initialState = {\n  user: {},\n};\n\nconst userSlice = createSlice({\n  name: "user",\n  initialState,\n  reducers: {\n    setUserProfile(state, action) {\n      state.user = action.payload.results[0];\n    },\n  },\n});\n\n//\u56e0\u70bareducers\u5167\u4e0d\u80fd\u4f7f\u7528\u975e\u540c\u6b65 \u6240\u4ee5\u5fc5\u9808\u5efa\u7acb\u81ea\u5df1\u7684action\u4e26dispatch\u8cc7\u6599\u9032\u53bb\nexport const fetchUserProfile = () => {\n  return async (dispatch) => {\n    const fetchData = async () => {\n      const response = await fetch("https://randomuser.me/api/");\n\n      if (!response.ok) {\n        throw new Error("Fetch Fail!!!");\n      }\n\n      const data = await response.json();\n      return data;\n    };\n\n    try {\n      const userData = await fetchData();\n      dispatch(userAction.setUserProfile(userData));\n    } catch (error) {}\n  };\n};\n\nexport const userAction = userSlice.actions;\n\nexport default userSlice.reducer;\n')),(0,a.kt)("p",null,"\u800c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"App.js")," \u5167\u53ea\u8981 ",(0,a.kt)("strong",{parentName:"p"},"dispatch")," \u6211\u5011\u7684 ",(0,a.kt)("strong",{parentName:"p"},"action creator")," \u5373\u53ef\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.js" showLineNumbers',title:'"App.js"',showLineNumbers:!0},'import { useEffect } from "react";\nimport { useDispatch } from "react-redux";\nimport "./App.css";\nimport Profile from "./component/Profile";\nimport { fetchUserProfile } from "./store/user/userSlice";\n\nfunction App() {\n  const dispatch = useDispatch();\n\n  useEffect(() => {\n    dispatch(fetchUserProfile());\n  }, [dispatch]);\n  return (\n    <div className="App">\n      <Profile />\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Profile.js" showLineNumbers',title:'"Profile.js"',showLineNumbers:!0},'import React from "react";\nimport { useSelector } from "react-redux";\n\nconst Profile = () => {\n  const user = useSelector((state) => state.user.user);\n  const UserProfile = () => (\n    <>\n      <p>name : {user.name.first}</p>\n      <p>gender : {user.gender}</p>\n      <p>phone : {user.phone}</p>\n    </>\n  );\n  return (\n    <div>\n      <h1>User Profile</h1>\n      {user?.name ? <UserProfile /> : null}\n    </div>\n  );\n};\n\nexport default Profile;\n')))}u.isMDXComponent=!0}}]);