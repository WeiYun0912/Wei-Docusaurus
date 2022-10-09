"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=o,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"React \u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7db2\u7ad9",keywords:["react","react\u6559\u5b78","javascript","firebase","google auth"],description:"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\u3002",author:"WeiYun0912","og:title":"React \u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7db2\u7ad9","og:description":"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\u3002"},i=void 0,s={unversionedId:"React/React-Google-Auth",id:"React/React-Google-Auth",title:"React \u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7db2\u7ad9",description:"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\u3002",source:"@site/docs/React/React-Google-Auth.md",sourceDirName:"React",slug:"/React/React-Google-Auth",permalink:"/Wei-Docusaurus/docs/React/React-Google-Auth",draft:!1,tags:[],version:"current",frontMatter:{title:"React \u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7db2\u7ad9",keywords:["react","react\u6559\u5b78","javascript","firebase","google auth"],description:"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\u3002",author:"WeiYun0912","og:title":"React \u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7db2\u7ad9","og:description":"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\u3002"},sidebar:"tutorialSidebar",previous:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8",permalink:"/Wei-Docusaurus/docs/React/React-Optional-Chaining"},next:{title:"React Protected Routes",permalink:"/Wei-Docusaurus/docs/React/React-Protected-Routes"}},p={},l=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u65b0\u589e Firebase \u5c08\u6848",id:"\u65b0\u589e-firebase-\u5c08\u6848",level:2},{value:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb",id:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u4f7f\u7528 Google Auth",id:"\u4f7f\u7528-google-auth",level:2},{value:"Auth",id:"auth",level:2},{value:"Proteceted Routes",id:"proteceted-routes",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Xuy2fuE2qAI"},"\u5f71\u7247\u9023\u7d50")),(0,o.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx create-react-app \u4f60\u7684\u5c08\u6848\u540d\u7a31\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install firebase react-rotuer-dom\n")),(0,o.kt)("h2",{id:"\u65b0\u589e-firebase-\u5c08\u6848"},"\u65b0\u589e Firebase \u5c08\u6848"),(0,o.kt)("p",null,"\u5148\u5230 firebase \u5b98\u7db2\u767b\u5165\uff0c\u767b\u5165\u5f8c\u9ede\u53f3\u4e0a\u89d2\u7684 Go to console"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/NdKy76W.png",alt:"Image"})),(0,o.kt)("p",null,"\u4e4b\u5f8c\u6309\u4e0b\u65b0\u589e\u5c08\u6848"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Te3DU1A.png",alt:"Image"})),(0,o.kt)("p",null,"\u8f38\u5165\u5c08\u6848\u540d\u7a31\u5f8c\u6309\u7e7c\u7e8c\uff0c\u5982\u679c\u4e0d\u9700\u8981 Google Analytics \u63d0\u4f9b\u7684\u5206\u6790\u529f\u80fd\u53ef\u4ee5\u9078\u64c7\u95dc\u9589\uff0c\u4e4b\u5f8c\u518d\u6309\u4e0b\u5efa\u7acb\u5c08\u6848\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/oHJCDPi.png",alt:"Image"})),(0,o.kt)("p",null,"\u5c08\u6848\u5efa\u7acb\u6210\u529f\u5f8c\uff0c\u6703\u4f86\u5230\u5c08\u6848\u7684\u5f8c\u53f0\u9801\u9762\uff0c\u6211\u5011\u9ede\u64ca\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/98torjO.png",alt:"Image"})),(0,o.kt)("p",null,"\u8f38\u5165\u61c9\u7528\u7a0b\u5f0f\u7684\u540d\u7a31\u5f8c\uff0c\u6309\u4e0b\u8a3b\u518a\u61c9\u7528\u7a0b\u5f0f\uff0c\u6703\u770b\u5230 firebase \u63d0\u4f9b\u7d66\u6211\u5011\u7684\u8a2d\u5b9a\u6a94\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Cl7h1Xe.png",alt:"Image"})),(0,o.kt)("p",null,"\u5c07\u8a2d\u5b9a\u6a94\u5148\u8907\u88fd\u4e0b\u4f86\uff0c\u4e26\u5728\u4f60\u7684 React \u5c08\u6848\u65b0\u589e\u4e00\u500b js \u6a94\u6848\uff0c\u9019\u908a\u6211\u662f\u5728 React \u5c08\u6848\u5e95\u4e0b\u5efa\u7acb\u4e00\u500b config \u8cc7\u6599\u593e\uff0c\u4e4b\u5f8c\u5728\u8a72\u8cc7\u6599\u593e\u65b0\u589e firebase.js\uff0c\u4e26\u5c07\u8a2d\u5b9a\u6a94\u8cbc\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='firebase.js' showLineNumbers",title:"'firebase.js'",showLineNumbers:!0},'import { initializeApp } from "firebase/app";\nimport { getAuth, GoogleAuthProvider } from "firebase/auth";\n\n// \u628a\u4f60\u7684firebase app \u8a2d\u5b9a\u6a94 \u8cbc\u4e0a\u4f86\nconst firebaseConfig = {};\n\n// Initialize Firebase\nconst app = initializeApp(firebaseConfig);\n')),(0,o.kt)("p",null,"\u4e4b\u5f8c\u56de\u5230 firebase \u7684\u5c08\u6848\u5f8c\u53f0\uff0c\u9ede\u64ca Authentication\uff0c\u518d\u9ede\u64ca\u958b\u59cb\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AUjgTLN.png",alt:"Image"})),(0,o.kt)("p",null,"\u5728\u4f9b\u61c9\u5546\u7684\u5730\u65b9\u9078\u64c7 Google"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/z9eDrLj.png",alt:"Image"})),(0,o.kt)("p",null,"\u8a18\u5f97\u8981\u5728\u53f3\u4e0a\u89d2\u7684\u5730\u65b9\u6309\u4e0b\u555f\u7528\uff0c\u4e26\u586b\u5beb\u5c08\u6848\u652f\u63f4\u96fb\u5b50\u90f5\u4ef6\uff0c\u8a2d\u5b9a\u5b8c\u5f8c\u6309\u4e0b\u5132\u5b58\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/d0Zqhwp.png",alt:"Image"})),(0,o.kt)("p",null,"\u770b\u5230 Google \u7684\u72c0\u614b\u70ba\u5df2\u555f\u7528\u7684\u8a71\uff0c\u5c31\u4ee3\u8868\u6211\u5011\u7684 firebase \u61c9\u7528\u7a0b\u5f0f\u5c08\u6848\u73fe\u5728\u652f\u63f4 Google Auth \u4e86\uff0c\u73fe\u5728\u4f86\u958b\u59cb\u5beb\u7a0b\u5f0f\u5427~"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/0JVmD96.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb"},"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/React-Google-Auth"},"\u7a0b\u5f0f\u78bc\u9023\u7d50")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n|   App.js\n|   index.js\n|   ...\n|\n\u2514\u2500\u2500\u2500 components\n\u2502   \u2502   Navbar.js\n\u2502\n\u2514\u2500\u2500\u2500 config\n\u2502   \u2502   firebase.js\n\u2502\n\u2514\u2500\u2500\u2500 pages\n\u2502   \u2502   Home.js\n\u2502   \u2502   Login.js\n\u2502   \u2502   User.js\n\u2502\n\u2514\u2500\u2500\u2500 utils\n\u2502   \u2502   ProtectedRoutes.js\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yBppZua.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u9996\u5148\u5728 App.js \u5f15\u5165\u4e86 3 \u500b\u9801\u9762\u548c 1 \u500b component\u3002"),(0,o.kt)("p",null,"\u9801\u9762\u7684\u90e8\u5206\u4e00\u5171\u6709 3 \u500b\u6a94\u6848\uff0c\u5206\u5225\u662f Home\u3001Login\u3001User\u3002"),(0,o.kt)("p",null,"component \u5247\u662f\u50c5\u6709 1 \u500b\u6a94\u6848\uff0cNavbar\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='App.js' showLineNumbers",title:"'App.js'",showLineNumbers:!0},'import { BrowserRouter as Router, Route, Routes } from "react-router-dom";\nimport "./App.css";\nimport Navbar from "./components/Navbar";\nimport Login from "./pages/Login";\nimport Home from "./pages/Home";\nimport User from "./pages/User";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Router>\n        <Navbar />\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/login" element={<Login />} />\n          <Route path="/user" element={<User />} />\n        </Routes>\n      </Router>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Navbar.js' showLineNumbers",title:"'Navbar.js'",showLineNumbers:!0},'import React from "react";\nimport { Link } from "react-router-dom";\n\nconst Navbar = () => {\n  return (\n    <div>\n      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}\n      <Link to="/user">User</Link>\n    </div>\n  );\n};\n\nexport default Navbar;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Home.js' showLineNumbers",title:"'Home.js'",showLineNumbers:!0},'import React from "react";\n\nconst Home = () => {\n  return <div>\ud83e\udd74 Home Page</div>;\n};\n\nexport default Home;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Login.js' showLineNumbers",title:"'Login.js'",showLineNumbers:!0},'import React from "react";\n\nconst Login = () => {\n  return <div>\ud83d\ude07 Login Page</div>;\n};\n\nexport default Login;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='User.js' showLineNumbers",title:"'User.js'",showLineNumbers:!0},'import React from "react";\n\nconst User = () => {\n  return <div>\ud83d\ude00 User Page</div>;\n};\n\nexport default User;\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528-google-auth"},"\u4f7f\u7528 Google Auth"),(0,o.kt)("p",null,"\u6211\u5011\u9700\u8981\u5728 firebase \u7684\u6a94\u6848\u65b0\u589e\u4e00\u4e9b\u7a0b\u5f0f\u78bc\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.js")," \u4e2d\u5f15\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"getAuth")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"GoogleAuthProvider"),"\uff0c\u9019\u908a\u5ba3\u544a\u4e86\u5169\u500b\u8b8a\u6578\uff0c\u5206\u5225\u662f auth \u8207 provide\u3002"),(0,o.kt)("p",null,"auth\uff1a\u5728 getAuth function \u4e2d\u5c07 app \u8b8a\u6578\u50b3\u905e\u9032\u53bb\u4e26 export\u3002"),(0,o.kt)("p",null,"provider\uff1a\u5c07 GoogleAuthProvider export\uff0c\u9019\u6a23\u624d\u80fd\u53bb\u4f7f\u7528 Google \u5e33\u865f\u767b\u5165\u7684\u670d\u52d9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='firebase.js' showLineNumbers",title:"'firebase.js'",showLineNumbers:!0},'// Import the functions you need from the SDKs you need\nimport { initializeApp } from "firebase/app";\nimport { getAuth, GoogleAuthProvider } from "firebase/auth";\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n\n// \u8cbc\u4e0a\u4f60\u81ea\u5df1\u7684firebase \u61c9\u7528\u7a0b\u5f0f\u8a2d\u5b9a\u6a94\nconst firebaseConfig = {};\n\n// Initialize Firebase\nconst app = initializeApp(firebaseConfig);\n\nexport const auth = getAuth(app);\n\nexport const provide = new GoogleAuthProvider();\n')),(0,o.kt)("p",null,"\u63a5\u8457\u958b\u555f",(0,o.kt)("inlineCode",{parentName:"p"},"Login.js"),"\uff0c\u6211\u5011\u9700\u8981\u5728 Login \u6a94\u6848\u4e2d\u64b0\u5beb\u767b\u5165\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u5f15\u5165 useNavigate\uff0c\u5728\u4f7f\u7528\u8005\u6210\u529f\u767b\u5165\u5f8c\uff0c\u4f7f\u7528 navigate \u5c07\u4f7f\u7528\u8005\u5c0e\u5411 Home \u9801\u9762\u3002"),(0,o.kt)("p",null,"\u800c\u767b\u5165\u7684\u65b9\u5f0f\u6211\u5011\u4f7f\u7528\u5f48\u51fa\u8996\u7a97 (signInWithPopup) \u7684\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u9ede\u64ca\u767b\u5165\u6309\u9215\u5f8c\uff0c\u6703\u6709\u8996\u7a97\u5f48\u51fa\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb Google \u5e33\u865f\u767b\u5165\uff0c\u9019\u908a\u9700\u8981\u5c07\u525b\u525b\u5ba3\u544a\u7684 auth \u548c provide \u5f15\u5165\u4e26\u5c07\u9019\u5169\u500b\u8b8a\u6578\u50b3\u905e\u81f3 signInWithPopup function \u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Login.js' showLineNumbers",title:"'Login.js'",showLineNumbers:!0},'import React from "react";\nimport { useNavigate } from "react-router-dom";\nimport { auth, provide } from "../config/firebase";\nimport { signInWithPopup } from "firebase/auth";\n\nconst Login = () => {\n  const navigate = useNavigate();\n\n  const login = async () => {\n    //\u9ede\u64ca\u6309\u9215\u5f8c\uff0c\u5f48\u51fa\u767b\u5165\u8996\u7a97\uff0c\u8a62\u554f\u4f7f\u7528\u8005\u8981\u7528\u54ea\u96bb\u5e33\u865f\u9032\u884c\u767b\u5165\uff0c\u4e26\u5c07\u7d50\u679c\u4fdd\u5b58\u81f3result\u8b8a\u6578\u3002\n    const result = await signInWithPopup(auth, provide);\n    console.log(result);\n    //\u767b\u5165\u6210\u529f\u5f8c\uff0c\u5c07\u4f7f\u7528\u8005\u5c0e\u5411\u4e3b\u9801\u9762\u3002\n    navigate("/");\n  };\n\n  return (\n    <div>\n      <button onClick={login}>Login</button>\n    </div>\n  );\n};\n\nexport default Login;\n')),(0,o.kt)("p",null,"\u73fe\u5728\u5c31\u53ef\u4ee5\u4f86\u9032\u884c\u767b\u5165\u7684\u52d5\u4f5c\uff0c\u767b\u5165\u6210\u529f\u7684\u8a71\uff0c\u5c31\u6703\u88ab\u5c0e\u5411\u81f3\u4e3b\u9801\u9762\uff0c\u4e26\u5c07 result \u8b8a\u6578\u986f\u793a\u5728 console\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/LK4L9Uy.gif",alt:"Image"})),(0,o.kt)("p",null,"\u800c\u5728 console \u53ef\u4ee5\u770b\u5230\u5e33\u865f\u7684\u8cc7\u8a0a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/8MrN1KQ.png",alt:"Image"})),(0,o.kt)("p",null,"\u53ea\u8981\u6709\u6210\u529f\u53d6\u5f97\u5e33\u865f\u8cc7\u8a0a\uff0c\u5c31\u4ee3\u8868\u767b\u5165\u6210\u529f\u4e86\uff01"),(0,o.kt)("h2",{id:"auth"},"Auth"),(0,o.kt)("p",null,"\u800c\u4f60\u73fe\u5728\u53ef\u80fd\u6703\u60f3\u8aaa\uff0c\u90a3\u8981\u5982\u4f55\u5728\u5176\u4ed6\u9801\u9762\u4e2d\u53bb\u53d6\u5f97\u767b\u5165\u7684\u8cc7\u8a0a\u5462\uff1f"),(0,o.kt)("p",null,"\u53ea\u8981\u5728\u5176\u4ed6\u9801\u9762\u4e2d\uff0c\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),"\u5373\u53ef\uff0cauth \u70ba\u6211\u5011\u5728 firebase.js \u4e2d\u4f7f\u7528 getAuth function \u53bb\u53d6\u5f97\u9a57\u8b49\u72c0\u614b\u7684\u4e00\u500b\u8b8a\u6578\u3002"),(0,o.kt)("p",null,"\u800c\u4f60\u53ef\u4ee5\u5c07\u9019\u500b auth \u8996\u70ba\u4e00\u500b\u5168\u57df\u7684 state\uff0c\u610f\u601d\u5c31\u662f\u53ea\u8981\u767b\u5165\u5f8c\uff0c\u4efb\u4f55\u9801\u9762\u90fd\u80fd\u5920\u53bb\u4f7f\u7528\u9019\u500b auth \u8b8a\u6578\uff0c\u90a3\u6211\u5011\u5148\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"User.js"),"\u4e2d\u5f15\u5165 auth\uff0c\u4e26\u5c07\u5b83 console.log \u67e5\u770b\u4e00\u4e0b\u88e1\u9762\u7684\u5167\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='User.js' showLineNumbers",title:"'User.js'",showLineNumbers:!0},'import React from "react";\nimport { auth } from "../config/firebase";\n\nconst User = () => {\n  console.log(auth);\n  return <div>\ud83d\ude00 User Page</div>;\n};\n\nexport default User;\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5728 auth \u7269\u4ef6\u8b8a\u6578\u4e2d\uff0c\u6709\u4e00\u500b currentUser\uff0c\u800c currentUser \u5167\u5c31\u662f\u6211\u5011\u767b\u5165\u7684\u5e33\u865f\u8cc7\u8a0a\uff0c\u90a3\u73fe\u5728\u5c31\u628a\u9019\u4e9b\u8cc7\u8a0a\u986f\u793a\u5728\u756b\u9762\u4e0a\u5427\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/xy0oRRF.png",alt:"Image"})),(0,o.kt)("p",null,"\u5c07\u5e33\u865f\u540d\u7a31\u3001\u4fe1\u7bb1\u53ca\u5927\u982d\u8cbc\u986f\u793a\u5230\u756b\u9762\u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='User.js' showLineNumbers",title:"'User.js'",showLineNumbers:!0},'import React from "react";\nimport { auth } from "../config/firebase";\n\nconst User = () => {\n  console.log(auth);\n  return (\n    <div>\n      <p>{auth?.currentUser.displayName}</p>\n      <p>{auth?.currentUser.email}</p>\n      <img src={auth?.currentUser.photoURL} alt="" />\n    </div>\n  );\n};\n\nexport default User;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/aXza8Rw.png",alt:"Image"})),(0,o.kt)("h2",{id:"proteceted-routes"},"Proteceted Routes"),(0,o.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u5efa\u7acb\u7c21\u55ae\u7684 Protected Routes\uff0c\u4f86\u78ba\u8a8d\u4f7f\u7528\u8005\u662f\u5426\u4f7f\u7528 Google \u5e33\u865f\u9032\u884c\u767b\u5165\uff0c\u5982\u679c\u767b\u5165\u7684\u8a71\u5c31\u80fd\u770b\u5230 User Route \u548c\u88e1\u9762\u7684\u5167\u5bb9\u3002"),(0,o.kt)("p",null,"\u8981\u662f\u6c92\u6709\u767b\u5165\u7684\u8a71\uff0c\u53c8\u4f7f\u7528\u7db2\u5740\u7684\u65b9\u5f0f\u9032\u5165 User \u9801\u9762\u7684\u8a71\uff0c\u5c31\u6703\u88ab\u91cd\u65b0\u5c0e\u81f3\u4e3b\u9801\u9762\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers",title:"'App.js'",showLineNumbers:!0},'import { BrowserRouter as Router, Route, Routes } from "react-router-dom";\nimport "./App.css";\nimport Navbar from "./components/Navbar";\nimport Login from "./pages/Login";\nimport Home from "./pages/Home";\nimport User from "./pages/User";\nimport ProtectedRoutes from "./utils/ProtectedRoutes";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Router>\n        <Navbar />\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/login" element={<Login />} />\n\n          <Route element={<ProtectedRoutes />}>\n            <Route path="/user" element={<User />} />\n          </Route>\n        </Routes>\n      </Router>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Navbar.js' showLineNumbers",title:"'Navbar.js'",showLineNumbers:!0},'import React from "react";\nimport { Link } from "react-router-dom";\nimport { auth } from "../config/firebase";\n\nconst Navbar = () => {\n  return (\n    <div>\n      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}\n      {auth?.currentUser?.displayName && <Link to="/user">User</Link>}\n    </div>\n  );\n};\n\nexport default Navbar;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='ProtectedRoutes.js' showLineNumbers",title:"'ProtectedRoutes.js'",showLineNumbers:!0},'import React from "react";\n\nimport { Navigate, Outlet } from "react-router-dom";\nimport { auth } from "../config/firebase";\n\nconst ProtectedRoutes = () => {\n  return auth?.currentUser?.displayName ? <Outlet /> : <Navigate to="/" />;\n};\n\nexport default ProtectedRoutes;\n')))}m.isMDXComponent=!0}}]);