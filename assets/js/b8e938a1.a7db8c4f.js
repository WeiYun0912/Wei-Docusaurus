"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const s={title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8",keywords:["react","react\u6559\u5b78","javascript","optional chaining"],description:"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4",author:"WeiYun0912","og:title":"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8","og:description":"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4",sidebar_position:5},r=void 0,i={unversionedId:"React/React-Optional-Chaining",id:"React/React-Optional-Chaining",title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8",description:"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4",source:"@site/docs/React/React-Optional-Chaining.md",sourceDirName:"React",slug:"/React/React-Optional-Chaining",permalink:"/Wei-Docusaurus/docs/React/React-Optional-Chaining",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8",keywords:["react","react\u6559\u5b78","javascript","optional chaining"],description:"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4",author:"WeiYun0912","og:title":"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u53ef\u9078\u93c8","og:description":"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"React\u5e38\u7528\u7684JavaScript\u8a9e\u6cd5 - \u7269\u4ef6",permalink:"/Wei-Docusaurus/docs/React/React-Objects"},next:{title:"React Protected Routes",permalink:"/Wei-Docusaurus/docs/React/React-Protected-Routes"}},p={},l=[{value:"JavaScript",id:"javascript",level:2},{value:"React",id:"react",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"\u8981\u662f\u6211\u5011\u4e26\u4e0d\u6e05\u695a\u53d6\u5f97\u7684\u8cc7\u6599\u662f\u5426\u70ba\u7269\u4ef6\uff0c\u53c8\u4f7f\u7528\u7269\u4ef6\u53d6\u503c\u7684\u65b9\u5f0f\u53bb\u547c\u53eb\uff0c\u4e14\u6c92\u6709\u505a\u4efb\u4f55\u7684\u5224\u65b7\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},"let food = null;\n\nconsole.log(food.name); // error : Cannot read properties of null (reading 'name')\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u5224\u65b7\u4e00\u500b\u7269\u4ef6\u88e1\u9762\u6709\u6c92\u6709\u6211\u5011\u8981\u53d6\u5f97\u7684 key\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4f86\u78ba\u8a8d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let food = { name: "apple" };\n\nif (food != null) {\n  console.log(food.name); // output : apple\n}\n\n// or\n\nif (food) {\n  console.log(food.name); // output : apple\n}\n')),(0,a.kt)("p",null,"\u6216\u662f\u4f7f\u7528\u53ef\u9078\u93c8(optional chaining)\uff0c\u4f86\u6aa2\u67e5\u8a72\u7269\u4ef6\u5167\u662f\u5426\u6709\u6211\u5011\u8981\u53d6\u5f97\u7684 key\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let food = { name: "apple" };\n\nif (food?.name) {\n  console.log(food.name); // output : apple\n}\n\n//\u4e0d\u6703\u9032\u5230\u9019\u500bif \u56e0\u70bafood\u7269\u4ef6\u5167\u4e26\u6c92\u6709\u540d\u70bacolor\u7684key\nif (food?.color) {\n  console.log(food.color);\n}\n')),(0,a.kt)("admonition",{title:"\u5099\u8a3b",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u9078\u93c8\u7684\u4f7f\u7528\u65b9\u5f0f\u70ba\u5728\u7269\u4ef6\u540d\u7a31\u7684\u5f8c\u9762\u52a0\u4e0a ?."),(0,a.kt)("p",{parentName:"admonition"},"\u800c food?.name \u70ba\u6aa2\u67e5 food \u7269\u4ef6\u5167\u6709\u6c92\u6709\u540d\u70ba name \u7684 key\u3002")),(0,a.kt)("p",null,"\u5047\u91cb\u4eca\u5929\u7269\u4ef6\u5167\u6709\u5176\u4ed6 function\uff0c\u53ef\u4ee5\u4f7f\u7528\u53ef\u9078\u93c8\u5148\u78ba\u8a8d function \u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u7684\u8a71\u518d\u57f7\u884c\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='index.js' showLineNumbers",title:"'index.js'",showLineNumbers:!0},'let food = {\n  name: "apple",\n  color: "red",\n  getFoodData: () => {\n    console.log("getFoodData..."); // output : getFoodData...\n  },\n};\n\nfood?.getFoodData?.();\n')),(0,a.kt)("h2",{id:"react"},"React"),(0,a.kt)("p",null,"\u73fe\u5728\u4f7f\u7528 fetch API \u4f86\u53d6\u5f97 jsonplaceholder \u7684\u63d0\u4f9b\u7684 posts \u8cc7\u6599\uff0c\u4e26\u628a limit \u8a2d\u7f6e\u70ba 5\uff0c\u9019\u6a23\u6211\u5011\u6bcf\u6b21 fetch \u53ea\u6703\u53d6\u5f97 5 \u7b46 post \u7684\u8cc7\u6599\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='App.js' showLineNumbers {2,20-22}",title:"'App.js'",showLineNumbers:!0,"{2,20-22}":!0},'function App() {\n  const [posts, setPosts] = useState(null);\n\n  useEffect(() => {\n    const getPostData = async () => {\n      const response = await fetch(\n        "https://jsonplaceholder.typicode.com/posts?_limit=5"\n      );\n      const data = await response.json();\n      setPosts(data);\n    };\n\n    getPostData();\n  }, []);\n\n  console.log(posts); // output : (5)\xa0[{\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}]\n\n  return (\n    <div className="App">\n      {posts.map((post) => (\n        <p>{post.title}</p>\n      ))}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u4f46\u4f7f\u7528\u4e0a\u9762\u7684\u5beb\u6cd5\u53ea\u8981\u91cd\u65b0\u6574\u7406\u7db2\u9801\u5f8c\uff0c\u7a0b\u5f0f\u5c31\u6703\u5831\u51fa\u932f\u8aa4\uff0c\u9019\u662f\u56e0\u70ba posts \u9019\u500b state \u5728\u521d\u59cb\u5316\u6642\u70ba null\uff0c\u800c null \u9019\u500b\u578b\u614b\u4e26\u6c92\u6709\u652f\u63f4 map function\uff0c\u6240\u4ee5\u624d\u6703\u51fa\u73fe\u932f\u8aa4\u8a0a\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/CP48IGk.png",alt:"Image"})),(0,a.kt)("p",null,"\u800c\u6211\u5011\u53ef\u4ee5\u5728\u7a0b\u5f0f\u4e2d\u52a0\u4e0a\u5224\u65b7\uff0c\u5224\u65b7 posts \u662f\u5426\u70ba null\uff0c\u5982\u679c\u662f\u7684\u8a71\u5c31\u56de\u50b3 Loading \u6587\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers {18-20}",title:"'App.js'",showLineNumbers:!0,"{18-20}":!0},'function App() {\n  const [posts, setPosts] = useState(null);\n\n  useEffect(() => {\n    const getPostData = async () => {\n      const response = await fetch(\n        "https://jsonplaceholder.typicode.com/posts?_limit=5"\n      );\n      const data = await response.json();\n      setPosts(data);\n    };\n\n    getPostData();\n  }, []);\n\n  console.log(posts);\n\n  if (posts == null) {\n    return <h1>Loading...</h1>;\n  }\n\n  return (\n    <div className="App">\n      {posts.map((post) => (\n        <p>{post.title}</p>\n      ))}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZWBtwq4.gif",alt:"Image"})),(0,a.kt)("p",null,"\u6216\u662f\u76f4\u63a5\u5728 posts \u5f8c\u9762\u52a0\u4e0a\u53ef\u9078\u93c8\uff0c\u9019\u6a23\u5c31\u4e0d\u7528\u64b0\u5beb\u591a\u9918\u7684\u5224\u65b7\u7a0b\u5f0f\u78bc\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.js' showLineNumbers {20-22}",title:"'App.js'",showLineNumbers:!0,"{20-22}":!0},'function App() {\n  const [posts, setPosts] = useState(null);\n\n  useEffect(() => {\n    const getPostData = async () => {\n      const response = await fetch(\n        "https://jsonplaceholder.typicode.com/posts?_limit=5"\n      );\n      const data = await response.json();\n      setPosts(data);\n    };\n\n    getPostData();\n  }, []);\n\n  console.log(posts); // output : (5)\xa0[{\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}]\n\n  return (\n    <div className="App">\n      {posts?.map((post) => (\n        <p>{post.title}</p>\n      ))}\n    </div>\n  );\n}\n')))}u.isMDXComponent=!0}}]);