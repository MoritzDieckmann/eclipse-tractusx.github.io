"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[87501],{33967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var s=a(87462),r=(a(67294),a(3905)),i=a(26389),n=a(94891),o=a(75190),p=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const c={id:"get-output-changelog",title:"Returns changelog entries for changes to the business partner output stage",description:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",sidebar_label:"Returns changelog entries for changes to the business partner output stage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],description:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",operationId:"getOutputChangelog",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{timestampAfter:{type:"string",description:"Only changelog entries created after this time. Ignored if empty.",format:"date-time",example:"2023-03-20T10:23:28.194Z"},externalIds:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of external IDs. Ignored if empty.",items:{type:"string"}},businessPartnerTypes:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of business partner types. Ignored if empty.",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]}}}}}},required:!0},responses:{200:{description:"The changelog entries for the specified parameters",content:{"application/json":{schema:{required:["content","contentSize","errors","invalidEntries","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["changelogType","externalId","timestamp"],type:"object",properties:{externalId:{type:"string",description:"The external identifier of the business partner for which the changelog entry was created."},businessPartnerType:{type:"string",description:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]},timestamp:{type:"string",description:"The date and time when the changelog entry was created.",format:"date-time"},changelogType:{type:"string",description:"One of the actions for which the changelog entry was created: create, update.",enum:["CREATE","UPDATE"]}},description:"An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included."}},invalidEntries:{type:"integer",description:"Number of entries in the page that have been omitted due to being invalid (error)",format:"int32"},errors:{type:"array",description:"Infos about the entries with errors",items:{title:"ErrorInfo",required:["errorCode","message"],type:"object",properties:{errorCode:{type:"string",description:"Error code identifying the error",enum:["ExternalIdNotFound"]},message:{type:"string",description:"Error message that explains the error"},entityKey:{type:"string",description:"Key (externalId) of the entity that failed"}},description:"Holds information about failures"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"}},method:"post",path:"/api/catena/output/changelog/search",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{timestampAfter:"2023-03-20T10:23:28.194Z",externalIds:["string"],businessPartnerTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns changelog entries for changes to the business partner output stage",description:{content:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",type:"text/plain"},url:{path:["api","catena","output","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog",id:"version-24.03/kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog",title:"Returns changelog entries for changes to the business partner output stage",description:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog",permalink:"/docs-kits/24.03/kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-output-changelog",title:"Returns changelog entries for changes to the business partner output stage",description:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",sidebar_label:"Returns changelog entries for changes to the business partner output stage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],description:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",operationId:"getOutputChangelog",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{timestampAfter:{type:"string",description:"Only changelog entries created after this time. Ignored if empty.",format:"date-time",example:"2023-03-20T10:23:28.194Z"},externalIds:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of external IDs. Ignored if empty.",items:{type:"string"}},businessPartnerTypes:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of business partner types. Ignored if empty.",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]}}}}}},required:!0},responses:{200:{description:"The changelog entries for the specified parameters",content:{"application/json":{schema:{required:["content","contentSize","errors","invalidEntries","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["changelogType","externalId","timestamp"],type:"object",properties:{externalId:{type:"string",description:"The external identifier of the business partner for which the changelog entry was created."},businessPartnerType:{type:"string",description:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]},timestamp:{type:"string",description:"The date and time when the changelog entry was created.",format:"date-time"},changelogType:{type:"string",description:"One of the actions for which the changelog entry was created: create, update.",enum:["CREATE","UPDATE"]}},description:"An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included."}},invalidEntries:{type:"integer",description:"Number of entries in the page that have been omitted due to being invalid (error)",format:"int32"},errors:{type:"array",description:"Infos about the entries with errors",items:{title:"ErrorInfo",required:["errorCode","message"],type:"object",properties:{errorCode:{type:"string",description:"Error code identifying the error",enum:["ExternalIdNotFound"]},message:{type:"string",description:"Error message that explains the error"},entityKey:{type:"string",description:"Key (externalId) of the entity that failed"}},description:"Holds information about failures"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"}},method:"post",path:"/api/catena/output/changelog/search",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{timestampAfter:"2023-03-20T10:23:28.194Z",externalIds:["string"],businessPartnerTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns changelog entries for changes to the business partner output stage",description:{content:"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type.",type:"text/plain"},url:{path:["api","catena","output","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"changelog-controller",permalink:"/docs-kits/24.03/category/kits/Business Partner Kit/Software Development View/Gate Api/changelog-controller"},next:{title:"Returns changelog entries for changes to the business partner input stage",permalink:"/docs-kits/24.03/kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog"}},h={},y=[{value:"Returns changelog entries for changes to the business partner output stage",id:"returns-changelog-entries-for-changes-to-the-business-partner-output-stage",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"returns-changelog-entries-for-changes-to-the-business-partner-output-stage"},"Returns changelog entries for changes to the business partner output stage"),(0,r.kt)("p",null,"Returns changelog entries as of a specified timestamp from the output stage, optionally filtered by timestamp, an array of external IDs and a business partner type."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"timestampAfter",required:!1,deprecated:void 0,schemaDescription:"Only changelog entries created after this time. Ignored if empty.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"externalIds",required:!1,deprecated:void 0,schemaDescription:"Only for business partners with the given array of external IDs. Ignored if empty.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"businessPartnerTypes",required:!1,deprecated:void 0,schemaDescription:"Only for business partners with the given array of business partner types. Ignored if empty.",schemaName:"string[]",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`, `GENERIC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The changelog entries for the specified parameters")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"content"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Collection of results in the page")),(0,r.kt)(l.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:"The external identifier of the business partner for which the changelog entry was created.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"businessPartnerType",required:!1,deprecated:void 0,schemaDescription:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`, `GENERIC`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:"The date and time when the changelog entry was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"changelogType",required:!1,deprecated:void 0,schemaDescription:"One of the actions for which the changelog entry was created: create, update.",schemaName:"string",qualifierMessage:"**Possible values:** [`CREATE`, `UPDATE`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!1,name:"invalidEntries",required:!1,deprecated:void 0,schemaDescription:"Number of entries in the page that have been omitted due to being invalid (error)",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Infos about the entries with errors")),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,deprecated:void 0,schemaDescription:"Error code identifying the error",schemaName:"string",qualifierMessage:"**Possible values:** [`ExternalIdNotFound`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:"Error message that explains the error",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"entityKey",required:!1,deprecated:void 0,schemaDescription:"Key (externalId) of the entity that failed",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "externalId": "string",\n      "businessPartnerType": "LEGAL_ENTITY",\n      "timestamp": "2024-02-22",\n      "changelogType": "CREATE"\n    }\n  ],\n  "invalidEntries": 0,\n  "errors": [\n    {\n      "errorCode": "ExternalIdNotFound",\n      "message": "string",\n      "entityKey": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"On malformed pagination request")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);