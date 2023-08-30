"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[66868],{50777:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var i=o(87462),a=(o(67294),o(3905)),s=o(26389),l=o(94891),n=o(75190),r=(o(47507),o(24310)),p=(o(63303),o(75035),o(85162));const d={id:"call-provision-webhook",title:"callProvisionWebhook",description:"callProvisionWebhook",sidebar_label:"callProvisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"callProvisionWebhook",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{apiKeyJwt:{type:"string",example:null},assetId:{type:"string",example:null},contentDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},hasToken:{type:"boolean",example:null},resourceDefinitionId:{type:"string",example:null},resourceName:{type:"string",example:null}},required:["apiKeyJwt","assetId","contentDataAddress","resourceDefinitionId","resourceName"]}}}},responses:{default:{description:"default response"}},tags:["HTTP Provisioner Webhook"],description:"callProvisionWebhook",method:"post",path:"/callback/{processId}/provision",jsonRequestBodyExample:null,info:{title:"EDC Provision HTTP",description:null,license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.0.1-SNAPSHOT"},postman:{name:"call Provision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","provision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/edc-provision-http",custom_edit_url:null},c=void 0,m={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook",title:"callProvisionWebhook",description:"callProvisionWebhook",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"call-provision-webhook",title:"callProvisionWebhook",description:"callProvisionWebhook",sidebar_label:"callProvisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"callProvisionWebhook",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{apiKeyJwt:{type:"string",example:null},assetId:{type:"string",example:null},contentDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},hasToken:{type:"boolean",example:null},resourceDefinitionId:{type:"string",example:null},resourceName:{type:"string",example:null}},required:["apiKeyJwt","assetId","contentDataAddress","resourceDefinitionId","resourceName"]}}}},responses:{default:{description:"default response"}},tags:["HTTP Provisioner Webhook"],description:"callProvisionWebhook",method:"post",path:"/callback/{processId}/provision",jsonRequestBodyExample:null,info:{title:"EDC Provision HTTP",description:null,license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.0.1-SNAPSHOT"},postman:{name:"call Provision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","provision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/edc-provision-http",custom_edit_url:null},sidebar:"kits",previous:{title:"callDeprovisionWebhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook"},next:{title:"cancelTransferProcess",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/cancel-transfer-process"}},u={},v=[{value:"callProvisionWebhook",id:"callprovisionwebhook",level:2}],k={toc:v};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"callprovisionwebhook"},"callProvisionWebhook"),(0,a.kt)("p",null,"callProvisionWebhook"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,a.kt)(l.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"apiKeyJwt",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"assetId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"contentDataAddress"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("code",null,"property name*"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,a.kt)(r.Z,{collapsible:!1,name:"hasToken",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"resourceDefinitionId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"resourceName",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"default response")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);