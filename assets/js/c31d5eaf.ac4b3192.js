"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[939],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(2685),o=(n(7378),n(5318));const i={title:"Test Factories",sidebar_position:0},r=void 0,s={unversionedId:"testing/test-factories",id:"testing/test-factories",title:"Test Factories",description:"Joist generates customizable factories for easily creating test data. The idea is very similar to generic tools like Fishery, but with deep/native integration with Joist.",source:"@site/docs/testing/test-factories.md",sourceDirName:"testing",slug:"/testing/test-factories",permalink:"/docs/testing/test-factories",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/testing/test-factories.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Test Factories",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"graphql-filters",permalink:"/docs/features/graphql-filters"},next:{title:"Fast Database Resets",permalink:"/docs/testing/fast-database-resets"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Defaults for Primitives",id:"defaults-for-primitives",level:3},{value:"Unique Strings",id:"unique-strings",level:3},{value:"Defaults for References",id:"defaults-for-references",level:3},{value:"Reusing Existing Entities",id:"reusing-existing-entities",level:3},{value:"Forcing New Entities",id:"forcing-new-entities",level:4},{value:"Reusing Entities With <code>use</code>",id:"reusing-entities-with-use",level:4},{value:"Defaults for Collections",id:"defaults-for-collections",level:3},{value:"Custom Opts",id:"custom-opts",level:3},{value:"<code>async</code> Free Assertions",id:"async-free-assertions",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Joist generates customizable factories for easily creating test data. The idea is very similar to generic tools like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thoughtbot/fishery"},"Fishery"),", but with deep/native integration with Joist."),(0,o.kt)("p",null,"Joist fundamentally assumes the database is reset between each test (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/testing/fast-database-resets"},"Fast Database Resets"),"), and so allowing tests to succinctly create the entire graph of entities they need is a key part of Joist's developer experience."),(0,o.kt)("p",null,"Note that Joist's factories are ",(0,o.kt)("strong",{parentName:"p"},"not intended to be used in production code"),"; they are only for quickly creating synthetic data in unit tests."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"For example, given a ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," entity, Joist will generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.factories.ts")," file that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { EntityManager, FactoryOpts, New, newTestInstance } from "joist-orm";\nimport { Book } from "./entities";\n\nexport function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts);\n}\n')),(0,o.kt)("p",null,"Tests can then call ",(0,o.kt)("inlineCode",{parentName:"p"},"newBook")," with as few opts as they want, and all required fields (for both primitives and relations) will be filled in."),(0,o.kt)("p",null,"For example, since ",(0,o.kt)("inlineCode",{parentName:"p"},"book.author_id")," is a not-null column, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"const b1 = newBook()")," will create both a ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," (required primitive field) as well as create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," (required foreign key/many-to-one field) and assign it to ",(0,o.kt)("inlineCode",{parentName:"p"},"b1.author"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const b = newBook(em);\nexpect(b.title).toEqual("title");\nexpect(b.author.get.firstName).toEqual("firstName");\n')),(0,o.kt)("p",null,"This creation is recursive, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"newBookReview()")," will make a new ",(0,o.kt)("inlineCode",{parentName:"p"},"BookReview"),", a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," (required for ",(0,o.kt)("inlineCode",{parentName:"p"},"bookReview.book"),"), and a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," (required for ",(0,o.kt)("inlineCode",{parentName:"p"},"book.author"),")."),(0,o.kt)("p",null,"Importantly, you can also pass partials for either the book or the author:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given a book by the author "a1"\nconst b = newBook(em, { author: { firstName: "a1" } });\n// Then we got the default title\nexpect(b.title).toEqual("title");\n// And "a1" was used as the author\'s firstName\nexpect(b.author.get.firstName).toEqual("a1");\n')),(0,o.kt)("p",null,"This is key so that your tests can ",(0,o.kt)("strong",{parentName:"p"},"set only the minimum amount of fields necessary to specify their boundary case"),", and defer to the factories for any other irrelevant boilerplate."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"defaults-for-primitives"},"Defaults for Primitives"),(0,o.kt)("p",null,"Factories can provide test suite-wide defaults, for example providing a default age:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Default Authors (only within tests) to age 40\nexport function newAuthor(em: EntityManager, opts: FactoryOpts<Author> = {}): New<Author> {\n  return newTestInstance(em, Author, opts, {\n    age: 40,\n  });\n}\n")),(0,o.kt)("p",null,"And then every ",(0,o.kt)("inlineCode",{parentName:"p"},"newAuthor")," will have an ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," of 40, unless a test specifically requires a different age:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Given an author that is 30\nconst a = newAuthor(em, { age: 30 });\n// Then we didn't use the default age\nexpect(a.age).toEqual(30);\n")),(0,o.kt)("h3",{id:"unique-strings"},"Unique Strings"),(0,o.kt)("p",null,"If you have a field that must be unique, like ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," with a database-enforce ",(0,o.kt)("inlineCode",{parentName:"p"},"UNIQUE")," constraint, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"testIndex")," helper to automatically create unique-but-deterministic values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { testIndex } from "joist-orm";\n\nexport function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    // Make a unique name, `testIndex` will be 1/2/etc increasing and reset per-test\n    title: `b${testIndex}`,\n  });\n}\n')),(0,o.kt)("h3",{id:"defaults-for-references"},"Defaults for References"),(0,o.kt)("p",null,"Factories can also provide default entities, for example a book creating a default author:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    author: {},\n  });\n}\n")),(0,o.kt)("p",null,"Note that, if ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," was required, we would not have to explicitly pass ",(0,o.kt)("inlineCode",{parentName:"p"},"author: {}"),"; we'd only pass ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"newTestInstance")," if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"author")," field is not required, but we want all test ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),"s to have one anyway"),(0,o.kt)("li",{parentName:"ul"},"We want all ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),"s' authors to themselves have some specific defaults, like ",(0,o.kt)("inlineCode",{parentName:"li"},"author: { age: 30 }"),","),(0,o.kt)("li",{parentName:"ul"},"We want to explicitly create a ",(0,o.kt)("em",{parentName:"li"},"new")," author (see the next point)")),(0,o.kt)("h3",{id:"reusing-existing-entities"},"Reusing Existing Entities"),(0,o.kt)("p",null,'When factories need to set a relation field, they will first look for an "obvious default" entity before creating a new entity.'),(0,o.kt)("p",null,'This is useful for stitching together complex schemas, because it means validation rules like "a ',(0,o.kt)("inlineCode",{parentName:"p"},"BookReview")," must have the same ",(0,o.kt)("inlineCode",{parentName:"p"},"bookReview.author")," as its ",(0,o.kt)("inlineCode",{parentName:"p"},"bookReview.author.book"),'" (pretending that ',(0,o.kt)("inlineCode",{parentName:"p"},"BookReview")," had its own ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),' field) will pass "for free" because we don\'t "sprawl out" and continually create new/unnecessary entities.'),(0,o.kt)("p",null,"That said, Joist will only reuse an entity if there is a ",(0,o.kt)("em",{parentName:"p"},"single")," instance of that entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given we have a single author\nconst a = newAuthor(em);\n// Then newBook will see "there is only 1 author" and assume we want that one\nconst b = newBook(em);\nexpect(b.author.get).toEqual(a);\n')),(0,o.kt)("p",null,"If there are multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"s created in the test, Joist sees it as ambiguous which one it should use, and so creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given we have two existing Authors\nconst [a1, a2] = [newAuthor(em), newAuthor(em)];\n// Then newBook will create a 3rd Author\nconst b = newBook(em);\nexpect(b.author.get.name).toEqual("a3");\n')),(0,o.kt)("h4",{id:"forcing-new-entities"},"Forcing New Entities"),(0,o.kt)("p",null,"If you want to a specific field to never reuse existing entities, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),' as a marker for "always create a new entity":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    author: {},\n  });\n}\n")),(0,o.kt)("h4",{id:"reusing-entities-with-use"},"Reusing Entities With ",(0,o.kt)("inlineCode",{parentName:"h4"},"use")),(0,o.kt)("p",null,"As covered, if your test has already created multiple entities of a given type (e.g. multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),'s), Joist will not use them as "obvious defaults", but if you want to nominate a specific ',(0,o.kt)("inlineCode",{parentName:"p"},"Author")," as the default for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"newBookReview")," call, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// We have multiple authors\nconst [a1, a2] = [newAuthor(em), newAuthor(em)];\n// Make a new book review, but use a2 instead of creating a new Author\nconst br = newBookReview(em, { use: a2 });\n")),(0,o.kt)("h3",{id:"defaults-for-collections"},"Defaults for Collections"),(0,o.kt)("p",null,'If you have validation rules like "all ',(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"s must have at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),'", the ',(0,o.kt)("inlineCode",{parentName:"p"},"newAuthor")," factory can create valid-by-default ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"s by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"books: [{}]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newAuthor(em: EntityManager, opts: FactoryOpts<Author> = {}): New<Author> {\n  return newTestInstance(em, Author, opts, {\n    // Every Author has at least one Book\n    books: [{}],\n  });\n}\n")),(0,o.kt)("p",null,'Note that, due to the native factory integration, Joist is smart enough that if you create the graph "bottom up" and call ',(0,o.kt)("inlineCode",{parentName:"p"},"newBook()"),", it will be smart enough to know that ",(0,o.kt)("inlineCode",{parentName:"p"},"newAuthor")," should not create a 2nd book:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Given we create a book\nconst b = newBook(em);\n// Then `newAuthor` was effectively passed `books: [b]` and did not create a 2nd book\nexpect(b.author.get.books.get.length).toBe(1);\n")),(0,o.kt)("h3",{id:"custom-opts"},"Custom Opts"),(0,o.kt)("p",null,"Besides just setting existing entity fields, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.firstName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Books.author"),', Joist\'s factories allow you to declare custom, factory-specific opts so that multiple tests can request the similar "pre-baked" test data from a factory.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In fishery, these are called transient params.")),(0,o.kt)("p",null,"For example, a test might need to create a somewhat large graph of test data for a business scenario, perhaps a ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," with a signed contract with a larger publisher (this is not that big, but it's a good example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given a book that is signed with a large publisher\nconst b = newBook(em, {\n  author: {\n    contracts: [{ signed: true, publisher: { type: "large" } }],\n  },\n});\n')),(0,o.kt)("p",null,'If this "create a book ... with an author ... with a contract ... that is signed" is a common requirement for tests, it can be cumbersome to copy/paste this snippet across many tests, and keep it up to date (perhaps ',(0,o.kt)("inlineCode",{parentName:"p"},"signed")," changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"signedOn")," timestamp)."),(0,o.kt)("p",null,"Instead, Joist's factories allow you to add a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"withSignedContract")," opt to the ",(0,o.kt)("inlineCode",{parentName:"p"},"newBook")," factory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Add an optional `withSignedContract` opt\nexport function newBook(\n  em: EntityManager,\n  opts: FactoryOpts<Book> & { withSignedContract?: boolean } = {},\n): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    // Conditionally create the snippet when requested\n    ...(opts.withSignedContract\n      ? { author: { contracts: [{ signed: true, publisher: { type: "large" } }] } }\n      : {}),\n  });\n}\n')),(0,o.kt)("p",null,"And now tests can request this behavior for free:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given we have a book with a signed contract\nconst book = newBook(em, { title: "b1", withSignedContract: true });\n// And it also works if going through BookReview\nconst br = newBookReview(em, { book: { withSignedContract: true } });\n')),(0,o.kt)("p",null,"In general, we have two recommendations for this feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Be careful and don't abuse it; tests are simplest to read when any assertions they have are against data that is specified directly inline in the \"Given\" block; if you've abstracted too much of your test's setup to a custom opt, it will hurt readability."),(0,o.kt)("p",{parentName:"li"},"Also, custom opts are a slippery slope to the seed data anti-pattern, where the seed data becomes so large & gnarly (because it's been tweaked over the years to support more and more disparate test cases), that the seed data becomes very brittle and can't be changed without failing a ton of tests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use prefixes like ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," in the names of custom opts, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"withSignedContract")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"andSigned")," to make it clear to readers that the opt is custom and not actually a regular database/entity field."))),(0,o.kt)("h2",{id:"async-free-assertions"},(0,o.kt)("inlineCode",{parentName:"h2"},"async")," Free Assertions"),(0,o.kt)("p",null,"In production code, Joist relations must be accessed asynchronously, i.e. either with ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," calls or ",(0,o.kt)("inlineCode",{parentName:"p"},"populate")," preloads:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Call load directly\nconst b1 = await em.load(Book, "b:1");\nconst a1 = await book.author.load();\n// Use a preload\nconst b2 = await em.load(Book, "b:2", "author");\nconst a2 = book.author.get;\n')),(0,o.kt)("p",null,'However, because in tests we "just know" there is not that much data, and the factories control the instantiation of entities, we can make the assumption that all relations are loaded by default. So factories return a ',(0,o.kt)("inlineCode",{parentName:"p"},"DeepNew")," type that marks all relations as loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'it("some test", async () => {\n  const em = newEntityManager();\n  // Given a book\n  const b1 = newBook(em);\n  // When we exercise our production code\n  performSomeBusinessLogic(b1);\n  // Then we can assert against b1.authors w/o an await/load\n  expect(b1.authors.get.length).toBe(1);\n  // And we can assert against the author\'s publisher\n  expect(b1.authors.get[0].publisher.get.name).toBe("p1");\n});\n')),(0,o.kt)("p",null,"This capability can dramatically clean up test assertions, by removing the need for ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," calls."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Also see Joist's ",(0,o.kt)("a",{parentName:"p",href:"/docs/testing/entity-matcher"},"toMatchEntity"),", which provides another ergonomic way to assert against entities.")))}c.isMDXComponent=!0}}]);