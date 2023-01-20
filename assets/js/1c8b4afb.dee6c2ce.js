"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const c={title:"[solidity] \u5229\u7528 keccak256 hash function \u4f86\u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272\u6b0a\u9650",keywords:["solidity"]},o=void 0,i={unversionedId:"Blockchain/Solidity/Features/accessControl",id:"Blockchain/Solidity/Features/accessControl",title:"[solidity] \u5229\u7528 keccak256 hash function \u4f86\u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272\u6b0a\u9650",description:"Github \u9023\u7d50",source:"@site/docs/Blockchain/Solidity/Features/accessControl.md",sourceDirName:"Blockchain/Solidity/Features",slug:"/Blockchain/Solidity/Features/accessControl",permalink:"/Wei-Docusaurus/docs/Blockchain/Solidity/Features/accessControl",draft:!1,tags:[],version:"current",frontMatter:{title:"[solidity] \u5229\u7528 keccak256 hash function \u4f86\u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272\u6b0a\u9650",keywords:["solidity"]},sidebar:"tutorialSidebar",previous:{title:"Blockchain",permalink:"/Wei-Docusaurus/docs/category/blockchain"},next:{title:"[solidity] Call",permalink:"/Wei-Docusaurus/docs/Blockchain/Solidity/Features/call"}},l={},s=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/SmartContracts/tree/main/Features/Access%20Control"},"Github \u9023\u7d50")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/eYG-XAKaxqU"},"\u5f71\u7247\u9023\u7d50")),(0,a.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,a.kt)("p",null,"\u5728 Solidity \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u5236\u5b9a\u54ea\u4e9b Function \u80fd\u5920\u8b93\u54ea\u4e9b\u89d2\u8272\u4f7f\u7528\uff0c\u800c\u5236\u5b9a\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u7a2e\uff0c\u672c\u7bc7\u662f\u4f7f\u7528 keccask256 Hash \u7684\u65b9\u5f0f\u4f86\u53d6\u5f97\u89d2\u8272\u540d\u7a31\uff0c\u4e26\u5728\u4f7f\u7528 Function \u7684\u6642\u5019\u53bb\u5224\u65b7\u4f7f\u7528\u8005\u7684\u89d2\u8272\u662f\u5426\u6709\u6b0a\u9650\u57f7\u884c\u3002"),(0,a.kt)("p",null,"\u5728\u4eca\u5929\u7684\u667a\u80fd\u5408\u7d04\u6211\u5011\u5b9a\u7fa9\u4e86\u5169\u7a2e\u89d2\u8272\uff0c\u5206\u5225\u662f ADMIN \u548c USER\uff0c\u800c\u6211\u5011\u6703\u5229\u7528 keccak256 Hash Function \u4f86\u53d6\u5f97\u9019\u5169\u500b\u89d2\u8272\u7684 Hash\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Oqe64Us.png",alt:"Image"})),(0,a.kt)("p",null,"\u4f7f\u7528 keccak256 \u6642\u8981\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u50b3\u5165\u5169\u500b\u4ee5\u4e0a\u7684\u53c3\u6578\u9032\u53bb\uff0c\u5fc5\u9808\u8981\u7528 abi.encodePacked \u4f86\u5c07\u4f60\u7684\u53c3\u6578\u6253\u5305\uff0c\u4e0d\u7136\u7de8\u8b6f\u5668\u6703\u5831\u932f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/8JdFHQH.png",alt:"Image"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/eZjeLIi.png",alt:"Image"})),(0,a.kt)("p",null,"\u4e4b\u5f8c\u6211\u5011\u5b9a\u7fa9\u4e00\u500b Double Mapping \u7684\u8b8a\u6578\uff0c\u540d\u70ba roles\uff0c\u4e3b\u8981\u662f\u4f86\u5224\u65b7\u4f7f\u7528\u8005\u76ee\u524d\u662f\u5c6c\u65bc ADMIN \u9084\u662f USER\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u500b\u50b3\u5165\u7684\u53c3\u6578\u662f ADMIN \u6216 USER \u7684 Hash\uff0c\u7b2c\u4e8c\u500b\u50b3\u5165\u7684\u53c3\u6578\u662f\u4f7f\u7528\u8005\u7684 Address\uff0c\u8981\u662f\u4f7f\u7528\u8005\u70ba ADMIN \u7684\u8a71\uff0c\u50b3\u5165 ADMIN Hash \u8207\u4f7f\u7528\u8005\u7684 Address \u5f8c\uff0croles \u61c9\u56de\u50b3 true\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/6esAMIY.png",alt:"Image"})),(0,a.kt)("p",null,"\u73fe\u5728\u9700\u8981\u5148\u53d6\u5f97 ADMIN \u548c USER \u7684 Hash\uff0c\u6240\u4ee5\u5148\u5c07\u5408\u7d04\u9032\u884c\u90e8\u7f72\u3002"),(0,a.kt)("p",null,"ADMIN Hash\uff1a0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42\nUSER Hash\uff1a0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/j6y4OTe.png",alt:"Image"})),(0,a.kt)("p",null,"\u4e4b\u5f8c\u5728\u5efa\u69cb\u5f0f\u7684\u6642\u5019\uff0c\u76f4\u63a5\u5c07\u90e8\u7f72\u8a72\u667a\u80fd\u5408\u7d04\u7684\u4f7f\u7528\u8005\u5b9a\u7fa9\u70ba ADMIN\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Bymq6F5.png",alt:"Image"})),(0,a.kt)("p",null,"\u5b9a\u7fa9\u5b8c\u5efa\u69cb\u5f0f\u5f8c\uff0c\u5c31\u4f86\u6e2c\u8a66\u90e8\u7f72\u667a\u80fd\u5408\u7d04\u7684\u4f7f\u7528\u8005\u662f\u5426\u70ba ADMIN\uff0c\u5c07 ADMIN Hash \u8207\u4f7f\u7528\u8005\u7684 Address \u50b3\u5165 roles\uff0c\u800c\u56de\u50b3\u7684\u70ba true\uff0c\u4ee3\u8868\u8a72\u4f7f\u7528\u8005\u76ee\u524d\u70ba ADMIN\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ThKBsC6.png",alt:"Image"})),(0,a.kt)("p",null,"\u6700\u5f8c\u5c31\u53ef\u4ee5\u4f86\u5be6\u4f5c ADMIN \u5206\u914d\u89d2\u8272\u7d66\u5176\u4ed6\u4f7f\u7528\u8005\u7684 Function \u4e86\uff0c\u7576\u7136\u6211\u5011\u4e5f\u53ef\u4ee5\u64a4\u92b7(Revoke)\u4f7f\u7528\u8005\u7684\u89d2\u8272\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/AnrYlyn.png",alt:"Image"})))}u.isMDXComponent=!0}}]);