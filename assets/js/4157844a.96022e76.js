"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(2685),a=(n(7378),n(5318));const i={},l=void 0,o={unversionedId:"features/graphql-filters",id:"features/graphql-filters",title:"graphql-filters",description:"GraphQL-Compatible Filters",source:"@site/docs/features/graphql-filters.md",sourceDirName:"features",slug:"/features/graphql-filters",permalink:"/docs/features/graphql-filters",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/graphql-filters.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Soft Deletes",permalink:"/docs/features/soft-deletes"},next:{title:"Lenses",permalink:"/docs/features/lenses"}},p={},s=[{value:"GraphQL-Compatible Filters",id:"graphql-compatible-filters",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"graphql-compatible-filters"},"GraphQL-Compatible Filters"),(0,a.kt)("p",null,"Joist's ",(0,a.kt)("inlineCode",{parentName:"p"},"find"),' supports the standard "filter as object literal" pattern, i.e.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const authors = em.find(Author, { age: { gte: 20 } });\n")),(0,a.kt)("p",null,"And the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorFilter")," type that drives this query is fairly picky, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"age: null")," is not a valid query if the age column is not null."),(0,a.kt)("p",null,"This works great for TypeScript code, but when doing interop with GraphQL (i.e. via types generated by graphql-code-generator), Joist's normal ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorFilter")," typing is \"too good\", i.e. while GraphQL's type system is great, it is more coarse than TypeScript's, so you end up with things like ",(0,a.kt)("inlineCode",{parentName:"p"},"age: number | null | undefined")," on the GQL filter type."),(0,a.kt)("p",null,"To handle this, Joist generates separate GraphQL-specific filter types, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorGraphQLFilter"),", that can fairly seamlessly integrate with GraphQL queries with a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"findGql")," query methods."),(0,a.kt)("p",null,"I.e. given some generated GraphQL types like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Example AuthorFilter generated by graphql-code-generator. */\ninterface GraphQLAuthorFilter {\n  age?: GraphQLIntFilter | null | undefined;\n}\n\n/** Example IntFilter generated by graphql-code-generator. */\ninterface GraphQLIntFilter {\n  eq?: number | null | undefined;\n  in?: number[] | null | undefined;\n  lte?: number | null | undefined;\n  lt?: number | null | undefined;\n  gte?: number | null | undefined;\n  gt?: number | null | undefined;\n  ne?: number | null | undefined;\n}\n")),(0,a.kt)("p",null,"Joist's ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager.findGql"),' will accept the filter type as-is / "directly off the wire" without any cumbersome mapping:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// I.e. from the GraphQL args.filter parameter\nconst gqlFilter: GraphQLAuthorFilter = {\n  age: { eq: 2 },\n};\nconst authors = await em.findGql(Author, gqlFilter);\n")),(0,a.kt)("p",null,"Also note that while the ",(0,a.kt)("inlineCode",{parentName:"p"},"age: { eq: 2 }"),' is a really clean way to write filters by hand, it can be annoying to dynamically create, i.e. in a UI that needs to conditionally change the operator from "equals" to "not equals", because there is not a single key to bind against in the input type.'),(0,a.kt)("p",null,"To make building these UIs easier, ",(0,a.kt)("inlineCode",{parentName:"p"},"findGql"),' also accepts a "more-boring" ',(0,a.kt)("inlineCode",{parentName:"p"},'{ op: "gt", value: 1 }')," syntax. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"op")," key can be any of the supported operators, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"gt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gte"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ne"),", etc."))}c.isMDXComponent=!0}}]);