"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"React Query \u6559\u5b78",keywords:["react","react hook","react\u6559\u5b78","react query"],description:"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\u3002",author:"WeiYun0912","og:title":"React Query \u6559\u5b78","og:description":"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\u3002"},o=void 0,i={unversionedId:"React/React-Query",id:"React/React-Query",title:"React Query \u6559\u5b78",description:"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\u3002",source:"@site/docs/React/React-Query.md",sourceDirName:"React",slug:"/React/React-Query",permalink:"/Wei-Docusaurus/docs/React/React-Query",draft:!1,tags:[],version:"current",frontMatter:{title:"React Query \u6559\u5b78",keywords:["react","react hook","react\u6559\u5b78","react query"],description:"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\u3002",author:"WeiYun0912","og:title":"React Query \u6559\u5b78","og:description":"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\u3002"},sidebar:"tutorialSidebar",previous:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u7bad\u982d\u51fd\u5f0f",permalink:"/Wei-Docusaurus/docs/React/React-Arrow-Function"},next:{title:"React Router v6 \u7c21\u6613\u4ecb\u7d39",permalink:"/Wei-Docusaurus/docs/React/React-Router"}},l={},c=[{value:"Without React Query",id:"without-react-query",level:2},{value:"Initialization",id:"initialization",level:2},{value:"useQuery",id:"usequery",level:2},{value:"Data structure",id:"data-structure",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Mechanism",id:"mechanism",level:3},{value:"React Query DevTools (config)",id:"react-query-devtools-config",level:2},{value:"Query key",id:"query-key",level:2},{value:"Pagination Implementation",id:"pagination-implementation",level:3},{value:"Reference",id:"reference",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeiYun0912/React-Query-Note"},"Github \u9023\u7d50")),(0,r.kt)("p",null,"api \u7db2\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://swapi.dev/api/planets/"},"https://swapi.dev/api/planets/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install react-query\n")),(0,r.kt)("h2",{id:"without-react-query"},"Without React Query"),(0,r.kt)("p",null,"React \u5728 data fetch \u4e0a\u662f\u8f03\u4e0d\u65b9\u4fbf\u7684\uff0c\u4e0d\u4f9d\u9760\u7b2c\u4e09\u65b9\u5de5\u5177\u4f86\u8655\u7406\u8cc7\u6599\u7684\u8a71\uff0c\u4ee5\u4e0b\u7684\u529f\u80fd\u9700\u7d93\u904e\u8907\u96dc\u7684\u8655\u7406\u624d\u6709\u8fa6\u6cd5\u9054\u6210\uff1aglobal state\u3001success or error status\u3001cache\u3001background updating...\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hook\uff1auseState\u3001useEffect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'import React, { useEffect, useState } from "react";\n\nconst WithoutReactQuery = () => {\n  const [data, setData] = useState([]);\n  const [success, setSuccess] = useState(false);\n  const [errorMessage, setErrorMessage] = useState("");\n  useEffect(() => {\n    const fetchSWData = async () => {\n      try {\n        const response = await fetch("https://swapi.dev/api/planets/");\n\n        if (response.status !== 200 && !response.ok)\n          throw new Error("Fetch data fail.");\n\n        const data = await response.json();\n        setData(data.results);\n        console.log(data.results);\n        setSuccess(true);\n      } catch (error) {\n        setErrorMessage(error.message);\n      }\n    };\n    fetchSWData();\n  }, []);\n\n  return (\n    <div>\n      {success && JSON.stringify(data)}\n      {errorMessage}\n    </div>\n  );\n};\n\nexport default WithoutReactQuery;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/iJMjHPV.png",alt:null})),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"\u548c graphQL \u7684 Apollo client \u4e00\u6a23\uff0c\u90fd\u9700\u8981\u5148\u63d0\u4f9b Provider \u624d\u80fd\u4f7f\u7528\u5176\u4ed6\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},'import ReactDOM from "react-dom";\nimport "./index.css";\nimport { QueryClient, QueryClientProvider } from "react-query";\n\nconst queryClient = new QueryClient();\n\nReactDOM.render(\n  <React.StrictMode>\n    <QueryClientProvider client={queryClient}>\n      <App />\n    </QueryClientProvider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="index.css" showLineNumbers',title:'"index.css"',showLineNumbers:!0},"body {\n  margin: 0;\n  font-family: sans-serif;\n  background: #222;\n  color: #ddd;\n  text-align: center;\n}\n.App {\n  width: 960px;\n  margin: 0 auto;\n}\nh1 {\n  color: #ffff57;\n  font-size: 4em;\n  letter-spacing: 2px;\n}\nbutton {\n  margin: 0 10px;\n  background: transparent;\n  border: 3px solid #ccc;\n  border-radius: 20px;\n  padding: 10px;\n  color: #ccc;\n  font-size: 1.2em;\n  cursor: pointer;\n}\nbutton:hover {\n  color: #fff;\n  border-color: #fff;\n}\n.content {\n  text-align: left;\n}\n\n.card {\n  padding: 8px 16px;\n  background: #1b1b1b;\n  margin: 16px 0;\n  border-radius: 20px;\n}\n.card p {\n  margin: 6px 0;\n  color: #999;\n}\n.card h3 {\n  margin: 10px 0;\n  color: #ffff57;\n}\n")),(0,r.kt)("h2",{id:"usequery"},"useQuery"),(0,r.kt)("h3",{id:"data-structure"},"Data structure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"doc")),(0,r.kt)("p",null,"\u5f9e\u4e0a\u9762\u7684\u6587\u4ef6\u53ef\u4ee5\u770b\u5230 useQuery \u80fd\u5920\u89e3\u69cb\u54ea\u4e9b\u8cc7\u6599\u8207\u72c0\u614b\u51fa\u4f86\u4f7f\u7528\uff0c\u9019\u908a\u4ecb\u7d39\u5e7e\u500b\u6bd4\u8f03\u5e38\u7528\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"data\uff1a\u53d6\u5f97\u7684API\u8cc7\u6599")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataUpdatedAt\uff1a\u53d6\u5f97\u7684\u8cc7\u6599\u6642\u9593\uff0c\u4ee5status\u70basuccess\u6642\u70ba\u57fa\u6e96\uff0c\u70batimestamp\u683c\u5f0f\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status\uff1a\u8cc7\u6599\u53d6\u5f97\u6210\u529f\u6216\u5931\u6557\uff0c\u8b80\u53d6\u6642\u6703\u56de\u50b3loading\uff0c\u6210\u529f\u6703\u56de\u50b3success\uff0c\u5931\u6557\u5247\u56de\u50b3error\u3002")),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"useQuery \u6240\u9700\u8981\u7684\u53c3\u6578\u6709\u5169\u500b\uff0c\u4e00\u500b\u662f\u9375\u503c\u540d\u7a31\uff0c\u53e6\u4e00\u500b\u5247\u662f data fetching \u7684 function\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const result = useQuery(queryKey,queryFunction)")),(0,r.kt)("p",null,"\u5148\u5b9a\u7fa9\u597d fetch function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"const fetchPlanets = async ({ queryKey }) => {\n  const response = await fetch(`https://swapi.dev/api/planets/`);\n  return response.json();\n};\n")),(0,r.kt)("p",null,"\u4e4b\u5f8c\u4f7f\u7528 useQuery hook \u4e26\u5c07\u53d6\u5f97\u7684\u8cc7\u6599\u89e3\u69cb\u4e26\u986f\u793a\u5728\u756b\u9762\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Planets.js" showLineNumbers',title:'"Planets.js"',showLineNumbers:!0},'import { useQuery } from "react-query";\n\nconst timeToDate = (time) => {\n  let t = new Date(time);\n  return t.toLocaleString();\n};\n\nconst Planets = () => {\n  const fetchPlanets = async () => {\n    const response = await fetch(`https://swapi.dev/api/planets/`);\n    return response.json();\n  };\n  const { data, dataUpdatedAt, status } = useQuery("planets", fetchPlanets);\n\n  return (\n    <div>\n      <h3>Data updated at \uff1a {timeToDate(dataUpdatedAt)}</h3>\n      {status === "success" && (\n        <div>\n          {data.results.map((planet) => (\n            <Planet key={planet.name} planet={planet} />\n          ))}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default Planets;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Planets.js" showLineNumbers',title:'"Planets.js"',showLineNumbers:!0},'import React from "react";\n\nconst Planet = ({ planet }) => {\n  return (\n    <div className="card">\n      <h3>{planet.name}</h3>\n      <p>Population - {planet.population}</p>\n      <p>Terrain - {planet.terrain}</p>\n    </div>\n  );\n};\n\nexport default Planet;\n')),(0,r.kt)("h3",{id:"mechanism"},"Mechanism"),(0,r.kt)("p",null,"\u5982\u679c fetch \u7684 data \u6709\u554f\u984c(\u7db2\u5740\u6253\u932f\u3001\u63d0\u4f9b\u932f\u8aa4\u53c3\u6578\u7b49)\uff0cReact Query \u6703\u81ea\u52d5 retry(refetch)\u4e09\u6b21\uff0c\u4e09\u6b21\u90fd\u53d6\u5f97\u4e0d\u5230 data \u7684\u8a71\u5247\u6703\u986f\u793a error\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0cReact Query \u4e5f\u6709 Window Refocus Refetching \u7684\u529f\u80fd\uff0c\u610f\u601d\u662f\u7576\u700f\u89bd\u5668\u5207\u63db\u5230\u5176\u4ed6\u5206\u9801\u518d\u5207\u63db\u56de\u4f86\u6642\uff0c\u6703\u91cd\u65b0 Fetch data\uff0c\u5f9e\u4e0b\u5716\u53ef\u4ee5\u5f88\u660e\u986f\u7684\u89c0\u5bdf\u5230\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/u2AepDh.gif",alt:null})),(0,r.kt)("p",null,"\u9019\u4e9b\u8a2d\u5b9a\u503c\u662f\u53ef\u4ee5\u66f4\u6539\u7684\uff0c\u6587\u4ef6\u4e0a\u4e5f\u6709\u5beb\u54ea\u4e9b\u53c3\u6578\u662f\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'const { data, dataUpdatedAt, status } = useQuery("planets",fetchPlanets,\n    {\n      retry : 1,\n      refetchOnWindowFocus : false,\n      ...\n    }\n);\n')),(0,r.kt)("h2",{id:"react-query-devtools-config"},"React Query DevTools (config)"),(0,r.kt)("p",null,"React Query \u4e5f\u6709\u63d0\u4f9b\u958b\u767c\u7ba1\u7406\u5de5\u5177 ",(0,r.kt)("strong",{parentName:"p"},"React Query Dev Tools")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/NT7Td7t.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},'import ReactDOM from "react-dom";\nimport { QueryClient, QueryClientProvider } from "react-query";\nimport { ReactQueryDevtools } from "react-query/devtools";\n\nconst queryClient = new QueryClient();\n\nReactDOM.render(\n  <React.StrictMode>\n    <QueryClientProvider client={queryClient}>\n      <App />\n      <ReactQueryDevtools />\n    </QueryClientProvider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,r.kt)("h2",{id:"query-key"},"Query key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Planets.js" showLineNumbers',title:'"Planets.js"',showLineNumbers:!0},'import { useQuery } from "react-query";\nimport Planet from "./Planet";\n\nconst timeToDate = (time) => {\n  ...\n};\n\nconst Planets = () => {\n  const fetchPlanets = async ({ queryKey }) => {\n    console.log(queryKey)\n    const response = await fetch(\n      `https://swapi.dev/api/planets/`\n    );\n    return response.json();\n  };\n\n  const { data, dataUpdatedAt, status } = useQuery(["planets", "hello","world"],fetchPlanets);\n\n  return (\n    ...\n  );\n};\n\nexport default Planets;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/NgtfXRx.png",alt:null})),(0,r.kt)("h3",{id:"pagination-implementation"},"Pagination Implementation"),(0,r.kt)("p",null,"\u4e0a\u9762\u63d0\u4f9b\u7684 api \u6709 page \u7684\u67e5\u8a62\u53c3\u6578\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u5c31\u4f86\u5be6\u4f5c Pagination \u5427\uff0cpage \u7684\u4e0a\u4e00\u9801\u8207\u4e0b\u4e00\u9801\u908f\u8f2f\u5c31\u5148\u7c21\u55ae\u7565\u904e\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e00\u9801\uff1ahttps://swapi.dev/api/planets/?page=1"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e8c\u9801\uff1ahttps://swapi.dev/api/planets/?page=2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Planets.js" showLineNumbers',title:'"Planets.js"',showLineNumbers:!0},'import React, { useState } from "react";\nimport { useQuery } from "react-query";\nimport Planet from "./Planet";\n\nconst timeToDate = (time) => {\n  let t = new Date(time);\n  return t.toLocaleString();\n};\n\nconst Planets = () => {\n  const [page, setPage] = useState(1);\n  const fetchPlanets = async ({ queryKey }) => {\n    const response = await fetch(\n      `https://swapi.dev/api/planets/?page=${queryKey[1]}`\n    );\n    return response.json();\n  };\n\n  const { data, dataUpdatedAt, status } = useQuery(\n    ["planets", page],\n    fetchPlanets\n  );\n\n  return (\n    <div>\n      <h3>Data updated at \uff1a {timeToDate(dataUpdatedAt)}</h3>\n      <button onClick={() => setPage(page - 1)}>Prev</button>\n      <button onClick={() => setPage(page + 1)}>Next</button>\n\n      {status === "success" && (\n        <div>\n          {data.results.map((planet) => (\n            <Planet key={planet.name} planet={planet} />\n          ))}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default Planets;\n')),(0,r.kt)("p",null,"\u7576\u6211\u5011\u9ede\u9078\u4e0b\u4e00\u9801\u518d\u9ede\u9078\u4e0a\u4e00\u9801\u6642\uff0c\u6703\u767c\u73fe\u539f\u672c\u7684\u8cc7\u6599\u4e0d\u6703\u6709 loading \u7684\u756b\u9762\u51fa\u73fe(\u9583\u4e00\u4e0b)\uff0c\u9019\u662f\u56e0\u70ba React Query \u6709 cache \u7684\u6a5f\u5236\uff0c\u9810\u8a2d\u7684 cache \u6642\u9593\u662f 5 \u5206\u9418\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/kLaVBCT.gif",alt:null})),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u8981\u9ede\u9078\u4e0b\u4e00\u9801\u6709 loading \u9583\u4e00\u4e0b\u7684\u72c0\u6cc1\u51fa\u73fe\uff0c\u53ef\u4ee5\u8a2d\u5b9a",(0,r.kt)("strong",{parentName:"p"},"keepPreviousData"),"\u70ba",(0,r.kt)("strong",{parentName:"p"},"true"),"\uff0c\u610f\u601d\u662f\u7576\u4e0b\u4e00\u7b46\u8cc7\u6599\u8f09\u5165\u6642\uff0c\u5148\u4fdd\u5b58\u7576\u4e0a\u4e00\u7b46\u7684\u8cc7\u6599\u76f4\u5230\u4e0b\u4e00\u7b46\u8cc7\u6599\u8f09\u5165\u5b8c\u6210\u624d\u986f\u793a\u51fa\u4f86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/YmI3c9H.gif",alt:null})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x1rQ61otgtU&list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani&index=2"},"The Net Ninja")))}p.isMDXComponent=!0}}]);