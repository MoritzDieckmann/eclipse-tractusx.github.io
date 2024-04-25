"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Restricting users from accessing an asset",sidebar_position:4},r=void 0,s={unversionedId:"tutorials/e2e/boost/restrictData",id:"tutorials/e2e/boost/restrictData",title:"Restricting users from accessing an asset",description:"Create an asset",source:"@site/docs/tutorials/e2e/boost/restrictData.md",sourceDirName:"tutorials/e2e/boost",slug:"/tutorials/e2e/boost/restrictData",permalink:"/docs/tutorials/e2e/boost/restrictData",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/boost/restrictData.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Restricting users from accessing an asset",sidebar_position:4},sidebar:"tutorials",previous:{title:"Consume data",permalink:"/docs/tutorials/e2e/boost/consumeData"},next:{title:"Changelog",permalink:"/docs/tutorials/e2e/CHANGELOG"}},c={},l=[{value:"Create an asset",id:"create-an-asset",level:2},{value:"Create a permissive access policy",id:"create-a-permissive-access-policy",level:2},{value:"Create a permissive contract policy",id:"create-a-permissive-contract-policy",level:2},{value:"Create a contract definition",id:"create-a-contract-definition",level:2},{value:"Request catalog",id:"request-catalog",level:2},{value:"Notice",id:"notice",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-an-asset"},"Create an asset"),(0,o.kt)("p",null,"Bob will once again be the data provider. But this time Bob does not want Alice to see the asset.\nThe first step for Bob will again be to create an asset."),(0,o.kt)("p",null,"Action (Bob): Create an asset using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/assets\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "asset": {\n        "@type": "Asset",\n        "@id": "4", \n        "properties": {\n            "description": "Product EDC Demo Asset 4"\n        }\n    },\n    "dataAddress": {\n        "@type": "DataAddress",\n        "type": "HttpData",\n        "baseUrl": "https://jsonplaceholder.typicode.com/todos/4"\n    }\n}\'\n')),(0,o.kt)("h2",{id:"create-a-permissive-access-policy"},"Create a permissive access policy"),(0,o.kt)("p",null,"Now that the asset has been created, Bob creates an access policy that defines who can see and therefore access the asset in his catalog. To specify this access, Bob uses the Business Partner Number (BPN). The BPN is a unique identifier for participants of a data space. Bob knows that his exchange partner for this asset has the BPN (BPNL000000000003). Therefore, he can define his access policy as follows:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The MXD contains only two members (Alice & Bob). Therefore, it will not be possible to consume an asset with the policy defined here, because the participant with the BPN BPNL000000000003 does not exist in this data space. This is an example to demonstrate the restriction of an asset with a policy.")),(0,o.kt)("p",null,"Action (Bob): Create the access policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "41",\n  "policy": {\n    "@type": "Policy",\n    "odrl:permission": [\n      {\n        "odrl:action": "USE",\n        "odrl:constraint": {\n          "@type": "LogicalConstraint",\n          "odrl:or": [\n            {\n              "@type": "Constraint",\n              "odrl:leftOperand": "BusinessPartnerNumber",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "BPNL000000000003"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\' \n')),(0,o.kt)("p",null,"Bob defined a policy which restricts access to connector(s) with the BusinessPartnerNumber BPNL000000000003. As Alice does not own this BPN, she should not be able to access the asset."),(0,o.kt)("h2",{id:"create-a-permissive-contract-policy"},"Create a permissive contract policy"),(0,o.kt)("p",null,"Since an access policy has already been created, a contract policy must be created and linked in the contract definition."),(0,o.kt)("p",null,"Action (Bob): Create the contract policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "42",\n  "policy": {\n    "@type": "Policy",\n    "odrl:permission": [\n      {\n        "odrl:action": "USE",\n        "odrl:constraint": {\n          "@type": "LogicalConstraint",\n          "odrl:or": [\n            {\n              "@type": "Constraint",\n              "odrl:leftOperand": "BpnCredential",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "active"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\'\n')),(0,o.kt)("h2",{id:"create-a-contract-definition"},"Create a contract definition"),(0,o.kt)("p",null,"Lastly, the asset and the access policy must be linked in a contract definition.\nAction (Bob): Create a contract definition including the asset and the policies you have created. For this, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/contractdefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "@id": "4",\n    "@type": "ContractDefinition",\n    "accessPolicyId": "41",\n    "contractPolicyId": "42",\n    "assetsSelector" : {\n        "@type" : "CriterionDto",\n        "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",\n        "operator": "=",\n        "operandRight": "4"\n    }\n}\'\n')),(0,o.kt)("h2",{id:"request-catalog"},"Request catalog"),(0,o.kt)("p",null,"Let\xb4s see if Alice can see the Asset."),(0,o.kt)("p",null,"Action (Alice): Execute a request using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/alice/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://bob-controlplane:8084/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\'\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Bob\u2019s asset (ID: 4) should not be displayed. The access policy successfully restricts Alice from seeing and therefore obtaining Bob\u2019s asset. Now Bob is able to manage who sees which of his sensitive data assets. If Bob decides to enable Alice to see his asset, he can simply adjust the access policy definition and add Alice BPN (BPNL000000000001) to the list of BPNs.")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,o.kt)("li",{parentName:"ul"},"Source URL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}d.isMDXComponent=!0}}]);