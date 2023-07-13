"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[62635],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48265:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="MIW Client Credential Module",o={unversionedId:"kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README",id:"kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README",title:"MIW Client Credential Module",description:"This module contains an implementation of the SsiCredentialClient interface for SSI.",source:"@site/docs-kits/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client",slug:"/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"SSI Core Identity Service Module",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/"},next:{title:"Release",permalink:"/docs-kits/next/kits/tractusx-edc/docs/development/Release"}},s={},c=[{value:"Configuration",id:"configuration",level:2}],u={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"miw-client-credential-module"},"MIW Client Credential Module"),(0,a.kt)("p",null,"This module contains an implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SsiCredentialClient")," interface for SSI.\nIt basically narrows down to two operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"obtaining a token for protocol communication"),(0,a.kt)("li",{parentName:"ul"},"validating the token")),(0,a.kt)("p",null,"For validating the token accordingly to the first milestone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/tree/main/docs/architecture/cx-3-2"},"here"),", the implemetation\njust call the MIW for checking that the token and the VP claim inside are correct. Then extract the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," claims into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClaimToken")," for further checks."),(0,a.kt)("p",null,"For obtaining a ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," token also it reaches the MIW, that will create a token with the ",(0,a.kt)("inlineCode",{parentName:"p"},"VP")," claim inside."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.url"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"MIW URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.authority.id"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"BPN number of the authority")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.authority.issuer"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the issuer (DID)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.token.url"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Token URL (Keycloak)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.client.id"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Client id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.client.secret.alias"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Vault alias for the client secret")))),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"tx.ssi.miw.authority.issuer")," is composed with ",(0,a.kt)("inlineCode",{parentName:"p"},"did:web:<tx.ssi.miw.url>:<tx.ssi.miw.authority.id>")))}d.isMDXComponent=!0}}]);