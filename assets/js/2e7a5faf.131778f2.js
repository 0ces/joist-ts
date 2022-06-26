"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[896],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(t),d=o,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(2685),o=t(1244),a=(t(7378),t(5318)),i=["components"],l={title:"Relation Helpers"},u=void 0,s={unversionedId:"modeling/relation-helpers",id:"modeling/relation-helpers",title:"Relation Helpers",description:"hasOneThrough",source:"@site/docs/modeling/relation-helpers.md",sourceDirName:"modeling",slug:"/modeling/relation-helpers",permalink:"/docs/modeling/relation-helpers",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/relation-helpers.md",tags:[],version:"current",frontMatter:{title:"Relation Helpers"},sidebar:"tutorialSidebar",previous:{title:"JSONB Fields",permalink:"/docs/modeling/jsonb-fields"},next:{title:"Finders",permalink:"/docs/querying/finders"}},p={},c=[{value:"hasOneThrough",id:"hasonethrough",level:3},{value:"hasManyThrough",id:"hasmanythrough",level:3},{value:"hasOneDerived",id:"hasonederived",level:3}],h={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"hasonethrough"},"hasOneThrough"),(0,a.kt)("p",null,"You can define common paths through your entity graph with ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneThrough"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class BookReview extends BookReviewCodegen {\n  readonly author: Reference<BookReview, Author, never> = hasOneThrough((review) => review.book.author);\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," DSL is built on Joist's ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomReferences"),", so will also work with ",(0,a.kt)("inlineCode",{parentName:"p"},"populate"),", i.e.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const review = await em.load(BookReview, "1", { author: "publisher" });\nexpect(review.author.get.publisher.get.name).toEqual("p1");\n')),(0,a.kt)("h3",{id:"hasmanythrough"},"hasManyThrough"),(0,a.kt)("p",null,"You can define common paths through your entity graph with ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneThrough"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class BookReview extends BookReviewCodegen {\n  readonly author: Reference<BookReview, Author, never> = hasOneThrough((review) => review.book.author);\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," DSL is built on Joist's ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomReferences"),", so will also work with ",(0,a.kt)("inlineCode",{parentName:"p"},"populate"),", i.e.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const review = await em.load(BookReview, "1", { author: "publisher" });\nexpect(review.author.get.publisher.get.name).toEqual("p1");\n')),(0,a.kt)("h3",{id:"hasonederived"},"hasOneDerived"),(0,a.kt)("p",null,"You can define a relation that is conditional with ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneDerived"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'readonly publisher: Reference<BookReview, Publisher, undefined> = hasOneDerived(\n  { book: { author: "publisher" } },\n  (review) => {\n    // some conditional logic here, but review is loaded\n    return review.book.get.author.get.publisher.get\n  },\n);\n')),(0,a.kt)("p",null,"This works a lot like ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOneThrough"),", but if useful for when you have conditional navigation logic, instead of a fixed navigation path."))}d.isMDXComponent=!0}}]);