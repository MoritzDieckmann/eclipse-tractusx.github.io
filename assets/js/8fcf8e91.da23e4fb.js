"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[66447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={id:"Operation View Remaining Useful Life Kit",title:"Operation View",description:"Remaining Useful Life Kit",sidebar_position:3},a=void 0,s={unversionedId:"kits/Behaviour Twin RuL Kit/Operation View Remaining Useful Life Kit",id:"kits/Behaviour Twin RuL Kit/Operation View Remaining Useful Life Kit",title:"Operation View",description:"Remaining Useful Life Kit",source:"@site/docs-kits/kits/Behaviour Twin RuL Kit/page_software-operation-view.md",sourceDirName:"kits/Behaviour Twin RuL Kit",slug:"/kits/Behaviour Twin RuL Kit/Operation View Remaining Useful Life Kit",permalink:"/docs-kits/next/kits/Behaviour Twin RuL Kit/Operation View Remaining Useful Life Kit",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Operation View Remaining Useful Life Kit",title:"Operation View",description:"Remaining Useful Life Kit",sidebar_position:3},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/Behaviour Twin RuL Kit/Adoption View Remaining Useful Life Kit"},next:{title:"Specification",permalink:"/docs-kits/next/kits/Behaviour Twin RuL Kit/Software Development View/Specification Remaining Useful Life Kit"}},p={},l=[{value:"Remaining Useful Life Kit",id:"remaining-useful-life-kit",level:3},{value:"Deployment of Graph Assets",id:"deployment-of-graph-assets",level:2},{value:"Data Provider Graph Asset",id:"data-provider-graph-asset",level:3},{value:"Service Provider Graph Asset",id:"service-provider-graph-asset",level:3},{value:"Deployment of RuL Skill",id:"deployment-of-rul-skill",level:2},{value:"Policy Registration",id:"policy-registration",level:3},{value:"Contractdefiniton Registration",id:"contractdefiniton-registration",level:3},{value:"Skill Registration",id:"skill-registration",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remaining Useful Life kit banner",src:n(95185).Z,width:"285",height:"244"})),(0,i.kt)("h3",{id:"remaining-useful-life-kit"},"Remaining Useful Life Kit"),(0,i.kt)("p",null,"Based on the information provided in this KIT, it is possible to provide and/or consume services defined as Agent Skills based on the Behaviour Twin standards (ontology, SAMM models)."),(0,i.kt)("p",null,"Depending on the role within the RuL Use Case, different Knowledge Agent components are needed.\nThe needed information regarding Agent Kit components, their deployment and configuration, refer to the ",(0,i.kt)("em",{parentName:"p"},"Agent Kit Operation View Section"),"."),(0,i.kt)("h2",{id:"deployment-of-graph-assets"},"Deployment of Graph Assets"),(0,i.kt)("h3",{id:"data-provider-graph-asset"},"Data Provider Graph Asset"),(0,i.kt)("p",null,"If you are engaged as a data provider within the RuL KIT, you can mount your data source to the federated knowledge graph as Graph Asset.\nBeside the policy and contract definition, a Graph Asset registration is needed. It can like following example with a baseUrl set to the sparql endpoint of your provision agent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",\n    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "sh": "http://www.w3.org/ns/shacl#",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "asset": {\n    "@type": "Asset",\n    "@id": "GraphAsset?oem=BehaviourTwinReliability",\n    "properties": {\n      "name": "OEM portion of the Behaviour Twin Reliablity Testdataset.",\n      "name@de": "OEM Anteil an den Verhaltenszwilling ReliabilityTestdaten.",\n      "description": "A graph asset/offering mounting Carena-X Testdata for Behaviour Twin.",\n      "description@de": "Ein Graph Angebot welches Catena-X Testdaten beinhaltet.",\n      "version": "CX_RuL_Testdata_v1.0.0",\n      "contenttype": "application/json, application/xml",\n      "cx-common:publishedUnderContract": "Contract?oem=Graph",\n      "rdf:type": "cx-common:GraphAsset",\n      "rdfs:isDefinedBy": "<https://w3id.org/catenax/usecase/behaviourtwin>,<https://w3id.org/catenax/ontology/core>,<https://w3id.org/catenax/ontology/vehicle>,<https://w3id.org/catenax/ontology/reliability>",\n      "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n      "sh:shapesGraph": "@prefix cx-common: <https://w3id.org/catenax/ontology/common#>. \\n@prefix : <GraphAsset?oem=BehaviourTwinReliability#> .\\n@prefix cx-tele: <https://w3id.org/catenax/ontology/reliability#> .\\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\\n@prefix sh: <http://www.w3.org/ns/shacl#> .@prefix : <urn:cx:Graph:oem:BehaviourTwin> .\\n\\n:OemLoadSpectrum rdf:type sh:NodeShape ;\\n  sh:targetClass cx-tele:LoadSpectrum ;\\n  sh:property [\\n        sh:path cx-tele:provisionedBy ;\\n        sh:hasValue <urn:bpn:legal:BPNL000000000OEM> \\n    ] ;\\n  sh:property [\\n        sh:path cx-tele:Version ;\\n        sh:hasValue \\"0\\"^^xsd:long \\n    ] ;\\n  sh:property [\\n        sh:path cx-tele:component ;\\n        sh:class :SupplierParts \\n    ] .\\n\\n:SupplierParts rdf:type sh:NodeShape ;\\n  sh:targetClass cx-tele:VehicleComponent ;\\n  sh:property [\\n        sh:path cx-tele:isProducedBy ;\\n        sh:hasValue <urn:bpn:legal:BPNL0000SUPPLIER> \\n    ] .\\n",\n      "cx-common:isFederated": "true^^xsd:boolean"\n    }\n  },\n  "dataAddress": {\n    "id": "GraphAsset?oem=BehaviourTwinReliability",\n    "@type": "DataAddress",\n    "baseUrl": "{{provisioningAgent}}/{{reliabilityPath}}/sparql",\n    "type": "cx-common:Protocol?w3c:http:SPARQL",\n    "proxyPath": "false",\n    "proxyMethod": "true",\n    "proxyQueryParams": "true",\n    "proxyBody": "true",\n    "authKey": "{{oemBackendAuthKey}}",\n    "authCode": "{{oemBackendAuthCode}}"\n  }\n}\n')),(0,i.kt)("p",null,"It also provides some META-Information's, which are for example, to find a specific based on isDefinedBy property."),(0,i.kt)("h3",{id:"service-provider-graph-asset"},"Service Provider Graph Asset"),(0,i.kt)("p",null,"The same applies for the service/function supplier. To make the service available as part of the federated knowledge graph, a Grapth Asset pointing to your Remoting Agent endpoint is needed."),(0,i.kt)("p",null,"Such a Graph Asset for a service provider can look like following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",\n        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n        "cx-common": "https://w3id.org/catenax/ontology/common#",\n        "sh": "http://www.w3.org/ns/shacl#"\n    },\n    "asset": {\n        "@type": "Asset",\n        "@id": "GraphAsset?supplier=BehaviourTwinRUL", \n        "properties": {\n            "name": "Lifetime Prognosis Service for Gearboxes",\n            "description": "A sample graph asset/offering referring to a specific prognosis resource.",\n            "version": "1.9.4-SNAPSHOT",\n            "contenttype": "application/json, application/xml",\n            "cx-common:publishedUnderContract": "Contract?supplier=Graph",\n            "rdf:type": "cx-common:GraphAsset",\n            "rdfs:isDefinedBy": "<https://w3id.org/catenax/ontology/common>,<https://w3id.org/catenax/ontology/core>,<https://w3id.org/catenax/ontology/function>,<https://w3id.org/catenax/ontology/behaviour>",\n            "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n            "sh:shapesGraph": "@prefix cx-common: <https://w3id.org/catenax/ontology/common#>. \\n@prefix : <GraphAsset?supplier=BehaviourTwinRUL#> .\\n@prefix cx-prognosis: <https://w3id.org/catenax/ontology/behaviour#> .\\n@prefix cx-fx: <https://w3id.org/catenax/ontology/function#> .\\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\\n@prefix sh: <http://www.w3.org/ns/shacl#> .\\n\\n:Tier1LifetimePrognosis rdf:type sh:NodeShape ;\\n  sh:targetClass cx-prognosis:Function ;\\n  sh:property [\\n        sh:path cx-prognosis:provisionedBy ;\\n        sh:hasValue <urn:bpn:legal:BPNL0000SUPPLIER> ].",\n            "cx-common:isFederated": "true^^xsd:boolean"\n        }\n    },\n    "dataAddress": {\n        "id": "GraphAsset?supplier=BehaviourTwinRUL", \n        "@type": "DataAddress",\n        "baseUrl": "{{remotingAgent}}/repositories/rul",\n        "type": "cx-common:Protocol?w3c:http:SPARQL",\n        "proxyPath": "false",\n        "proxyMethod": "true",\n        "proxyQueryParams": "true",\n        "proxyBody": "true",\n        "authKey": "{{supplierBackendAuthKey}}",\n        "authCode": "{{supplierBackendAuthCode}}"\n    }\n  }\n')),(0,i.kt)("h2",{id:"deployment-of-rul-skill"},"Deployment of RuL Skill"),(0,i.kt)("p",null,'After the skill is defined, it has to be registered.\nAs described in th "KA-KIT", one have to define the Asset, Policy and Contractdefiniton as for other EDC assets.'),(0,i.kt)("p",null,"To bo able to invoke the sample Agent-Skill defined above, we have to deploy, or better said, to register it in our agent enabled EDC. For the registration we need, as for other EDC assets, the asset, a policy and a contract definition registration."),(0,i.kt)("h3",{id:"policy-registration"},"Policy Registration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/",\n        "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "Policy?consumer=Asset&mode=open",\n    "policy": {\n        "@type": "Policy",\n        "odrl:permission" : [{\n            "odrl:action" : "USE",\n            "odrl:constraint" : []\n        }]\n    }\n} \n')),(0,i.kt)("h3",{id:"contractdefiniton-registration"},"Contractdefiniton Registration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n         "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@id": "Contract?consumer=Asset&mode=open",\n    "@type": "ContractDefinition",\n    "accessPolicyId": "Policy?consumer=Asset&mode=open",\n    "contractPolicyId": "Policy?consumer=Asset&mode=open",\n    "assetsSelector" : {\n        "@type" : "CriterionDto",\n        "operandLeft": "https://w3id.org/catenax/ontology/common#publishedUnderContract",\n        "operator": "=",\n        "operandRight": "Contract?consumer=Asset&mode=open"\n    }\n}\n')),(0,i.kt)("h3",{id:"skill-registration"},"Skill Registration"),(0,i.kt)("p",null,"A Skill can be registered over the AgentPlane API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location 'agentPlaneEdcUrl/api/agent/skill?asset=SkillAsset%3Fconsumer%3DRemainingUsefulLife&distributionMode=PROVIDER%26contract%3DContract%3Fconsumer%3DAsset%26mode%3Dopen' \\\n--header 'Content-Type: application/sparql-query' \\\n--data-raw '\n   <RuL skill from above>\n'\n")))}d.isMDXComponent=!0},95185:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/behaviour-rul-kit-icon-d7f121fb16f8b3ff94efce19f960557a.svg"}}]);