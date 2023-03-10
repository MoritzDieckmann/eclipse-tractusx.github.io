"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6607],{39302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),o=a(94891),n=(a(75190),a(47507)),p=a(24310),l=a(63303),d=(a(75035),a(85162));const m={id:"create-asset",title:"createAsset",description:"Creates a new asset together with a data address",sidebar_label:"createAsset",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Creates a new asset together with a data address",operationId:"createAsset",requestBody:{content:{"application/json":{schema:{required:["asset","dataAddress"],type:"object",properties:{asset:{required:["properties"],type:"object",properties:{id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}}}},dataAddress:{required:["properties"],type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string"}}}}}}}}},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64"},id:{type:"string"}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},409:{description:"Could not create asset, because an asset with that ID already exists",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"post",path:"/assets",servers:[{url:"/"}],jsonRequestBodyExample:{asset:{id:"string",properties:{}},dataAddress:{properties:{}}},info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"create Asset",description:{content:"Creates a new asset together with a data address",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},c=void 0,u={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/create-asset",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/create-asset",title:"createAsset",description:"Creates a new asset together with a data address",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/create-asset.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/create-asset",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/create-asset",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-asset",title:"createAsset",description:"Creates a new asset together with a data address",sidebar_label:"createAsset",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Creates a new asset together with a data address",operationId:"createAsset",requestBody:{content:{"application/json":{schema:{required:["asset","dataAddress"],type:"object",properties:{asset:{required:["properties"],type:"object",properties:{id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}}}},dataAddress:{required:["properties"],type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string"}}}}}}}}},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64"},id:{type:"string"}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},409:{description:"Could not create asset, because an asset with that ID already exists",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"post",path:"/assets",servers:[{url:"/"}],jsonRequestBodyExample:{asset:{id:"string",properties:{}},dataAddress:{properties:{}}},info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"create Asset",description:{content:"Creates a new asset together with a data address",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"checkHealth",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/check-health"},next:{title:"createContractDefinition",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/create-contract-definition"}},y={},k=[{value:"createAsset",id:"createasset",level:2}],g={toc:k};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"createasset"},"createAsset"),(0,i.kt)("p",null,"Creates a new asset together with a data address"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"asset"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Asset was created successfully. Returns the asset Id and created timestamp")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "createdAt": 0,\n  "id": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Could not create asset, because an asset with that ID already exists")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);