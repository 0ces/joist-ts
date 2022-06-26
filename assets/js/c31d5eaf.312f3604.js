"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[939],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(2685),o=n(1244),i=(n(7378),n(5318)),r=["components"],s={title:"Test Factories",sidebar_position:1},l=void 0,p={unversionedId:"testing/test-factories",id:"testing/test-factories",title:"Test Factories",description:"Joist generates customizable factories for easily creating test data.",source:"@site/docs/testing/test-factories.md",sourceDirName:"testing",slug:"/testing/test-factories",permalink:"/docs/testing/test-factories",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/testing/test-factories.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Test Factories",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Fast Database Resets",permalink:"/docs/testing/fast-database-resets"},next:{title:"Custom Matchers",permalink:"/docs/testing/entity-matcher"}},u={},c=[{value:"Auto-Refreshing Test Instances",id:"auto-refreshing-test-instances",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Joist generates customizable factories for easily creating test data."),(0,i.kt)("p",null,"I.e. for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity, Joist will one-time generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.factories.ts")," file that looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { EntityManager, FactoryOpts, New, newTestInstance } from "joist-orm";\nimport { Book } from "./entities";\n\nexport function newBook(em: EntityManager, opts?: FactoryOpts<Book>): New<Book> {\n  return newTestInstance(em, Book, opts);\n}\n')),(0,i.kt)("p",null,"Tests can then invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"newBook")," with as little opts as they want, and all required defaults (both fields and entities) will be filled in."),(0,i.kt)("p",null,"I.e. since ",(0,i.kt)("inlineCode",{parentName:"p"},"book.author_id")," is a not-null column, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"const b1 = newBook()")," will create both a ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," (required primitive field) as well as create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," (required foreign key/many-to-one field) and assign it to ",(0,i.kt)("inlineCode",{parentName:"p"},"b1.author"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const b = newBook();\nexpect(b.title).toEqual("title");\nexpect(b.author.get.firstName).toEqual("firstName");\n')),(0,i.kt)("p",null,"This creation is recursive, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"newBookReview()")," will make a new ",(0,i.kt)("inlineCode",{parentName:"p"},"BookReview"),", a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," (required for ",(0,i.kt)("inlineCode",{parentName:"p"},"bookReview.book"),"), and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," (required for ",(0,i.kt)("inlineCode",{parentName:"p"},"book.author"),")."),(0,i.kt)("p",null,"You can also pass partials for either the book or the author:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const b = newBook({ author: { firstName: "a1" } });\n// title was not in opts, so it gets the same default\nexpect(b.title).toEqual("title");\n// author.firstName was in opts, so it\'s used for the firstName field\nexpect(b.author.get.firstName).toEqual("a1");\n')),(0,i.kt)("p",null,"The factories will usually make new entities for required fields, but will reuse an existing instance if:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," already as a ",(0,i.kt)("em",{parentName:"p"},"single")," instance of that entity. I.e.:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// We have a single author\nconst a = newAuthor();\n// Making a new book will see "there is only 1 author" and assume we want to use that\nconst b = newBook();\nexpect(b.author.get).toEqual(a);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you pass entities as a ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," parameter. I.e.:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// We have multiple authors\nconst a1 = newAuthor();\nconst a2 = newAuthor();\n// Make a new book review, but use a2 instead of creating a new Author\nconst br = newBookReview({ use: a2 });\n")),(0,i.kt)("p",{parentName:"li"},"This will make a new ",(0,i.kt)("inlineCode",{parentName:"p"},"BookReview"),", and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),", but when filling in ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.author"),", it will use ",(0,i.kt)("inlineCode",{parentName:"p"},"a2"),"."),(0,i.kt)("p",{parentName:"li"},"(Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"use"),' is specifically useful for passing entities to use "several levels up the tree", i.e. if you were making a ',(0,i.kt)("inlineCode",{parentName:"p"},"newBook")," you could directly pass ",(0,i.kt)("inlineCode",{parentName:"p"},"newBook({ author: a2 })"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"newBookReview")," example, author is not immediately set on the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookReview")," itself, so we put ",(0,i.kt)("inlineCode",{parentName:"p"},"a2")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"use"),' opt for the factories to "use it as needed/up the tree".)'))),(0,i.kt)("p",null,"The factory files can be customized, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newBook(em: EntityManager, opts?: FactoryOpts<Book>): New<Book> {\n  return newTestInstance(em, Book, {\n    // Assume every book should have 1 review by default. This can be a partial that will\n    // be recursively filled in. It will also be ignored if the caller passes\n    // their own `newBook(em, { reviews: ... })` opt.\n    reviews: [{}]\n    // Give a unique-ish name, testIndex will be 1/2/etc increasing and reset per-test\n    title: `b${testIndex}`\n    ...opts\n  });\n}\n")),(0,i.kt)("p",null,"And then every caller of ",(0,i.kt)("inlineCode",{parentName:"p"},"newBook")," will get these defaults."),(0,i.kt)("p",null,"Note that you can also customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"opts")," type to add your own application-specific hints, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newBook(em: EntityManager, opts?: FactoryOpts<Book> & { withManyReview?: boolean }): New<Book> {\n  // if opts?.withManyReview then make 10 reviews\n}\n")),(0,i.kt)("h3",{id:"auto-refreshing-test-instances"},"Auto-Refreshing Test Instances"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.refresh")," method reloads all currently-loaded entities from the database, as well as any of their loaded relations (i.e. if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"author1.books")," loaded and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"books")," row is added with ",(0,i.kt)("inlineCode",{parentName:"p"},"author_id=1"),", then after ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh()")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"author1.books")," collection will have the newly-added book in it)."),(0,i.kt)("p",null,"This is primarily useful for tests, where you want to do behavior like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Given an author\nconst a = em.create(Author, { ... });\n// When we perform the business logic\n// (...assumme this is a test helper method that invokes the logic and\n// then calls EntityManager.refresh before returning)\nawait run(em, (em) => invokeBusinessLogicUnderTest(em));\n// Then we have a new book\nexpect(a.books.get.length).toEqual(1);\n\n// Defined as a helper method\nasync function run<T>(em, fn: async () => Promise<T>): Promise<T> {\n  // Flush existing test data to the db\n  await em.flush();\n  // Make a new `em` however that is done for your app\n  const em2 = newEntityManager();\n  // Invoke business logic under test\n  const result = await fn(em2);\n  // Reload our test's em to have the latest data\n  await em.refresh();\n}\n")),(0,i.kt)("p",null,"This runs ",(0,i.kt)("inlineCode",{parentName:"p"},"invokeBusinessLogicUnderTest")," in its own transaction/",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance (to avoid accidentally relying on the test's ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," state), but after ",(0,i.kt)("inlineCode",{parentName:"p"},"invokeBusinessLogicUnderTest")," completes, the test's Author ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," local variable can be used for assertions and will have the latest & great data from the database."),(0,i.kt)("p",null,"Without this approach, tests often jump through various hoops like having duplicate ",(0,i.kt)("inlineCode",{parentName:"p"},"a1"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"a1Reloaded")," variables that are explicitly loaded:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const a1 = em.create(Author, { ... });\nawait invokeBusinessLogicUnderTest(em);\n// load the latest a1\nawait a1_2 = em.load(Author, a1.idOrFail);\n")),(0,i.kt)("p",null,"Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.refresh")," method and the ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),' helper method convention let\'s you avoid doing this "load the latest X" in all of your tests.'))}m.isMDXComponent=!0}}]);