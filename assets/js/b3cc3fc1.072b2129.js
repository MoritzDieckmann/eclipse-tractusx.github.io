"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[76490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||s;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:n,o[1]=r;for(var d=2;d<s;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const s={sidebar_position:1,title:"Adoption View"},o=void 0,r={unversionedId:"kits/knowledge-agents/adoption-view/intro",id:"version-24.05/kits/knowledge-agents/adoption-view/intro",title:"Adoption View",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.05/kits/knowledge-agents/adoption-view/intro.md",sourceDirName:"kits/knowledge-agents/adoption-view",slug:"/kits/knowledge-agents/adoption-view/intro",permalink:"/docs-kits/kits/knowledge-agents/adoption-view/intro",draft:!1,tags:[],version:"24.05",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Adoption View"},sidebar:"kits",previous:{title:"Changelog",permalink:"/docs-kits/kits/knowledge-agents/Knowledge Agent Changelog"},next:{title:"High-Level Architecture",permalink:"/docs-kits/kits/knowledge-agents/development-view/architecture"}},l={},d=[{value:"Agents KIT",id:"agents-kit",level:2},{value:"Vision &amp; Mission",id:"vision--mission",level:2},{value:"Specifications &amp; Standards",id:"specifications--standards",level:3},{value:"Implementations",id:"implementations",level:3},{value:"Support",id:"support",level:3},{value:"Business Value",id:"business-value",level:2},{value:"Democratization of added value service design for data spaces",id:"democratization-of-added-value-service-design-for-data-spaces",level:3},{value:"Custom Search",id:"custom-search",level:3},{value:"Widespread Standard",id:"widespread-standard",level:3},{value:"Isn&#39;t this a proprietary approach?",id:"isnt-this-a-proprietary-approach",level:4},{value:"No Redundancy",id:"no-redundancy",level:3},{value:"Is this a replacement to the existing Aspect Meta Model (BAMM/SAMM) &amp; Asset Administration Shell (AAS) approach?",id:"is-this-a-replacement-to-the-existing-aspect-meta-model-bammsamm--asset-administration-shell-aas-approach",level:4},{value:"Data Sovereignity &amp; Enhanced Security",id:"data-sovereignity--enhanced-security",level:3},{value:"Isn&#39;t it inherently insecure to let arbitrary Dataspace tenants invoke ad-hoc computations in my backend?",id:"isnt-it-inherently-insecure-to-let-arbitrary-dataspace-tenants-invoke-ad-hoc-computations-in-my-backend",level:4},{value:"Easy Deployment",id:"easy-deployment",level:3},{value:"Doesn&#39;t this impose additional burdens to the dataspace participants?",id:"doesnt-this-impose-additional-burdens-to-the-dataspace-participants",level:4},{value:"Great Scalability",id:"great-scalability",level:3},{value:"How could such a scheme be efficient at all",id:"how-could-such-a-scheme-be-efficient-at-all",level:4},{value:"Use Cases",id:"use-cases",level:2},{value:"Dataspace Participants",id:"dataspace-participants",level:3},{value:"Consumer",id:"consumer",level:4},{value:"Provider",id:"provider",level:4},{value:"Data Provider",id:"data-provider",level:5},{value:"Function Provider",id:"function-provider",level:5},{value:"Skill (=Compute) Provider",id:"skill-compute-provider",level:5},{value:"Core Service Provider",id:"core-service-provider",level:5},{value:"Additional Stakeholders",id:"additional-stakeholders",level:3},{value:"Business Developer",id:"business-developer",level:4},{value:"Enablement Service Developer",id:"enablement-service-developer",level:4},{value:"NOTICE",id:"notice",level:2}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Agents Kit Banner",src:a(3389).Z,width:"286",height:"244"})),(0,n.kt)("h2",{id:"agents-kit"},"Agents KIT"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Federated queries over the whole data space.")),(0,n.kt)("h2",{id:"vision--mission"},"Vision & Mission"),(0,n.kt)("p",null,"This KIT specifies a semantically-driven and state-of-the-art compute-to-data architecture for (not only) automotive use cases based on the best ",(0,n.kt)("a",{parentName:"p",href:"https://gaia-x.eu/"},"GAIA-X"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/Main_Page"},"W3C")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Big_data"},"Big Data")," practices."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(48629).Z},(0,n.kt)("img",{alt:"Agent-Oriented Dataspace",src:a(71232).Z,width:"600",height:"496"}))),(0,n.kt)("h3",{id:"specifications--standards"},"Specifications & Standards"),(0,n.kt)("p",null,"This KIT refers to standards for invoking and performing semantic computations (inferences or ",(0,n.kt)("inlineCode",{parentName:"p"},"skills"),") based on normalized and linked data representations (",(0,n.kt)("inlineCode",{parentName:"p"},"knowledge graph")," described as RDF triples) over the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataspace"),"."),(0,n.kt)("p",null,"Leveraging existing standards such as ",(0,n.kt)("a",{parentName:"p",href:"https://internationaldataspaces.org/"},"IDS"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/RDF"},"RDF"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/SPARQL"},"SparQL"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/OWL"},"OWL"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/SHACL"},"SHACL")," & ",(0,n.kt)("a",{parentName:"p",href:"https://eclass.eu/"},"EClass"),", linked data and corresponding skills may be provisioned, consumed, federated and visualised across the complete dataspace (technically) and hence the complete supply chain (business-wise)."),(0,n.kt)("p",null,"Skills can be described in tractable sub-languages of well-known declarative syntaxes, such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/sw/wiki/SPARQL"},"SparQL")," (in the future maybe also: ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GraphQL"},"GraphQL")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL"),")."),(0,n.kt)("p",null,"Our specifications have been published as  ",(0,n.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"Catena-X e.V. Standards"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library/Update_Mai_2024/CX-0084-FederatedQueriesInDataSpaces-v1.2.0.pdf"},"CX-0084 Federated Queries in Dataspaces (V1.2.0)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library/Update_Mai_2024/CX-0067-OntologyModelsinCatenaX-v1.1.0.pdf"},"CX-0067 Ontology Models to Realize Federated Queries in Catena-X  (V1.1.0)"))),(0,n.kt)("h3",{id:"implementations"},"Implementations"),(0,n.kt)("p",null,"This KIT aggregates open-source reference implementations of these standards to Tractus-X in particular extending the ",(0,n.kt)("a",{parentName:"p",href:"../../Connector%20Kit/Adoption%20View/connector_kit_adoption_view"},"Connector KIT")),(0,n.kt)("p",null,"These components are called ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_agent"},(0,n.kt)("inlineCode",{parentName:"a"},"agents")),") because they (semi-)actively negotiate and collaborate with each other (via so-called graph and skill assets) over the dataspace in order to derive higher-level semantic knowledge from the plain, isolated data."),(0,n.kt)("p",null,"Knowledge agents introduce an ecosystem of efficient services (for data handling, compute, skill orchestration and frontend components) where an optimal matchmaking between those services needs to be reached."),(0,n.kt)("p",null,"This KIT also defines bridges to other digital twin approaches, such as AAS (Asset Administration Shell), such that data and service provisioning into multiple use cases will be as effortless as possible."),(0,n.kt)("p",null,"Our Implementations can be accessed as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx"},"Eclipse Tractus-X Repositories"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/knowledge-agents-edc"},"Agent Plane(s) for EDC (KA-EDC)")," see also ",(0,n.kt)("a",{parentName:"li",href:"../operation-view/agent_edc"},"KA-EDC Operation View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/knowledge-agents"},"Binding Agent(s) for Providers (KA-RI)")," see also ",(0,n.kt)("a",{parentName:"li",href:"../operation-view/provider"},"KA-RI Operation View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/knowledge-agents-aas-bridge"},"Agent Bridges for AAS (KA-AAS)")," see also ",(0,n.kt)("a",{parentName:"li",href:"../operation-view/bridge"},"KA-AAS Operation View"))),(0,n.kt)("h3",{id:"support"},"Support"),(0,n.kt)("p",null,"The team supports use case consumers, app developers, data providers, service providers and IT/domain consultants in order to operate as economically and well-informed as possible by giving them first-class tools, documentation and feedback. For that purpose, please meet us in the ",(0,n.kt)("a",{parentName:"p",href:"/community/intro"},"Tractus-X Community"),"."),(0,n.kt)("h2",{id:"business-value"},"Business Value"),(0,n.kt)("p",null,"The Agents KIT is the best fit for use case and applications which"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"do not focus on exchanging/analyzing static assets between two peers in the supply chain, but instead require crawling over a whole dynamic branch of the supply tree."),(0,n.kt)("li",{parentName:"ul"},"do not focus on gaining predefined schemas of digital twins, but need to perform complex search and aggregations over both catalog and assets."),(0,n.kt)("li",{parentName:"ul"},"require rapidly changing and extensible logic that should reuse existing assets which have already been built for other use cases."),(0,n.kt)("li",{parentName:"ul"},"need to securely extract & aggregate knowledge from large amounts of assets and/or large assets.")),(0,n.kt)("p",null,"As a dataspace participant, adopting the Agents KIT will"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allow you to easily bind your own data and services into the relevant use cases and applications"),(0,n.kt)("li",{parentName:"ul"},"give you the means to integrate your company-internal data sources with the dataspace as one big knowledge graph")),(0,n.kt)("p",null,"The following advantages play an important role."),(0,n.kt)("h3",{id:"democratization-of-added-value-service-design-for-data-spaces"},"Democratization of added value service design for data spaces"),(0,n.kt)("p",null,"Currently, the development of full-scale Apps to address use cases for cross-company exchange requires a lot of development effort. By proceeding this way, addressing new business problems or fast prototyping of solution ideas are not straightforward to achieve. Thus, the idea of a fast-growing ecosystems based on data exchange between companies is at risk. KA introduces Skills as a new concept to support query of data spaces with small effort. A new Skill can be developed in few days in comparison to weeks or months for app development. In this context it is aimed that data consumers are able to create skills by themselves based on their very specific business demand."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(21307).Z},(0,n.kt)("img",{alt:"Architecture Modules and Parties",src:a(89786).Z,width:"400",height:"263"}))),(0,n.kt)("p",null,"In addition, a third party in addition to Consumer and (Data, Function) Provider can be imagined: The Skill provider (see Figure 3). Similar to an App Provider, the Skill Provider develops queries to address various business problems. Developed Skills can be offered as Skill Assets over the dataspace and in the Marketplace, quite similar to the existing Services and Apps."),(0,n.kt)("p",null,"It is also possible to combine Skill and App development (by using Skills as stored procedures in the App framework). By following this approach App developers can concentrate on frontend optimization and usability of the app while the skills deliver the business relevant information."),(0,n.kt)("h3",{id:"custom-search"},"Custom Search"),(0,n.kt)("p",null,"Based on the skill concept, mighty search functionalities can be realized by utilizing the KA approach. SPARQL is already a common standard to browse large data catalogues (e.g. Wikidata). By utilizing this principle, it becomes possible to search for objects which are unknown at the beginning of the search (similar to Google). This advantage is important since comparable twin-based approaches for the semantic layer require a specific ID to find an object."),(0,n.kt)("h3",{id:"widespread-standard"},"Widespread Standard"),(0,n.kt)("h4",{id:"isnt-this-a-proprietary-approach"},"Isn't this a proprietary approach?"),(0,n.kt)("p",null,"The underlying ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/API"},"API"),", protocols, standards and technologies are first-class citizens of the official ",(0,n.kt)("a",{parentName:"p",href:"https://gaia-x.eu/what-is-gaia-x/deliverables/data-spaces/"},"Gaia-X")," & ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/semanticweb/"},"W3C Semantic Web")," portfolio.\nThese techs have been already adopted globally for a plethora of domains, use cases and derived (Open Source & commercial) projects.\nUsing these approaches will give you a competitive advantage which is even independent of the concrete dataspace instance/application that you are targeting at."),(0,n.kt)("h3",{id:"no-redundancy"},"No Redundancy"),(0,n.kt)("h4",{id:"is-this-a-replacement-to-the-existing-aspect-meta-model-bammsamm--asset-administration-shell-aas-approach"},"Is this a replacement to the existing Aspect Meta Model (BAMM/SAMM) & Asset Administration Shell (AAS) approach?"),(0,n.kt)("p",null,"Agent technology is a complement that means that both approaches can be deployed in co-existance."),(0,n.kt)("p",null,"There will be some use cases (large interconnected datasets, ad-hoc querying, inference of derived knowledge) which enfavour the knowledge agents approach, others (simple access to already identified remote twins) will more adequately stay with the BAMM/SAMM & AAS approach."),(0,n.kt)("p",null,"For the data providers, it will be easy to mount their artifacts (files, data source partitions, backend interfaces) under both types of assets (submodels, graphs). We provide ",(0,n.kt)("a",{parentName:"p",href:"../development-view/modules#aas-bridges"},"bridging technology")," for that purpose."),(0,n.kt)("p",null,"For the app developers it will be easy to use both ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_development_kit"},"SDK"),"s over a single consumer connector and even interchange the identifiers/",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier"},"IRI"),"s."),(0,n.kt)("p",null,"For the modellers, there is only a loose coupling between a protocol-independent, inference-agnostic data format description, such as BAMM/SAMM, and a protocol-binding, but data-format independent inference/semantic model, such as OWL-R. We expect tools to generate at least the latter from ubiquitous Excel/Tabular specifications. We could also imagine a kind of OWL-R to BAMM/SAMM embedding (but not vice versa) once this is needed by a use case."),(0,n.kt)("h3",{id:"data-sovereignity--enhanced-security"},"Data Sovereignity & Enhanced Security"),(0,n.kt)("p",null,"One of the key requirements for dataspaces is to guarantee that data is only shared willingly and subject to specific terms and conditions of respective data providers. One core component to support definition and negotiation of contracts and policies is the Eclipse Dataspace Connector (EDC). Nevertheless, the way how data is processed via a semantic layer also contributes to data sovereignty. KA follows a strict compute to data approach. Thus, by design only computation results are shared instead of copying all data relevant for this computation (e.g. submit only weight information instead of geometry and material information). Furthermore, by utilizing data models based on ontologies definition of access rights can be made up to a high level of granularity (attribute level)."),(0,n.kt)("h4",{id:"isnt-it-inherently-insecure-to-let-arbitrary-dataspace-tenants-invoke-ad-hoc-computations-in-my-backend"},"Isn't it inherently insecure to let arbitrary Dataspace tenants invoke ad-hoc computations in my backend?"),(0,n.kt)("p",null,"First, these are not arbitrary tenants, but access is only given to business partners with whom you have signed contracts (and who appear in certain roles there).\nA Skill request from a non-authorized chain of computation would not be able to enter your backend at all."),(0,n.kt)("p",null,"Furthermore, you would not expose your backend directly, but rather introduce a ",(0,n.kt)("a",{parentName:"p",href:"../development-view/architecture"},"virtualization layer")," between the Agent and your data source. This introduces another (role-based) security domain by appropriate sub-schemas and filters. So different contracts can be mapped to different security principals/data views in the backend."),(0,n.kt)("p",null,"This KIT does not introduce arbitrary (turing-equivalent, hence undecidable) ad-hoc computations, but the ",(0,n.kt)("a",{parentName:"p",href:"../development-view/sparql"},"SPARQL")," standard introduces a well-defined set of operations whose effects and consequences can be checked and validated in advance (hypervision)."),(0,n.kt)("p",null,"Finally, the team is investigating a form of differential privacy which introduces noise between your data source and its graph representation such that original values can be effectively hidden from the reporting output."),(0,n.kt)("h3",{id:"easy-deployment"},"Easy Deployment"),(0,n.kt)("h4",{id:"doesnt-this-impose-additional-burdens-to-the-dataspace-participants"},"Doesn't this impose additional burdens to the dataspace participants?"),(0,n.kt)("p",null,"For data consumers, there is virtually nothing to do. All they have to care for is to add an Agent-Enabled data plane to their connector (or even use our Agent Plane as a fully-blown replacement for the Http/AmazonS3 standard of Tractus-X)."),(0,n.kt)("p",null,"For smaller data and skill providers, there will be the possibility to host non-critical data directly through the storage facilities of the Agent Plane."),(0,n.kt)("p",null,"For all others, they will employ techniques for data virtualization anyway to scale and shield their critical data. That is where the binding agents as one additional container/layer that is declaratively described (not: programmatically) come into play."),(0,n.kt)("h3",{id:"great-scalability"},"Great Scalability"),(0,n.kt)("p",null,"Utilization of dataspaces for exchanging complex product- or production data usually involves transfer of large datasets. If for example an automotive OEM wants to access information of their car fleets ranging from hundreds to millions of cars, the dataspace still needs to provide required data in short time without risking too much load on the network. Thus, the outlined approach is based on efficient federated SPARQL queries which only transport computation results across the network in contrast to full datasets (compute to data). Further potentials for streamlining performance are for example parallelized EDC contract negotiations and efficient delegations between suppliers."),(0,n.kt)("h4",{id:"how-could-such-a-scheme-be-efficient-at-all"},"How could such a scheme be efficient at all"),(0,n.kt)("p",null,"Our technology has been thoroughly developed, tested and piloted over the years 2022 and 2023. One key component is the ability of any Agent to delegate\na part of its work to other Business Partners/Agents and hence to bring the computations close to the actual data. This delegation pattern has several very nice properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Delegation is dynamic based on the supply chain(s) that are described in the actual data. So the actual computation chain optimizes with the data."),(0,n.kt)("li",{parentName:"ul"},"Delegation is parallelized in the sense that several suppliers are requested simultaneously. Latency is hence minimized."),(0,n.kt)("li",{parentName:"ul"},"Delegation may be opaque from the consumer view if contracts require so.")),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(79294).Z},(0,n.kt)("img",{alt:"Dataspace Roles",src:a(47682).Z,width:"290",height:"400"}))),(0,n.kt)("p",null,"The Agents KIT is the basis for other, use-case specific Agent-enabled KITs, services and applications, such as the ",(0,n.kt)("a",{parentName:"p",href:"../../behaviour-twin-kit/overview"},"Behaviour Twin KIT"),"."),(0,n.kt)("p",null,"It distinguishes between Dataspace Participants and other parties (who support the Dataspace Participants)."),(0,n.kt)("h3",{id:"dataspace-participants"},"Dataspace Participants"),(0,n.kt)("p",null,"The following stakeholders should ",(0,n.kt)("a",{parentName:"p",href:"../operation-view/deployment"},"deploy")," modules/artifacts of the Agents Kit.\nIn particular, each Dataspace Participant needs an ",(0,n.kt)("a",{parentName:"p",href:"../operation-view/agent_edc"},"Agent-Enabled Connector"),"."),(0,n.kt)("h4",{id:"consumer"},"Consumer"),(0,n.kt)("p",null,"Any party who wants to use data and logic using Agent Technology (for example by employing Agent-Enabled Applications or Services), such as a Recycling Company or a Fleet Manager"),(0,n.kt)("h4",{id:"provider"},"Provider"),(0,n.kt)("p",null,"The Agents KIT distinguish Providers whether they want to publish data or logic using Agent Technology"),(0,n.kt)("h5",{id:"data-provider"},"Data Provider"),(0,n.kt)("p",null,"Any party who provides data (for example by a backend database or other Agent-enabled Applications or Services), for example an Automotive OEM (original equipment manufacturer)"),(0,n.kt)("h5",{id:"function-provider"},"Function Provider"),(0,n.kt)("p",null,"Any party who provides proprietary functions (for example by a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," endpoint or other Agent-enabled Applications or Services), for example a Tier1 Sensor Device Supplier"),(0,n.kt)("h5",{id:"skill-compute-provider"},"Skill (=Compute) Provider"),(0,n.kt)("p",null,"Any party who provides compute resources and/or procedural logic (for example by a server or other Agent-enabled Applications or Services), for example a Recycling Software Specialist"),(0,n.kt)("h5",{id:"core-service-provider"},"Core Service Provider"),(0,n.kt)("p",null,"Any party offering ontology models (semantic/ontology hub) or federated catalogues, for example an Operating Company"),(0,n.kt)("h3",{id:"additional-stakeholders"},"Additional Stakeholders"),(0,n.kt)("p",null,"The following stakeholders should ",(0,n.kt)("a",{parentName:"p",href:"../development-view/architecture"},"interface or implement")," modules of the Agents Kit."),(0,n.kt)("h4",{id:"business-developer"},"Business Developer"),(0,n.kt)("p",null,"Any party who publishes an Application, Standard or KIT based on Agent Technology on behalf of a Dataspace Participant (e.g. a Fleet Monitor, an Incident Reporting Solution, a Telematics KIT)"),(0,n.kt)("h4",{id:"enablement-service-developer"},"Enablement Service Developer"),(0,n.kt)("p",null,"Any party who offers ready-made artifacts, packages and managed services assisting Dataspace Participants/Applications to process data using Agent technology (e.g. a Graph Database, a Virtual Graph Binding Engine, an EDC Package)"),(0,n.kt)("h2",{id:"notice"},"NOTICE"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021,2024 T-Systems International GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021,2023 Mercedes-Benz AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022,2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021,2023 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021,2023 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022,2023 Contributors to the Eclipse Foundation")))}c.isMDXComponent=!0},48629:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/dataspace_agent-65ff49aae95b41d6d20c9bd830ebdecb.png"},79294:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/dataspace_roles-2722058d268f2f7b0bd9ae311119e300.png"},21307:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/modules_roles-f201eee87ec3f4d231da1483fd2c66e3.png"},3389:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AgentsKit-Icon-d790626da1d452d4369dd7cf814b7dfe.png"},71232:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataspace_agent_small-642e7a6e2628558bcedd585bb6e3935a.png"},47682:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataspace_roles_small-a89af4be34c4336543301064c9483f79.png"},89786:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/modules_roles_small-98b6fe0625b9d454915e69feb6813f0b.png"}}]);