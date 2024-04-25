"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[76038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Deploy components",sidebar_position:2},s=void 0,l={unversionedId:"tutorials/e2e/connect/deployComponents",id:"tutorials/e2e/connect/deployComponents",title:"Deploy components",description:'The "MXD" dataspace initially consists of several components: Alice and Bob (two Tractus-X EDC connectors),',source:"@site/docs/tutorials/e2e/connect/deployComponents.md",sourceDirName:"tutorials/e2e/connect",slug:"/tutorials/e2e/connect/deployComponents",permalink:"/docs/tutorials/e2e/connect/deployComponents",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/connect/deployComponents.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy components",sidebar_position:2},sidebar:"tutorials",previous:{title:"Prepare the infrastructure",permalink:"/docs/tutorials/e2e/connect/prepareInfrastructure"},next:{title:"Chapter 3: Boost",permalink:"/docs/tutorials/e2e/boost/"}},i={},c=[{value:"Inspect terraform output",id:"inspect-terraform-output",level:2},{value:"Inspect the databases",id:"inspect-the-databases",level:2},{value:"Verify your local installation",id:"verify-your-local-installation",level:2},{value:"Notice",id:"notice",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The "MXD" dataspace initially consists of several components: ',(0,o.kt)("inlineCode",{parentName:"p"},"Alice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob")," (two Tractus-X EDC connectors),\na Vault instance each, a Postgres database, a Managed Identity Wallet app, a Keycloak instance. ",(0,o.kt)("inlineCode",{parentName:"p"},"Alice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob")," will\nbe our dataspace participants. Each of them stores their secrets in their respective vault instances, and there is a\nshared Postgres server, where each of them has a database. MIW and Keycloak are central components, they only exist\nonce and are accessible by all participants."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Since this documentation is based on a MXD version where tractusx-edc version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5.3")," is used, there is a need to adapt the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," inside the cloned repository ",(0,o.kt)("strong",{parentName:"p"},"tutorial-resources"),". The file is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial-resources/mxd/modules/connector/values.yaml")),(0,o.kt)("p",{parentName:"admonition"},"Instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag for the ",(0,o.kt)("strong",{parentName:"p"},"controlplane")," and ",(0,o.kt)("strong",{parentName:"p"},"dataplane")," image, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5.3"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# As an example for the controlplane\ncontrolplane:\n  debug:\n    enabled: true\n    port: 1044\n  service:\n    type: NodePort\n  endpoints:\n    management:\n      authKey: password\n  image:\n    pullPolicy: Never\n    #tag: "latest"\n    tag: "0.5.3"\n'))),(0,o.kt)("p",null,"For the most bare-bones installation of the dataspace, execute the following commands in a shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# get the tutorial including the config file for the cluster by cloning the repository locally\ngit clone  https://github.com/eclipse-tractusx/tutorial-resources.git\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# will install the mxd directory under <current working directory>/tutorial-resources/mxd\n# the directory should contain the config file for kind: kind.config.yaml\ncd <path/of/mxd>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster -n mxd --config kind.config.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \n# Now we activate ingress for the later port forwarding ?\n# the next step is specific to KinD and will be different for other Kubernetes runtimes!\nkubectl apply -f  \\\nhttps://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# wait until the ingress controller is ready\nkubectl wait --namespace ingress-nginx \\\n  --for=condition=ready pod \\\n  --selector=app.kubernetes.io/component=controller \\\n  --timeout=90s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"terraform init\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'terraform apply\n# type "yes" and press enter when prompted to do so \n')),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command deploys a Kubernetes Ingress Controller to the cluster and is required to reach\nour applications from outside the cluster. Specifically, it deploys an NGINX ingress controller. Notice also, that the\ncommand is ",(0,o.kt)("em",{parentName:"p"},"specific to KinD")," and will likely not work on other Kubernetes runtimes (minikube, ...) or with other\ningress controllers!"),(0,o.kt)("p",null,"Wait. Then wait some more. It will take a couple of minutes until all services are booted up. If your machine is a\npotato, it'll take even longer. Just get a coffee. Eventually, it should look similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:n(5438).Z,width:"3318",height:"1086"})),(0,o.kt)("h2",{id:"inspect-terraform-output"},"Inspect terraform output"),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform")," command has successfully completed, it will output a few configuration and setup values\nthat we will need in later steps. Please note that some values will be different on your local system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Outputs:\n\nalice-urls = {\n  "health" = "http://localhost/alice/health"\n  "management" = "http://localhost/alice/management/v2"\n}\nbob-node-ip = "10.96.248.22"\nbob-urls = {\n  "health" = "http://localhost/bob/health"\n  "management" = "http://localhost/bob/management/v2"\n}\nconnector1-aeskey = "R3BDWGF4SWFYZigmVj0oIQ=="\nconnector1-client-secret = "W3s1OikqRkxCbltfNDBmRg=="\nconnector2-aeskey = "JHJISjZAS0tSKlNYajJTZA=="\nconnector2-client-secret = "enFFUlkwQyZiJSRLQSohYg=="\nkeycloak-database-credentials = {\n  "database" = "miw"\n  "password" = "Tn*iwPEuCgO@d==R"\n  "user" = "miw_user"\n}\nkeycloak-ip = "10.96.103.80"\nmiw-database-pwd = {\n  "database" = "keycloak"\n  "password" = "W:z)*mnHdy(DTV?+"\n  "user" = "keycloak_user"\n}\npostgres-url = "jdbc:postgresql://10.96.195.240:5432/"\n')),(0,o.kt)("h2",{id:"inspect-the-databases"},"Inspect the databases"),(0,o.kt)("p",null,"Please be aware, that all services and applications that were deployed in the previous step, are ",(0,o.kt)("strong",{parentName:"p"},"not")," accessible from\noutside the Kubernetes cluster. That means, for example, the Postgres database cannot be reached out-of-the-box."),(0,o.kt)("p",null,"Naturally there are several ways to enable access to those services (Load balancers, Ingresses, etc.) but for the sake\nof simplicity we will use a plain Kubernetes port-forwarding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# find out about the names of your pods\nkubectl get pods\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# you should see a list like:\nNAME                                                     READY   STATUS    RESTARTS   AGE\nalice-tractusx-connector-controlplane-6f7555bcb7-mhxh6   1/1     Running   0          4m\nalice-tractusx-connector-dataplane-6db78d69c5-sw87d      1/1     Running   0          4m\nalice-vault-0                                            1/1     Running   0          4m\nbob-tractusx-connector-controlplane-76ccd79946-84zjw     1/1     Running   0          4m\nbob-tractusx-connector-dataplane-85554c7dcd-6pzzs        1/1     Running   0          4m\nbob-vault-0                                              1/1     Running   0          4m\nkeycloak-6bdf4d7689-8mwfd                                1/1     Running   0          4m58s\nmiw-574bf87bc-c4n6c                                      1/1     Running   0          4m58s\npostgres-66677b8665-lxxp2                                1/1     Running   0          5m14s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\n# We will use the last entry for ingress for our port-forwarding, the name of the postgres pod will be slightly differnt in your local cluster.\n# now we activtae the kuberntes port-forwarding:\nkubectl port-forward postgres-66677b8665-lxxp2  5432:5432\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the actual pod name will be slightly different in your local cluster.")),(0,o.kt)("p",null,"Then, using PgAdmin, connect to the Postgres server at ",(0,o.kt)("inlineCode",{parentName:"p"},"jdbc:postgresql://localhost:5432/")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"user=postgres"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"password=postgres"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_1.png",src:n(29266).Z,width:"952",height:"634"})),(0,o.kt)("p",null,"Every service in the cluster has their own database, but for the sake of simplicity, they are hosted in one Postgres\nserver. We will show in later sections, how the databases can be segregated out. Feel free to\ninspect all the databases and tables, but there is not much data in there yet. There is just a few automatically seeded\nassets, policies and contract definitions."),(0,o.kt)("h2",{id:"verify-your-local-installation"},"Verify your local installation"),(0,o.kt)("p",null,"In order to check that the connectors were deployed successfully, please execute the following commands in a shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://localhost/bob/health/api/check/liveness | jq\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://localhost/alice/health/api/check/liveness | jq\n")),(0,o.kt)("p",null,"which should return something similar to this, the important part being the ",(0,o.kt)("inlineCode",{parentName:"p"},"isSystemHealthy: true")," bit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentResults": [\n    {\n      "failure": null,\n      "component": "Observability API",\n      "isHealthy": true\n    },\n    {\n      "failure": null,\n      "component": null,\n      "isHealthy": true\n    }\n  ],\n  "isSystemHealthy": true\n}\n')),(0,o.kt)("p",null,"Once we've established the basic readiness of our connectors, we can move on to inspect a few data items:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST http://localhost/bob/management/v3/assets/request -H "x-api-key: password" -H "content-type: application/json" | jq\n')),(0,o.kt)("p",null,"This queries the ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets")," endpoint returning the entire list of assets that ",(0,o.kt)("inlineCode",{parentName:"p"},"bob")," currently maintains. You should see\nsomething like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "@id": "1",\n        "@type": "edc:Asset",\n        "edc:properties": {\n            "edc:description": "Product EDC Demo Asset 1",\n            "edc:id": "1"\n        },\n        "edc:dataAddress": {\n            "@type": "edc:DataAddress",\n            "edc:proxyPath": "true",\n            "edc:type": "HttpData",\n            "edc:proxyQueryParams": "true",\n            "edc:baseUrl": "https://jsonplaceholder.typicode.com/todos"\n        },\n        "@context": {\n            "dct": "https://purl.org/dc/terms/",\n            "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n            "edc": "https://w3id.org/edc/v0.0.1/ns/",\n            "dcat": "https://www.w3.org/ns/dcat/",\n            "odrl": "http://www.w3.org/ns/odrl/2/",\n            "dspace": "https://w3id.org/dspace/v0.8/"\n        }\n    },\n    {\n        "@id": "2",\n        "@type": "edc:Asset",\n        "edc:properties": {\n            "edc:description": "Product EDC Demo Asset 2",\n            "edc:id": "2"\n        },\n        "edc:dataAddress": {\n            "@type": "edc:DataAddress",\n            "edc:proxyPath": "true",\n            "edc:type": "HttpData",\n            "edc:proxyQueryParams": "true",\n            "edc:baseUrl": "https://jsonplaceholder.typicode.com/todos"\n        },\n        "@context": {\n            "dct": "https://purl.org/dc/terms/",\n            "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n            "edc": "https://w3id.org/edc/v0.0.1/ns/",\n            "dcat": "https://www.w3.org/ns/dcat/",\n            "odrl": "http://www.w3.org/ns/odrl/2/",\n            "dspace": "https://w3id.org/dspace/v0.8/"\n        }\n    }\n]\n')),(0,o.kt)("p",null,"Note: the same thing can be done to inspect policies and contract definitions. The respective ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," commands are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# policies:\ncurl -X POST http://localhost/bob/management/v2/policydefinitions/request -H "x-api-key: password" -H "content-type: application/json" | jq\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# contract defs:\ncurl -X POST http://localhost/bob/management/v2/contractdefinitions/request -H "x-api-key: password" -H "content-type: application/json" | jq\n')),(0,o.kt)("p",null,"Alternatively, please check out the ",(0,o.kt)("a",{parentName:"p",href:"./postman"},"Postman collections here")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,o.kt)("li",{parentName:"ul"},"Source URL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}u.isMDXComponent=!0},5438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img-1babdca95999043880fd7b770eab6394.png"},29266:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scr_pgadmin1-51aee90a8fc943bc43caf504ce2eb739.png"}}]);