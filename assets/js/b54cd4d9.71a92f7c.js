"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[99034],{65299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>n,metadata:()=>u,toc:()=>f});var o=a(87462),r=(a(67294),a(3905)),i=a(26389),d=a(94891),s=(a(75190),a(47507)),l=a(24310),c=a(63303),p=(a(75035),a(85162));const n={id:"request-catalog",title:"requestCatalog",description:"requestCatalog",sidebar_label:"requestCatalog",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Catalog"],operationId:"requestCatalog",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/CatalogRequest"},protocol:{type:"string",example:null},querySpec:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"CatalogRequest",providerUrl:"http://provider-address",protocol:"dataspace-protocol-http",querySpec:{offset:0,limit:50,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}}},responses:{default:{description:"Gets contract offers (=catalog) of a single connector",content:{"application/json":{schema:{type:"object",description:"DCAT catalog",example:{"@id":"7df65569-8c59-4013-b1c0-fa14f6641bf2","@type":"dcat:Catalog","dcat:dataset":{"@id":"bcca61be-e82e-4da6-bfec-9716a56cef35","@type":"dcat:Dataset","odrl:hasPolicy":{"@id":"OGU0ZTMzMGMtODQ2ZS00ZWMxLThmOGQtNWQxNWM0NmI2NmY4:YmNjYTYxYmUtZTgyZS00ZGE2LWJmZWMtOTcxNmE1NmNlZjM1:NDY2ZTZhMmEtNjQ1Yy00ZGQ0LWFlZDktMjdjNGJkZTU4MDNj","@type":"odrl:Set","odrl:permission":{"odrl:target":"bcca61be-e82e-4da6-bfec-9716a56cef35","odrl:action":{"odrl:type":"http://www.w3.org/ns/odrl/2/use"},"odrl:constraint":{"odrl:and":[{"odrl:leftOperand":"https://w3id.org/edc/v0.0.1/ns/inForceDate","odrl:operator":{"@id":"odrl:gteq"},"odrl:rightOperand":"2023-07-07T07:19:58.585601395Z"},{"odrl:leftOperand":"https://w3id.org/edc/v0.0.1/ns/inForceDate","odrl:operator":{"@id":"odrl:lteq"},"odrl:rightOperand":"2023-07-12T07:19:58.585601395Z"}]}},"odrl:prohibition":[],"odrl:obligation":[],"odrl:target":"bcca61be-e82e-4da6-bfec-9716a56cef35"},"dcat:distribution":[{"@type":"dcat:Distribution","dct:format":{"@id":"HttpData"},"dcat:accessService":"5e839777-d93e-4785-8972-1005f51cf367"}],"edc:description":"description","edc:id":"bcca61be-e82e-4da6-bfec-9716a56cef35"},"dcat:service":{"@id":"5e839777-d93e-4785-8972-1005f51cf367","@type":"dcat:DataService","dct:terms":"connector","dct:endpointUrl":"http://localhost:16806/protocol"},"edc:participantId":"urn:connector:provider","@context":{dct:"https://purl.org/dc/terms/",edc:"https://w3id.org/edc/v0.0.1/ns/",dcat:"https://www.w3.org/ns/dcat/",odrl:"http://www.w3.org/ns/odrl/2/",dspace:"https://w3id.org/dspace/v0.8/"}}}}}}},description:"requestCatalog",method:"post",path:"/v2/catalog/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"CatalogRequest",providerUrl:"http://provider-address",protocol:"dataspace-protocol-http",querySpec:{offset:0,limit:50,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"request Catalog",description:{type:"text/plain"},url:{path:["v2","catalog","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-catalog",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-catalog",title:"requestCatalog",description:"requestCatalog",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-catalog.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-catalog",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-catalog",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"request-catalog",title:"requestCatalog",description:"requestCatalog",sidebar_label:"requestCatalog",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Catalog"],operationId:"requestCatalog",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/CatalogRequest"},protocol:{type:"string",example:null},querySpec:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"CatalogRequest",providerUrl:"http://provider-address",protocol:"dataspace-protocol-http",querySpec:{offset:0,limit:50,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}}},responses:{default:{description:"Gets contract offers (=catalog) of a single connector",content:{"application/json":{schema:{type:"object",description:"DCAT catalog",example:{"@id":"7df65569-8c59-4013-b1c0-fa14f6641bf2","@type":"dcat:Catalog","dcat:dataset":{"@id":"bcca61be-e82e-4da6-bfec-9716a56cef35","@type":"dcat:Dataset","odrl:hasPolicy":{"@id":"OGU0ZTMzMGMtODQ2ZS00ZWMxLThmOGQtNWQxNWM0NmI2NmY4:YmNjYTYxYmUtZTgyZS00ZGE2LWJmZWMtOTcxNmE1NmNlZjM1:NDY2ZTZhMmEtNjQ1Yy00ZGQ0LWFlZDktMjdjNGJkZTU4MDNj","@type":"odrl:Set","odrl:permission":{"odrl:target":"bcca61be-e82e-4da6-bfec-9716a56cef35","odrl:action":{"odrl:type":"http://www.w3.org/ns/odrl/2/use"},"odrl:constraint":{"odrl:and":[{"odrl:leftOperand":"https://w3id.org/edc/v0.0.1/ns/inForceDate","odrl:operator":{"@id":"odrl:gteq"},"odrl:rightOperand":"2023-07-07T07:19:58.585601395Z"},{"odrl:leftOperand":"https://w3id.org/edc/v0.0.1/ns/inForceDate","odrl:operator":{"@id":"odrl:lteq"},"odrl:rightOperand":"2023-07-12T07:19:58.585601395Z"}]}},"odrl:prohibition":[],"odrl:obligation":[],"odrl:target":"bcca61be-e82e-4da6-bfec-9716a56cef35"},"dcat:distribution":[{"@type":"dcat:Distribution","dct:format":{"@id":"HttpData"},"dcat:accessService":"5e839777-d93e-4785-8972-1005f51cf367"}],"edc:description":"description","edc:id":"bcca61be-e82e-4da6-bfec-9716a56cef35"},"dcat:service":{"@id":"5e839777-d93e-4785-8972-1005f51cf367","@type":"dcat:DataService","dct:terms":"connector","dct:endpointUrl":"http://localhost:16806/protocol"},"edc:participantId":"urn:connector:provider","@context":{dct:"https://purl.org/dc/terms/",edc:"https://w3id.org/edc/v0.0.1/ns/",dcat:"https://www.w3.org/ns/dcat/",odrl:"http://www.w3.org/ns/odrl/2/",dspace:"https://w3id.org/dspace/v0.8/"}}}}}}},description:"requestCatalog",method:"post",path:"/v2/catalog/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"CatalogRequest",providerUrl:"http://provider-address",protocol:"dataspace-protocol-http",querySpec:{offset:0,limit:50,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"request Catalog",description:{type:"text/plain"},url:{path:["v2","catalog","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"requestAssets",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets"},next:{title:"resolve",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/resolve"}},g={},f=[{value:"requestCatalog",id:"requestcatalog",level:2}],v={toc:f};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requestcatalog"},"requestCatalog"),(0,r.kt)("p",null,"requestCatalog"),(0,r.kt)(d.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"protocol",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"querySpec"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"filterExpression"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sortField",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Gets contract offers (=catalog) of a single connector")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"DCAT catalog"))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "@id": "7df65569-8c59-4013-b1c0-fa14f6641bf2",\n  "@type": "dcat:Catalog",\n  "dcat:dataset": {\n    "@id": "bcca61be-e82e-4da6-bfec-9716a56cef35",\n    "@type": "dcat:Dataset",\n    "odrl:hasPolicy": {\n      "@id": "OGU0ZTMzMGMtODQ2ZS00ZWMxLThmOGQtNWQxNWM0NmI2NmY4:YmNjYTYxYmUtZTgyZS00ZGE2LWJmZWMtOTcxNmE1NmNlZjM1:NDY2ZTZhMmEtNjQ1Yy00ZGQ0LWFlZDktMjdjNGJkZTU4MDNj",\n      "@type": "odrl:Set",\n      "odrl:permission": {\n        "odrl:target": "bcca61be-e82e-4da6-bfec-9716a56cef35",\n        "odrl:action": {\n          "odrl:type": "http://www.w3.org/ns/odrl/2/use"\n        },\n        "odrl:constraint": {\n          "odrl:and": [\n            {\n              "odrl:leftOperand": "https://w3id.org/edc/v0.0.1/ns/inForceDate",\n              "odrl:operator": {\n                "@id": "odrl:gteq"\n              },\n              "odrl:rightOperand": "2023-07-07T07:19:58.585601395Z"\n            },\n            {\n              "odrl:leftOperand": "https://w3id.org/edc/v0.0.1/ns/inForceDate",\n              "odrl:operator": {\n                "@id": "odrl:lteq"\n              },\n              "odrl:rightOperand": "2023-07-12T07:19:58.585601395Z"\n            }\n          ]\n        }\n      },\n      "odrl:prohibition": [],\n      "odrl:obligation": [],\n      "odrl:target": "bcca61be-e82e-4da6-bfec-9716a56cef35"\n    },\n    "dcat:distribution": [\n      {\n        "@type": "dcat:Distribution",\n        "dct:format": {\n          "@id": "HttpData"\n        },\n        "dcat:accessService": "5e839777-d93e-4785-8972-1005f51cf367"\n      }\n    ],\n    "edc:description": "description",\n    "edc:id": "bcca61be-e82e-4da6-bfec-9716a56cef35"\n  },\n  "dcat:service": {\n    "@id": "5e839777-d93e-4785-8972-1005f51cf367",\n    "@type": "dcat:DataService",\n    "dct:terms": "connector",\n    "dct:endpointUrl": "http://localhost:16806/protocol"\n  },\n  "edc:participantId": "urn:connector:provider",\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);