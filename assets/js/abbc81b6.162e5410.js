"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[34343],{72386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),p=a(94891),n=a(75190),d=a(47507),r=a(24310),o=a(63303),m=(a(75035),a(85162));const c={id:"get-asset-1",title:"getAsset_1",description:"Gets an asset with the given ID",sidebar_label:"getAsset_1",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Gets an asset with the given ID",operationId:"getAsset_1",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Asset"},createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"definition-id","edc:properties":{"edc:key":"value"},"edc:privateProperties":{"edc:privateKey":"privateValue"},"edc:dataAddress":{"edc:type":"HttpData"},"edc:createdAt":1688465655}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"get",path:"/v3/assets/{id}",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"get Asset 1",description:{content:"Gets an asset with the given ID",type:"text/plain"},url:{path:["v3","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-1",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-1",title:"getAsset_1",description:"Gets an asset with the given ID",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-1.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-1",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-1",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"get-asset-1",title:"getAsset_1",description:"Gets an asset with the given ID",sidebar_label:"getAsset_1",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Gets an asset with the given ID",operationId:"getAsset_1",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Asset"},createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"definition-id","edc:properties":{"edc:key":"value"},"edc:privateProperties":{"edc:privateKey":"privateValue"},"edc:dataAddress":{"edc:type":"HttpData"},"edc:createdAt":1688465655}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"get",path:"/v3/assets/{id}",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"get Asset 1",description:{content:"Gets an asset with the given ID",type:"text/plain"},url:{path:["v3","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAll",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-all"},next:{title:"getAssetDataAddress",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-asset-data-address"}},v={},h=[{value:"getAsset_1",id:"getasset_1",level:2}],x={toc:h};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getasset_1"},"getAsset_1"),(0,i.kt)("p",null,"Gets an asset with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The asset")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"privateProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "definition-id",\n  "edc:properties": {\n    "edc:key": "value"\n  },\n  "edc:privateProperties": {\n    "edc:privateKey": "privateValue"\n  },\n  "edc:dataAddress": {\n    "edc:type": "HttpData"\n  },\n  "edc:createdAt": 1688465655\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed, e.g. id was null")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An asset with the given ID does not exist")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);