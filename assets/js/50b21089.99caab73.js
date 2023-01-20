"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(c,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(f,p(p({ref:t},i),{},{components:n})):r.createElement(f,p({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"[blockchain] \u4ee5\u592a\u574a\u5340\u584a\u93c8\u958b\u767c\u5de5\u5177 \u2014 Truffle Ganache \u4f7f\u7528\u6559\u5b78",keywords:["blockchain"]},p=void 0,o={unversionedId:"Blockchain/Tools/truffleGanache",id:"Blockchain/Tools/truffleGanache",title:"[blockchain] \u4ee5\u592a\u574a\u5340\u584a\u93c8\u958b\u767c\u5de5\u5177 \u2014 Truffle Ganache \u4f7f\u7528\u6559\u5b78",description:"Github \u9023\u7d50",source:"@site/docs/Blockchain/Tools/truffleGanache.md",sourceDirName:"Blockchain/Tools",slug:"/Blockchain/Tools/truffleGanache",permalink:"/Wei-Docusaurus/docs/Blockchain/Tools/truffleGanache",draft:!1,tags:[],version:"current",frontMatter:{title:"[blockchain] \u4ee5\u592a\u574a\u5340\u584a\u93c8\u958b\u767c\u5de5\u5177 \u2014 Truffle Ganache \u4f7f\u7528\u6559\u5b78",keywords:["blockchain"]},sidebar:"tutorialSidebar",previous:{title:"[blockchain] \u4ee5\u592a\u574a\u5340\u584a\u93c8\u958b\u767c\u5de5\u5177 \u2014 Hardhat Task \u4ecb\u7d39",permalink:"/Wei-Docusaurus/docs/Blockchain/Tools/hardhatTask"},next:{title:"[blockchain] \u4ee5\u592a\u574a\u5340\u584a\u93c8\u958b\u767c\u5de5\u5177 \u2014 \u4f7f\u7528Truffle\u5c07\u667a\u80fd\u5408\u7d04\u90e8\u7f72\u81f3Rinkeby\u4e26\u9a57\u8b49",permalink:"/Wei-Docusaurus/docs/Blockchain/Tools/truffleRinkeby"}},c={},u=[{value:"Ganache",id:"ganache",level:2},{value:"Truffle",id:"truffle",level:2},{value:"Truffle Config",id:"truffle-config",level:2},{value:"Truflle Compile",id:"truflle-compile",level:2},{value:"Connect Ganache",id:"connect-ganache",level:2},{value:"Truffle Deploy",id:"truffle-deploy",level:2},{value:"Truffle Console Send Transaction",id:"truffle-console-send-transaction",level:2},{value:"Results",id:"results",level:2},{value:"BLOCKS",id:"blocks",level:3},{value:"TRANSACTIONS",id:"transactions",level:3},{value:"CONTRACTS",id:"contracts",level:3},{value:"EVENTS",id:"events",level:3}],i={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/Truffle-Ganache"},"Github \u9023\u7d50")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Z7CeH5srgdo"},"\u5f71\u7247\u9023\u7d50 ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CUrye6xuWJ0"},"\u5f71\u7247\u9023\u7d50 Remix Ganache \u88dc\u5145\u8aaa\u660e")),(0,a.kt)("h1",{id:"truffle-ganache-\u4f7f\u7528\u6559\u5b78"},"Truffle Ganache \u4f7f\u7528\u6559\u5b78"),(0,a.kt)("p",null,"\u4eca\u5929\u9019\u7bc7\u662f\u8981\u4f86\u6559\u4ee5\u592a\u574a\u5340\u584a\u93c8\u7684\u5de5\u5177 Truffle \u548c Ganache\uff0cTruffle \u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u90e8\u7f72\u8207\u6e2c\u8a66\u667a\u80fd\u5408\u7d04\uff0cGanache \u5247\u662f\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u8fc5\u901f\u67b6\u8a2d\u672c\u5730\u7aef\u7684\u5340\u584a\u93c8\u7db2\u8def\u74b0\u5883\u3002"),(0,a.kt)("p",null,"\u672c\u7bc7\u7684 Ganache \u662f\u4f7f\u7528\u5716\u5f62\u5316\u7684\u4ecb\u9762\u4f86\u4ecb\u7d39\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/ganache/"},"\u5b98\u65b9\u4e0b\u8f09"),"\u3002"),(0,a.kt)("p",null,"\u524d\u7f6e\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VSCode"),(0,a.kt)("li",{parentName:"ul"},"Node (\u4f5c\u8005\u662f\u4f7f\u7528 14.16.1 \u7248\u672c)")),(0,a.kt)("h2",{id:"ganache"},"Ganache"),(0,a.kt)("p",null,"\u4e0b\u8f09\u5b8c Ganache \u4ee5\u5f8c\uff0c\u6253\u958b\u6703\u770b\u5230\u4ee5\u4e0b\u756b\u9762\uff0c\u6211\u5011\u9ede\u64ca",(0,a.kt)("strong",{parentName:"p"},"QUICKSTART"),"\uff0cGanache \u5c31\u6703\u8fc5\u901f\u7684\u5e6b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u672c\u5730\u7aef\u7684\u5340\u584a\u93c8\u7db2\u8def\u74b0\u5883\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/MMQlU6d.png",alt:"Image"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 Ganache \u9810\u8a2d\u6709\u7d66\u6211\u5011 10 \u500b\u6e2c\u8a66\u5e33\u865f\uff0c\u6bcf\u500b\u5e33\u865f\u5404\u6301\u6709 100 \u679a\u4ee5\u592a\u5e63\uff0c\u800c\u4e0b\u5716\u8f03\u91cd\u8981\u7684\u90e8\u5206\u662f RPC SERVER \u548c NETWORK ID\uff0c\u900f\u904e\u4ee5\u4e0a\u5169\u500b\u53c3\u6578\uff0c\u6211\u5011\u53ef\u4ee5\u5229\u7528 Truffle \u4f86\u9023\u7dda\u5230\u672c\u5730\u7aef\u7684\u5340\u584a\u93c8\uff0c\u4e26\u5229\u7528 Truffle \u90e8\u7f72\u8207\u57f7\u884c\u667a\u80fd\u5408\u7d04\uff0c\u800c\u4e00\u65e6\u9023\u7dda\u6210\u529f\uff0c\u7db2\u8def\u5167\u7684 Blocks \u548c Transactions \u7b49\u8cc7\u8a0a\u90fd\u6703\u986f\u793a\u5728 Ganache\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/WRnwXGE.png",alt:"Image"})),(0,a.kt)("h2",{id:"truffle"},"Truffle"),(0,a.kt)("p",null,"\u5c07\u524d\u7f6e\u5de5\u5177\u6e96\u5099\u597d\u5f8c\u5c31\u53ef\u4ee5\u4f86\u5b89\u88dd Truffle \u4e86\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u5373\u53ef\u9032\u884c\u5168\u57df\u5b89\u88dd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,a.kt)("p",null,"\u4e4b\u5f8c\u5148\u65b0\u589e\u4e00\u500b\u7a7a\u7684\u8cc7\u6599\u593e\uff0c\u63a5\u8457\u5728\u8a72\u8cc7\u6599\u593e\u5e95\u4e0b\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"truffle init\n")),(0,a.kt)("p",null,"\u6307\u4ee4\u6210\u529f\u57f7\u884c\u5f8c\uff0c\u8a72\u8cc7\u6599\u593e\u5e95\u4e0b\u7684\u6a94\u6848\u61c9\u8a72\u6703\u6709\u9019\u4e9b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contracts\uff1a\u667a\u80fd\u5408\u7d04\u6a94\u6848\u653e\u7f6e\u7684\u8cc7\u6599\u593e\uff0c\u9810\u8a2d\u6703\u6709\u4e00\u500b Migrations \u5408\u7d04\u3002"),(0,a.kt)("li",{parentName:"ul"},"migrations\uff1a\u90e8\u7f72\u667a\u80fd\u5408\u7d04\u7684\u8cc7\u6599\u593e\uff0c\u9810\u8a2d\u6703\u6709\u4e00\u500b\u90e8\u7f72 Migrations \u5408\u7d04\u7684 js \u6a94\u6848\u3002"),(0,a.kt)("li",{parentName:"ul"},"test\uff1a\u64b0\u5beb\u667a\u80fd\u5408\u7d04\u6e2c\u8a66\u7684\u8cc7\u6599\u593e\u3002"),(0,a.kt)("li",{parentName:"ul"},"truffle-config\uff1a\u667a\u80fd\u5408\u7d04\u7248\u672c\u8207\u5340\u584a\u93c8\u7db2\u8def\u76f8\u95dc\u7684\u8a2d\u5b9a\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/g4hZW0w.png",alt:"Image"})),(0,a.kt)("h2",{id:"truffle-config"},"Truffle Config"),(0,a.kt)("p",null,"\u6211\u5011\u5148\u4f86\u8a2d\u5b9a\u5340\u584a\u93c8\u7684\u7db2\u8def\u74b0\u5883\uff0c\u5728\u90a3\u4e4b\u524d\u6211\u5011\u9700\u8981\u77e5\u9053\u5340\u584a\u93c8\u7db2\u8def\u74b0\u5883\u7684\u4e00\u4e9b\u53c3\u6578\uff0c\u50cf\u662f RPC Server \u548c Network ID\uff0c\u800c\u4ee5\u4e0a\u5169\u500b\u53c3\u6578 Ganache \u90fd\u6709\u63d0\u4f9b\u7d66\u6211\u5011\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RPC SERVER : 127.0.0.1:7545"),(0,a.kt)("li",{parentName:"ul"},"NETOWRK ID : 5777")),(0,a.kt)("p",null,"\u63a5\u8457\u6211\u5011\u6253\u958b",(0,a.kt)("strong",{parentName:"p"},"truflle-config.js"),"\uff0c\u4e4b\u5f8c\u5c07",(0,a.kt)("strong",{parentName:"p"},"networks"),"\u7684\u90e8\u5206\u8a2d\u5b9a\u70ba\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/d1ZisRb.png",alt:"Image"})),(0,a.kt)("p",null,"\u800c\u56e0\u70ba\u672c\u7bc7\u6559\u5b78\u8981\u90e8\u7f72\u7684\u667a\u80fd\u5408\u7d04\u7248\u672c\u8f03\u9ad8\uff0c\u70ba 0.8.0\uff0c\u4f5c\u8005 Truffle \u9810\u8a2d\u7684 Solidity Compiler \u662f 0.5.0 \u5de6\u53f3\u7684\u7248\u672c\uff0c\u6240\u4ee5\u6211\u5011\u9700\u8981\u6307\u5b9a Solidity \u7684\u7248\u672c\uff0c\u5728",(0,a.kt)("strong",{parentName:"p"},"compilers"),"\u7684\u5730\u65b9\u5c07",(0,a.kt)("strong",{parentName:"p"},"solc"),"\u7684",(0,a.kt)("strong",{parentName:"p"},"version"),"\u8a2d\u5b9a\u70ba ",(0,a.kt)("strong",{parentName:"p"},"0.8.0"),"\uff0c\u8a2d\u5b9a\u5b8c\u4ee5\u5f8c\u5c31\u53ef\u4ee5\u5c07\u8a72\u4efd\u6a94\u6848\u5132\u5b58\u95dc\u9589\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/TvcbO4Q.png",alt:"Image"})),(0,a.kt)("h2",{id:"truflle-compile"},"Truflle Compile"),(0,a.kt)("p",null,"\u63a5\u8457\u6211\u5011\u6e96\u5099\u5c07\u667a\u80fd\u5408\u7d04\u90e8\u7f72\u5230\u672c\u5730\u5340\u584a\u93c8\uff0c\u672c\u6b21\u6559\u5b78\u8981\u90e8\u7f72\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/Truffle-Ganache/blob/main/contracts/CryptoCurrencyStore.sol"},"\u667a\u80fd\u5408\u7d04\u7a0b\u5f0f\u78bc\u5728\u9019"),"\uff0c\u53ef\u4ee5\u8907\u88fd\u8d77\u4f86\u8cbc\u5230",(0,a.kt)("strong",{parentName:"p"},"contracts"),"\u8cc7\u6599\u593e\u7684 ",(0,a.kt)("strong",{parentName:"p"},"sol")," \u6a94\u6848\uff0c\u4e26\u91cd\u65b0\u547d\u540d\u70ba",(0,a.kt)("strong",{parentName:"p"},"CryptoCurrencyStore.sol\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/SyNLyQB.png",alt:"Image"})),(0,a.kt)("p",null,"\u800c\u5728",(0,a.kt)("strong",{parentName:"p"},"migrations"),"\u8cc7\u6599\u593e\u7684",(0,a.kt)("strong",{parentName:"p"},"1_initial_migration.js"),"\u88e1\u9762\u7684\u5167\u5bb9\u4e5f\u8981\u66f4\u6539\u4e00\u4e0b\uff0c\u6539\u70ba\u4ee5\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const CryptoCurrencyStore = artifacts.require("CryptoCurrencyStore");\n\nmodule.exports = function (deployer) {\n  deployer.deploy(CryptoCurrencyStore);\n};\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/9zfOp4p.png",alt:"Image"})),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6b65\u9a5f\u90fd\u5b8c\u6210\u5f8c\uff0c\u5c31\u53ef\u4ee5\u4f86\u7de8\u8b6f\u667a\u80fd\u5408\u7d04\u4e86\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"truffle compile\n")),(0,a.kt)("p",null,"\u57f7\u884c\u6210\u529f\u5f8c\uff0c\u5c08\u6848\u8cc7\u6599\u593e\u5e95\u4e0b\u6703\u51fa\u73fe\u4e00\u500b\u65b0\u7684\u8cc7\u6599\u593e",(0,a.kt)("strong",{parentName:"p"},"build"),"\uff0c\u88e1\u9762\u5c31\u662f CryptoCurrencyStore \u7684 abi \u6a94\u6848\uff0c\u53ef\u4ee5\u6253\u958b\u770b\u4e00\u4e0b\uff0c\u78ba\u8a8d\u6709\u6c92\u6709\u554f\u984c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZVs5yBf.png",alt:"Image"})),(0,a.kt)("h2",{id:"connect-ganache"},"Connect Ganache"),(0,a.kt)("p",null,"\u73fe\u5728\u6211\u5011\u6253\u958b Ganache\uff0c\u4e26\u5207\u63db\u5230",(0,a.kt)("strong",{parentName:"p"},"CONTRACTS"),"\u4ecb\u9762\uff0c\u4e26\u9ede\u64ca",(0,a.kt)("strong",{parentName:"p"},"LINK TRUFFLE PROJECTS"),"\u6309\u9215\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/fLpHJoS.png",alt:"Image"})),(0,a.kt)("p",null,"\u5728\u8a72\u4ecb\u9762\u9ede\u64ca",(0,a.kt)("strong",{parentName:"p"},"ADD PROJECT"),"\u4e26\u5c07\u6211\u5011\u525b\u525b\u5c08\u6848\u7684",(0,a.kt)("strong",{parentName:"p"},"truflle-config.js"),"\u65b0\u589e\u9032\u4f86\uff0c\u65b0\u589e\u5b8c\u7562\u5f8c\uff0c\u9ede\u53f3\u4e0a\u89d2\u7684",(0,a.kt)("strong",{parentName:"p"},"SAVE AND RESTART"),"\uff0c\u5c31\u5b8c\u6210 Truffle \u8207 Ganache \u7684\u9023\u63a5\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/jE5iLEj.png",alt:"Image"})),(0,a.kt)("h2",{id:"truffle-deploy"},"Truffle Deploy"),(0,a.kt)("p",null,"\u6211\u5011\u518d\u6b21\u5230",(0,a.kt)("strong",{parentName:"p"},"CONTRACTS"),"\u4ecb\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u525b\u525b\u7de8\u8b6f\u7684 CryptoCurrencyStore \u5408\u7d04\u51fa\u73fe\u5728\u8a72\u4ecb\u9762\u4e86\uff0c\u4f46\u8a72\u5408\u7d04\u9084\u5c1a\u672a\u5728\u5340\u584a\u93c8\u7db2\u8def\u5167\u90e8\u7f72\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/u7E6gvZ.png",alt:"Image"})),(0,a.kt)("p",null,"\u56de\u5230\u5c08\u6848\u8cc7\u6599\u593e\u5e95\u4e0b\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"truffle deploy\n")),(0,a.kt)("p",null,"\u7136\u5f8c\u518d\u56de\u5230\u6211\u5011\u7684 Ganache\uff0c\u53ef\u4ee5\u770b\u5230\u5408\u7d04\u5df2\u7d93\u6210\u529f\u88ab\u90e8\u7f72\u4e86\uff0c\u90e8\u7f72\u5f8c\u7684\u5408\u7d04\u5730\u5740\u70ba\uff1a\n0x6547d6999b26Bc85CE75125C739Aa4a40fb48bbf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/BV3g0Ou.png",alt:"Image"})),(0,a.kt)("h2",{id:"truffle-console-send-transaction"},"Truffle Console Send Transaction"),(0,a.kt)("p",null,"\u800c\u8981\u57f7\u884c\u667a\u80fd\u5408\u7d04\u7684 function\uff0c\u6211\u5011\u5fc5\u9808\u9032\u5165\u5230\u5340\u584a\u93c8\u7db2\u8def\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u9023\u7dda\u5230\u5340\u584a\u93c8\u7db2\u8def\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"truffle console\n")),(0,a.kt)("p",null,"\u9032\u5230 console \u6a21\u5f0f\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u8f38\u5165 CryptoCurrencyStore \u4f86\u67e5\u770b\u5408\u7d04\u662f\u4e0d\u662f\u78ba\u5be6\u6709\u90e8\u7f72\u5230\u5340\u584a\u93c8\uff0c\u8f38\u5165\u5b8c\u9001\u51fa\u5f8c\uff0c\u53ef\u4ee5\u770b\u5230\u6211\u5011\u7684\u667a\u80fd\u5408\u7d04\u7a0b\u5f0f\u78bc\u4ee5\u53ca\u5176\u4ed6\u8cc7\u8a0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/r1sSieu.png",alt:"Image"})),(0,a.kt)("p",null,"\u73fe\u5728\u6211\u5011\u53ef\u4ee5\u4f86\u4f7f\u7528 CryptoCurrencyStore \u88e1\u9762\u7684 function\uff0c\u4e26\u767c\u9001\u4e00\u7b46\u4ea4\u6613\u5230\u5340\u584a\u93c8\u7db2\u8def\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u5c07 CryptoCurrencyStore \u7684 function \u8ce6\u4e88\u7d66 demo \u8b8a\u6578\uff0cat \u7684\u7b2c\u4e00\u500b\u53c3\u6578\u5fc5\u9808\u586b\u5beb\u4f60\u90e8\u7f72\u5f8c\u7684\u667a\u80fd\u5408\u7d04\u5730\u5740\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var demo;\nCryptoCurrencyStore.at("0x6547d6999b26Bc85CE75125C739Aa4a40fb48bbf").then(data => demo = data);\n')),(0,a.kt)("p",null,"\u4e4b\u5f8c\u6211\u5011\u57f7\u884c CryptoCurrencyStore \u7684 deposit function\uff0c\u4f86\u5132\u5b58 10 \u679a\u4ee5\u592a\u5e63\u5230\u8a72\u667a\u80fd\u5408\u7d04\uff0cfrom \u8981\u586b\u5beb\u7684\u5730\u5740\u4f7f\u7528 Ganache \u63d0\u4f9b\u7d66\u6211\u5011\u7684\u4f7f\u7528\u8005\u5730\u5740(ACCOUNTS)\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'demo.deposit({from : "0x568Bc88199838cF8979a4b82bB1f98E16b986ac5", value : 10000000000000000000})\n')),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"\u57f7\u884c\u6210\u529f\u5f8c\uff0c\u56de\u5230 Ganache \u6703\u770b\u5230\u8a72\u4f7f\u7528\u8005\u5c11\u4e86 10 \u679a\u4ee5\u592a\u5e63\uff0c\u9019\u4e5f\u4ee3\u8868\u8a72 function \u6210\u529f\u88ab\u57f7\u884c\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/FZyHqr5.png",alt:"Image"})),(0,a.kt)("h3",{id:"blocks"},"BLOCKS"),(0,a.kt)("p",null,"\u800c\u5728 BLOCKS \u4ecb\u9762\u53ef\u4ee5\u770b\u5230\u8a72\u5340\u584a\u93c8\u7db2\u8def\u7684\u5340\u584a\u6578\u91cf\uff0c\u7b2c\u4e00\u500b\u5340\u584a\u70ba\u6211\u5011\u90e8\u7f72\u667a\u80fd\u5408\u7d04\u7684\u6642\u5019\u6240\u7522\u751f\uff0c\u7b2c\u4e8c\u500b\u5340\u584a\u70ba\u4f7f\u7528 deposit function \u7684\u6642\u5019\u6240\u7522\u751f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/zRkbvEA.png",alt:"Image"})),(0,a.kt)("h3",{id:"transactions"},"TRANSACTIONS"),(0,a.kt)("p",null,"TRANSACTIONS \u4ecb\u9762\u5247\u53ef\u4ee5\u770b\u5230\u6709\u5169\u7b46\uff0c\u4e00\u7b46\u662f\u5408\u7d04\u90e8\u7f72\u6642\u6240\u7522\u751f(CONTRACT CREATION)\uff0c\u4e00\u7b46\u5247\u662f\u4f7f\u7528 deposit function \u6240\u7522\u751f(CONTRACT CALL)\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/L77pO8p.png",alt:"Image"})),(0,a.kt)("p",null,"\u6211\u5011\u9ede\u64ca CONTRACT CALL \u7684\u90a3\u4e00\u7b46\u4ea4\u6613\u5f8c\u53ef\u4ee5\u770b\u5230\u8a72\u6b21\u4ea4\u6613\u6240\u4f7f\u7528\u7684\u667a\u80fd\u5408\u7d04\u8207 FUNCTION \u540d\u7a31\uff0c\u8a72\u6b21\u4ea4\u6613\u89f8\u767c\u7684 EVENT \u4e5f\u6703\u4e00\u4f75\u986f\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/3Z9adXY.png",alt:"Image"})),(0,a.kt)("h3",{id:"contracts"},"CONTRACTS"),(0,a.kt)("p",null,"\u5230 CONTRACTS \u4ecb\u9762\u9ede\u64ca CryptoCurrencyStore \u5f8c\uff0c\u53ef\u4ee5\u770b\u5230\u8a72\u5408\u7d04\u7684\u72c0\u614b\uff0c\u53ef\u4ee5\u770b\u5230\u5408\u7d04\u7684 BALANCE \u70ba 10 \u679a\u4ee5\u592a\u5e63\uff0c\u4e5f\u5c31\u662f\u6211\u5011\u525b\u525b\u57f7\u884c deposit function \u6240\u5132\u5b58\u7684\u4ee5\u592a\u5e63\u6578\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZWgJAwM.png",alt:"Image"})),(0,a.kt)("h3",{id:"events"},"EVENTS"),(0,a.kt)("p",null,"EVENTS \u4ecb\u9762\u5247\u662f\u53ef\u4ee5\u770b\u8a72\u5340\u584a\u93c8\u7db2\u8def\u5167\u767c\u751f\u7684\u6240\u6709 EVENT\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/CUtXvxi.png",alt:"Image"})),(0,a.kt)("p",null,"\u9ede\u64ca\u5f8c\u4e5f\u53ef\u4ee5\u770b\u5230\u8a73\u7d30\u7684\u8cc7\u8a0a\uff0c\u5305\u522e RETURN VALUES\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/eyrVJ8v.png",alt:"Image"})))}m.isMDXComponent=!0}}]);