"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[307],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(2685),a=(n(7378),n(5318));const o={title:"Test Utils",sidebar_position:5},i=void 0,s={unversionedId:"testing/test-utils",id:"testing/test-utils",title:"Test Utils",description:"run Helper Method",source:"@site/docs/testing/test-utils.md",sourceDirName:"testing",slug:"/testing/test-utils",permalink:"/docs/testing/test-utils",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/testing/test-utils.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Test Utils",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom Jest Matcher",permalink:"/docs/testing/entity-matcher"}},l={},p=[{value:"<code>run</code> Helper Method",id:"run-helper-method",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"run-helper-method"},(0,a.kt)("inlineCode",{parentName:"h2"},"run")," Helper Method"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeepNew")," provided by Joist's ",(0,a.kt)("a",{parentName:"p",href:"/docs/testing/test-factories"},"test factories")," allows ergonomically asserting against entities without ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),"s, it assumes that no other code (i.e. a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),") has mutated the entities in the underlying database."),(0,a.kt)("p",null,'However, often it\'s desirable for your code-under-test to have a "clean slate" ',(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," that starts out completely empty, and isn't affected by your test's own setup code / own ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),", to avoid missing production bugs that only passed the tests b/c of a side effect in the test's ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"."),(0,a.kt)("p",null,"To support this, Joist provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function that will, given your test's ",(0,a.kt)("inlineCode",{parentName:"p"},"em"),", create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," and run the code-under-test against it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { run } from "joist-test-utils";\n\nit("creates a book", async () => {\n  const em = newEntityManager();\n  // Given an author\n  const a = newAuthor(em);\n  // When we perform the business logic\n  await run(em, (em) => performPostBook(em, { title: "t1" }));\n  // Then we have a new book\n  expect(a.books.get.length).toEqual(1);\n  // And it has the right title\n  expect(a.books.get[0].title).toEqual("t1");\n});\n')),(0,a.kt)("p",null,"Furthermore, after the ",(0,a.kt)("inlineCode",{parentName:"p"},"performPostBook")," is executed, ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," will ",(0,a.kt)("strong",{parentName:"p"},"automatically refresh all entities")," in your test's ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),", so that they see the latest values that the code-under-test's ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," committed to the database."),(0,a.kt)("p",null,"This means we can immediately assert against ",(0,a.kt)("inlineCode",{parentName:"p"},"a.books.get"),' without needing to load "a 2nd ',(0,a.kt)("inlineCode",{parentName:"p"},"Author"),'" instance for the same row, which can be really common in tests that interact with a stateful database:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const a1 = newAuthor(em);\nawait performPostBook(em);\n// Example of what we _don't_ need to do: reload a1\nawait a1_2 = em.load(Author, a1.idOrFail);\nexpect(a.books.get.length).toEqual(1);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"run")," accomplishes this by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager.refresh")," method, which reloads all currently-loaded entities from the database."))}u.isMDXComponent=!0}}]);