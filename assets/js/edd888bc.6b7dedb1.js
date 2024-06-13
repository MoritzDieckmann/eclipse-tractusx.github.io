"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[93405],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81784:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_class_name:"hidden"},o=void 0,s={unversionedId:"kits/Industry Core Kit/part_future-concepts",id:"kits/Industry Core Kit/part_future-concepts",title:"part_future-concepts",description:"\x3c!--",source:"@site/docs-kits/kits/Industry Core Kit/part_future-concepts.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/part_future-concepts",permalink:"/docs-kits/next/kits/Industry Core Kit/part_future-concepts",draft:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_bill-of-materials",permalink:"/docs-kits/next/kits/Industry Core Kit/part_bill-of-materials"},next:{title:"part_notice",permalink:"/docs-kits/next/kits/Industry Core Kit/part_notice"}},l={},u=[{value:"Future Concepts",id:"future-concepts",level:2},{value:"Reduction of Number of Digital Twins in the DTR",id:"reduction-of-number-of-digital-twins-in-the-dtr",level:3}],c={toc:u};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"future-concepts"},"Future Concepts"),(0,a.kt)("h3",{id:"reduction-of-number-of-digital-twins-in-the-dtr"},"Reduction of Number of Digital Twins in the DTR"),(0,a.kt)("p",null,"With the current Industry Core concept, a digital twin must be created for every instantiated part that can be identified, e.g., with a serial number, no matter how small it is. This might result in a huge number of digital twins created in the DTR (more then several hundred million) as parts are produced on a daily basis."),(0,a.kt)("p",null,"Therefore, we developed a concept to reduce the number of digital twins by building upon the PartType digital twin of such instantiated part. The processing of data is mostly the same as when data is provided conventially, i.e., with a digital twin for every instantiated part."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basic idea is to use a PartType digital twin to access data about instances of a part type. It is not necessary to create digital twins for instances."),(0,a.kt)("li",{parentName:"ul"},"For this PartType:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For every aspect that should be provided for instantiated parts (e.g., SerialPart, SingleLevelBomAsBuilt), a submodelDescriptor for this aspect must be added to the part type digital twin. ",(0,a.kt)("strong",{parentName:"li"}," As there are no aspect models currently that are used for both, part types and part instances, this does not create any ambiguities.")),(0,a.kt)("li",{parentName:"ul"},"To get the actual submodel data for a digital twin, an operation must be provided by the data provider that is called via InvokeOperationSync or InvokeOperationAsync (see the AAS standard for more details). At least the ID of the instantiated part (e.g., partInstanceId or batchId) must be specified as an input argument of this operation. ",(0,a.kt)("strong",{parentName:"li"},"Note that details about the operation including, e..g, input arguments, still need to be standardized to provide a interoperable solution.")),(0,a.kt)("li",{parentName:"ul"},"The backend data service must handle authorization for instantiated parts based on the BPN of data consumer (similar to asset bundling authorization requirements), if necessary."),(0,a.kt)("li",{parentName:"ul"},"The result of this operation must be compliant to the asepct model represented by the submodel descriptor.")))),(0,a.kt)("p",null,"With this approach, subsequent processing of the submodel data can then proceed as if a digital twin for the instantiated part was provided."))}p.isMDXComponent=!0}}]);