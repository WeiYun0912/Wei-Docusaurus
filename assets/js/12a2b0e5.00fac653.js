"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1506:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u4e09\u5143\u904b\u7b97\u5b50",keywords:["react","react\u6559\u5b78","javascript","ternary operators"],description:"\u5728\u6a23\u677f\u5b57\u4e32\u9084\u6c92\u51fa\u73fe\u6642\uff0c\u8981\u5728 JavaScript \u4e32\u63a5\u5b57\u4e32\u662f\u975e\u5e38\u9ebb\u7169\u7684\u4e8b\u60c5\uff0c\u4e14\u4e5f\u5fc5\u9808\u8003\u616e\u5230\u683c\u5f0f\u7684\u554f\u984c\u3002",author:"WeiYun0912","og:title":"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u4e09\u5143\u904b\u7b97\u5b50","og:description":"\u5728\u6a23\u677f\u5b57\u4e32\u9084\u6c92\u51fa\u73fe\u6642\uff0c\u8981\u5728 JavaScript \u4e32\u63a5\u5b57\u4e32\u662f\u975e\u5e38\u9ebb\u7169\u7684\u4e8b\u60c5\uff0c\u4e14\u4e5f\u5fc5\u9808\u8003\u616e\u5230\u683c\u5f0f\u7684\u554f\u984c\u3002",sidebar_position:3},l=void 0,s={unversionedId:"React/React-Ternary-Operators",id:"React/React-Ternary-Operators",title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u4e09\u5143\u904b\u7b97\u5b50",description:"\u5728\u6a23\u677f\u5b57\u4e32\u9084\u6c92\u51fa\u73fe\u6642\uff0c\u8981\u5728 JavaScript \u4e32\u63a5\u5b57\u4e32\u662f\u975e\u5e38\u9ebb\u7169\u7684\u4e8b\u60c5\uff0c\u4e14\u4e5f\u5fc5\u9808\u8003\u616e\u5230\u683c\u5f0f\u7684\u554f\u984c\u3002",source:"@site/docs/React/React-Ternary-Operators.md",sourceDirName:"React",slug:"/React/React-Ternary-Operators",permalink:"/Wei-Docusaurus/docs/React/React-Ternary-Operators",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u4e09\u5143\u904b\u7b97\u5b50",keywords:["react","react\u6559\u5b78","javascript","ternary operators"],description:"\u5728\u6a23\u677f\u5b57\u4e32\u9084\u6c92\u51fa\u73fe\u6642\uff0c\u8981\u5728 JavaScript \u4e32\u63a5\u5b57\u4e32\u662f\u975e\u5e38\u9ebb\u7169\u7684\u4e8b\u60c5\uff0c\u4e14\u4e5f\u5fc5\u9808\u8003\u616e\u5230\u683c\u5f0f\u7684\u554f\u984c\u3002",author:"WeiYun0912","og:title":"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u4e09\u5143\u904b\u7b97\u5b50","og:description":"\u5728\u6a23\u677f\u5b57\u4e32\u9084\u6c92\u51fa\u73fe\u6642\uff0c\u8981\u5728 JavaScript \u4e32\u63a5\u5b57\u4e32\u662f\u975e\u5e38\u9ebb\u7169\u7684\u4e8b\u60c5\uff0c\u4e14\u4e5f\u5fc5\u9808\u8003\u616e\u5230\u683c\u5f0f\u7684\u554f\u984c\u3002",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u6a23\u677f\u5b57\u4e32",permalink:"/Wei-Docusaurus/docs/React/React-Template-String"},next:{title:"React Query \u6559\u5b78",permalink:"/Wei-Docusaurus/docs/React/React-Query"}},i={},c=[{value:"JavaScript",id:"javascript",level:2},{value:"React",id:"react",level:2}],p=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:c,Highlight:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5U7Y35_lGxI"},"\u5f71\u7247\u9023\u7d50")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"\u9069\u7576\u7684\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u6e1b\u5c11\u64b0\u5beb\u7a0b\u5f0f\u78bc\u7684\u884c\u6578\uff0c\u4e26\u589e\u52a0\u53ef\u8b80\u6027\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u662f\u53bb\u5224\u65b7 age \u662f\u5426\u5927\u65bc 24\uff0c\u5982\u679c\u7d50\u679c\u70ba true\uff0c\u5c31\u5c07 Alex \u8ce6\u503c\u7d66\u8b8a\u6578 name\uff0c\u70ba false \u5c31\u5c07 Bob \u8ce6\u503c\u7d66\u8b8a\u6578 name\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let age = 24;\nlet name = "";\n\nif (age >= 24) {\n  name = "Alex";\n} else {\n  name = "Bob";\n}\n\nconsole.log(name); // output : Alex\n')),(0,a.kt)("p",null,"\u800c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50\u5c07\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u6539\u5beb\u6210\u4ee5\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let age = 24;\nlet name = "";\n\nage >= 24 ? (name = "Alex") : (name = "Bob");\n\nconsole.log(name); // output : Alex\n')),(0,a.kt)("p",null,"\u4e09\u5143\u904b\u7b97\u5b50\u7684\u64b0\u5beb\u908f\u8f2f\u70ba\uff1a",(0,a.kt)(p,{color:"#367E18",mdxType:"Highlight"},"condition ? exprIfTrue : exprIfFalse")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u9084\u80fd\u5728\u66f4\u7cbe\u7c21\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let age = 24;\nlet name = age >= 24 ? "Alex" : "Bob";\n\nconsole.log(name); // output : Alex\n')),(0,a.kt)("p",null,"\u800c\u6709\u6642\u5019\u6211\u5011\u4e26\u4e0d\u5728\u610f\u689d\u4ef6\u70ba false \u6642\u56de\u50b3\u7684\u503c\u70ba\u4f55\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)(p,{color:"gray",mdxType:"Highlight"},"&&")," \u904b\u7b97\u5b50\uff0c\u610f\u601d\u5c31\u662f\u524d\u9762\u7684\u689d\u4ef6\u70ba true \u7684\u8a71\uff0c\u624d\u53bb\u57f7\u884c\u5f8c\u9762\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let age = 24;\nlet name = age >= 24 && "Alex";\n\nconsole.log(name); // output : Alex\n')),(0,a.kt)("h2",{id:"react"},"React"),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50\u5728 React \u4e2d\u5224\u65b7 jsx \u6216\u662f component \u4ec0\u9ebc\u6642\u5019\u8a72\u51fa\u73fe\uff0c\u73fe\u5728\u9ede\u64ca Result \u7684\u6309\u9215\uff0c\u6703\u5c07 showText \u66f4\u6539\u70ba true\uff0c\u7576 showText \u70ba true \u6642\uff0c\u5c31\u6703\u986f\u793a Hello World \u6587\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers live",title:"'App.js'",showLineNumbers:!0,live:!0},'function App() {\n  const [showText, setShowText] = useState(false);\n\n  return (\n    <div className="App">\n      <button onClick={() => setShowText(!showText)}>Toggle</button>\n      {showText ? <p>Hello World</p> : null}\n    </div>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers live",title:"'App.js'",showLineNumbers:!0,live:!0},'function App() {\n  const [showText, setShowText] = useState(false);\n\n  const SayHello = () => <h1>Hello</h1>;\n\n  return (\n    <div className="App">\n      <button onClick={() => setShowText(!showText)}>Toggle</button>\n      {showText ? <SayHello /> : null}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u800c\u5982\u679c\u4e0d\u5728\u610f false \u8981\u986f\u793a\u7684\u503c\u70ba\u4f55\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)(p,{color:"gray",mdxType:"Highlight"},"&&"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers live",title:"'App.js'",showLineNumbers:!0,live:!0},'function App() {\n  const [showText, setShowText] = useState(false);\n\n  const SayHello = () => <h1>Hello</h1>;\n\n  return (\n    <div className="App">\n      <button onClick={() => setShowText(!showText)}>Toggle</button>\n      {showText && <SayHello />}\n    </div>\n  );\n}\n')))}m.isMDXComponent=!0}}]);