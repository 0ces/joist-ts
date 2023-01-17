"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[925],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(2685),r=(a(7378),a(5318));const s={title:"Fast Database Resets",sidebar_position:1},o=void 0,i={unversionedId:"testing/fast-database-resets",id:"testing/fast-database-resets",title:"Fast Database Resets",description:"To reset the database between each unit test, Joist's joist-codegen command generates a flush_database stored procedure  that will delete all rows/reset the sequence ids:",source:"@site/docs/testing/fast-database-resets.md",sourceDirName:"testing",slug:"/testing/fast-database-resets",permalink:"/docs/testing/fast-database-resets",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/testing/fast-database-resets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Fast Database Resets",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Factories",permalink:"/docs/testing/test-factories"},next:{title:"Custom Jest Matcher",permalink:"/docs/testing/entity-matcher"}},l={},p=[{value:"What About Per-Test Transactions?",id:"what-about-per-test-transactions",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To reset the database between each unit test, Joist's ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-codegen")," command generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_database")," stored procedure ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," that will delete all rows/reset the sequence ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'await knex.select(knex.raw("flush_database()"));\n')),(0,r.kt)("p",null,"This is generated at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-codegen"),", which should only be invoked against local development databases, i.e. this function should never exist in your production database. It is only for local testing."),(0,r.kt)("p",null,"Your test suite should invoke this ",(0,r.kt)("inlineCode",{parentName:"p"},"knex.select")," command in a suite-test ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach"),"."),(0,r.kt)("h3",{id:"what-about-per-test-transactions"},"What About Per-Test Transactions?"),(0,r.kt)("p",null,"As an alternative to Joist's ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_database")," approach, some ORMs invoke tests in a transaction, and then rollback the transaction before the next test (i.e. Rails does this)."),(0,r.kt)("p",null,"However, this has a few downsides:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Debugging failed tests is more difficult b/c the data you want to investigate via ",(0,r.kt)("inlineCode",{parentName:"li"},"psql")," has disappeared/been rolled back, and"),(0,r.kt)("li",{parentName:"ol"},"Your tests cannot test any behavior that uses transactions.")),(0,r.kt)("p",null,"For this reasons, Joist prefers the ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_database")," approach, however you could still use the transaction-per-test approach by putting ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK")," commands in your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach"),"."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_database")," is the only stored procedure that Joist uses, and opting for a stored procedure is solely an optimization (1 SQL statement to reset all tables) to keep tests as fast as possible."))}d.isMDXComponent=!0}}]);