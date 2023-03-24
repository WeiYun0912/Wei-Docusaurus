"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2145],{3905:(e,r,n)=>{n.d(r,{Zo:()=>o,kt:()=>u});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),l=function(e){var r=a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},o=function(e){var r=l(e.components);return a.createElement(d.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=t,m=p["".concat(d,".").concat(u)]||p[u]||v[u]||s;return n?a.createElement(m,i(i({ref:r},o),{},{components:n})):a.createElement(m,i({ref:r},o))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,i=new Array(s);i[0]=p;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1526:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(7462),t=(n(7294),n(3905));const s={title:"[javascript] \u4f7f\u7528 Intersection Observer API \u5be6\u4f5c Infinite Scroll \u8207 Lazy Loading",keywords:["javascript","css","infinite scroll","lazy loading"],description:"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72API\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230Infinite Scroll\u548cLazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\u3002",author:"WeiYun0912","og:title":"\u4f7f\u7528 Intersection Observer API \u5be6\u4f5c Infinite Scroll \u8207 Lazy Loading","og:description":"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72API\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230Infinite Scroll\u548cLazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\u3002",sidebar_position:1},i=void 0,c={unversionedId:"JavaScript/intersectionObserver",id:"JavaScript/intersectionObserver",title:"[javascript] \u4f7f\u7528 Intersection Observer API \u5be6\u4f5c Infinite Scroll \u8207 Lazy Loading",description:"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72API\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230Infinite Scroll\u548cLazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\u3002",source:"@site/docs/JavaScript/intersectionObserver.md",sourceDirName:"JavaScript",slug:"/JavaScript/intersectionObserver",permalink:"/Wei-Docusaurus/docs/JavaScript/intersectionObserver",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[javascript] \u4f7f\u7528 Intersection Observer API \u5be6\u4f5c Infinite Scroll \u8207 Lazy Loading",keywords:["javascript","css","infinite scroll","lazy loading"],description:"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72API\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230Infinite Scroll\u548cLazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\u3002",author:"WeiYun0912","og:title":"\u4f7f\u7528 Intersection Observer API \u5be6\u4f5c Infinite Scroll \u8207 Lazy Loading","og:description":"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72API\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230Infinite Scroll\u548cLazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\u3002",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CSS & JavaScript",permalink:"/Wei-Docusaurus/docs/category/css--javascript"},next:{title:"[javascript] \u4f7f\u7528 PostCss \u958b\u767c CSS",permalink:"/Wei-Docusaurus/docs/JavaScript/postcss"}},d={},l=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"Lazy Loading",id:"lazy-loading",level:2},{value:"\u9810\u8f09\u5165 preloading",id:"\u9810\u8f09\u5165-preloading",level:2},{value:"Infinite Scroll",id:"infinite-scroll",level:2}],o={toc:l};function v(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},o,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2IbRtjez6ag"},"\u7a0b\u5f0f\u78bc\u7531\u9019\u500b\u5f71\u7247\u7522\u51fa")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=r9ppY3wzQok&t=1s"},"\u5f71\u7247\u9023\u7d50")),(0,t.kt)("p",null,"\u9019\u6b21\u8981\u4f86\u4ecb\u7d39 IntersectionObserver API\uff0c\u6709\u4e86\u8a72 API \u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u505a\u5230 Infinite Scroll \u548c Lazy Loading\uff0c\u5728\u904e\u53bb\u8981\u5075\u6e2c\u5230\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u9700\u8981\u82b1\u8cbb\u8a31\u591a\u529f\u592b\uff0c\u800c\u900f\u904e IntersectionObserver\uff0c\u6211\u5011\u53ef\u4ee5\u78ba\u5207\u7684\u638c\u63e1\u5143\u7d20\u662f\u5426\u5df2\u7d93\u9032\u5165\u6216\u96e2\u958b\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\uff0c\u6548\u679c\u5982\u4e0b\u5716\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/b3hjuCH.gif",alt:null})),(0,t.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='index.html' showLineNumbers",title:"'index.html'",showLineNumbers:!0},'<div class="card-container">\n  <div class="card">First card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Last card</div>\n</div>\n')),(0,t.kt)("p",null,"card class \u9810\u8a2d\u7684 opacity \u70ba 0\uff0c\u610f\u601d\u5c31\u662f\u5b8c\u5168\u900f\u660e\uff0c\u6240\u4ee5\u76ee\u524d\u5728\u756b\u9762\u4e0a\u662f\u770b\u4e0d\u5230\u4efb\u4f55\u5143\u7d20\u7684\uff0c\u800c\u6211\u5011\u5e0c\u671b\u7576 card \u9032\u5165\u5230\u4f7f\u7528\u8005\u7684\u756b\u9762\u7bc4\u570d\u6642\uff0ccard \u80fd\u5920\u7531\u53f3\u81f3\u5de6\u9032\u5165\uff0c\u6240\u4ee5 card \u9810\u8a2d\u7684\u4f4d\u7f6e\u662f\u5728 translateX(100px)\uff0c\u800c\u7576 card \u88ab\u52a0\u4e0a show class \u4ee5\u5f8c\uff0c\u4f4d\u7f6e\u6703\u79fb\u81f3 translateX(0)\uff0c\u4e26\u5c07 card \u7684\u900f\u660e\u5ea6\u8a2d\u5b9a\u70ba 1\uff0c\u8b93\u5b83\u986f\u793a\u5728\u756b\u9762\u4e0a\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".card-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.card {\n  background: #fff;\n  border: 1px solid #000;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  transform: translateX(100px);\n  opacity: 0;\n  transition: 150ms;\n  color: #000;\n}\n\n.card.show {\n  transform: translateX(0);\n  opacity: 1;\n}\n")),(0,t.kt)("p",null,"\u5728 card class \u5f8c\u52a0\u4e0a show class \u5c31\u6703\u8b93 card \u986f\u793a\u5728\u756b\u9762\u4e0a\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='index.html' showLineNumbers {2,4}",title:"'index.html'",showLineNumbers:!0,"{2,4}":!0},'<div class="card-container">\n  <div class="card show">First card</div>\n  <div class="card">Card</div>\n  <div class="card show">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Last card</div>\n</div>\n')),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/dRNlUAp.png",alt:"Image"})),(0,t.kt)("h2",{id:"lazy-loading"},"Lazy Loading"),(0,t.kt)("p",null,"\u9996\u5148\u6211\u5011\u9700\u8981\u6293\u53d6\u5230\u6240\u6709 class \u70ba card \u7684\u5143\u7d20\uff0c\u63a5\u8457\u5728\u5be6\u4f5c IntersectionObserver API\uff0cIntersectionObserver \u5167\u6703\u81ea\u5e36\u4e00\u500b entries \u53c3\u6578\uff0c\u6211\u5011\u5148\u5c07\u5b83 console \u51fa\u4f86\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers",title:"'app.js'",showLineNumbers:!0},'const cards = document.querySelectorAll(".card");\n\nconst observer = new IntersectionObserver((entries) => {\n  console.log(entries);\n});\n')),(0,t.kt)("p",null,"\u7576\u6253\u958b console \u7684\u6642\u5019\u6703\u767c\u73fe\u6c92\u6709\u4efb\u4f55\u6771\u897f\u8f38\u51fa\u5728 console\uff0c\u9019\u662f\u56e0\u70ba\u6211\u5011\u9084\u9700\u8981\u544a\u8a34 observer \u6211\u5011\u8981",(0,t.kt)("inlineCode",{parentName:"p"},"\u89c0\u5bdf"),"\u54ea\u500b\u5143\u7d20\uff0c\u7576\u5b83\u51fa\u73fe\u7684\u6642\u5019\u624d\u6703\u89f8\u767c console\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers",title:"'app.js'",showLineNumbers:!0},'const cards = document.querySelectorAll(".card");\n\nconst observer = new IntersectionObserver((entries) => {\n  console.log(entries);\n});\n\nobserver.observe(cards[0]); //\u89c0\u5bdf\u7b2c\u4e00\u500bclass\u70bacard\u7684\u5143\u7d20\n')),(0,t.kt)("p",null,"\u9019\u6642\u5019\u6253\u958b console \u5f8c\u5c31\u6703\u770b\u5230\u7d50\u679c\u4e86\uff0c\u53ef\u4ee5\u770b\u5230\u5716\u4e2d\u7684 isIntersecting \u70ba true\uff0c\u4ee3\u8868\u8a72\u5143\u7d20\u5df2\u7d93\u88ab",(0,t.kt)("inlineCode",{parentName:"p"},"\u89c0\u5bdf"),"\u904e\u4e86\uff0c\u53e6\u5916\u9084\u6709\u4e00\u500b target\uff0ctarget \u70ba\u89c0\u5bdf\u5230\u7684 DOM \u5143\u7d20\uff0c\u53ef\u4ee5\u9806\u4fbf\u8a66\u8a66\u770b\u5c07\u6efe\u8f2a\u4e0a\u4e0b\u6ed1\u52d5\u7684\u6642\u5019\u6703\u4e0d\u6703\u518d\u6b21\u51fa\u73fe\u8a72 console\u3002"),(0,t.kt)("p",null,"\u6709\u4e86 isIntersecting \u548c target \u5c31\u53ef\u4ee5\u4f86\u5be6\u4f5c Lazy Loading \u4e86\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers",title:"'app.js'",showLineNumbers:!0},'const cards = document.querySelectorAll(".card");\n\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    //\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\uff0c\u5c31\u5728\u8a72\u5143\u7d20\u52a0\u4e0ashow class\u3002\n    entry.target.classList.toggle("show", entry.isIntersecting);\n  });\n});\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n')),(0,t.kt)("p",null,"\u7d50\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u767c\u73fe\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\u7684\u6642\u5019\uff0c\u6703\u52a0\u4e0a show class\uff0c\u8b93\u5143\u7d20\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u800c\u4e00\u65e6\u96e2\u958b\u89c0\u5bdf\u7bc4\u570d\u6642\uff0cshow class \u53c8\u6703\u88ab\u79fb\u9664\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/2eUTayJ.gif",alt:"Image"})),(0,t.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u8981\u88ab\u89c0\u5bdf\u904e\u7684\u5143\u7d20\u518d\u6b21\u53bb\u57f7\u884c observer \u88e1\u9762\u7684\u7a0b\u5f0f\u78bc\u7684\u8a71\uff0c\u53ef\u4ee5\u6539\u5beb\u6210\u9019\u6a23\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers {9-13}",title:"'app.js'",showLineNumbers:!0,"{9-13}":!0},'const cards = document.querySelectorAll(".card");\nconst cardContainer = document.querySelector(".card-container");\n\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    //\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\uff0c\u5c31\u5728\u8a72\u5143\u7d20\u52a0\u4e0ashow class\u3002\n    entry.target.classList.toggle("show", entry.isIntersecting);\n\n    //\u7576\u5143\u7d20\u300c\u5df2\u7d93\u300d\u88ab\u89c0\u5bdf\u904e\u4e86\n    if (entry.isIntersecting) {\n      //\u5c31\u4f7f\u7528unobserve\u53d6\u6d88\u89c0\u5bdf\n      observer.unobserve(entry.target);\n    }\n  });\n});\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n')),(0,t.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe\uff0c\u88ab\u89c0\u5bdf\u904e\u7684\u5143\u7d20\u56e0\u70ba\u88ab\u53d6\u6d88\u89c0\u5bdf(unobserve)\uff0c\u6240\u4ee5",(0,t.kt)("inlineCode",{parentName:"p"},"\u518d\u6b21"),"\u88ab\u89c0\u5bdf\u5230\u7684\u6642\u5019\uff0c\u4e0d\u6703\u57f7\u884c\u4efb\u4f55\u7a0b\u5f0f\u78bc\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/jWJrrI8.gif",alt:"Image"})),(0,t.kt)("h2",{id:"\u9810\u8f09\u5165-preloading"},"\u9810\u8f09\u5165 preloading"),(0,t.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5be6\u73fe\u9810\u8f09\u5165\u7684\u529f\u80fd\uff0c\u6216\u662f\u8aaa\u9810\u89c0\u5bdf\u5143\u7d20\u7684\u8a71\uff0c\u53ef\u4ee5\u5728 IntersectionObserver \u7684 API \u7684\u7b2c\u4e8c\u500b\u53c3\u6578\u52a0\u4e0a rootMargin\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers {18}",title:"'app.js'",showLineNumbers:!0,"{18}":!0},'const cards = document.querySelectorAll(".card");\nconst cardContainer = document.querySelector(".card-container");\n\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach((entry) => {\n      //\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\uff0c\u5c31\u5728\u8a72\u5143\u7d20\u52a0\u4e0ashow class\u3002\n      entry.target.classList.toggle("show", entry.isIntersecting);\n\n      //\u7576\u5143\u7d20\u300c\u5df2\u7d93\u300d\u88ab\u89c0\u5bdf\u904e\u4e86\n      if (entry.isIntersecting) {\n        //\u5c31\u4f7f\u7528unobserve\u53d6\u6d88\u89c0\u5bdf\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  {\n    rootMargin: "100px",\n  }\n);\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n')),(0,t.kt)("p",null,"\u52a0\u4e0a rootMargin \u5f8c\uff0c\u6703\u767c\u73fe\u5728\u6211\u5011\u6ed1\u52d5\u5230\u5e95\u4e0b\u7684\u5143\u7d20\u4e4b\u524d\uff0c\u8a72\u5143\u7d20\u5c31\u5df2\u7d93\u5148\u88ab\u6e32\u67d3\u51fa\u4f86\u4e86\uff0c\u6240\u4ee5\u6211\u5011\u4e26\u4e0d\u6703\u770b\u5230\u5143\u7d20\u7684\u52d5\u756b\uff0c\u800c\u9810\u8f09\u5165\u7684\u7bc4\u570d\u53ef\u4ee5\u6839\u64da\u81ea\u5df1\u7684\u9700\u6c42\u53bb\u8a2d\u5b9a\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/wdcgw59.gif",alt:"Image"})),(0,t.kt)("h2",{id:"infinite-scroll"},"Infinite Scroll"),(0,t.kt)("p",null,"\u5148\u4f86\u8b1b\u4e00\u4e0b\u4f7f\u7528 observer \u5be6\u4f5c Infinite Scroll \u7684\u539f\u7406\u3002"),(0,t.kt)("p",null,"\u4e5f\u5c31\u662f\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u88ab\u89c0\u5bdf\u5230(observe)\u6642"),"\u6642\uff0c\u99ac\u4e0a\u65b0\u589e\u591a\u500b\u65b0\u7684\u5143\u7d20\u5728\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u5f8c\u9762\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='index.html' showLineNumbers",title:"'index.html'",showLineNumbers:!0},'<div class="card-container">\n  <div class="card">First card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Last card</div>\n</div>\n')),(0,t.kt)("p",null,"\u6240\u4ee5\u7406\u60f3\u7684\u7d50\u679c\u662f\u9019\u6a23\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='index.html' showLineNumbers {19-25}",title:"'index.html'",showLineNumbers:!0,"{19-25}":!0},'<div class="card-container">\n  <div class="card">First card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Last card</div>\n  \x3c!-- <div class="card">Last card</div> \u88ab observe \u4e86\u5f80\u5f8c\u591a\u52a05\u500b\u5143\u7d20  --\x3e\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  <div class="card">Card</div>\n  \x3c!-- \u2191\u2191\u2191 \u6240\u4ee5\u9019\u500b\u5143\u7d20\u5c31\u8b8a\u6210\u4e86\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u4e86 --\x3e\n</div>\n')),(0,t.kt)("p",null,"\u6240\u4ee5\u9019\u908a\u5ba3\u544a\u4e00\u500b\u65b0\u7684 IntersectionObserver API\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"\u5c08\u9580\u89c0\u5bdf\u6700\u5f8c\u4e00\u500b\u5143\u7d20"),"\uff0c\u7576\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\u6642\uff0c\u5c31\u5728\u5f80\u5f8c\u6dfb\u52a0\u6578\u500b\u5143\u7d20\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers {27-36,38-39,46-56}",title:"'app.js'",showLineNumbers:!0,"{27-36,38-39,46-56}":!0},'const cards = document.querySelectorAll(".card");\nconst cardContainer = document.querySelector(".card-container");\n\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach((entry) => {\n      //\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\uff0c\u5c31\u5728\u8a72\u5143\u7d20\u52a0\u4e0ashow class\u3002\n      entry.target.classList.toggle("show", entry.isIntersecting);\n\n      //\u7576\u5143\u7d20\u300c\u5df2\u7d93\u300d\u88ab\u89c0\u5bdf\u904e\u4e86\n      if (entry.isIntersecting) {\n        //\u5c31\u4f7f\u7528unobserve\u53d6\u6d88\u89c0\u5bdf\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  {\n    rootMargin: "100px",\n  }\n);\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n\nconst lastCardObserver = new IntersectionObserver((entries) => {\n  //\u56e0\u70ba\u53ea\u89c0\u5bdf\u6700\u5f8c\u4e00\u500b\u5143\u7d20\uff0c\u6240\u4ee5 index \u70ba 0 \u7684\u4f4d\u7f6e\u53ea\u6703\u662f\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u7684entry\u3002\n  let lastCard = entries[0];\n\n  //\u7576\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u7684 isIntersecting \u70ba false \u6642\u5c31\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\u3002\n  if (!lastCard.isIntersecting) return;\n\n  //\u8f09\u5165\u65b0\u7684\u5143\u7d20\n  loadCard();\n});\n\n//\u53ea\u89c0\u5bdf\u6700\u5f8c\u4e00\u500b\u5143\u7d20\nlastCardObserver.observe(document.querySelector(".card:last-child"));\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n\n// \u7576\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\u6642\uff0c\u6703\u89f8\u767c\u8a72 function\uff0c\u65b0\u589e10\u500b class \u70ba card \u7684 div \u5143\u7d20\uff0c\n// \u4e26\u5728\u65b0\u5143\u7d20\u88ab\u5efa\u7acb\u51fa\u4f86\u7684\u540c\u6642\uff0c\u99ac\u4e0a\u89c0\u5bdf (observe) \u8a72\u5143\u7d20\u3002\nconst loadCard = () => {\n  for (let i = 0; i < 10; i++) {\n    const card = document.createElement("div");\n    card.textContent = "Card";\n    card.classList.add("card");\n    observer.observe(card);\n    cardContainer.append(card);\n  }\n};\n')),(0,t.kt)("p",null,"\u4f46\u4e0a\u8ff0\u7684\u7a0b\u5f0f\u78bc\u5be6\u969b\u57f7\u884c\u7684\u8a71\u6703\u6709\u554f\u984c\u3002"),(0,t.kt)("p",null,"\u7576\u6211\u5011\u6ed1\u5230\u6700\u5f8c\u4e00\u500b\u5143\u7d20(Last Card)\u6642\uff0c\u65b0\u7684\u5143\u7d20\u88ab\u5efa\u7acb\u51fa\u4f86\u4e86\uff0c\u4f46\u518d\u7e7c\u7e8c\u5f80\u4e0b\u6ed1\u6642\uff0c\u6703\u767c\u73fe\u6c92\u6709\u4efb\u4f55\u65b0\u7684\u5143\u7d20\u88ab\u8f09\u5165\uff0c\u4e5f\u5c31\u662f\u6211\u5011\u7684 loadCard function \u6c92\u6709\u88ab\u57f7\u884c\u5230\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/SrOmaRD.gif",alt:"Image"})),(0,t.kt)("p",null,"\u9019\u662f\u56e0\u70ba\u7576\u65b0\u7684\u5143\u7d20\u88ab\u5efa\u7acb\uff0c\u539f\u672c\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"\u6700\u5f8c\u4e00\u500b\u5143\u7d20"),"\uff0c\u5df2\u7d93\u4e0d\u662f\u539f\u672c\u7684 Last Card \u4e86\uff0c\u6240\u4ee5\u7a0b\u5f0f\u78bc\u7684\u90e8\u5206\u9084\u8981\u518d\u505a\u4fee\u6539\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='app.js' showLineNumbers {34-35,37-38}",title:"'app.js'",showLineNumbers:!0,"{34-35,37-38}":!0},'const cards = document.querySelectorAll(".card");\nconst cardContainer = document.querySelector(".card-container");\n\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach((entry) => {\n      //\u7576\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\uff0c\u5c31\u5728\u8a72\u5143\u7d20\u52a0\u4e0ashow class\u3002\n      entry.target.classList.toggle("show", entry.isIntersecting);\n\n      //\u7576\u5143\u7d20\u300c\u5df2\u7d93\u300d\u88ab\u89c0\u5bdf\u904e\u4e86\n      if (entry.isIntersecting) {\n        //\u5c31\u4f7f\u7528unobserve\u53d6\u6d88\u89c0\u5bdf\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  {\n    rootMargin: "100px",\n  }\n);\n\n//\u89c0\u5bdf\u6240\u6709\u7684card\ncards.forEach((card) => {\n  observer.observe(card);\n});\n\nconst lastCardObserver = new IntersectionObserver((entries) => {\n  //\u56e0\u70ba\u53ea\u89c0\u5bdf\u6700\u5f8c\u4e00\u500b\u5143\u7d20\uff0c\u6240\u4ee5 index \u70ba 0 \u7684\u4f4d\u7f6e\u53ea\u6703\u662f\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u7684entry\u3002\n  let lastCard = entries[0];\n\n  //\u7576\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u7684 isIntersecting \u70ba false \u6642\u5c31\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\u3002\n  if (!lastCard.isIntersecting) return;\n\n  // \u8f09\u5165\u65b0\u7684\u5143\u7d20\n  loadCard();\n\n  //\u53d6\u6d88\u89c0\u5bdf\u539f\u672c\u7684\u6700\u5f8c\u5143\u7d20\n  lastCardObserver.unobserve(lastCard.target);\n\n  //\u89c0\u5bdf\u65b0\u7684\u6700\u5f8c\u5143\u7d20\n  lastCardObserver.observe(document.querySelector(".card:last-child"));\n});\n\ncards.forEach((card) => {\n  observer.observe(card);\n});\n\n//\u53ea\u89c0\u5bdf\u6700\u5f8c\u4e00\u500b\u5143\u7d20\nlastCardObserver.observe(document.querySelector(".card:last-child"));\n\n// \u7576\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u88ab\u89c0\u5bdf\u5230\u6642\uff0c\u6703\u89f8\u767c\u8a72 function\uff0c\u65b0\u589e10\u500b class \u70ba card \u7684 div \u5143\u7d20\uff0c\n// \u4e26\u5728\u65b0\u5143\u7d20\u88ab\u5efa\u7acb\u51fa\u4f86\u7684\u540c\u6642\uff0c\u99ac\u4e0a\u89c0\u5bdf (observe) \u8a72\u5143\u7d20\u3002\nconst loadCard = () => {\n  for (let i = 0; i < 10; i++) {\n    const card = document.createElement("div");\n    card.textContent = "Card";\n    card.classList.add("card");\n    observer.observe(card);\n    cardContainer.append(card);\n  }\n};\n')),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/tTXdYFt.gif",alt:"Image"})))}v.isMDXComponent=!0}}]);