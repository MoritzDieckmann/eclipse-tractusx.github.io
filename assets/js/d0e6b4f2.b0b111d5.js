"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[78881],{74101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=(a(94891),a(75190)),p=(a(47507),a(24310),a(63303),a(75035),a(85162));const d={id:"get-pcf",title:"get_pcf",description:"get_pcf",sidebar_label:"get_pcf",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_pcf",parameters:[{name:"Edc-Bpn",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPNL0000005AMPL3",in:"header",required:!0,schema:{type:"string"}},{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"urn:id:8534x67",in:"path",required:!0,schema:{type:"string"}},{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"2daa49aa-ee16-4df3-bca3-69ddead40419",in:"query",required:!0,schema:{type:"string"}},{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}}],responses:{202:{description:"PCF was accepted. PCF will be sent later via to POST endpoint."}},description:"get_pcf",method:"get",path:"/productIds/{productId}",info:{title:"Catena-X-pcf-request-endpoint",version:"1.1.0"},postman:{name:"get pcf",description:{type:"text/plain"},url:{path:["productIds",":productId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ID identifying the call (will be referenced in corresponding PCF response)",type:"text/plain"},key:"requestId",value:""},{disabled:!1,description:{content:"URL encoded, max 250 chars",type:"text/plain"},key:"message",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID of the product/materiual the PCF is requested for",type:"text/plain"},type:"any",value:"",key:"productId"}]},header:[{disabled:!1,description:{content:"(Required) The caller's Catena-X BusinessPartnerNumber",type:"text/plain"},key:"Edc-Bpn",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/PCF-Exchange-Kit/Software-Development-View/pcf-exchange-api//catena-x-pcf-request-endpoint",custom_edit_url:null},c=void 0,o={unversionedId:"kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",id:"version-24.05/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",title:"get_pcf",description:"get_pcf",source:"@site/docs-kits_versioned_docs/version-24.05/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf.api.mdx",sourceDirName:"kits/PCF Exchange Kit/Software Development View/pcf-exchange-api",slug:"/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",permalink:"/docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"get-pcf",title:"get_pcf",description:"get_pcf",sidebar_label:"get_pcf",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_pcf",parameters:[{name:"Edc-Bpn",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPNL0000005AMPL3",in:"header",required:!0,schema:{type:"string"}},{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"urn:id:8534x67",in:"path",required:!0,schema:{type:"string"}},{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"2daa49aa-ee16-4df3-bca3-69ddead40419",in:"query",required:!0,schema:{type:"string"}},{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}}],responses:{202:{description:"PCF was accepted. PCF will be sent later via to POST endpoint."}},description:"get_pcf",method:"get",path:"/productIds/{productId}",info:{title:"Catena-X-pcf-request-endpoint",version:"1.1.0"},postman:{name:"get pcf",description:{type:"text/plain"},url:{path:["productIds",":productId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ID identifying the call (will be referenced in corresponding PCF response)",type:"text/plain"},key:"requestId",value:""},{disabled:!1,description:{content:"URL encoded, max 250 chars",type:"text/plain"},key:"message",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID of the product/materiual the PCF is requested for",type:"text/plain"},type:"any",value:"",key:"productId"}]},header:[{disabled:!1,description:{content:"(Required) The caller's Catena-X BusinessPartnerNumber",type:"text/plain"},key:"Edc-Bpn",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/PCF-Exchange-Kit/Software-Development-View/pcf-exchange-api//catena-x-pcf-request-endpoint",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/catena-x-pcf-request-endpoint"},next:{title:"set_pcf",permalink:"/docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/set-pcf"}},l={},m=[{value:"get_pcf",id:"get_pcf",level:2}],u={toc:m};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get_pcf"},"get_pcf"),(0,n.kt)("p",null,"get_pcf"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"urn:id:8534x67",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"2daa49aa-ee16-4df3-bca3-69ddead40419",in:"query",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"Edc-Bpn",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPNL0000005AMPL3",in:"header",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"PCF was accepted. PCF will be sent later via to POST endpoint.")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);