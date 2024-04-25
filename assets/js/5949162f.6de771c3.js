"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=i.createContext({}),l=function(e){var n=i.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(m.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,f=p["".concat(m,".").concat(u)]||p[u]||d[u]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(87462),a=(t(67294),t(3905));const r={id:"Specification OSim Kit",title:"Specification",description:"OSim Kit"},o=void 0,s={unversionedId:"kits/OSim Kit/Software Development View/Specification OSim Kit",id:"kits/OSim Kit/Software Development View/Specification OSim Kit",title:"Specification",description:"OSim Kit",source:"@site/docs-kits/kits/OSim Kit/Software Development View/02-page_software-development-view.md",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/Specification OSim Kit",permalink:"/docs-kits/next/kits/OSim Kit/Software Development View/Specification OSim Kit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Specification OSim Kit",title:"Specification",description:"OSim Kit"},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/next/kits/OSim Kit/Software Development View/osim-api"},next:{title:"requestLatestSimulationResult",permalink:"/docs-kits/next/kits/OSim Kit/Software Development View/request-latest-simulation-result"}},m={},l=[{value:"OSim Kit",id:"osim-kit",level:3},{value:"Sample Data",id:"sample-data",level:2},{value:"Sample-1",id:"sample-1",level:3},{value:"Sample-2",id:"sample-2",level:3}],c={toc:l};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"osim kit banner",src:t(40775).Z,width:"285",height:"245"})),(0,a.kt)("h3",{id:"osim-kit"},"OSim Kit"),(0,a.kt)("h2",{id:"sample-data"},"Sample Data"),(0,a.kt)("h3",{id:"sample-1"},"Sample-1"),(0,a.kt)("p",null,"The following example shows the payload used for exchange of simulation results between the OSim partners. The format corresponds with AAS format serialized as a JSON string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": { "id": "BPNL00000007OTZ3" },\n  "dataQuality": 1,\n  "description": "Daily standard simulation",\n  "comment": "successful simulation",\n  "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n  "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n  "shipments": [\n    {\n      "handlingUnits": [\n        {\n          "name": "Palette",\n          "volume": 1,\n          "weight": 189,\n          "batches": [\n            {\n              "unitOfMeasurement": "KG",\n              "materialName": "KK1000GR-Geh\xe4use-Rot",\n              "quantity": 50,\n              "materialNumber": "KK1000GR",\n              "batchOrderId": "Order-0001",\n              "batchId": "Batch_1",\n              "hazardousGoods": false,\n              "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n              "batchNumber": "45"\n            }\n          ],\n          "handlingUnitId": "HUT_1",\n          "amount": 1\n        }\n      ],\n      "shipmentId": "DE51515151",\n      "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n      "destination": { "id": "BPNL00000007OTZ3" },\n      "recipient": { "id": "BPNL00000007OTZ4" },\n      "logistics": { "id": "BPNL00000007OS0H" },\n      "preceding": {},\n      "splittingAllowed": true,\n      "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n    }\n  ],\n  "timestamp": "2023-03-09T14:13:42.806Z"\n}\n')),(0,a.kt)("h3",{id:"sample-2"},"Sample-2"),(0,a.kt)("p",null,"The following example shows the payload used for exchange of scenario data between the OSim partners. The format corresponds with AAS format serialized as a JSON string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "materialFlowScenarioRequest": {\n    "scenarioSimResults": {\n      "resultOwnId": "916b5688-8bd8-4d7e-83b9-e0d40939274e",\n      "resultOwnSimRunInitial": {\n        "owner": {},\n        "dataQuality": 0,\n        "description": "Please simulate asap",\n        "comment": "successful simulation",\n        "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n        "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n        "shipments": [\n          {\n            "handlingUnits": [\n              {\n                "name": "Palette",\n                "volume": 1.0,\n                "weight": 189.0,\n                "batches": [\n                  {\n                    "unitOfMeasurement": "KG",\n                    "materialName": "KK1000GR-Geh\xe4use-Rot",\n                    "quantity": 50.0,\n                    "materialNumber": "KK1000GR",\n                    "materialHazardousGoods": false,\n                    "batchOrderId": "Order-0001",\n                    "batchId": "Batch_1",\n                    "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n                    "batchNumber": "45"\n                  }\n                ],\n                "handlingUnitId": "HUT_1",\n                "amount": 1\n              }\n            ],\n            "shipmentId": "DE51515151",\n            "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n            "destination": {},\n            "recipient": {},\n            "logistics": {},\n            "preceding": {},\n            "splittingAllowed": true,\n            "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n          }\n        ],\n        "timestamp": "2023-03-09T14:13:42.806Z"\n      },\n      "resultOwnSimRunUpdated": {\n        "owner": {},\n        "dataQuality": 0,\n        "description": "Please simulate asap",\n        "comment": "successful simulation",\n        "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n        "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n        "shipments": [\n          {\n            "handlingUnits": [\n              {\n                "name": "Palette",\n                "volume": 1.0,\n                "weight": 189.0,\n                "batches": [\n                  {\n                    "unitOfMeasurement": "KG",\n                    "materialName": "KK1000GR-Geh\xe4use-Rot",\n                    "quantity": 50.0,\n                    "materialNumber": "KK1000GR",\n                    "materialHazardousGoods": false,\n                    "batchOrderId": "Order-0001",\n                    "batchId": "Batch_1",\n                    "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n                    "batchNumber": "45"\n                  }\n                ],\n                "handlingUnitId": "HUT_1",\n                "amount": 1\n              }\n            ],\n            "shipmentId": "DE51515151",\n            "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n            "destination": {},\n            "recipient": {},\n            "logistics": {},\n            "preceding": {},\n            "splittingAllowed": true,\n            "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n          }\n        ],\n        "timestamp": "2023-03-09T14:13:42.806Z"\n      }\n    },\n    "scenarioParameter": {\n      "unitOfMeasurement": "KG",\n      "parameterScenario": "8d464b8b-6977-4952-8a22-0489067ca081",\n      "parameterComment": "updated Delivery Date",\n      "materialName": "KK1000GR-Geh\xe4use-Rot",\n      "parameterQuantityUpdated": 1.0,\n      "parameterId": "847c71e5-614a-468b-a3a0-674bf2af3004",\n      "materialNumber": "KK1000GR",\n      "parameterDeliveryDateUpdated": "2023-10-10T09:00:00.000Z",\n      "parameterDeliveryDateInitial": "2023-10-09T10:00:00.000Z",\n      "parameterOrderId": "OID-011123456",\n      "parameterQuantityInitial": 1.0\n    },\n    "scenarioHeader": {\n      "scenarioOwnerRole": "Customer",\n      "scenarioCreationTimestamp": "2023-10-04T09:10:00.000Z",\n      "scenarioExpirationTimestamp": "2023-10-07T09:10:00.000Z",\n      "scenarioOwner": "BPNL0000007OTZ3",\n      "scenarioDescription": "Changes in Delivery Date",\n      "scenarioId": "8d464b8b-6977-4952-8a22-0489067ca081",\n      "scenarioTitle": "Delivery Modification"\n    }\n  }\n}\n')))}p.isMDXComponent=!0},40775:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/OSimKitIcon-5a297c66f720e50339198bbd38a4bc42.svg"}}]);