"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,P=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(P,a(a({ref:t},c),{},{components:r})):n.createElement(P,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),i=r(9960);const a={title:"[react] React \u4f7f\u7528 RTK Query \u4f86\u7372\u53d6 API \u8cc7\u6599",keywords:["react","react\u6559\u5b78","react-icons"],description:"\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002",author:"WeiYun0912","og:title":"React \u4f7f\u7528 RTK Query \u4f86\u7372\u53d6 API \u8cc7\u6599","og:description":"\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002"},s=void 0,p={unversionedId:"React/Package/React-RTK-Query",id:"React/Package/React-RTK-Query",title:"[react] React \u4f7f\u7528 RTK Query \u4f86\u7372\u53d6 API \u8cc7\u6599",description:"\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002",source:"@site/docs/React/Package/React-RTK-Query.md",sourceDirName:"React/Package",slug:"/React/Package/React-RTK-Query",permalink:"/Wei-Docusaurus/docs/React/Package/React-RTK-Query",draft:!1,tags:[],version:"current",frontMatter:{title:"[react] React \u4f7f\u7528 RTK Query \u4f86\u7372\u53d6 API \u8cc7\u6599",keywords:["react","react\u6559\u5b78","react-icons"],description:"\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002",author:"WeiYun0912","og:title":"React \u4f7f\u7528 RTK Query \u4f86\u7372\u53d6 API \u8cc7\u6599","og:description":"\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002"},sidebar:"tutorialSidebar",previous:{title:"[react] React Query \u6559\u5b78",permalink:"/Wei-Docusaurus/docs/React/Package/React-Query"},next:{title:"[react] React Router DOM v6 \u4ecb\u7d39",permalink:"/Wei-Docusaurus/docs/React/Package/React-Router-Dom-v6"}},l={},c=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb",id:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb",level:2},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"ApiProvider",id:"apiprovider",level:2},{value:"Provider",id:"provider",level:2},{value:"\u88dc\u5145",id:"\u88dc\u5145",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install react-redux @reduxjs/toolkit\n")),(0,o.kt)("h2",{id:"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb"},"\u8cc7\u6599\u593e\u8207\u6a94\u6848\u7d50\u69cb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/rtk-query"},"\u7a0b\u5f0f\u78bc\u9023\u7d50")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n|   App.js\n|   index.js\n|   ...\n|\n\u2514\u2500\u2500\u2500 components\n\u2502   \u2502   Post.js\n|   |   TestAPI.js\n\u2502\n\u2514\u2500\u2500\u2500 store\n\u2502   \u2502   index.js\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500\u2500 api\n\u2502   \u2502   \u2502   apiSlice.js\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/TbwsjIW.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)(i.Z,{to:"/docs/React/Package/Redux-Toolkit",mdxType:"Link"},"\u9019\u7bc7\u6587\u7ae0")," \u7684\u6700\u5f8c\u6709\u63d0\u5230\uff0c\u5982\u679c\u8981\u4f7f\u7528 Redux Toolkit \u7684 slice \u5be6\u4f5c async await \u53bb\u53d6\u5f97 API \u8cc7\u6599\u7684\u8a71\uff0c\u6703\u9700\u8981\u81ea\u8a02\u4e00\u500b action creator\uff0c\u5728 action creator \u88e1\u9762\u9084\u9700\u8981\u4f7f\u7528\u5230 dispatch\uff0c\u9019\u662f\u4e00\u4ef6\u4e0d\u592a\u65b9\u4fbf\u7684\u4e8b\u60c5\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5 Redux Toolkit \u6709\u63d0\u4f9b\u4e00\u5957\u89e3\u6c7a\u65b9\u6cd5\u7d66\u6211\u5011\u4f7f\u7528\uff0c\u53eb\u505a Redux Toolkit Query\uff0c\u4ee5\u4e0b\u7c21\u7a31 RTK Query\u3002"),(0,o.kt)("p",null,"RTK Query \u662f\u5c08\u9580\u7528\u4f86\u53d6\u5f97 API \u8cc7\u6599\u7684\u4e00\u500b\u5957\u4ef6\uff0c\u5b83\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5e7e\u500b\u512a\u9ede\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u80fd\u5920\u8ffd\u8e64 API \u7684\u8f09\u5165\u72c0\u614b\uff0c\u4ee5\u4fbf\u986f\u793a Loading \u756b\u9762\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8981\u662f\u5169\u500b\u4ee5\u4e0a\u7684 Component \u547c\u53eb\u4e86\u540c\u6a23\u7684 API\uff0c\u4e26\u4e0d\u6703\u767c\u9001\u5169\u6b21 Request \u51fa\u53bb\uff0c\u53ea\u6703\u9001\u4e00\u6b21 Request\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u8005\u8207\u756b\u9762\u4e92\u52d5\u6642\uff0c\u80fd\u5920\u5c07\u53d6\u5f97\u5230\u7684 API \u8cc7\u6599\u4f7f\u7528 cache \u66ab\u5b58\uff0c\u4ee5\u6b64\u4fdd\u6301\u826f\u597d\u7684\u4f7f\u7528\u8005\u9ad4\u9a57\u3002")),(0,o.kt)("h2",{id:"apiprovider"},"ApiProvider"),(0,o.kt)("p",null,"\u5148\u4ecb\u7d39\u7b2c\u4e00\u7a2e RTK Query \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u8981\u4f7f\u7528 RTK Query \u4e00\u6a23\u8981\u5f15\u5165 Provider \u5305\u4f4f\u6211\u5011\u7684\u6574\u500b React Application\uff0c\u800c RTK \u6709\u63d0\u4f9b\u53e6\u5916\u4e00\u500b Provider \u7d66 RTK Query \u4f7f\u7528\uff0c\u53eb\u505a ApiProvider\u3002"),(0,o.kt)("p",null,"ApiProvder \u4e0d\u80fd\u5920\u8207 store \u7684 Provider \u4e00\u540c\u4f7f\u7528\uff0c\u6703\u6709\u554f\u984c\uff0c\u5b98\u65b9\u4e5f\u6709\u7279\u5225\u8aaa\u660e\u9019\u9ede\u3002"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Using ApiProvider together with an existing Redux store will cause them to conflict with each other.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers",title:"'App.js'",showLineNumbers:!0},'import "./App.css";\nimport { Provider } from "react-redux";\nimport store from "./store";\nimport { ApiProvider } from "@reduxjs/toolkit/dist/query/react";\n\nfunction App() {\n  return (\n    //\u932f\u8aa4\u7684\u7a0b\u5f0f\u78bc\uff0cApiProvider \u4e0d\u80fd\u5920\u8207 Provide r\u4e00\u540c\u4f7f\u7528\u3002\n    <ApiProvider>\n      <Provider store={store}>\n        <div className="App">...</div>\n      </Provider>\n    </ApiProvider>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"\u4f46\u9019\u662f\u6709\u89e3\u6c7a\u8fa6\u6cd5\u7684\uff0c\u6211\u5011\u5f85\u6703\u4ecb\u7d39\u5230\u7b2c\u4e8c\u7a2e\u4f7f\u7528\u65b9\u6cd5\u7684\u6642\u5019\u6703\u8aaa\u660e\u3002"),(0,o.kt)("p",null,"\u73fe\u5728\u4f86\u4f7f\u7528 RTK Query \u64b0\u5beb\u6293\u53d6 API \u8cc7\u6599\u7684\u7a0b\u5f0f\u78bc\u5427\uff0c\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\u6703\u4f7f\u7528 JSONPlaceholder \u63d0\u4f9b\u7684 posts API \u4f86\u5be6\u4f5c RTK Query\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/posts"},"https://jsonplaceholder.typicode.com/posts")),(0,o.kt)("p",null,"\u5148\u4f7f\u7528 createApi \u4f86\u5efa\u7acb\u6211\u5011\u7684 API \u670d\u52d9\uff0c\u5728 createApi \u5167\u9700\u8981\u586b\u5165 3 \u500b\u53c3\u6578\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reducerPath : reducer \u7684 path \u540d\u7a31\uff0c\u901a\u5e38\u6703\u8a2d\u5b9a\u8ddf API \u670d\u52d9\u4e00\u6a23\u7684\u540d\u7a31\u3002"),(0,o.kt)("li",{parentName:"ul"},"baseQuery : \u4f7f\u7528 fetchBaseQuery \u5f8c\uff0c\u53ef\u4ee5\u8a2d\u5b9a API \u7684 baseUrl\u3002"),(0,o.kt)("li",{parentName:"ul"},"endPoints : \u5b9a\u7fa9\u8981\u547c\u53eb\u7684 API Function \u540d\u7a31\uff0c\u800c RTK Query \u6703\u81ea\u52d5\u5c07\u88e1\u9762\u5b9a\u7fa9\u7684 Function \u8655\u7406\u6210 Hook \u8b93\u6211\u5011\u53bb\u4f7f\u7528\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='apiSlice.js' showLineNumbers",title:"'apiSlice.js'",showLineNumbers:!0},'import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";\n\nexport const postsApi = createApi({\n  reducerPath: "postsApi",\n  baseQuery: fetchBaseQuery({\n    baseUrl: "https://jsonplaceholder.typicode.com/",\n  }),\n  endpoints: (builder) => ({\n    getAllPosts: builder.query({\n      /* \u56e0\u70ba\u6709\u8a2d\u5b9abaseUrl\u7684\u95dc\u4fc2\uff0c\u4e0d\u7528\u586b\u5beb\u5b8c\u6574\u7684 API \u7db2\u5740\u3002\n      \u7576\u547c\u53eb\u8a72Function\u6642\uff0c\u662f\u53bb https://jsonplaceholder.typicode.com/posts \u53d6\u5f97\u8cc7\u6599 */\n      query: () => "posts", // https://jsonplaceholder.typicode.com/posts\n    }),\n  }),\n});\n\n// RTK Query \u6703\u81ea\u52d5\u5c07 endPoints \u5167\u5b9a\u7fa9\u7684 Function \u8f38\u51fa\u6210 Hook\u3002\n// \u683c\u5f0f\u70ba use + \u5b9a\u7fa9\u7684 Function \u540d\u7a31 + Query\nexport const { useGetAllPostsQuery } = postsApi;\n')),(0,o.kt)("admonition",{title:"\u5099\u8a3b",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 query \u767c\u9001\u7684\u662f GET Request\uff0c\u5982\u679c\u8981\u767c\u9001 Post \u7684\u8a71\u8981\u66f4\u6539\u70ba Mutation\u3002")),(0,o.kt)("p",null,"\u63a5\u8457\u5728 App.js \u53bb\u5f15\u5165 ApiProvider\uff0c\u800c ApiProvider \u9084\u9700\u8981\u63d0\u4f9b\u4e00\u500b prop\uff0c\u53eb\u505a api\uff0c\u9019\u908a\u5c31\u76f4\u63a5\u5c07\u6211\u5011\u525b\u525b\u5b9a\u7fa9\u7684 API \u670d\u52d9\u50b3\u5165\u5373\u53ef\u3002"),(0,o.kt)("p",null,"Post \u548c TestAPI \u70ba\u5f85\u6703\u6e2c\u8a66 RTK Query \u662f\u5426\u80fd\u5920\u6210\u529f\u57f7\u884c\u7684 Component\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'import "./App.css";\nimport Post from "./components/Post";\nimport TestAPI from "./components/TestAPI";\nimport { ApiProvider } from "@reduxjs/toolkit/dist/query/react";\nimport { postsApi } from "./store/api/apiSlice";\n\nfunction App() {\n  return (\n    //\u932f\u8aa4\u7684\u7a0b\u5f0f\u78bc\uff0cApiProvider\u4e0d\u80fd\u5920\u8207Provider\u4e00\u540c\u4f7f\u7528\u3002\n    <ApiProvider api={postsApi}>\n      <div className="App">\n        <Post />\n        <TestAPI />\n      </div>\n    </ApiProvider>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"\u73fe\u5728\u4f86 Post Component \u5167\u6e2c\u8a66\u662f\u5426\u80fd\u4f7f\u7528 RTK Query \u53bb\u7372\u53d6 JSONPlaceholder \u7684 API \u8cc7\u6599\u3002"),(0,o.kt)("p",null,"\u53ea\u8981\u5c07 RTK Query \u63d0\u4f9b\u7d66\u6211\u5011\u7684 Hook \u5f15\u5165\u4e26\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Post.js' showLineNumbers {2,5,6,8-11,13}",title:"'Post.js'",showLineNumbers:!0,"{2,5,6,8-11,13}":!0},'import React from "react";\nimport { useGetAllPostsQuery } from "../store/api/apiSlice";\n\nconst Post = () => {\n  //\u5c07\u8cc7\u6599\u89e3\u69cb\u51fa\u4f86\n  const { data, isLoading } = useGetAllPostsQuery();\n\n  //\u5224\u65b7\u662f\u5426\u6b63\u5728\u8f09\u5165API\u8cc7\u6599\n  if (isLoading) {\n    return <h1>Loading...</h1>;\n  }\n\n  console.log("Posts", data);\n\n  return <h1>Post</h1>;\n};\n\nexport default Post;\n')),(0,o.kt)("p",null,"\u63a5\u8457\u6253\u958b console\uff0c\u78ba\u8a8d\u4e00\u4e0b\u662f\u5426\u6709\u53d6\u5f97\u5230 API \u8cc7\u6599\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6211\u5011\u6210\u529f\u4f7f\u7528 RTK Query \u53d6\u5f97\u5230 API \u8cc7\u6599\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/WNSBxvR.png",alt:"Image"})),(0,o.kt)("p",null,"\u5728 TestAPI Component \u4e5f\u53bb\u4f7f\u7528 useGetAllPostsQuery Hook\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='TestAPI.js' showLineNumbers {2,5,6,8-11,13}",title:"'TestAPI.js'",showLineNumbers:!0,"{2,5,6,8-11,13}":!0},'import React from "react";\nimport { useGetAllPostsQuery } from "../store/api/apiSlice";\n\nconst TestAPI = () => {\n  //\u5c07\u8cc7\u6599\u89e3\u69cb\u51fa\u4f86\n  const { data, isLoading } = useGetAllPostsQuery();\n\n  //\u5224\u65b7\u662f\u5426\u6b63\u5728\u8f09\u5165API\u8cc7\u6599\n  if (isLoading) {\n    return <h1>Loading...</h1>;\n  }\n\n  console.log("TestAPI", data);\n\n  return <h1>TestAPI</h1>;\n};\n\nexport default TestAPI;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/5SHTU4z.png",alt:"Image"})),(0,o.kt)("p",null,"\u5728\u6b63\u5e38\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u5728\u5169\u500b Component \u90fd\u53bb\u547c\u53eb\u4e86 JSONPlaceholder \u7684 API\uff0c\u6240\u4ee5\u61c9\u8a72\u6703\u767c\u9001\u5169\u6b21\u7684 Request \u51fa\u53bb\u3002"),(0,o.kt)("p",null,"\u4f46\u5be6\u969b\u4e0a\u6211\u5011\u53ea\u767c\u9001\u4e86\u4e00\u6b21 Request \u5c31\u53d6\u5f97\u4e86\u8cc7\u6599\uff0c\u9019\u4e5f\u662f\u524d\u9762\u63d0\u5230\u7684 RTK Query \u7684\u512a\u9ede\uff0c\u8981\u662f\u591a\u500b Component \u767c\u9001\u8acb\u6c42\u7d66\u540c\u4e00\u500b API\uff0cRTK Query \u53ea\u6703\u767c\u9001\u4e00\u6b21 Request\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/l7z9Liq.png",alt:"Image"})),(0,o.kt)("h2",{id:"provider"},"Provider"),(0,o.kt)("p",null,"\u800c\u524d\u9762\u6709\u63d0\u5230\uff0cstore \u4f7f\u7528\u7684 Provider \u4e26\u4e0d\u80fd\u8207 ApiProvider \u4e00\u540c\u4f7f\u7528\uff0c\u9019\u908a\u5b98\u65b9\u6709\u63d0\u4f9b\u76f8\u5c0d\u61c9\u7684",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview#configure-the-store"},"\u89e3\u6c7a\u65b9\u6cd5"),"\uff0c\u53ea\u8981\u5728 configureStore \u5167\u53bb\u5b9a\u7fa9 API \u670d\u52d9\u7684 reducerPath \u548c reducer \u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='store/index.js' showLineNumbers {2,6,11,12}",title:"'store/index.js'",showLineNumbers:!0,"{2,6,11,12}":!0},'import { configureStore } from "@reduxjs/toolkit";\nimport { postsApi } from "./api/apiSlice";\n\nconst store = configureStore({\n  reducer: {\n    [postsApi.reducerPath]: postsApi.reducer,\n    // ...\u5176\u4ed6slice\n  },\n\n  //\u4f7f\u7528 api middleware \u53ef\u4ee5\u555f\u7528 caching\u3001invalidation\u3001polling \u529f\u80fd\u3002\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(postsApi.middleware),\n});\n\nexport default store;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers {4,5,11,16}",title:"'App.js'",showLineNumbers:!0,"{4,5,11,16}":!0},'import "./App.css";\nimport Post from "./components/Post";\nimport TestAPI from "./components/TestAPI";\nimport { Provider } from "react-redux";\nimport store from "./store";\n// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";\n// import { postsApi } from "./store/api/apiSlice";\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className="App">\n        <Post />\n        <TestAPI />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"\u73fe\u5728\u518d\u6b21\u56de\u5230\u7db2\u9801\u91cd\u65b0\u6574\u7406\uff0c\u4e00\u6a23\u53ef\u4ee5\u770b\u5230\u6211\u5011\u7684 API \u8cc7\u6599\u6709\u6210\u529f\u7684\u53d6\u56de\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ktqjky1.png",alt:"Image"})),(0,o.kt)("h2",{id:"\u88dc\u5145"},"\u88dc\u5145"),(0,o.kt)("p",null,"\u5982\u679c API \u9700\u8981\u5e36\u5165\u53c3\u6578\u4f86\u53d6\u5f97\u8cc7\u6599\u7684\u8a71\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u505a\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='apiSlice.js' showLineNumbers {13-15,19}",title:"'apiSlice.js'",showLineNumbers:!0,"{13-15,19}":!0},'import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";\n\nexport const postsApi = createApi({\n  reducerPath: "postsApi",\n  baseQuery: fetchBaseQuery({\n    baseUrl: "https://jsonplaceholder.typicode.com/",\n  }),\n  endpoints: (builder) => ({\n    getAllPosts: builder.query({\n      query: () => "posts", // https://jsonplaceholder.typicode.com/posts\n    }),\n\n    getPostById: builder.query({\n      query: (id) => `posts?id=${id}`, // https://jsonplaceholder.typicode.com/posts?id=1\n    }),\n  }),\n});\n\nexport const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Post.js' showLineNumbers {2,5,6}",title:"'Post.js'",showLineNumbers:!0,"{2,5,6}":!0},'import React from "react";\nimport { useGetPostByIdQuery } from "../store/api/apiSlice";\n\nconst Post = () => {\n  //\u53d6\u5f97id\u70ba1\u7684\u6587\u7ae0\n  const { data, isLoading } = useGetPostByIdQuery(1);\n\n  if (isLoading) {\n    return <h1>Loading...</h1>;\n  }\n\n  console.log("Posts", data);\n\n  return <h1>Post</h1>;\n};\n\nexport default Post;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/RsPMCWt.png",alt:"Image"})))}d.isMDXComponent=!0}}]);