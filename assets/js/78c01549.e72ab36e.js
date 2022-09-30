"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8860],{3905:(e,n,o)=>{o.d(n,{Zo:()=>i,kt:()=>p});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=t.createContext({}),c=function(e){var n=t.useContext(m),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},i=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),g=c(o),p=r,d=g["".concat(m,".").concat(p)]||g[p]||u[p]||a;return o?t.createElement(d,s(s({ref:n},i),{},{components:o})):t.createElement(d,s({ref:n},i))}));function p(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=g;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9589:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=o(7462),r=(o(7294),o(3905));const a={title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0a)"},s=void 0,l={unversionedId:"MongoDB/mongoose-1",id:"MongoDB/mongoose-1",title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0a)",description:"\u53c3\u8003\u8cc7\u6599\uff1a",source:"@site/docs/MongoDB/mongoose-1.md",sourceDirName:"MongoDB",slug:"/MongoDB/mongoose-1",permalink:"/Wei-Docusaurus/docs/MongoDB/mongoose-1",draft:!1,tags:[],version:"current",frontMatter:{title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0a)"},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/Wei-Docusaurus/docs/category/mongodb"},next:{title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0b)",permalink:"/Wei-Docusaurus/docs/MongoDB/mongoose-2"}},m={},c=[{value:"MongoDB \u524d\u7f6e\u4f5c\u696d(\u672c\u5730\u7aef)",id:"mongodb-\u524d\u7f6e\u4f5c\u696d\u672c\u5730\u7aef",level:2},{value:"MongoDB \u524d\u7f6e\u4f5c\u696d(MongoDB Cloud)",id:"mongodb-\u524d\u7f6e\u4f5c\u696dmongodb-cloud",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"MongoDB Compass (\u5efa\u8b70\u5b89\u88dd)",id:"mongodb-compass-\u5efa\u8b70\u5b89\u88dd",level:2},{value:"\u5efa\u7acb Collections \u5b9a\u7fa9 Schema \u4e26\u65b0\u589e\u8cc7\u6599\u5230\u8cc7\u6599\u5eab",id:"\u5efa\u7acb-collections-\u5b9a\u7fa9-schema-\u4e26\u65b0\u589e\u8cc7\u6599\u5230\u8cc7\u6599\u5eab",level:2},{value:"\u5728 Schema \u4e2d\u9032\u884c\u8cc7\u6599\u9a57\u8b49",id:"\u5728-schema-\u4e2d\u9032\u884c\u8cc7\u6599\u9a57\u8b49",level:2},{value:"Schema \u81ea\u8a02\u7fa9\u898f\u5247",id:"schema-\u81ea\u8a02\u7fa9\u898f\u5247",level:2}],i={toc:c};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c3\u8003\u8cc7\u6599\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mongoosejs.com/docs/api.html"},"Mongoose Document")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DZBGEVgL2eE"},"Web Dev Simplified"))),(0,r.kt)("h2",{id:"mongodb-\u524d\u7f6e\u4f5c\u696d\u672c\u5730\u7aef"},"MongoDB \u524d\u7f6e\u4f5c\u696d(\u672c\u5730\u7aef)"),(0,r.kt)("p",null,"\u672c\u7bc7\u4e3b\u8981\u662f\u4ecb\u7d39 Mongoose \u7684\u8a9e\u6cd5\uff0c\u6240\u4ee5\u5728\u5b89\u88dd\u7684\u90e8\u5206\u4e26\u4e0d\u6703\u592a\u8a73\u7d30\u7684\u4ecb\u7d39\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u672c\u5730\u7aef\u9032\u884c\u6e2c\u8a66\u7684\u8a71\uff0c\u5fc5\u9808\u5148\u5b89\u88dd\u4ee5\u4e0b\u5169\u500b\u7531\u5b98\u65b9\u63d0\u4f9b\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5206\u5225\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/try/download/community?tck=docs_server"},"MongoDB Community Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/try/download/shell?jmp=docs"},"MongoDB Shell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/products/compass"},"MongoDB Compass")," (\u5efa\u8b70\u4e00\u540c\u5b89\u88dd)")),(0,r.kt)("p",null,"\u53e6\u5916\u4e5f\u5efa\u8b70\u5927\u5bb6\u5b89\u88dd MongoDB Compass\uff0c\u5b83\u662f\u7531\u5b98\u7db2\u63d0\u4f9b\u7684\u5716\u5f62\u5316\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5728\u8a72\u61c9\u7528\u7a0b\u5f0f\u770b\u5230\u6240\u6709\u5132\u5b58\u5728\u8cc7\u6599\u5eab\u7684\u8cc7\u6599\uff0c\u4e26\u4e14\u53ef\u4ee5\u91dd\u5c0d\u8cc7\u6599\u9032\u884c\u65b0\u589e\u4fee\u6539\u522a\u9664\uff0c\u5728\u6e2c\u8a66\u7684\u904e\u7a0b\u4e2d\u6703\u6bd4\u8f03\u65b9\u4fbf\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/xg8KhgB.png",alt:"Image"})),(0,r.kt)("p",null,"\u4ee5\u4e0a\u90fd\u5b89\u88dd\u5b8c\u4ee5\u5f8c\uff0c\u5728 Terminal \u8f38\u5165 mongosh\uff0c\u5982\u679c\u6709\u6210\u529f\u9023\u7dda\u4ee3\u8868\u5b89\u88dd\u6210\u529f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/oz7dfby.png",alt:"Image"})),(0,r.kt)("h2",{id:"mongodb-\u524d\u7f6e\u4f5c\u696dmongodb-cloud"},"MongoDB \u524d\u7f6e\u4f5c\u696d(MongoDB Cloud)"),(0,r.kt)("p",null,"\u800c\u5982\u679c\u662f\u4f7f\u7528 MongoDB Cloud(MongoDB Atlas)\u4f86\u9032\u884c\u958b\u767c\u7684\u8a71\uff0c\u5728\u5efa\u7acb\u5b8c Database \u5f8c\uff0c\u53ef\u4ee5\u5728\u5f8c\u53f0\u7684 Atlas \u4ecb\u9762\u770b\u5230\u6211\u5011\u7684 Cluster0\uff0c\u9ede\u64ca Connect\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/2OVVKvZ.png",alt:"Image"})),(0,r.kt)("p",null,"\u4e4b\u5f8c\u9ede\u64ca Connect your application"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/VsRet1o.png",alt:"Image"})),(0,r.kt)("p",null,'\u6211\u5011\u53ea\u8981\u5148\u628a uri \u90a3\u6bb5\u8907\u88fd\u8d77\u4f86\u5c31\u597d\uff0c\u7b49\u7b49\u5728\u521d\u59cb\u5316\u7684\u90e8\u5206\u9700\u8981\u4f7f\u7528\u5230\u8a72 uri\uff0c\u8a18\u5f97\u5728"password"\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684 MongoDB \u5bc6\u78bc\uff0c\u5bc6\u78bc\u4e5f\u8981\u6ce8\u610f\u4e0d\u8981\u5916\u6d29\uff0c\u6240\u4ee5 uri \u5efa\u8b70\u662f\u5132\u5b58\u5728.env\u3002'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/rAKc2EJ.png",alt:"Image"})),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u958b\u767c\u7684\u904e\u7a0b\u4e2d\u4e5f\u5f37\u70c8\u5efa\u8b70\u5927\u5bb6\u4f7f\u7528 nodemon \u4f86\u76e3\u807d\u81ea\u5df1\u7684 node js \u6a94\u6848\uff0c\u7576\u6a94\u6848\u6709\u7570\u52d5\u6642\uff0cnodemon \u6703\u5e6b\u4f60 restart server\uff0c\u624d\u4e0d\u7528\u6bcf\u6b21\u505a\u4e00\u9ede\u66f4\u52d5\u4e4b\u5f8c\u5c31\u8981\u91cd\u65b0\u57f7\u884c node js \u7684\u6a94\u6848\u3002"),(0,r.kt)("p",null,"\u9019\u908a\u5148\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u5b89\u88dd mongoose\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install mongoose\n")),(0,r.kt)("p",null,"\u5c07\u5957\u4ef6\u5b89\u88dd\u6210\u529f\u5f8c\uff0c\u5c31\u4f86\u9032\u884c\u57fa\u672c\u7684\u9023\u7dda\u8a2d\u5b9a\u5427\uff0c\u5148\u5efa\u7acb\u4e00\u652f\u65b0\u7684\u6a94\u6848\uff0c\u540d\u70ba server.js\uff0c\u5728 connect \u7684\u6642\u5019\u628a uri \u586b\u4e0a\uff0cport \u5f8c\u9762\u7684\u659c\u7dda\u8981\u586b\u4e0a\u4f60\u8981\u5efa\u7acb\u7684\u8cc7\u6599\u5eab\u540d\u7a31\uff0c\u7576\u6211\u5011\u5c0d\u8cc7\u6599\u5eab\u9032\u884c\u64cd\u4f5c\u6642\u624d\u6703\u5efa\u7acb\u8a72\u8cc7\u6599\u5eab\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5982\u679c\u662f\u4f7f\u7528cloud\u7684\u8a71 \u7b2c\u4e00\u500b\u53c3\u6578\u5c31\u8981\u653ecloud\u7d66\u4e88\u7684uri\u4f4d\u7f6e\uff0c\u5728<password>\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684MongoDB\u5bc6\u78bc\uff0c\u624d\u80fd\u6210\u529f\u9023\u7dda\u3002\n\n//\u672c\u5730\u7aef\u9810\u8a2d\uff1a mongodb://127.0.0.1:27017/\u4f60\u8981\u5efa\u7acb\u7684\u8cc7\u6599\u5eab\u540d\u7a31\n\n//cloud\uff1amongodb+srv://Wei:<password>@cluster0.adryn.mongodb.net/?retryWrites=true&w=majority\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n')),(0,r.kt)("p",null,"\u4e4b\u5f8c\u6253\u958b Terminal\uff0c\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nodemon ./server.js\n")),(0,r.kt)("p",null,"\u8981\u662f\u9023\u7dda\u6210\u529f\u7684\u8a71\u5c31\u6703\u5728 Terminal \u770b\u5230 connected\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/tZxDkri.png",alt:"Image"})),(0,r.kt)("h2",{id:"mongodb-compass-\u5efa\u8b70\u5b89\u88dd"},"MongoDB Compass (\u5efa\u8b70\u5b89\u88dd)"),(0,r.kt)("p",null,"\u672c\u6587\u7ae0\u662f\u4f7f\u7528\u672c\u5730\u7aef\u9032\u884c\u6e2c\u8a66\uff0c\u5148\u6253\u958b MongoDB Compass \u5728\u4e00\u958b\u59cb\u7684 New Connection \u4e2d\u8f38\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb://localhost:27017/")," \u7136\u5f8c\u6309\u4e0b Connect\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/kiWy2P2.png",alt:"Image"})),(0,r.kt)("p",null,"\u6210\u529f\u5229\u7528 Compass \u9023\u7dda\u81f3\u672c\u5730\u7aef\u7684 MongoDB \u5f8c\uff0c\u53ef\u4ee5\u5728\u5de6\u908a\u7684 Databases \u770b\u5230\u9810\u8a2d\u6709\u4e09\u500b\u8cc7\u6599\u5eab\uff0c\u4f46\u76ee\u524d\u9084\u6c92\u6709\u5c0d\u8cc7\u6599\u5eab\u9032\u884c\u4efb\u4f55\u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u4e0d\u6703\u770b\u5230\u6211\u5011\u5efa\u7acb\u7684\u8cc7\u6599\u5eab(testdb)\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/r6ze9bc.png",alt:"Image"})),(0,r.kt)("h2",{id:"\u5efa\u7acb-collections-\u5b9a\u7fa9-schema-\u4e26\u65b0\u589e\u8cc7\u6599\u5230\u8cc7\u6599\u5eab"},"\u5efa\u7acb Collections \u5b9a\u7fa9 Schema \u4e26\u65b0\u589e\u8cc7\u6599\u5230\u8cc7\u6599\u5eab"),(0,r.kt)("p",null,"\u6211\u5011\u73fe\u5728\u53ef\u4ee5\u900f\u904e Mongoose \u4f86\u5efa\u7acb\u8cc7\u6599\u5eab\u7684 Collection\uff0c\u5982\u679c\u4f60\u6709\u4f7f\u7528\u904e\u5176\u4ed6\u8cc7\u6599\u5eab\u4f8b\u5982 Mysql\uff0cCollection \u5c31\u50cf\u662f Table\uff0c\u800c Table \u5728\u5efa\u7acb\u6642\u9700\u8981\u5b9a\u7fa9\u88e1\u9762\u7684\u8cc7\u6599\u6b04\u4f4d\u540d\u7a31\u4ee5\u53ca\u8cc7\u6599\u578b\u614b(Schema Type)\uff0cCollection \u4e5f\u662f\u4e00\u6a23\u3002"),(0,r.kt)("p",null,"\u8981\u77e5\u9053 Mongoose \u652f\u63f4\u54ea\u4e9b Schema Type \u7684\u8a71\u53ef\u4ee5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/schematypes.html"},"\u5b98\u65b9\u7684\u6587\u6a94"),"\uff0c\u9019\u88e1\u5c31\u4e0d\u591a\u4ecb\u7d39\u4e86\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u5c31\u4f86\u5efa\u7acb\u6211\u5011\u7684 Collection \u4e26\u5b9a\u7fa9 Schema \u5427"),(0,r.kt)("p",null,"\u6211\u5011\u518d\u5efa\u7acb\u4e00\u652f\u6a94\u6848\u540d\u70ba User.js\uff0c\u5728\u8a72\u6a94\u6848\u88e1\u9762\u5f15\u5165 mongoose \u5957\u4ef6\uff0c\u4e26\u5b9a\u7fa9 Collection \u540d\u7a31\u8207\u6b04\u4f4d\u540d\u7a31\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  age: Number,\n});\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,r.kt)("p",null,"\u5b9a\u7fa9\u597d Collection \u540d\u7a31\u548c \u6b04\u4f4d\u540d\u7a31\u5f8c\uff0c\u6211\u5011\u76f4\u63a5\u5728 server.js \u6a94\u6848\u4e2d\u5f15\u5165\u505a\u4f7f\u7528\uff0c\u8981\u6ce8\u610f\u7684\u662f mongoose \u63d0\u4f9b\u7684\u65b0\u589e\u4fee\u6539\u522a\u9664\u90fd\u5fc5\u9808\u4f7f\u7528 async / await \u53bb\u505a\u8655\u7406\uff0c\u5728\u5efa\u7acb\u65b0\u8cc7\u6599\u7684\u6642\u5019\u586b\u5165\u525b\u525b\u5b9a\u7fa9\u7684\u6b04\u4f4d\u540d\u7a31(key)\u9084\u6709\u6b04\u4f4d\u7684\u503c(value)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\n//\u5982\u679c\u662f\u4f7f\u7528cloud\u7684\u8a71 \u7b2c\u4e00\u500b\u53c3\u6578\u5c31\u8981\u653ecloud\u7d66\u4e88\u7684uri\u4f4d\u7f6e\uff0c\u5728<password>\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684MongoDB\u5bc6\u78bc\uff0c\u624d\u80fd\u6210\u529f\u9023\u7dda\u3002\n\n//\u672c\u5730\u7aef\u9810\u8a2d\uff1a mongodb://127.0.0.1:27017/\u4f60\u81ea\u5df1\u7684\u8cc7\u6599\u5eab\u540d\u7a31\n\n//cloud\uff1amongodb+srv://Wei:<password>@cluster0.adryn.mongodb.net/?retryWrites=true&w=majority\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst createNewData = async () => {\n  try {\n    // \u7b2c\u4e00\u7a2e\u5efa\u7acb\u8cc7\u6599\u7684\u65b9\u6cd5\n    // const user = new User({ name: "Wei", age: 24 });\n    // await user.save();\n\n    //----------------------------------------\n\n    //\u7b2c\u4e8c\u7a2e\u5efa\u7acb\u8cc7\u6599\u7684\u65b9\u6cd5\n    const user = await User.create({\n      name: "Wei",\n      age: 24,\n      email: "test@gmail.com",\n    });\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncreateNewData();\n')),(0,r.kt)("p",null,"\u5c07\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u8cbc\u5230 server.js \u5f8c\u5132\u5b58\uff0c\u56e0\u70ba\u6211\u5011\u662f\u4f7f\u7528 nodemon \u7684\u95dc\u4fc2\uff0c\u5728\u6309\u4e0b\u5132\u5b58\u7684\u7576\u4e0b nodemon \u5c31\u6703\u5e6b\u6211\u5011\u91cd\u555f server\uff0c\u5982\u679c\u6c92\u6709\u5831\u51fa\u4efb\u4f55\u932f\u8aa4\u4e26\u4e14\u6709\u5728 Terminal \u770b\u5230\u6211\u5011\u65b0\u589e\u7684\u8cc7\u6599\uff0c\u5c31\u4ee3\u8868\u8cc7\u6599\u5efa\u7acb\u6210\u529f\u4e86\u3002"),(0,r.kt)("p",null,"\u5728 MongoDB Compass \u4e2d\u6309\u4e0b\u5de6\u908a\u7684\u91cd\u65b0\u6574\u7406\u6309\u9215\uff0c\u5c31\u6703\u770b\u5230\u6211\u5011\u7684\u8cc7\u6599\u5eab(testdb)\u548c collection \u4e86(users)\uff0c\u800c\u5728 collection \u88e1\u9762\u53ef\u4ee5\u770b\u5230\u525b\u525b\u65b0\u589e\u7684\u8cc7\u6599\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/WYFSDE8.png",alt:"Image"})),(0,r.kt)("p",null,"\u800c\u5982\u679c\u8981\u4e00\u6b21\u65b0\u589e\u591a\u7b46\u8cc7\u6599\u7684\u8a71\u5c31\u5f97\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"insertMany"),"\uff0c\u5dee\u5225\u5728\u65bc\u50b3\u5165\u7684\u53c3\u6578\u5fc5\u9700\u7528\u9663\u5217\u5305\u8d77\u4f86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\n//\u5982\u679c\u662f\u4f7f\u7528cloud\u7684\u8a71 \u7b2c\u4e00\u500b\u53c3\u6578\u5c31\u8981\u653ecloud\u7d66\u4e88\u7684uri\u4f4d\u7f6e\uff0c\u5728<password>\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684MongoDB\u5bc6\u78bc\uff0c\u624d\u80fd\u6210\u529f\u9023\u7dda\u3002\n\n//\u672c\u5730\u7aef\u9810\u8a2d\uff1a mongodb://127.0.0.1:27017/\u4f60\u81ea\u5df1\u7684\u8cc7\u6599\u5eab\u540d\u7a31\n\n//cloud\uff1amongodb+srv://Wei:<password>@cluster0.adryn.mongodb.net/?retryWrites=true&w=majority\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst createNewData = async () => {\n  try {\n    // \u7b2c\u4e00\u7a2e\u5efa\u7acb\u8cc7\u6599\u7684\u65b9\u6cd5\n    // const user = new User({ name: "Wei", age: 24 });\n    // await user.save();\n\n    //----------------------------------------\n\n    //\u7b2c\u4e8c\u7a2e\u5efa\u7acb\u8cc7\u6599\u7684\u65b9\u6cd5\n    // const user = await User.create({\n    //   name: "Wei",\n    //   age: 24,\n    //   email: "test@gmail.com",\n    // });\n\n    //\u4e00\u6b21\u65b0\u589e\u591a\u7b46\u8cc7\u6599\n    const user = await User.insertMany([\n      {\n        name: "Alex",\n        age: 18,\n        email: "test1122123@gmail.com",\n      },\n      {\n        name: "Bob",\n        age: 16,\n        email: "test5577@gmail.com",\n      },\n    ]);\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncreateNewData();\n')),(0,r.kt)("p",null,"\u5982\u65b0\u589e\u591a\u7b46\u8cc7\u6599\u6210\u529f\u7684\u8a71\uff0c\u53ef\u4ee5\u5728 Terminal \u770b\u5230\u525b\u525b\u65b0\u589e\u7684\u8cc7\u6599\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/NOqYhra.png",alt:"Image"})),(0,r.kt)("h2",{id:"\u5728-schema-\u4e2d\u9032\u884c\u8cc7\u6599\u9a57\u8b49"},"\u5728 Schema \u4e2d\u9032\u884c\u8cc7\u6599\u9a57\u8b49"),(0,r.kt)("p",null,"\u5728\u5b9a\u7fa9 Schema \u7684\u6642\u5019\uff0c\u901a\u5e38\u6703\u91dd\u5c0d\u67d0\u4e9b\u6b04\u4f4d\u9032\u884c\u9a57\u8b49(validate)\uff0c\u4f8b\u5982\uff1a\u8a72\u6b04\u4f4d\u5728\u65b0\u589e\u6642\u70ba\u5fc5\u9700\u7684(required)\u3001\u6b04\u4f4d\u6700\u5c0f\u503c\u61c9\u70ba 1(min)\uff0c\u6700\u5927\u503c\u70ba 100(max)\u7b49\u2026\u3002"),(0,r.kt)("p",null,"\u800c\u5982\u679c\u9700\u91dd\u5c0d\u6b04\u4f4d\u9032\u884c\u9a57\u8b49\uff0c\u5fc5\u9700\u4f7f\u7528\u7269\u4ef6\u7684\u65b9\u5f0f\u4f86\u5b9a\u7fa9\u6b04\u4f4d\u5c6c\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n  },\n  email: {\n    type: String,\n    required: true,\n    //email\u5b57\u4e32\u6b04\u4f4d\u6700\u5c0f\u9577\u5ea6\u61c9\u70ba10\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    required: true,\n    //age\u6578\u5b57\u6b04\u4f4d\u6700\u5c0f\u503c\u61c9\u70ba1\n    min: 1,\n  },\n});\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,r.kt)("p",null,"\u63a5\u8457\u5230 server.js \u4fee\u6539\u4e00\u4e0b\u8cc7\u6599\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\n//\u5982\u679c\u662f\u4f7f\u7528cloud\u7684\u8a71 \u7b2c\u4e00\u500b\u53c3\u6578\u5c31\u8981\u653ecloud\u7d66\u4e88\u7684uri\u4f4d\u7f6e\uff0c\u5728<password>\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684MongoDB\u5bc6\u78bc\uff0c\u624d\u80fd\u6210\u529f\u9023\u7dda\u3002\n\n//\u672c\u5730\u7aef\u9810\u8a2d\uff1a mongodb://127.0.0.1:27017/\u4f60\u81ea\u5df1\u7684\u8cc7\u6599\u5eab\u540d\u7a31\n\n//cloud\uff1amongodb+srv://Wei:<password>@cluster0.adryn.mongodb.net/?retryWrites=true&w=majority\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst createNewData = async () => {\n  try {\n    const user = await User.create({\n      name: "Wei",\n      age: -1,\n      email: "test@gmail.com",\n    });\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncreateNewData();\n')),(0,r.kt)("p",null,"\u6309\u4e0b\u5132\u5b58\u5f8c\uff0c\u6703\u767c\u73fe Terminal \u5831\u51fa\u932f\u8aa4\u8a0a\u606f\uff0c\u539f\u56e0\u662f\u56e0\u70ba\u5728 age \u7684\u6b04\u4f4d\u5b9a\u7fa9\u4e86\u898f\u5247\uff0c\u898f\u5b9a age \u6b04\u4f4d\u6700\u5c0f\u7684\u503c\u53ea\u80fd\u70ba 1\uff0c\u800c\u5efa\u7acb\u7684\u8cc7\u6599\u70ba-1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/UHUXy9w.png",alt:"Image"})),(0,r.kt)("h2",{id:"schema-\u81ea\u8a02\u7fa9\u898f\u5247"},"Schema \u81ea\u8a02\u7fa9\u898f\u5247"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u5728 Schema \u4e2d\u64b0\u5beb\u81ea\u5df1\u7684\u6b04\u4f4d\u898f\u5247\u3002"),(0,r.kt)("p",null,"\u5728 age \u6b04\u4f4d\u4e2d\uff0c\u6211\u5011\u5efa\u7acb\u4e86\u4e00\u500b\u65b0\u5c6c\u6027\u53eb\u505a validate\uff0c\u5728 validate \u88e1\u9762\u9700\u50b3\u5165 validator \u4ee5\u53ca message\uff0cvalidtor \u70ba\u4f60\u81ea\u5df1\u5b9a\u7fa9\u7684\u6b04\u4f4d\u898f\u5247\uff0c\u5728\u8a72\u6b04\u4f4d\u53bb\u5224\u65b7 age \u50b3\u9032\u4f86\u7684\u503c\u662f\u5426\u70ba\u5076\u6578\uff0c\u800c\u7576 validator \u70ba true \u7684\u6642\u5019\u624d\u80fd\u901a\u904e\u9a57\u8b49\uff0c\u5982\u679c\u9a57\u8b49\u5931\u6557\uff0c\u5247\u6703\u56de\u50b3 message\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n  },\n  email: {\n    type: String,\n    required: true,\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    required: true,\n    min: 1,\n    validate: {\n      // validator\u70batrue\u6642\uff0c\u624d\u80fd\u901a\u904e\u9a57\u8b49\u3002\n      validator: (v) => v % 2 === 0,\n      message: (props) => `${props.value} \u4e26\u4e0d\u662f\u5076\u6578`,\n    },\n  },\n});\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,r.kt)("p",null,"\u9019\u908a\u5c07 age \u7684\u503c\u6539\u70ba\u5947\u6578\u4e26\u5132\u5b58\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\n//\u5982\u679c\u662f\u4f7f\u7528cloud\u7684\u8a71 \u7b2c\u4e00\u500b\u53c3\u6578\u5c31\u8981\u653ecloud\u7d66\u4e88\u7684uri\u4f4d\u7f6e\uff0c\u5728<password>\u7684\u90e8\u5206\u8981\u6539\u6210\u81ea\u5df1\u7684MongoDB\u5bc6\u78bc\uff0c\u624d\u80fd\u6210\u529f\u9023\u7dda\u3002\n\n//\u672c\u5730\u7aef\u9810\u8a2d\uff1a mongodb://127.0.0.1:27017/\u4f60\u81ea\u5df1\u7684\u8cc7\u6599\u5eab\u540d\u7a31\n\n//cloud\uff1amongodb+srv://Wei:<password>@cluster0.adryn.mongodb.net/?retryWrites=true&w=majority\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst createNewData = async () => {\n  try {\n    const user = await User.create({\n      name: "Wei",\n      age: 23, // 23 \u70ba\u5947\u6578\n      email: "test@gmail.com",\n    });\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncreateNewData();\n')),(0,r.kt)("p",null,"\u5132\u5b58\u5f8c\u6703\u767c\u73fe\u9a57\u8b49\u5931\u6557\uff0c\u56e0\u70ba 23 \u4e26\u4e0d\u662f\u5076\u6578\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/VxWsZcr.png",alt:"Image"})))}u.isMDXComponent=!0}}]);