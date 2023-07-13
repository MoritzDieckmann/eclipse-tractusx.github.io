"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[68792],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(i),u=a,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return i?n.createElement(f,s(s({ref:t},d),{},{components:i})):n.createElement(f,s({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},22359:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const o={id:"Specification Digital Twin Kit",title:"Specification",description:"Digital Twin Kit",sidebar_position:4},s=void 0,r={unversionedId:"kits/Digital Twin Kit/Software Development View/Specification Digital Twin Kit",id:"kits/Digital Twin Kit/Software Development View/Specification Digital Twin Kit",title:"Specification",description:"Digital Twin Kit",source:"@site/docs-kits/kits/Digital Twin Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Digital Twin Kit/Software Development View",slug:"/kits/Digital Twin Kit/Software Development View/Specification Digital Twin Kit",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/Specification Digital Twin Kit",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Specification Digital Twin Kit",title:"Specification",description:"Digital Twin Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Operation View",permalink:"/docs-kits/next/kits/Digital Twin Kit/Operation View Digital Twin Kit"},next:{title:"Introduction",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API Specs/AAS Discovery/dotaas-part-2-http-rest-discovery-service-specification"}},l={},c=[{value:"Digital Twin Kit",id:"digital-twin-kit",level:3},{value:"API Specifications",id:"api-specifications",level:2},{value:"Asset Administration Shell",id:"asset-administration-shell",level:3},{value:"Submodels",id:"submodels",level:4},{value:"Digital Twin Registry",id:"digital-twin-registry",level:4},{value:"Catena-X specific Services",id:"catena-x-specific-services",level:3},{value:"Sample Data",id:"sample-data",level:2},{value:"Data Offers at EDC",id:"data-offers-at-edc",level:3},{value:"Digital Twin Registry",id:"digital-twin-registry-1",level:4},{value:"Submodel",id:"submodel",level:4},{value:"Catena-X Submodel Descriptors",id:"catena-x-submodel-descriptors",level:3},{value:"Documentation in the Context of Development",id:"documentation-in-the-context-of-development",level:2},{value:"Data Provisioning",id:"data-provisioning",level:3},{value:"Register Digital Twins",id:"register-digital-twins",level:4}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"digital-twin-kit"},"Digital Twin Kit"),(0,a.kt)("h2",{id:"api-specifications"},"API Specifications"),(0,a.kt)("p",null,"All openAPI-specifications for the Digital Twin Kit services are rendered in the section ",(0,a.kt)("a",{parentName:"p",href:"API%20Specs"},"of these docs")),(0,a.kt)("h3",{id:"asset-administration-shell"},"Asset Administration Shell"),(0,a.kt)("p",null,"The Asset Administration Shell (AAS) is a specification that is released by the Industrial Digital Twin Association\n",(0,a.kt)("a",{parentName:"p",href:"https://industrialdigitaltwin.org/"},"(IDTA)")," with a perspective to be adopted by the International Electrotechnical\nCommission ",(0,a.kt)("a",{parentName:"p",href:"https://www.iec.ch/homepage"},"(IEC)"),".\nIts mission is defining how \u201cinformation about assets ","[\u2026]"," can be exchanged in a meaningful way between partners in a value\ncreation network\u201d. As such, it is well-suited to contribute to the toolbox of Catena-X. While the Spec offers an extensive\nsuite of meta-model elements and APIs, Catena-X only uses a small subset. What exactly is defined in the Catena-X standard\nCX - 0002."),(0,a.kt)("h4",{id:"submodels"},"Submodels"),(0,a.kt)("p",null,"An Asset Administration Shell is organized in Submodels. Each Submodel represents a self-contained aspect of an asset -\ntypical examples are the Nameplate or AssemblyPartRelationship (which denotes the hierarchical composition of parts into\na whole). As different aspects of an Asset may be known to different parties on the value-chain, Submodels for a single asset\nmust be capable to run independently of each other. The specification explicitly allows this. Catena-X demands that data-\nproviders offer only a subset of the SubmodelServiceSpecification while it is advisable to expose Submodels with help of\na full-fletched AAS-server SDK that provides the content-modifiers and API-endpoints out-of-the-box."),(0,a.kt)("h4",{id:"digital-twin-registry"},"Digital Twin Registry"),(0,a.kt)("p",null,'What Catena-X calls the "Digital Twin Registry" (DTR) is actually the union of two different services that the AAS specification\nhas specified. For the sake of simplicity, they are both defined in a single service. The DTR serves a similar function as the\nindex in a book: When trying to discover information, it\'s convenient to have an overview WHAT one will find and HOW to\naccess it. The registry caters exactly that information: For every asset it knows, it holds a number of "submodel-descriptors" and in\nthese, a consumer app will find information WHAT it will find (via the semanticId) and how to access the information (endpoint,\nsecurity setup etc.). As the information contained in the DTR may be sensitive and not be trusted with a central entity,\nevery data provider must offer his own DTR as an EDC Data Asset.'),(0,a.kt)("h3",{id:"catena-x-specific-services"},"Catena-X specific Services"),(0,a.kt)("p",null,"The AAS-specification makes the implicit assumption that only one DTR serves the entire network and is known\nto all participants. However, in Catena-X some of the data is deemed so sensitive that a central authority can't be\ntrusted with it. Thus, each Data Provider will run their own DTR which poses a challenge for discovery. After all, a\nData Consumer must still find out the address where to fetch the data from. That's why Catena-X has introduced a\nthree-step discovery pattern made up of the central microservices Discovery Finder, BPN Discovery (or several of them)\nand finally the EDC discovery that is part of the CX-Portal. They are also part of this Kit."),(0,a.kt)("h2",{id:"sample-data"},"Sample Data"),(0,a.kt)("p",null,"Most sample data for relevant data objects is contained in the openAPI-specs of the respective services. This chapter only\ncontains data structures that are specifically designed for use in the Digital Twin Kit and go beyond what is allowed/given\nas example.  "),(0,a.kt)("h3",{id:"data-offers-at-edc"},"Data Offers at EDC"),(0,a.kt)("p",null,"While the exact integration with the EDC is still at the discretion of each Kit and use case, there are best-practices\nthat are likely to be standardized in the future. An example is HOW the EDC-protected parts of this Kit should register\nwith the EDC Management API. Please note that these recommendations are based on the schemas of EDC v0.3.0. As the\nschema has changed in the meantime, an update will be provided when available. The current recommendation is:"),(0,a.kt)("h4",{id:"digital-twin-registry-1"},"Digital Twin Registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0\xa0"asset": {\n\xa0\xa0\xa0\xa0"properties": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"asset:prop:id": "<EDC_ASSET_ID>",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"asset:prop:type": "data.core.digitalTwinRegistry",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"asset:prop:name": "Digital Twin Registry Endpoint of provider XYZ",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"asset:prop:contenttype": "application/json",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"asset:prop:policy-id": "use-eu"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0},\n\xa0\xa0"dataAddress": {\n\xa0\xa0\xa0\xa0"properties": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type": "HttpData",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"baseUrl": "https://<YOUR_DIGITAL_TWIN_REGISTRY_URL>",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"proxyPath": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"proxyBody": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"proxyMethod": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"proxyQueryParams": true \n\xa0\xa0\xa0\xa0}\n\xa0\xa0}\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asset:prop:id")," describes the id of the data asset, not of any offered resources themselves. "),(0,a.kt)("h4",{id:"submodel"},"Submodel"),(0,a.kt)("p",null,"How a Submodel server is offered as a data asset is not yet agreed and will be added here soon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,a.kt)("h3",{id:"catena-x-submodel-descriptors"},"Catena-X Submodel Descriptors"),(0,a.kt)("p",null,"The Submodel descriptors in the DTR must not only follow the schema defined by the openAPI file. Additionally, it is\nimperative that the network mandates how they shall be populated with data. This is especially critical because the\ndata access is not straight-forward but passes through an EDC which the Data Consumer must negotiate with. That's why\nthe subprotocol body holds information on how to talk to the EDC's Data Plane."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0\xa0"id": "<unique ID of submodel>",\n\xa0\xa0"semanticId": {\n        "type": "ExternalReference", \n        "keys": [\n            {"type": "GlobalReference", \n             "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"}\n        ]\n    },\n\xa0\xa0 "endpoints": \n\xa0   {\n\xa0\xa0\xa0\xa0"protocolInformation": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"href": "https://edc.data.plane/<path>/submodel",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"endpointProtocol":\xa0"HTTP",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"endpointProtocolVersion": ["1.1"],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"subprotocol":\xa0"DSP",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"subprotocolBody": "<body with information required by subprotocol>",\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"subprotocolBodyEncoding": "plain",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "securityAttributes": [ \n            { "type": "NONE", "key": "NONE", "value": "NONE" }\xa0\n        ]\n\xa0},\n\xa0\xa0\xa0 "interface": "SUBMODEL-3.0"\n\xa0 }\n\xa0]\n}\n')),(0,a.kt)("p",null,"Currently, this structure is still ambiguous (see ",(0,a.kt)("inlineCode",{parentName:"p"},"subprotocolBody"),") but will be subject to further standardization introducing\nmore clarity across use cases and Kits."),(0,a.kt)("h2",{id:"documentation-in-the-context-of-development"},"Documentation in the Context of Development"),(0,a.kt)("h3",{id:"data-provisioning"},"Data Provisioning"),(0,a.kt)("p",null,"Data Providers will usually follow one of two patterns:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Digital Twin Repository: Deploying a dedicated Repository for the persistence of digital twins and related data is the most\nconvenient way to get going with the AAS. Due to the risk of data duplication and unclear initial ingestion mechanisms,\nit may not scale to industrial sizes."),(0,a.kt)("li",{parentName:"ol"},"Delegation: Wrapping another API or a database may deploy the Submodel API as a new facade. It delegates the incoming\nrequests to the respective backend systems. ")),(0,a.kt)("p",null,"Offering data to the network requires mappings that are naturally dependent on the data source format."),(0,a.kt)("h4",{id:"register-digital-twins"},"Register Digital Twins"),(0,a.kt)("p",null,"As mentioned in CX - 0002, every Data Provider is required not only to deploy a DTR in his infrastructure but also to\nregister each of the Submodels. Otherwise, the data will not be discoverable by Data Consumers."))}p.isMDXComponent=!0}}]);