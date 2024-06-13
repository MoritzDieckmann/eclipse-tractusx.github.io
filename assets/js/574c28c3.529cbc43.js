"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[57071],{99130:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>y,toc:()=>h});var n=t(87462),s=(t(67294),t(3905)),r=t(26389),a=t(94891),o=(t(75190),t(47507)),d=t(24310),c=t(63303),l=(t(75035),t(85162));const p={id:"create-identifier-type",title:"Creates a new identifier type",description:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Creates a new identifier type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metadata Controller"],description:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierType",requestBody:{content:{"application/json":{schema:{required:["businessPartnerType","details","name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier (unique in combination with businessPartnerType)."},businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},name:{type:"string",description:"The name of the identifier type."},details:{type:"array",description:"Validity details.",items:{required:["mandatory"],type:"object",properties:{country:{type:"string",description:"2-digit country code for which this identifier is valid; null for universal identifiers.",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},mandatory:{type:"boolean",description:"True if identifier is mandatory in this country."}},description:"Information for which countries an identifier type is valid and mandatory."}}},description:"An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, VAT number, Global Location Number (GLN), etc. The identifier type is valid for a business partner type."}}},required:!0},responses:{200:{description:"New identifier type successfully created",content:{"application/json":{schema:{required:["businessPartnerType","details","name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier (unique in combination with businessPartnerType)."},businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},name:{type:"string",description:"The name of the identifier type."},details:{type:"array",description:"Validity details.",items:{required:["mandatory"],type:"object",properties:{country:{type:"string",description:"2-digit country code for which this identifier is valid; null for universal identifiers.",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},mandatory:{type:"boolean",description:"True if identifier is mandatory in this country."}},description:"Information for which countries an identifier type is valid and mandatory."}}},description:"An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, VAT number, Global Location Number (GLN), etc. The identifier type is valid for a business partner type."}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier type with specified technical key already exists"}},method:"post",path:"/v6/identifier-types",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",businessPartnerType:"LEGAL_ENTITY",name:"string",details:[{country:"UNDEFINED",mandatory:!0}]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.0.0"},postman:{name:"Creates a new identifier type",description:{content:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["v6","identifier-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",id:"version-24.05/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",title:"Creates a new identifier type",description:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"create-identifier-type",title:"Creates a new identifier type",description:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Creates a new identifier type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metadata Controller"],description:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierType",requestBody:{content:{"application/json":{schema:{required:["businessPartnerType","details","name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier (unique in combination with businessPartnerType)."},businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},name:{type:"string",description:"The name of the identifier type."},details:{type:"array",description:"Validity details.",items:{required:["mandatory"],type:"object",properties:{country:{type:"string",description:"2-digit country code for which this identifier is valid; null for universal identifiers.",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},mandatory:{type:"boolean",description:"True if identifier is mandatory in this country."}},description:"Information for which countries an identifier type is valid and mandatory."}}},description:"An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, VAT number, Global Location Number (GLN), etc. The identifier type is valid for a business partner type."}}},required:!0},responses:{200:{description:"New identifier type successfully created",content:{"application/json":{schema:{required:["businessPartnerType","details","name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier (unique in combination with businessPartnerType)."},businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},name:{type:"string",description:"The name of the identifier type."},details:{type:"array",description:"Validity details.",items:{required:["mandatory"],type:"object",properties:{country:{type:"string",description:"2-digit country code for which this identifier is valid; null for universal identifiers.",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},mandatory:{type:"boolean",description:"True if identifier is mandatory in this country."}},description:"Information for which countries an identifier type is valid and mandatory."}}},description:"An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, VAT number, Global Location Number (GLN), etc. The identifier type is valid for a business partner type."}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier type with specified technical key already exists"}},method:"post",path:"/v6/identifier-types",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",businessPartnerType:"LEGAL_ENTITY",name:"string",details:[{country:"UNDEFINED",mandatory:!0}]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.0.0"},postman:{name:"Creates a new identifier type",description:{content:"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["v6","identifier-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Returns all identifier types filtered by business partner type and country.",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-identifier-types"},next:{title:"Get all field quality rules filtered by country (specified by its ISO 3166-1 alpha-2 country code)",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-field-quality-rules"}},m={},h=[{value:"Creates a new identifier type",id:"creates-a-new-identifier-type",level:2}],T={toc:h};function f(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},T,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"creates-a-new-identifier-type"},"Creates a new identifier type"),(0,s.kt)("p",null,"Create a new identifier type (including validity details) which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique for the businessPartnerType as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems."),(0,s.kt)(a.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!0,deprecated:void 0,schemaDescription:"The technical identifier (unique in combination with businessPartnerType).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"businessPartnerType",required:!0,deprecated:void 0,schemaDescription:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,deprecated:void 0,schemaDescription:"The name of the identifier type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Validity details.")),(0,s.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:"2-digit country code for which this identifier is valid; null for universal identifiers.",schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"mandatory",required:!0,deprecated:void 0,schemaDescription:"True if identifier is mandatory in this country.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"New identifier type successfully created")),(0,s.kt)("div",null,(0,s.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:"The technical identifier (unique in combination with businessPartnerType).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"businessPartnerType",required:!1,deprecated:void 0,schemaDescription:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"The name of the identifier type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Validity details.")),(0,s.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:"2-digit country code for which this identifier is valid; null for universal identifiers.",schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"mandatory",required:!1,deprecated:void 0,schemaDescription:"True if identifier is mandatory in this country.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "technicalKey": "string",\n  "businessPartnerType": "LEGAL_ENTITY",\n  "name": "string",\n  "details": [\n    {\n      "country": "UNDEFINED",\n      "mandatory": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed request parameters")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Identifier type with specified technical key already exists")),(0,s.kt)("div",null)))))}f.isMDXComponent=!0}}]);