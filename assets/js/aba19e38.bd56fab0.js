"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const a={title:"[react] React useState",keywords:["react","react hook","react\u6559\u5b78","useState"],description:"useLayoutEffect \u5247\u662f\u5728 DOM \u751f\u6210\u524d\u5c31 Effect\uff0c\u6240\u4ee5\u53ef\u4ee5\u907f\u514d\u4e0a\u9762\u7684\u60c5\u6cc1\u767c\u751f...",author:"WeiYun0912","og:title":"React useState","og:description":"useLayoutEffect \u5247\u662f\u5728 DOM \u751f\u6210\u524d\u5c31 Effect\uff0c\u6240\u4ee5\u53ef\u4ee5\u907f\u514d\u4e0a\u9762\u7684\u60c5\u6cc1\u767c\u751f...",sidebar_position:1},c=void 0,u={unversionedId:"React/Hooks/React-useState",id:"React/Hooks/React-useState",title:"[react] React useState",description:"useLayoutEffect \u5247\u662f\u5728 DOM \u751f\u6210\u524d\u5c31 Effect\uff0c\u6240\u4ee5\u53ef\u4ee5\u907f\u514d\u4e0a\u9762\u7684\u60c5\u6cc1\u767c\u751f...",source:"@site/docs/React/Hooks/React-useState.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/React-useState",permalink:"/Wei-Docusaurus/docs/React/Hooks/React-useState",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[react] React useState",keywords:["react","react hook","react\u6559\u5b78","useState"],description:"useLayoutEffect \u5247\u662f\u5728 DOM \u751f\u6210\u524d\u5c31 Effect\uff0c\u6240\u4ee5\u53ef\u4ee5\u907f\u514d\u4e0a\u9762\u7684\u60c5\u6cc1\u767c\u751f...",author:"WeiYun0912","og:title":"React useState","og:description":"useLayoutEffect \u5247\u662f\u5728 DOM \u751f\u6210\u524d\u5c31 Effect\uff0c\u6240\u4ee5\u53ef\u4ee5\u907f\u514d\u4e0a\u9762\u7684\u60c5\u6cc1\u767c\u751f...",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[react] React useRef",permalink:"/Wei-Docusaurus/docs/React/Hooks/React-useRef"},next:{title:"Package",permalink:"/Wei-Docusaurus/docs/category/package"}},s={},i=[{value:"Updated State (Previous State)",id:"updated-state-previous-state",level:2},{value:"Lazy Initial",id:"lazy-initial",level:2},{value:"Form State (Input)",id:"form-state-input",level:2},{value:"useForm (Custom Hook)",id:"useform-custom-hook",level:2},{value:"Object State",id:"object-state",level:2}],p={toc:i};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-state-previous-state"},"Updated State (Previous State)"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 useState \u66f4\u65b0 state \u6642\uff0c\u901a\u5e38\u6703\u4f7f\u7528\u5230 useState \u7d66\u4e88\u6211\u5011\u7684 function \u4f86\u66f4\u65b0 state\uff0c\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7c21\u55ae\u505a\u500b\u89e3\u91cb\u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u958b\u59cb\u6211\u5011\u4f7f\u7528 useState \u5c07 count \u8a2d\u5b9a\u70ba 0\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"increment"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"decrement")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," function\uff0c\u53ef\u4ee5\u5c07 count \u7684\u503c\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," \u9032\u884c\u66f4\u65b0\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," function \u5f8c\uff0cReact \u4e5f\u6703\u5c07\u756b\u9762\u91cd\u65b0\u6e32\u67d3(re-render)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.jsx' showLineNumbers live",title:"'App.jsx'",showLineNumbers:!0,live:!0},'function App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  const reset = () => {\n    setCount(0);\n  };\n\n  return (\n    <div className="App">\n      <p>Count : {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"\u9019\u6642\u5019\u628a increment \u5167\u7684\u7a0b\u5f0f\u78bc\u505a\u500b\u4fee\u6539\uff0c\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\uff0c2 \u79d2\u5f8c\u518d\u5c07 state \u66f4\u65b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.jsx' showLineNumbers live",title:"'App.jsx'",showLineNumbers:!0,live:!0},'function App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setTimeout(() => {\n      setCount(count + 1);\n    }, 2000);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  const reset = () => {\n    setCount(0);\n  };\n\n  return (\n    <div className="App">\n      <p>Count : {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"\u65bc\u662f\u6211\u5011\u5148\u9ede\u64ca Increment \u6309\u9215\u5f8c\uff0c\u99ac\u4e0a\u9ede\u64ca Reset \u6309\u9215\uff0c\u6703\u767c\u73fe\u904e\u4e86 2 \u79d2\u5f8c\uff0ccount \u8b8a\u6210 2 \u4e86\uff0c\u9019\u4e26\u4e0d\u5408\u7406\uff0c\u5728\u6b63\u5e38\u7684\u908f\u8f2f\u4e0b\uff0c\u6309\u4e0b Increment \u6309\u9215 2 \u79d2\u5f8c\u6703\u5c07 count + 1\uff0c\u800c\u56e0\u70ba\u6309\u4e0b Reset \u6309\u9215\u89f8\u767c\u4e86 reset function\uff0c\u5c07 count \u8a2d\u7f6e\u70ba 0\uff0c\u5247\u6700\u5f8c\u7684\u7d50\u679c count \u61c9\u7576\u8981\u70ba 1\u3002"),(0,r.kt)("p",null,"\u9019\u662f\u56e0\u70ba setCount \u9019\u500b function \u662f\u5c6c\u65bc\u975e\u540c\u6b65\u7684\uff0c\u4e26\u6c92\u6709\u8fa6\u6cd5\u99ac\u4e0a\u5f97\u77e5\u6211\u5011\u66f4\u6539\u4e86 state\uff0c\u6240\u4ee5\u6703\u53bb\u62ff",(0,r.kt)("inlineCode",{parentName:"p"},"\u7576\u4e0b\u7684state\u9032\u884c\u8655\u7406\uff0c\u4e26\u4e0d\u6703\u62ff\u66f4\u65b0\u4e4b\u5f8c\u7684"),"\u3002"),(0,r.kt)("p",null,"\u800c\u6709\u4e00\u500b\u8fa6\u6cd5\u80fd\u5920\u89e3\u6c7a\u6b64\u554f\u984c\uff0c\u5c31\u662f\u5728 setCount function \u4e2d\uff0c\u5c07\u4e00\u500b\u91cd\u8981\u7684\u53c3\u6578\u5f15\u5165\uff0c\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"previous state"),"\uff0c\u4e00\u822c\u6703\u7c21\u5beb\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"prevState"),"\uff0c\u4f7f\u7528 prevState \u5c31\u80fd\u5920\u53d6\u5f97\u6700\u65b0\u7684 state\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u6e2c\u8a66\u4e00\u4e0b\uff0c\u6309\u4e0b Increment \u6309\u9215\u5f8c\uff0c\u99ac\u4e0a\u518d\u6309\u4e0b Reset \u6309\u9215\uff0c\u9019\u6642\u5019\u6703\u767c\u73fe count \u7684\u503c\u70ba 1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.jsx' showLineNumbers live",title:"'App.jsx'",showLineNumbers:!0,live:!0},'function App() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setTimeout(() => {\n      setCount((prevState) => prevState + 1);\n    }, 2000);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  const reset = () => {\n    setCount(0);\n  };\n\n  return (\n    <div className="App">\n      <p>Count : {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n')),(0,r.kt)("h2",{id:"lazy-initial"},"Lazy Initial"),(0,r.kt)("h2",{id:"form-state-input"},"Form State (Input)"),(0,r.kt)("h2",{id:"useform-custom-hook"},"useForm (Custom Hook)"),(0,r.kt)("h2",{id:"object-state"},"Object State"))}l.isMDXComponent=!0}}]);