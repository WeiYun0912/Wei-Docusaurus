"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),g=i,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Inheritance"},l=void 0,o={unversionedId:"Blockchain/Solidity/Features/inheritance",id:"Blockchain/Solidity/Features/inheritance",title:"Inheritance",description:"Github \u9023\u7d50",source:"@site/docs/Blockchain/Solidity/Features/inheritance.md",sourceDirName:"Blockchain/Solidity/Features",slug:"/Blockchain/Solidity/Features/inheritance",permalink:"/Wei-Docusaurus/docs/Blockchain/Solidity/Features/inheritance",draft:!1,tags:[],version:"current",frontMatter:{title:"Inheritance"},sidebar:"tutorialSidebar",previous:{title:"Immutable",permalink:"/Wei-Docusaurus/docs/Blockchain/Solidity/Features/immutable"},next:{title:"New",permalink:"/Wei-Docusaurus/docs/Blockchain/Solidity/Features/new"}},c={},u=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"Multi Inheritance (\u591a\u91cd\u7e7c\u627f)",id:"multi-inheritance-\u591a\u91cd\u7e7c\u627f",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Inheritance"},"Github \u9023\u7d50")),(0,i.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,i.kt)("p",null,"Solidity \u4e5f\u652f\u63f4\u7e7c\u627f\u529f\u80fd\uff0c\u5047\u4f7f\u4eca\u5929\u6709\u5169\u500b\u5408\u7d04\uff0c\u5206\u5225\u70ba A \u5408\u7d04\u8207 B \u5408\u7d04\uff0c\u800c B \u5408\u7d04\u8981\u5be6\u4f5c\u7684 function \u529f\u80fd\uff0cA \u5408\u7d04\u90fd\u6709\uff0c\u5247 B \u5408\u7d04\u53ef\u4ee5\u7e7c\u627f A \u5408\u7d04\u4f86\u7c21\u5316\u7a0b\u5f0f\u78bc\u3002"),(0,i.kt)("p",null,'\u8981\u7e7c\u627f A \u5408\u7d04\u7684\u8a71\uff0c\u53ea\u8981\u5728 B \u5408\u7d04\u52a0\u4e0a "is A" \u5373\u53ef\uff0cis \u5728 Solidity \u5167\u5c31\u662f\u7e7c\u627f\u7684\u610f\u601d\u3002'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/OV7O3Fu.png",alt:"Image"})),(0,i.kt)("p",null,"\u5c07 B \u5408\u7d04\u90e8\u7f72\u5f8c\uff0c\u6703\u770b\u5230 A \u5408\u7d04\u7684 function \u53ef\u4ee5\u76f4\u63a5\u505a\u4f7f\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/GV89ZOG.png",alt:"Image"})),(0,i.kt)("p",null,"\u800c\u5047\u8a2d\u6211\u5011\u60f3\u8981\u5728 B \u5408\u7d04\u4fee\u6539 A \u5408\u7d04\u539f\u6709\u7684 function\uff0c\u5247\u9700\u8981\u5728 A \u5408\u7d04\u7684 function \u5ba3\u544a virtual\uff0c\u800c B \u5408\u7d04\u4fee\u6539\u7684 function \u9700\u5ba3\u544a\u70ba override\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/GVVTvkg.png",alt:"Image"})),(0,i.kt)("p",null,'\u5be6\u969b\u57f7\u884c\u5f8c\uff0c\u53ef\u4ee5\u770b\u5230 sayHello \u7684\u56de\u50b3\u503c\u662f B \u5408\u7d04\u5b9a\u7fa9\u7684"Hello Hello"\u3002'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/tqJ7iRK.png",alt:"Image"})),(0,i.kt)("p",null,"\u800c\u5047\u4f7f A \u5408\u7d04\u5728\u5efa\u69cb\u6642\u9700\u50b3\u5165\u53c3\u6578\uff0c\u5247 B \u5408\u7d04\u4e5f\u9700\u50b3\u5165\u76f8\u5c0d\u61c9\u7684\u53c3\u6578\uff0c\u800c A \u5408\u7d04\u7684\u72c0\u614b\u8b8a\u6578\u4e5f\u6703\u4e00\u540c\u7e7c\u627f\u5230 B \u5408\u7d04\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/NiXGkee.png",alt:"Image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Q4V3cnb.png",alt:"Image"})),(0,i.kt)("h2",{id:"multi-inheritance-\u591a\u91cd\u7e7c\u627f"},"Multi Inheritance (\u591a\u91cd\u7e7c\u627f)"),(0,i.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u591a\u91cd\u7e7c\u627f\uff0c\u53ea\u8981\u5728\u7e7c\u627f\u7684\u5408\u7d04\u4e4b\u9593\u5229\u7528 , \u5340\u9694\u958b\u4f86\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/VrC80PA.png",alt:"Image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/HDyW8dJ.png",alt:"Image"})))}m.isMDXComponent=!0}}]);