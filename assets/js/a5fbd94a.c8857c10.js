"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9981],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(o),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return o?n.createElement(h,s(s({ref:t},u),{},{components:o})):n.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},34667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={title:"How to contribute",sidebar_position:20},s=void 0,a={unversionedId:"oss/how-to-contribute",id:"oss/how-to-contribute",title:"How to contribute",description:"Contributing to the Eclipse Tractus-X project means code, documentation, creating and solving issues (bugs), answering questions in public systems e.g. on the dev mailing list to support the community in an open and transparent way. See also the Eclipse Foundation Project Handbook.",source:"@site/docs/oss/how-to-contribute.md",sourceDirName:"oss",slug:"/oss/how-to-contribute",permalink:"/docs/oss/how-to-contribute",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/oss/how-to-contribute.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"How to contribute",sidebar_position:20},sidebar:"developer",previous:{title:"Getting started",permalink:"/docs/oss/getting-started"},next:{title:"Code reviews",permalink:"/docs/oss/code-reviews"}},c={},l=[{value:"Code",id:"code",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Dev Mailinglist",id:"dev-mailinglist",level:2},{value:"Reporting Issues",id:"reporting-issues",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contributing to the Eclipse Tractus-X project means code, documentation, creating and solving issues (bugs), answering questions in public systems e.g. on the dev mailing list to support the community in an open and transparent way. See also the ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#contributing"},"Eclipse Foundation Project Handbook"),"."),(0,r.kt)("p",null,"This page will contain guidelines and good practices on contributions to Eclipse Tractus-X."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do all reviews and PRs in TractusX repositories, if this is done on fork, there is a leak in openess and transpareny"),(0,r.kt)("li",{parentName:"ul"},"Write meaningful and descriptive commit messages, ",(0,r.kt)("a",{parentName:"li",href:"https://cbea.ms/git-commit/"},"look here for example")),(0,r.kt)("li",{parentName:"ul"},"Avoid references to closed systems, as this is not tracable for newcomers")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Same recommondations like for code contributions."),(0,r.kt)("h2",{id:"dev-mailinglist"},"Dev Mailinglist"),(0,r.kt)("p",null,"The dev mailinglist is the official channel for project communication, use it for questions, announcing news or discuss relevant topics."),(0,r.kt)("p",null,"All of the answers don\u2019t need to necessarily come from project committers: empower your community to answer questions. When community members do provide answers that require further clarification (either they are not complete, or are not 100% correct), do so politely.\nThe more welcome you make your community feel, the more likely it is that your project will be successful."),(0,r.kt)("p",null,"Mail adress: ",(0,r.kt)("a",{parentName:"p",href:"mailto:tractusx-dev@eclipse.org"},"tractusx-dev@eclipse.org")),(0,r.kt)("p",null,"Every contributor should be subscribed to the ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.eclipse.org/mailing-list/tractusx-dev"},"Eclipse Tractus-X Developer Mailingliste"),"."),(0,r.kt)("p",null,"For committers (from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#resources-dev-list"},"Handbook"),"):"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Committers are required to monitor the mailing lists associated with the Project. This is a condition of being granted commit rights to the Project. It is mandatory because Committers must participate in votes (which in some cases require a certain minimum number of votes) and must respond to the mailing list in a timely fashion in order to facilitate the smooth operation of the Project. When a Committer is granted commit rights they will be added to the appropriate mailing lists. A Committer must not be unsubscribed from a Developer mailing list unless their associated commit privileges are also revoked.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#resources-dev-list"},"Handbook")),(0,r.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,r.kt)("p",null,"Reporting issues a an important part of doing development in an open and transparent way.\nIt is also used for documentation."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#community-issues"},"Handbook")))}p.isMDXComponent=!0}}]);