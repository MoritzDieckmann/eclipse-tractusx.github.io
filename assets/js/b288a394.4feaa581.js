"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7637],{71134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var i=a(87462),n=(a(67294),a(3905)),o=a(26389),s=a(94891),r=a(75190),p=a(47507),d=a(24310),l=a(63303),m=(a(75035),a(85162));const c={id:"get-negotiation",title:"getNegotiation",description:"Gets an contract negotiation with the given ID",sidebar_label:"getNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Gets an contract negotiation with the given ID",operationId:"getNegotiation",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"The contract negotiation",content:{"application/json":{schema:{type:"object",properties:{contractAgreementId:{type:"string"},counterPartyAddress:{type:"string"},createdAt:{type:"integer",format:"int64"},errorDetail:{type:"string"},id:{type:"string"},protocol:{type:"string"},state:{type:"string"},type:{type:"string",enum:["CONSUMER","PROVIDER"]},updatedAt:{type:"integer",format:"int64"}}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"An contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"get",path:"/contractnegotiations/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Negotiation",description:{content:"Gets an contract negotiation with the given ID",type:"text/plain"},url:{path:["contractnegotiations",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},g=void 0,u={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation",title:"getNegotiation",description:"Gets an contract negotiation with the given ID",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-negotiation",title:"getNegotiation",description:"Gets an contract negotiation with the given ID",sidebar_label:"getNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Gets an contract negotiation with the given ID",operationId:"getNegotiation",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"The contract negotiation",content:{"application/json":{schema:{type:"object",properties:{contractAgreementId:{type:"string"},counterPartyAddress:{type:"string"},createdAt:{type:"integer",format:"int64"},errorDetail:{type:"string"},id:{type:"string"},protocol:{type:"string"},state:{type:"string"},type:{type:"string",enum:["CONSUMER","PROVIDER"]},updatedAt:{type:"integer",format:"int64"}}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"An contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"get",path:"/contractnegotiations/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Negotiation",description:{content:"Gets an contract negotiation with the given ID",type:"text/plain"},url:{path:["contractnegotiations",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getNegotiationState",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiation-state"},next:{title:"getNegotiations",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-negotiations"}},y={},v=[{value:"getNegotiation",id:"getnegotiation",level:2}],h={toc:v};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getnegotiation"},"getNegotiation"),(0,n.kt)("p",null,"Gets an contract negotiation with the given ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The contract negotiation")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"contractAgreementId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"counterPartyAddress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"errorDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"protocol",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CONSUMER`, `PROVIDER`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "contractAgreementId": "string",\n  "counterPartyAddress": "string",\n  "createdAt": 0,\n  "errorDetail": "string",\n  "id": "string",\n  "protocol": "string",\n  "state": "string",\n  "type": "CONSUMER",\n  "updatedAt": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed, e.g. id was null")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An contract negotiation with the given ID does not exist")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);