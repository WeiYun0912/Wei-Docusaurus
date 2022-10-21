"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2279],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(o),m=n,b=k["".concat(l,".").concat(m)]||k[m]||u[m]||a;return o?r.createElement(b,i(i({ref:t},c),{},{components:o})):r.createElement(b,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},6360:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={title:"Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",keywords:["react","storybook"],description:1,author:"WeiYun0912","og:title":"Storybook \u4ecb\u7d39","og:description":1,sidebar_position:1},i=void 0,s={unversionedId:"Stroybook/Storybook-Basic",id:"Stroybook/Storybook-Basic",title:"Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",description:"1",source:"@site/docs/Stroybook/Storybook-Basic.md",sourceDirName:"Stroybook",slug:"/Stroybook/Storybook-Basic",permalink:"/Wei-Docusaurus/docs/Stroybook/Storybook-Basic",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",keywords:["react","storybook"],description:"1",author:"WeiYun0912","og:title":"Storybook \u4ecb\u7d39","og:description":1,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Storybook",permalink:"/Wei-Docusaurus/docs/category/storybook"},next:{title:"VS Code",permalink:"/Wei-Docusaurus/docs/category/vs-code"}},l={},p=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u5efa\u7acb stories",id:"\u5efa\u7acb-stories",level:2},{value:"\u65bd\u5de5\u4e2d \ud83d\udea7",id:"\u65bd\u5de5\u4e2d-",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-docs/doc-block-argstable"},"Storybook Args Table")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"Storybook Controls")),(0,n.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,n.kt)("p",null,"\u5982\u679c\u5718\u968a\u8981\u6aa2\u67e5\u5404\u500b\u6210\u54e1\u4e4b\u9593\u66f4\u6539\u4e86\u54ea\u4e9b\u7a0b\u5f0f\u78bc\uff0c\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u63a7\u5236\u5de5\u5177\uff0c\u4f8b\u5982\uff1aGit\u3002"),(0,n.kt)("p",null,"\u4f46\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002"),(0,n.kt)("p",null,"Storybook \u4e5f\u652f\u63f4 Markdown \u8a9e\u6cd5\uff0c\u6240\u4ee5\u91dd\u5c0d\u4e00\u4e9b\u6559\u5b78\u9700\u8981\u7528\u6587\u5b57\u4f86\u8868\u9054\u7684\u8a71\u4e5f\u53ef\u4ee5\u3002"),(0,n.kt)("p",null,"\u5728\u958b\u59cb\u4e4b\u524d\uff0c\u53ef\u4ee5\u5148\u5230\u5b98\u65b9\u7684",(0,n.kt)("a",{parentName:"p",href:"https://storybook.js.org/showcase"},"Showcase"),"\uff0c\u9ad4\u9a57\u4e00\u4e0b\u4f7f\u7528 Storybook \u5e36\u4f86\u7684\u597d\u8655\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528 Storybook\uff0c\u5fc5\u9808\u5148\u5c07\u6709\u4e00\u4efd React \u5c08\u6848\uff0c\u9019\u908a\u5148\u7528 Vite \u5feb\u901f\u5efa\u7acb\u4e00\u4efd React \u5c08\u6848\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm create vite@latest \u4f60\u7684\u5c08\u6848\u540d\u7a31 -- --template react && npm install\n")),(0,n.kt)("p",null,"\u63a5\u8457\u5728\u8a72\u5c08\u6848\u76ee\u9304\u5e95\u4e0b\u5b89\u88dd Storybook\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npx sb init --builder @storybook/builder-vite\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5b89\u88dd\u7684\u6642\u9593\u6703\u6709\u9ede\u4e45\u662f\u6b63\u5e38\u7684")),(0,n.kt)("p",null,"\u5b89\u88dd\u6210\u529f\u5f8c\u6703\u770b\u5230\u5c08\u6848\u591a\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},".storybook")," \u8cc7\u6599\u593e\uff0c\u5728 src \u88e1\u9762\u4e5f\u53ef\u4ee5\u770b\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"stories")," \u8cc7\u6599\u593e\uff0c\u88e1\u9762\u5df2\u7d93\u6709\u9810\u8a2d\u7684 stories \u4e86\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u958b\u555f Storybook\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm run storybook\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/yWUGkAI.png",alt:"Image"})),(0,n.kt)("h2",{id:"\u5efa\u7acb-stories"},"\u5efa\u7acb stories"),(0,n.kt)("p",null,"\u73fe\u5728\u53ef\u4ee5\u5efa\u7acb\u6211\u5011\u7684\u7b2c\u4e00\u500b stories\uff0c\u5728 stories \u8cc7\u6599\u593e\u5167\u65b0\u589e\u4e00\u500b\u540d\u70ba ",(0,n.kt)("inlineCode",{parentName:"p"},"Box.jsx")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Box.stories.jsx")," \u7684\u6a94\u6848\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers",title:"'Box.jsx'",showLineNumbers:!0},'import React from "react";\n\nconst Box = () => {\n  return <div>Box</div>;\n};\n\nexport default Box;\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers",title:"'Box.stories.jsx'",showLineNumbers:!0},'import Box from "./Box";\n\nexport default {\n  title: "Box",\n  component: Box,\n};\n\nexport const largeBox = () => <Box />;\n')),(0,n.kt)("p",null,"\u73fe\u5728\u5728\u756b\u9762\u4e0a\u53ef\u4ee5\u770b\u5230 Box \u5e95\u4e0b\u6709\u4e00\u500b Large Box\uff0c\u4e5f\u5c31\u662f\u525b\u525b\u5efa\u7acb\u7684 stories\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/R4NWhAu.png",alt:"Image"})),(0,n.kt)("p",null,"\u5982\u679c\u65e5\u5f8c stories \u592a\u591a\u9700\u8981\u5206\u985e\u7684\u8a71\uff0c\u53ea\u9700\u8981\u5728 title \u7684\u5730\u65b9\u505a\u66f4\u6539\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers {4}",title:"'Box.stories.jsx'",showLineNumbers:!0,"{4}":!0},'import Box from "./Box";\n\nexport default {\n  //\u5c07Box\u5206\u985e\u5230Component\n  title: "Component/Box",\n  component: Box,\n};\n\nexport const largeBox = () => <Box />;\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Z2F4bax.png",alt:"Image"})),(0,n.kt)("h2",{id:"\u65bd\u5de5\u4e2d-"},"\u65bd\u5de5\u4e2d \ud83d\udea7"))}u.isMDXComponent=!0}}]);