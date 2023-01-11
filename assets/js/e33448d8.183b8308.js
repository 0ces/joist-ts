"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[645],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(2685),o=(n(7378),n(5318));const i={title:"Entity Cloning",sidebar_position:4},r=void 0,l={unversionedId:"features/cloning",id:"features/cloning",title:"Entity Cloning",description:'Joist supporting cloning entities, to easily support feature requests like "duplicate this author", or "duplicate this author and all of their books".',source:"@site/docs/features/cloning.md",sourceDirName:"features",slug:"/features/cloning",permalink:"/docs/features/cloning",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/cloning.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Entity Cloning",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Soft Deletes",permalink:"/docs/features/soft-deletes"},next:{title:"Large Collections",permalink:"/docs/features/large-collections"}},p={},s=[{value:"Advanced Features",id:"advanced-features",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Joist supporting cloning entities, to easily support feature requests like "duplicate this author", or "duplicate this author and all of their books".'),(0,o.kt)("p",null,"To clone an entity, call ",(0,o.kt)("inlineCode",{parentName:"p"},"em.clone")," and pass a load-hint of the subgraph you want to be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," operation."),(0,o.kt)("p",null,"For example, to clone an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," plus all of their ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"s and all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"BookReview"),"s, you can call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = await em.load(Author, "a:1");\nconst a2 = await em.clone(a1, { books: "reviews" })\n')),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"em.clone")," is finished:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a2")," will be a copy of ",(0,o.kt)("inlineCode",{parentName:"li"},"a1")," with all the same primitive field values, but a new primary key/new identity"),(0,o.kt)("li",{parentName:"ul"},"Each ",(0,o.kt)("inlineCode",{parentName:"li"},"Book")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"a1.books")," will have a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Book")," instance created, and be correctly hooked up to ",(0,o.kt)("inlineCode",{parentName:"li"},"a2")," instead of the original ",(0,o.kt)("inlineCode",{parentName:"li"},"a1")),(0,o.kt)("li",{parentName:"ul"},"Each ",(0,o.kt)("inlineCode",{parentName:"li"},"BookReview")," in each ",(0,o.kt)("inlineCode",{parentName:"li"},"a1.books.reviews")," will have a new ",(0,o.kt)("inlineCode",{parentName:"li"},"BookReview")," instance created, and again be correctly up to the right newly-created ",(0,o.kt)("inlineCode",{parentName:"li"},"Book")," instance in ",(0,o.kt)("inlineCode",{parentName:"li"},"a2.books"))),(0,o.kt)("p",null,'Besides setting the correct "parent" ',(0,o.kt)("inlineCode",{parentName:"p"},"book.author")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"a2")," for each cloned child ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),", any other references/FKs in the newly-created entities that happened to point to also-cloned input entities (like ",(0,o.kt)("inlineCode",{parentName:"p"},"a1.favoriteBook")," pointing to ",(0,o.kt)("inlineCode",{parentName:"p"},"a1.books.get[0]"),") are adjusted to point to the correct/corresponding newly-cloned output entity."),(0,o.kt)("p",null,"Basically Joist will keep the subgraph of cloned entities intact."),(0,o.kt)("h3",{id:"advanced-features"},"Advanced Features"),(0,o.kt)("p",null,"When calling ",(0,o.kt)("inlineCode",{parentName:"p"},"em.clone"),", you can provide three config options to customize the behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"opts.deep")," is the load hint from above, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},'{ books: "reviews" }'),", that specifies the subgraph to clone.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"opts.skipIf")," is a function that accepts an entity and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if that entity should be skipped/not cloned:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// This will duplicate the author\'s books, but skip any book where the title includes `sea`\nconst duplicatedBooks = await em.clone(\n  author.books.get,\n  { skipIf: (original) => original.title.includes("sea") }\n);\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"opts.postClone")," is a function that accepts both the original entity and its new clone, to allow customizing to the clone:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// This will duplicate the author's books, and assign them to a different author\nconst duplicatedBooks = await em.clone(\n  author.books.get,\n  { postClone: (_original, clone) => clone.author.set(author2) }\n);\n")))))}u.isMDXComponent=!0}}]);