"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7147],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=c(t),p=o,d=g["".concat(i,".").concat(p)]||g[p]||u[p]||s;return t?r.createElement(d,a(a({ref:n},m),{},{components:t})):r.createElement(d,a({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const s={title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0b)"},a=void 0,l={unversionedId:"MongoDB/mongoose-2",id:"MongoDB/mongoose-2",title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0b)",description:"\u7bc4\u4f8b\u8cc7\u6599",source:"@site/docs/MongoDB/mongoose-2.md",sourceDirName:"MongoDB",slug:"/MongoDB/mongoose-2",permalink:"/Wei-Docusaurus/docs/MongoDB/mongoose-2",draft:!1,tags:[],version:"current",frontMatter:{title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0b)"},sidebar:"tutorialSidebar",previous:{title:"MongoDB \u2014 Mongoose \u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78 (\u4e0a)",permalink:"/Wei-Docusaurus/docs/MongoDB/mongoose-1"},next:{title:"VS Code",permalink:"/Wei-Docusaurus/docs/category/vs-code"}},i={},c=[{value:"\u7bc4\u4f8b\u8cc7\u6599",id:"\u7bc4\u4f8b\u8cc7\u6599",level:2},{value:"\u67e5\u8a62\u8cc7\u6599",id:"\u67e5\u8a62\u8cc7\u6599",level:2},{value:"\u66f4\u65b0\u8cc7\u6599",id:"\u66f4\u65b0\u8cc7\u6599",level:2},{value:"\u522a\u9664\u8cc7\u6599",id:"\u522a\u9664\u8cc7\u6599",level:2},{value:"Schema Methods",id:"schema-methods",level:2},{value:"Schema Statics",id:"schema-statics",level:2},{value:"Schema Query",id:"schema-query",level:2},{value:"Schema Virtual",id:"schema-virtual",level:2}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7bc4\u4f8b\u8cc7\u6599"},"\u7bc4\u4f8b\u8cc7\u6599"),(0,o.kt)("p",null,"\u7d93\u7531\u524d\u9762\u65b0\u589e\u7684\u8cc7\u6599\uff0c\u8cc7\u6599\u5eab\u5167\u5171\u6709 3 \u7b46\u8cc7\u6599\uff0c\u73fe\u5728\u5c31\u4f86\u91dd\u5c0d\u9019 3 \u7b46\u8cc7\u6599\u505a\u67e5\u8a62\u5427\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/FbNuDDK.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u67e5\u8a62\u8cc7\u6599"},"\u67e5\u8a62\u8cc7\u6599"),(0,o.kt)("p",null,"\u56e0\u70ba\u8a9e\u6cd5\u7684\u4f7f\u7528\u65b9\u5f0f\u975e\u5e38\u591a\u6a23\uff0c\u4e26\u4e0d\u6703\u5168\u90e8\u4ecb\u7d39\u5230\uff0c\u6709\u8208\u8da3\u7684\u53ef\u4ee5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/codeSTACKr/53fd03c7f75d40d07797b8e4e47d78ec#chaining/"},"MongoDB Cheat Sheet"),"\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"find")," \u5373\u53ef\u5c07\u8cc7\u6599\u5eab\u5167\u7684\u8cc7\u6599\u5168\u90e8\u67e5\u8a62\u51fa\u4f86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst findData = async () => {\n  try {\n    const user = await User.find();\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\nfindData();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/3K2QSmA.png",alt:"Image"})),(0,o.kt)("p",null,"\u5982\u8981\u91dd\u5c0d\u7279\u5b9a\u689d\u4ef6\u9032\u884c\u641c\u5c0b\u7684\u8a71\uff0c\u53ef\u4ee5\u4f7f\u7528 MongoDB \u672c\u8eab\u63d0\u4f9b Operators \u67e5\u8a62\u8a9e\u6cd5\uff0c\u5982\u679c\u6709\u60f3\u9032\u4e00\u6b65\u4e86\u89e3\u7684\u8a71\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/operator/query/"},"\u53ef\u4ee5\u770b\u5b98\u65b9\u6587\u6a94"),"\u3002"),(0,o.kt)("p",null,"\u9019\u908a\u63d0\u5e7e\u500b\u5e38\u7528\u7684"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$gt (greater than) : \u5927\u65bc"),(0,o.kt)("li",{parentName:"ul"},"$gte (greater than equal) : \u5927\u65bc\u7b49\u65bc"),(0,o.kt)("li",{parentName:"ul"},"$lt (less than) : \u5c0f\u65bc"),(0,o.kt)("li",{parentName:"ul"},"$lte (less than equal) : \u5c0f\u65bc\u7b49\u65bc"),(0,o.kt)("li",{parentName:"ul"},"$in (in) : \u6307\u5b9a\u7bc4\u570d\u5339\u914d\u7684\u503c"),(0,o.kt)("li",{parentName:"ul"},"$nin (not in) : \u6307\u5b9a\u7bc4\u570d\u4e0d\u5339\u914d\u7684\u503c")),(0,o.kt)("p",null,"\u6240\u4ee5\u5982\u679c\u60f3\u67e5\u8a62 ",(0,o.kt)("strong",{parentName:"p"},"name \u70ba Wei \u8207 name \u70ba Alex \u4e14 age \u5927\u65bc\u7b49\u65bc 18 \u7684"),"\u5247\u53ef\u4ee5\u5728 find \u88e1\u9762\u50b3\u5165\u4ee5\u4e0b\u7269\u4ef6\u53c3\u6578\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst findData = async () => {\n  try {\n    const user = await User.find({\n      name: { $in: ["Wei", "Alex"] },\n      age: { $gte: 18 },\n    });\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\nfindData();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/u22I4JZ.png",alt:"Image"})),(0,o.kt)("p",null,"\u5982\u679c Operators \u7528\u4e0d\u7fd2\u6163\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528\u985e\u4f3c Mysql \u7684 select where\uff0c\u4f46\u5fc5\u9808\u5148 where \u5f8c\u624d\u80fd\u57f7\u884c select\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst findData = async () => {\n  try {\n    //\u67e5\u8a62name\u70baWei\u7684\uff0c\u67e5\u8a62\u5230\u4ee5\u5f8c\u53ea\u986f\u793aname\u6b04\u4f4d\uff0c\u5176\u4ed6\u6b04\u4f4d\u4e0d\u8981\u986f\u793a\u3002\n    const user = await User.where("name").equals("Wei").select("name");\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\nfindData();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/50c13Pz.png",alt:"Image"})),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u67e5\u8a62\u7d50\u679c\u80fd\u5920\u53bb\u9664\u4e0d\u60f3\u8981\u7684\u6b04\u4f4d\uff0c\u5247\u53ef\u4ee5\u5728 select \u8a9e\u6cd5\u4e2d\u52a0\u4e0a\u4e00\u500b\u6e1b\u865f ",(0,o.kt)("strong",{parentName:"p"},"-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst findData = async () => {\n  try {\n    //\u67e5\u8a62name\u70baWei\u7684\uff0c\u67e5\u8a62\u5230\u4ee5\u5f8c\u4e0d\u8981\u628a\u6b04\u4f4d\u540d\u7a31\u70baname\u7684\u986f\u793a\u51fa\u4f86\u3002\n    const user = await User.where("name").equals("Wei").select("-name");\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\nfindData();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1YrgNi8.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u66f4\u65b0\u8cc7\u6599"},"\u66f4\u65b0\u8cc7\u6599"),(0,o.kt)("p",null,"\u8981\u66f4\u65b0\u8cc7\u6599\u7684\u8a71\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"updateOne")," \u6216 ",(0,o.kt)("strong",{parentName:"p"},"updateMany"),"\u3002"),(0,o.kt)("p",null,"updateOne \u7684\u7b2c\u4e00\u500b\u53c3\u6578\u662f\u67e5\u8a62\u53c3\u6578\uff0c\u67e5\u8a62\u4f60\u60f3\u8981\u66f4\u65b0\u7684\u8cc7\u6599\u5f8c\uff0c\u5728\u7b2c\u4e8c\u500b\u53c3\u6578\u4e2d\u50b3\u5165\u4f60\u8981\u66f4\u6539\u7684\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u503c\uff0c\u800c\u5982\u679c\u8981\u958b\u555f\u9a57\u8b49\u6a5f\u5236\u7684\u8a71\uff0c\u5fc5\u9700\u5728\u7b2c\u4e09\u500b\u53c3\u6578\u4e2d\u5c07\u9a57\u8b49\u6a5f\u5236\u8a2d\u7f6e\u70ba true\u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9805",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u9019\u5169\u500b function \u7684\u6642\u5019\u8981\u6ce8\u610f\uff0c\u56e0 updateOne \u548c updateMany \u7684\u9810\u8a2d\u9a57\u8b49\u6a5f\u5236\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u4f7f\u7528\u9019\u5169\u500b function \u66f4\u65b0\u8cc7\u6599\u7684\u8a71\uff0c\u4e26\u4e0d\u6703\u901a\u904e\u6211\u5011\u5728 Schema \u5efa\u7acb\u7684\u9a57\u8b49\u898f\u5247\uff0c\u800c\u662f\u6703\u76f4\u63a5\u7121\u8996\u898f\u5247\u66f4\u65b0\u8cc7\u6599\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst updateData = async () => {\n  try {\n    let opts = { runValidators: true }; //\u5c07\u9a57\u8b49\u6a5f\u5236\u8a2d\u7f6e\u70batrue\n    const userUpdateLog = await User.updateOne(\n      { name: "Wei" }, //\u7b2c\u4e00\u500b\u53c3\u6578 \u67e5\u8a62\u53c3\u6578 \u67e5\u8a62name\u70baWei\u7684\u8cc7\u6599\n      { age: "30" }, //\u7b2c\u4e8c\u500b\u53c3\u6578 \u66f4\u6539\u53c3\u6578 \u5c07Wei\u7684age\u6539\u70ba30\n      opts //\u7b2c\u4e09\u500b\u53ef\u9078\u53c3\u6578 \u5c07\u9a57\u8b49\u6a5f\u5236\u8a2d\u7f6e\u70batrue\n    );\n    console.log(userUpdateLog);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\nupdateData();\n')),(0,o.kt)("p",null,"\u57f7\u884c\u5f8c\u7684\u7d50\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u66f4\u52d5\u7684\u8cc7\u6599\u7b46\u6578(modifiedCount)\u70ba\u4e00\u7b46\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/dET0e0h.png",alt:"Image"})),(0,o.kt)("p",null,"\u53ef\u4ee5\u8a66\u8a66\u770b\u5982\u679c\u628a\u7b2c\u4e09\u500b\u53c3\u6578\u62ff\u6389\uff0c\u4e26\u628a age \u8a2d\u5b9a\u70ba 23\uff0c\u518d\u53bb\u57f7\u884c\u6a94\u6848\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\u3002"),(0,o.kt)("h2",{id:"\u522a\u9664\u8cc7\u6599"},"\u522a\u9664\u8cc7\u6599"),(0,o.kt)("p",null,"\u8981\u522a\u9664\u8cc7\u6599\u7684\u8a71\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"deleteOne")," \u8207 ",(0,o.kt)("strong",{parentName:"p"},"deleteMany"),"\u3002"),(0,o.kt)("p",null,"\u76f4\u63a5\u5728 deleteOne \u8207 deleteMany function \u4e2d\u50b3\u5165\u8981\u522a\u9664\u7684\u8cc7\u6599\uff0c\u4e00\u6a23\u662f\u4f7f\u7528\u67e5\u8a62\u8a9e\u6cd5\uff0c\u67e5\u8a62\u5230\u4ee5\u5f8c\u5c07\u8a72\u7b46\u8cc7\u6599\u522a\u9664\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst removeData = async () => {\n  try {\n    //\u53ea\u522a\u9664\u4e00\u7b46\u7684\u8a71\u4f7f\u7528deleteOne \u8981\u4e00\u6b21\u522a\u9664\u591a\u7b46\u7684\u8a71\u4f7f\u7528 deleteMany\n    const userRemoveLog = await User.deleteOne({ name: "Alex" });\n    console.log(userRemoveLog);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\nremoveData();\n')),(0,o.kt)("h2",{id:"schema-methods"},"Schema Methods"),(0,o.kt)("p",null,"Schema \u672c\u8eab\u4e5f\u6709\u63d0\u4f9b\u5ba2\u88fd\u5316\u7684 function \u4f9b\u6211\u5011\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n  },\n  email: {\n    type: String,\n    required: true,\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    required: true,\n    min: 1,\n    validate: {\n      // validator\u70batrue\u6642\uff0c\u624d\u80fd\u901a\u904e\u9a57\u8b49\u3002\n      validator: (v) => v % 2 === 0,\n      message: (props) => `${props.value} \u4e26\u4e0d\u662f\u5076\u6578`,\n    },\n  },\n});\n\n//\u4e0d\u80fd\u7528arrow func \u56e0\u70ba\u6703\u7528\u5230this\nuserSchema.methods.sayHello = function () {\n  console.log(\n    `Hi My name is ${this.name}, age ${this.age}, email ${this.email}`\n  );\n};\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,o.kt)("p",null,"\u63a5\u8457\u56de\u5230 server.js \u5148\u91dd\u5c0d\u8cc7\u6599\u9032\u884c\u67e5\u8a62\u5f8c\uff0c\u518d\u53bb\u4f7f\u7528 sayHello function\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst customFunction = async () => {\n  try {\n    const user = await User.findOne({ name: "Wei" });\n    user.sayHello();\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncustomFunction();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Yjw04XS.png",alt:"Image"})),(0,o.kt)("h2",{id:"schema-statics"},"Schema Statics"),(0,o.kt)("p",null,"Statics \u5247\u662f\u53ef\u4ee5\u76f4\u63a5\u81ea\u8a02 query \u7684\u898f\u5247\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n  },\n  email: {\n    type: String,\n    required: true,\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    required: true,\n    min: 1,\n    validate: {\n      // validator\u70batrue\u6642\uff0c\u624d\u80fd\u901a\u904e\u9a57\u8b49\u3002\n      validator: (v) => v % 2 === 0,\n      message: (props) => `${props.value} \u4e26\u4e0d\u662f\u5076\u6578`,\n    },\n  },\n});\n\n//\u627e\u5230age\u5927\u65bc\u7b49\u65bc\u50b3\u5165\u9032\u4f86\u7684\u53c3\u6578\nuserSchema.statics.findByAgeGreaterThanEqual = function (age) {\n  return this.find({ age: { $gte: age } });\n};\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,o.kt)("p",null,"\u63a5\u8457\u56de\u5230 server.js \u76f4\u63a5\u4f7f\u7528 findByAgeGreaterThanEqual\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst customFunction = async () => {\n  try {\n    //\u627e\u5230 age \u6b04\u4f4d \u5927\u65bc\u7b49\u65bc 30 \u7684\u8cc7\u6599\n    const user = await User.findByAgeGreaterThanEqual(30);\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncustomFunction();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/IGqEFxa.png",alt:"Image"})),(0,o.kt)("h2",{id:"schema-query"},"Schema Query"),(0,o.kt)("p",null,"Query \u5b9a\u7fa9\u7684\u65b9\u6cd5\u53ef\u4ee5\u63a5\u5728 find\u3001findOne\u3001where \u4e4b\u5f8c\u4f7f\u7528\uff0c\u6240\u4ee5\u5148\u524d\u5728 statics \u5b9a\u7fa9\u7684 findByAgeGreaterThanEqual function \u4e5f\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\n//\u5b9a\u7fa9\u6b04\u4f4d\u540d\u7a31\u8207\u6b04\u4f4d\u578b\u614b\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n  },\n  email: {\n    type: String,\n    required: true,\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    required: true,\n    min: 1,\n    validate: {\n      // validator\u70batrue\u6642\uff0c\u624d\u80fd\u901a\u904e\u9a57\u8b49\u3002\n      validator: (v) => v % 2 === 0,\n      message: (props) => `${props.value} \u4e26\u4e0d\u662f\u5076\u6578`,\n    },\n  },\n});\n\n//\u627e\u5230age\u5927\u65bc\u7b49\u65bc\u50b3\u5165\u9032\u4f86\u7684\u53c3\u6578\nuserSchema.statics.findByAgeGreaterThanEqual = function (age) {\n  return this.find({ age: { $gte: age } });\n};\n\n//chain query \u53ea\u80fd\u5728query function\u5f8c\u9762\u63a5\u8457\u7528 \u4f8b\u5982find findOne where\nuserSchema.query.byName = function (name) {\n  return this.where({ name: name }).select(["name", "age"]);\n};\n\n//\u5b9a\u7fa9Collection\u7684\u540d\u7a31\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,o.kt)("p",null,"\u63a5\u8457\u56de\u5230 server.js \u5728 findByAgeGreaterThanEqual \u4e4b\u5f8c\u4f7f\u7528 byNameAndAge\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst customFunction = async () => {\n  try {\n    const user = await User.findByAgeGreaterThanEqual(30).byName("Wei");\n    console.log(user);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncustomFunction();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/HqJ6WCx.png",alt:"Image"})),(0,o.kt)("h2",{id:"schema-virtual"},"Schema Virtual"),(0,o.kt)("p",null,"\u6700\u5f8c\u5982\u679c\u8981\u5728\u61c9\u7528\u7a0b\u5f0f\u5167\uff0c\u50b3\u905e\u67e5\u8a62\u51fa\u4f86\u7684\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528 virtual \u63d0\u4f9b\u7684 get function\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="User.js" showLineNumbers',title:'"User.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\n\nconst userSchema = new mongoose.Schema({\n  name: String,\n  email: {\n    type: String,\n    required: true,\n    minLength: 10,\n  },\n  age: {\n    type: Number,\n    min: 1,\n    validate: {\n      validator: (v) => v % 2 === 0,\n      message: (props) => `${props.value} \u4e26\u4e0d\u662f\u5076\u6578`,\n    },\n  },\n});\n\n//cross application\nuserSchema.virtual("namedEmail").get(function () {\n  return `${this.name} <${this.email}>`;\n});\n\nmodule.exports = mongoose.model("User", userSchema);\n')),(0,o.kt)("p",null,"\u76f4\u63a5\u5728\u67e5\u8a62\u5f8c\u4f7f\u7528\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js" showLineNumbers',title:'"server.js"',showLineNumbers:!0},'const mongoose = require("mongoose");\nconst User = require("./User");\n\nmongoose.connect("mongodb://127.0.0.1:27017/testdb", () => {\n  console.log("connected");\n});\n\nconst customFunction = async () => {\n  try {\n    const user = await User.findOne({ name: "Wei" });\n    console.log(user.namedEmail);\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\ncustomFunction();\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/EaAbWOn.png",alt:"Image"})))}u.isMDXComponent=!0}}]);