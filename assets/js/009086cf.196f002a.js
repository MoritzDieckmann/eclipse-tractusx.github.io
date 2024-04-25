"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[95300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const o={},a="Provision: additional headers",s={unversionedId:"kits/tractusx-edc/edc-extensions/provision-additional-headers/README",id:"version-23.12/kits/tractusx-edc/edc-extensions/provision-additional-headers/README",title:"Provision: additional headers",description:"The goal of this extension is to provide additional headers to the request to the backend service done by the provider",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/edc-extensions/provision-additional-headers/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/provision-additional-headers",slug:"/kits/tractusx-edc/edc-extensions/provision-additional-headers/",permalink:"/docs-kits/23.12/kits/tractusx-edc/edc-extensions/provision-additional-headers/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Postgresql SQL Migration Extension",permalink:"/docs-kits/23.12/kits/tractusx-edc/edc-extensions/postgresql-migration/"},next:{title:"JsonWebSignature2020",permalink:"/docs-kits/23.12/kits/tractusx-edc/edc-extensions/ssi/jws2020-crypto-suite/"}},c={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"provision-additional-headers"},"Provision: additional headers"),(0,i.kt)("p",null,"The goal of this extension is to provide additional headers to the request to the backend service done by the provider\nin order to retrieve the data that will be given to the consumer."),(0,i.kt)("p",null,"This gives for example the provider backend service the possibility to audit the data requests."),(0,i.kt)("p",null,"The following headers are added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDataAddress"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Edc-Contract-Agreement-Id"),": the id of the contract agreement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Edc-Bpn"),": the BPN of the consumer")))}p.isMDXComponent=!0}}]);