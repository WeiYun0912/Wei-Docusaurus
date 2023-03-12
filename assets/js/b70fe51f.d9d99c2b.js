"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2279],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(o),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||s;return o?n.createElement(k,a(a({ref:t},m),{},{components:o})):n.createElement(k,a({ref:t},m))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<s;i++)a[i]=o[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6360:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=o(7462),r=(o(7294),o(3905));const s={title:"[storybook] Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",keywords:["react","react\u6559\u5b78","storybook"],description:"\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002",author:"WeiYun0912","og:title":"Storybook \u4ecb\u7d39","og:description":"\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002",sidebar_position:1},a=void 0,l={unversionedId:"Stroybook/Storybook-Basic",id:"Stroybook/Storybook-Basic",title:"[storybook] Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",description:"\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002",source:"@site/docs/Stroybook/Storybook-Basic.md",sourceDirName:"Stroybook",slug:"/Stroybook/Storybook-Basic",permalink:"/Wei-Docusaurus/docs/Stroybook/Storybook-Basic",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[storybook] Storybook \u4ecb\u7d39\u8207\u5be6\u4f5c",keywords:["react","react\u6559\u5b78","storybook"],description:"\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002",author:"WeiYun0912","og:title":"Storybook \u4ecb\u7d39","og:description":"\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Storybook",permalink:"/Wei-Docusaurus/docs/category/storybook"},next:{title:"VS Code",permalink:"/Wei-Docusaurus/docs/category/vs-code"}},p={},i=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u5efa\u7acb stories",id:"\u5efa\u7acb-stories",level:2},{value:"PropTypes",id:"proptypes",level:2},{value:"Default Props",id:"default-props",level:2},{value:"\u5efa\u7acb\u591a\u4efd stories",id:"\u5efa\u7acb\u591a\u4efd-stories",level:2},{value:"Controls",id:"controls",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Addon",id:"addon",level:2},{value:"Chromatic",id:"chromatic",level:2}],m={toc:i};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,r.kt)("p",null,"\u5982\u679c\u5718\u968a\u8981\u6aa2\u67e5\u5404\u500b\u6210\u54e1\u4e4b\u9593\u66f4\u6539\u4e86\u54ea\u4e9b\u7a0b\u5f0f\u78bc\uff0c\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u63a7\u5236\u5de5\u5177\uff0c\u4f8b\u5982\uff1aGit\u3002"),(0,r.kt)("p",null,"\u4f46\u4eca\u5929\u5982\u679c\u662f\u60f3\u8981\u770b\u5230\u7684\u662f\u5404\u500b\u5143\u4ef6\u4e4b\u9593\uff0c\u6216\u662f\u756b\u9762\u7684\u8b8a\u5316\uff0c\u4f8b\u5982\uff1a\u6309\u9215\u6a23\u5f0f\u3001\u9801\u9762\u6a23\u5f0f\u7b49\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Storybook\uff0c\u4f86\u8b1b\u8ff0\u4f60\u5143\u4ef6\u8207\u756b\u9762\u7684\u6545\u4e8b\u3002"),(0,r.kt)("p",null,"Storybook \u4e5f\u652f\u63f4 Markdown \u8a9e\u6cd5\uff0c\u6240\u4ee5\u91dd\u5c0d\u4e00\u4e9b\u6559\u5b78\u9700\u8981\u7528\u6587\u5b57\u4f86\u8868\u9054\u7684\u8a71\u4e5f\u53ef\u4ee5\u3002"),(0,r.kt)("p",null,"\u5728\u958b\u59cb\u4e4b\u524d\uff0c\u53ef\u4ee5\u5148\u5230\u5b98\u65b9\u7684",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/showcase"},"Showcase"),"\uff0c\u9ad4\u9a57\u4e00\u4e0b\u4f7f\u7528 Storybook \u5e36\u4f86\u7684\u597d\u8655\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528 Storybook\uff0c\u5fc5\u9808\u5148\u6709\u4e00\u4efd React \u5c08\u6848\uff0c\u9019\u908a\u7528 Vite \u5feb\u901f\u5efa\u7acb\u4e00\u4efd React \u5c08\u6848\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm create vite@latest \u4f60\u7684\u5c08\u6848\u540d\u7a31 -- --template react && npm install\n")),(0,r.kt)("p",null,"\u63a5\u8457\u5728\u8a72\u5c08\u6848\u76ee\u9304\u5e95\u4e0b\u5b89\u88dd Storybook\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx sb init --builder @storybook/builder-vite\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5b89\u88dd\u7684\u6642\u9593\u6703\u6709\u9ede\u4e45\u662f\u6b63\u5e38\u7684")),(0,r.kt)("p",null,"\u5b89\u88dd\u6210\u529f\u5f8c\u6703\u770b\u5230\u5c08\u6848\u591a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook")," \u8cc7\u6599\u593e\uff0c\u5728 src \u88e1\u9762\u4e5f\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"stories")," \u8cc7\u6599\u593e\uff0c\u88e1\u9762\u5df2\u7d93\u6709\u9810\u8a2d\u7684 stories \u4e86\uff0c\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u958b\u555f Storybook\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run storybook\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/yWUGkAI.png",alt:"Image"})),(0,r.kt)("h2",{id:"\u5efa\u7acb-stories"},"\u5efa\u7acb stories"),(0,r.kt)("p",null,"\u73fe\u5728\u53ef\u4ee5\u5efa\u7acb\u6211\u5011\u7684\u7b2c\u4e00\u500b stories\uff0c\u5728 stories \u8cc7\u6599\u593e\u5167\u65b0\u589e\u4e00\u500b\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"Box.jsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Box.stories.jsx")," \u7684\u6a94\u6848\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers",title:"'Box.jsx'",showLineNumbers:!0},'import React from "react";\n\nconst Box = () => {\n  const style = {\n    width: "200px",\n    backgroundColor: "cyan",\n  };\n\n  return <div style={style}>Box</div>;\n};\n\nexport default Box;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers",title:"'Box.stories.jsx'",showLineNumbers:!0},'import Box from "./Box";\n\nexport default {\n  title: "Box",\n  component: Box,\n};\n\nexport const largeBox = () => <Box />;\n')),(0,r.kt)("p",null,"\u73fe\u5728\u5728\u756b\u9762\u4e0a\u53ef\u4ee5\u770b\u5230 Box \u5e95\u4e0b\u6709\u4e00\u500b Large Box\uff0c\u4e5f\u5c31\u662f\u525b\u525b\u5efa\u7acb\u7684 stories\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/G6GMqpN.png",alt:"Image"})),(0,r.kt)("p",null,"\u5982\u679c\u65e5\u5f8c stories \u592a\u591a\u9700\u8981\u5206\u985e\u7684\u8a71\uff0c\u53ea\u9700\u8981\u5728 title \u7684\u5730\u65b9\u505a\u66f4\u6539\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers {4}",title:"'Box.stories.jsx'",showLineNumbers:!0,"{4}":!0},'import Box from "./Box";\n\nexport default {\n  //\u5c07Box\u5206\u985e\u5230Component\n  title: "Component/Box",\n  component: Box,\n};\n\nexport const largeBox = () => <Box />;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Z2F4bax.png",alt:"Image"})),(0,r.kt)("h2",{id:"proptypes"},"PropTypes"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u8b93\u4f7f\u7528\u8005\u80fd\u5920\u548c Component \u4e92\u52d5\u7684\u8a71\uff0c\u9700\u8981\u53bb\u5b9a\u7fa9 Component \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-docs/doc-block-argstable"},"PropTypes"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers",title:"'Box.jsx'",showLineNumbers:!0},'import React from "react";\nimport PropTypes from "prop-types";\n\nconst Box = () => {\n  const style = {\n    width: "200px",\n    backgroundColor: "cyan",\n  };\n\n  return <div style={style}>Box</div>;\n};\n\nexport default Box;\n\nBox.propTypes = {\n  backgroundColor: PropTypes.string,\n  label: PropTypes.string,\n  size: PropTypes.oneOf(["sm", "md", "lg"]),\n  show: PropTypes.bool,\n};\n')),(0,r.kt)("p",null,"\u91cd\u65b0\u6574\u7406\u5f8c\u5c31\u6703\u5728 stories \u7684 control \u4e2d\u770b\u5230\u6211\u5011\u5b9a\u7fa9\u7684 prop \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0YCQX6k.png",alt:"Image"})),(0,r.kt)("p",null,"\u90a3\u8981\u600e\u9ebc\u8b93 Box Component \u63a5\u6536\u5230\u9019\u4e9b prop \u5462?"),(0,r.kt)("p",null,"\u4e00\u65e6\u6211\u5011\u8a2d\u5b9a\u597d PropTypes \u5f8c\uff0cBox Component \u5176\u5be6\u5c31\u5df2\u7d93\u80fd\u63a5\u6536\u5230\u9019\u4e9b prop \u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers",title:"'Box.jsx'",showLineNumbers:!0},'import React from "react";\nimport PropTypes from "prop-types";\n\nconst Box = ({ backgroundColor, label, size, show }) => {\n  console.log(backgroundColor, label, size, show);\n  const style = {\n    width: "200px",\n    backgroundColor: "cyan",\n  };\n\n  return <div style={style}>Box</div>;\n};\n\nexport default Box;\n\nBox.propTypes = {\n  backgroundColor: PropTypes.string,\n  label: PropTypes.string,\n  size: PropTypes.oneOf(["sm", "md", "lg"]),\n  show: PropTypes.bool,\n};\n')),(0,r.kt)("p",null,"\u6253\u958b console \u5f8c\uff0c\u6703\u767c\u73fe\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"\u6709\u503c\uff0c\u5176\u4ed6\u7684\u90fd\u662f undefined\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3qqhnx7.png",alt:"Image"})),(0,r.kt)("p",null,"\u9019\u6642\u5019\u6211\u5011\u53ef\u4ee5\u5728 controls \u7684\u5730\u65b9\u53bb\u9078\u53d6 backgroundColor\uff0csize \u7684\u90e8\u5206\u9078\u64c7 sm\uff0cshow \u7684\u90e8\u5206\u9078\u64c7 true\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/wbIgLXs.png",alt:"Image"})),(0,r.kt)("p",null,"\u518d\u770b\u4e00\u6b21 console\uff0c\u5c31\u6703\u770b\u5230\u6211\u5011\u7684 prop \u6709\u6210\u529f\u8f38\u51fa\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HLy5d5Q.png",alt:"Image"})),(0,r.kt)("p",null,"\u6240\u4ee5\u73fe\u5728\u53ef\u4ee5\u5c07\u50b3\u5165\u7684\u53c3\u6578\u5e36\u9032 Component \u88e1\u9762\u4e26\u505a\u4e00\u4e9b\u5224\u65b7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers {5-7,10,11,14}",title:"'Box.jsx'",showLineNumbers:!0,"{5-7,10,11,14}":!0},'import React from "react";\nimport PropTypes from "prop-types";\n\nconst Box = ({ backgroundColor, label, size, show }) => {\n  let scale = 1;\n  if (size == "sm") scale = 0.5;\n  if (size == "md") scale = 0.75;\n  const style = {\n    width: "200px",\n    padding: `${scale * 0.5}rem ${scale * 1}rem`,\n    backgroundColor,\n  };\n\n  return <>{show && <div style={style}>{label}</div>}</>;\n};\n\nexport default Box;\n\nBox.propTypes = {\n  backgroundColor: PropTypes.string,\n  label: PropTypes.string,\n  size: PropTypes.oneOf(["sm", "md", "lg"]),\n  show: PropTypes.bool,\n};\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/LYH6YZh.gif",alt:"Images"})),(0,r.kt)("h2",{id:"default-props"},"Default Props"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u5011\u5e0c\u671b Component \u5728\u525b\u8f09\u5165\u7684\u6642\u5019\u5c31\u6709\u9810\u8a2d prop \u7684\u8a71\uff0c\u53ef\u4ee5\u5728 Component \u4e2d\u5b9a\u7fa9 ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultProps"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.jsx' showLineNumbers {26-31}",title:"'Box.jsx'",showLineNumbers:!0,"{26-31}":!0},'import React from "react";\nimport PropTypes from "prop-types";\n\nconst Box = ({ backgroundColor, label, size, show }) => {\n  let scale = 1;\n  if (size == "sm") scale = 0.5;\n  if (size == "md") scale = 0.75;\n  const style = {\n    width: "200px",\n    padding: `${scale * 0.5}rem ${scale * 1}rem`,\n    backgroundColor,\n  };\n\n  return <>{show && <div style={style}>{label}</div>}</>;\n};\n\nexport default Box;\n\nBox.propTypes = {\n  backgroundColor: PropTypes.string,\n  label: PropTypes.string,\n  size: PropTypes.oneOf(["sm", "md", "lg"]),\n  show: PropTypes.bool,\n};\n\nBox.defaultProps = {\n  backgroundColor: "cyan",\n  label: "Hello I\'m Box.",\n  show: true,\n  size: "lg",\n};\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4jzd1er.png",alt:"Image"})),(0,r.kt)("h2",{id:"\u5efa\u7acb\u591a\u4efd-stories"},"\u5efa\u7acb\u591a\u4efd stories"),(0,r.kt)("p",null,"\u73fe\u5728\u53ef\u4ee5\u5efa\u7acb\u57fa\u65bc Box Component \u7684\u5176\u4ed6 stories\uff0c\u4f8b\u5982\uff1a\u5c3a\u5bf8\u8f03\u5c0f\u7684 Box(sm)\u3001\u5c3a\u5bf8\u4e2d\u578b\u7684 Box(md)\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5148\u5275\u5efa\u4e00\u500b\u6a23\u677f(Template)\uff0c\u6a23\u677f\u6703\u63a5\u6536\u5230\u53c3\u6578\uff0c\u4e4b\u5f8c\u5c07\u8a72\u53c3\u6578\u50b3\u81f3 Box Component\uff0c\u4ee5\u6b64\u65b9\u5f0f\u5efa\u7acb\u591a\u4efd story\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udca1 Template.bind({}) \u662f \u6a19\u6e96\u7684 JavaScript \u6280\u5de7\uff0c\u7528\u4f86\u8907\u88fd\u51fd\u5f0f\u3002\u6b64\u6280\u5de7\u662f\u7528\u4f86\u8b93\u6bcf\u500b\u8f38\u51fa\u7684 story \u53ef\u4ee5\u8a2d\u5b9a\u5404\u81ea\u7684\u53c3\u6578\uff0c\u4f46\u4f7f\u7528\u5b8c\u5168\u76f8\u540c\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4f86\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/tutorials/intro-to-storybook/react/zh-TW/simple-component/"},"https://storybook.js.org/tutorials/intro-to-storybook/react/zh-TW/simple-component/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers",title:"'Box.stories.jsx'",showLineNumbers:!0},'import Box from "./Box";\n\nexport default {\n  title: "Component/Box",\n  component: Box,\n};\n\nconst Template = (args) => <Box {...args} />;\n\nexport const largeBox = Template.bind({});\n\nlargeBox.args = {\n  label: "Large Box",\n  size: "lg",\n};\n\nexport const mediumBox = Template.bind({});\n\nmediumBox.args = {\n  label: "Medium Box",\n  size: "md",\n};\n\nexport const smallBox = Template.bind({});\n\nsmallBox.args = {\n  label: "Small Box",\n  size: "sm",\n};\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/TBjsLso.gif",alt:"Images"})),(0,r.kt)("h2",{id:"controls"},"Controls"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"\u81ea\u8a02 control \u7684 type"),"\uff0c\u50cf\u662f\u5728 label prop \u7684\u5730\u65b9\uff0c\u6211\u5011\u60f3\u8981\u5448\u73fe\u7684\u662f\u4e0b\u62c9\u5f0f\u9078\u55ae\uff0c\u4e26\u4e14\u6709\u503c\u80fd\u5920\u8b93\u4f7f\u7528\u8005\u81ea\u884c\u9078\u53d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Box.stories.jsx' showLineNumbers {6-10}",title:"'Box.stories.jsx'",showLineNumbers:!0,"{6-10}":!0},'import Box from "./Box";\n\nexport default {\n  title: "Component/Box",\n  component: Box,\n  argTypes: {\n    label: {\n      options: ["\u9078\u98051", "\u9078\u98052", "\u9078\u98053"],\n      control: { type: "select" },\n    },\n  },\n};\n\nconst Template = (args) => <Box {...args} />;\n\nexport const largeBox = Template.bind({});\n\nlargeBox.args = {\n  label: "Large Box",\n  size: "lg",\n};\n\nexport const mediumBox = Template.bind({});\n\nmediumBox.args = {\n  label: "Medium Box",\n  size: "md",\n};\n\nexport const smallBox = Template.bind({});\n\nsmallBox.args = {\n  label: "Small Box",\n  size: "sm",\n};\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/FwnKt9Y.gif",alt:"Images"})),(0,r.kt)("h2",{id:"decorators"},"Decorators"),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5728\u6bcf\u4e00\u500b story \u5e95\u4e0b\u7684 Component \u90fd\u80fd\u5920\u5957\u6a23\u76f8\u540c\u7684 CSS\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528 Decorators \u4f86\u9054\u5230\u8a72\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5148\u5efa\u7acb\u4e00\u500b Center \u7684 HOC\uff0c\u5728\u88e1\u9762\u64b0\u5beb\u7f6e\u4e2d\u7684 CSS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Center.jsx' showLineNumbers {6-10}",title:"'Center.jsx'",showLineNumbers:!0,"{6-10}":!0},'import React from "react";\n\nconst Center = ({ children }) => {\n  return (\n    <div\n      style={{\n        display: "flex",\n        justifyContent: "center",\n        alignItems: "center",\n      }}\n    >\n      {children}\n    </div>\n  );\n};\n\nexport default Center;\n')),(0,r.kt)("p",null,"\u4e4b\u5f8c\u6253\u958b ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook")," \u8cc7\u6599\u593e\u5167\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"preview.jsx"),"\uff0c\u76f4\u63a5 export decorators\uff0cdecorators \u5167\u81ea\u5e36\u53c3\u6578 Story\uff0c\u53ef\u4ee5\u628a\u5b83\u60f3\u50cf\u6210\u6211\u5011\u7684\u6240\u6709 stories \u5e95\u4e0b\u7684 Component\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u73fe\u5728\u662f\u4f7f\u7528 Center HOC \u5c07\u6240\u6709\u7684 Component \u5305\u4f4f\uff0c\u4ee5\u6b64\u5957\u7528\u7f6e\u4e2d CSS\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u4f7f\u7528 vite \u958b\u767c\u7684\u8a71\uff0cpreview \u6a94\u6848\u7684\u7d50\u5c3e\u8a18\u5f97\u8981\u6539\u6210",(0,r.kt)("inlineCode",{parentName:"p"},".jsx"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='preview.jsx' showLineNumbers {13-19}",title:"'preview.jsx'",showLineNumbers:!0,"{13-19}":!0},'import Center from "../src/stories/Center";\n\nexport const parameters = {\n  actions: { argTypesRegex: "^on[A-Z].*" },\n  controls: {\n    matchers: {\n      color: /(background|color)$/i,\n      date: /Date$/,\n    },\n  },\n};\n\nexport const decorators = [\n  (Story) => (\n    <Center>\n      <Story />\n    </Center>\n  ),\n];\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3b95utO.png",alt:"Image"})),(0,r.kt)("h2",{id:"addon"},"Addon"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u5728 Storybook \u5c08\u6848\u5167\u5b89\u88dd\u984d\u5916\u7684\u63d2\u4ef6\uff0c\u9019\u908a\u793a\u7bc4\u5982\u4f55\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"addon-viewport")," \u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i @storybook/addon-viewport\n")),(0,r.kt)("p",null,"\u63a5\u8457\u6253\u958b ",(0,r.kt)("inlineCode",{parentName:"p"},"preview.jsx"),"\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," \u7684\u5730\u65b9\u52a0\u4e0a viewport\uff0c\u4e26\u628a addon-viewport \u7684 INITIAL_VIEWPORTS \u7d66\u5e36\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='preview.jsx' showLineNumbers {2,11-13}",title:"'preview.jsx'",showLineNumbers:!0,"{2,11-13}":!0},'import Center from "../src/stories/Center";\nimport { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";\nexport const parameters = {\n  actions: { argTypesRegex: "^on[A-Z].*" },\n  controls: {\n    matchers: {\n      color: /(background|color)$/i,\n      date: /Date$/,\n    },\n  },\n  viewport: {\n    viewports: INITIAL_VIEWPORTS,\n  },\n};\n\nexport const decorators = [\n  (Story) => (\n    <Center>\n      <Story />\n    </Center>\n  ),\n];\n')),(0,r.kt)("p",null,"\u56de\u5230\u756b\u9762\uff0c\u5728\u4e0a\u65b9\u7684 size of preview \u591a\u4e86\u66f4\u591a\u7684\u5c3a\u5bf8\u8b93\u6211\u5011\u53bb\u505a\u9078\u64c7\uff0c\u65b9\u4fbf\u9032\u884c\u6e2c\u8a66\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1nXtP8C.png",alt:"Image"})),(0,r.kt)("h2",{id:"chromatic"},"Chromatic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="chromatic.yml"',title:'"chromatic.yml"'},'# Workflow name\nname: "Chromatic Deployment"\n\n# Event for the workflow\non: push\n\n# List of jobs\njobs:\n  test:\n    # Operating System\n    runs-on: ubuntu-latest\n    # Job steps\n    steps:\n      - uses: actions/checkout@v1\n      - run: yarn\n        #\ud83d\udc47 Adds Chromatic as a step in the workflow\n      - uses: chromaui/action@v1\n        # Options required for Chromatic\'s GitHub Action\n        with:\n          #\ud83d\udc47 Chromatic projectToken, see https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/ to obtain it\n          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}\n          token: ${{ secrets.GITHUB_TOKEN }}\n')))}c.isMDXComponent=!0}}]);