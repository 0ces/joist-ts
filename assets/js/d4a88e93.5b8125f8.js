"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{5318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1808:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(5773),i=a(808),o=(a(7378),a(5318)),r=["components"],s={title:"Schema Assumptions",sidebar_position:3},l=void 0,p={unversionedId:"getting-started/schema-assumptions",id:"getting-started/schema-assumptions",isDocsHomePage:!1,title:"Schema Assumptions",description:"Joist makes several assumptions about your database schema, as described below.",source:"@site/docs/getting-started/schema-assumptions.md",sourceDirName:"getting-started",slug:"/getting-started/schema-assumptions",permalink:"/joist-ts/docs/getting-started/schema-assumptions",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/schema-assumptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Schema Assumptions",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adding to Your Project",permalink:"/joist-ts/docs/getting-started/adding-to-your-project"},next:{title:"Overview",permalink:"/joist-ts/docs/goals"}},m=[{value:"Entity Tables",id:"entity-tables",children:[],level:3},{value:"Enums as Tables",id:"enums-as-tables",children:[],level:3},{value:"Many-to-many tables",id:"many-to-many-tables",children:[],level:3},{value:"Deferred Foreign Key Constraints",id:"deferred-foreign-key-constraints",children:[],level:3},{value:"Composite Primary Keys",id:"composite-primary-keys",children:[],level:3}],d={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Joist makes several assumptions about your database schema, as described below."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ideally you are developing your database schema greenfield with Joist from day one, so you can just adopt these assumptions/conventions from the beginning."),(0,o.kt)("p",{parentName:"div"},"However, if this is not the case, hopefully it would not be too bad to nudge your schema towards what Joist expects."),(0,o.kt)("p",{parentName:"div"},"Eventually Joist may have configuration options to work with different schema conventions, but today is does not. "))),(0,o.kt)("h3",{id:"entity-tables"},"Entity Tables"),(0,o.kt)("p",null,"Joist expects entity tables (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"authors"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"books"),") to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be named using plurals, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"authors")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),","),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Technically Joist rarely "guesses" table names, mostly just for the initial "what is the entity name for this table name?", so this constraint may actually be pretty soft in practice.')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Always have at least these three columns:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"created_at")," ",(0,o.kt)("inlineCode",{parentName:"li"},"timestamptz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updated_at")," ",(0,o.kt)("inlineCode",{parentName:"li"},"timestamptz"))),(0,o.kt)("p",{parentName:"li"},"Joist automatically maintains the ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," columns for each row/entity during ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager.flush"),"."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," If you have non-Joist clients that update entities tables, or use bulk/raw SQL updates, you can create triggers that mimic this functionality (but will not overwrite ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),"s / ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s that do set the columns), see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/blob/main/packages/migration-utils/src/utils.ts#L73"},"joist-migration-utils"),"."),(0,o.kt)("p",{parentName:"div"},"(This methods use ",(0,o.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),", but you can use whatever migration library you prefer to apply the DDL.)"))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Eventually Joist should configurable enablement of ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," columns, but for now it is assumed/required to have them.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Have a single primary key column, ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", that is ",(0,o.kt)("inlineCode",{parentName:"p"},"SERIAL"),"/auto-increment"))),(0,o.kt)("h3",{id:"enums-as-tables"},"Enums as Tables"),(0,o.kt)("p",null,"Joist models enums (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"EmployeeStatus"),") as their own database tables with a row-per-value. "),(0,o.kt)("p",null,"I.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"epmloyee_status")," (singular) might have two rows like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"id  | code          | name\n----+---------------+---------------\n1   | FULL_TIME     | Full Time\n2   | PART_TIME     | Part Time\n")),(0,o.kt)("p",null,"And will be codegen'd as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"enum EmployeeStatus {\n  FullTime,\n  PartTime,\n}\n")),(0,o.kt)("p",null,'This "enums-as-tables" approach allows the entities reference to the enum, i.e. ',(0,o.kt)("inlineCode",{parentName:"p"},"Employee.status")," pointing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"EmployeeStatus")," enum, to use foreign keys to the enum table, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"employees.status_id")," is a foreign key to the ",(0,o.kt)("inlineCode",{parentName:"p"},"employee_status")," table. This enables:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Data integrity, ensuring that all ",(0,o.kt)("inlineCode",{parentName:"li"},"status_id")," values are valid statuses, and"),(0,o.kt)("li",{parentName:"ol"},"Allows Joist's code generator to tell both that ",(0,o.kt)("inlineCode",{parentName:"li"},"employees.status_id")," is a) of the type ",(0,o.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," and b) how many enum values ",(0,o.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," has.")),(0,o.kt)("p",null,"Joist expects enum tables to have three columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code")," i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"FOO_BAR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"Foo Bar"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," package has ",(0,o.kt)("inlineCode",{parentName:"p"},"createEnumTable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"addEnumValue"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"updateEnumValue")," helper methods to use in your migrations."),(0,o.kt)("p",null,"And, as mentioned, entities that want to use this enum should have a foreign key that references the appropriate enum table."),(0,o.kt)("h3",{id:"many-to-many-tables"},"Many-to-many tables"),(0,o.kt)("p",null,"Joist expects join tables to have four columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,o.kt)("li",{parentName:"ul"},"One foreign key column for 1st side"),(0,o.kt)("li",{parentName:"ul"},"One foreign key column for 2nd side"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"created_at")," ",(0,o.kt)("inlineCode",{parentName:"li"},"timestamptz"))),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," is not applicable to join tables.)"),(0,o.kt)("h3",{id:"deferred-foreign-key-constraints"},"Deferred Foreign Key Constraints"),(0,o.kt)("p",null,'Joist\'s goal of "batch all operations" can be difficult to achieve and still satisfy foreign key constraints, particularly as multiple types of entities are flushed to the database in a single transaction.'),(0,o.kt)("p",null,"For example, when dealing with a publisher/author pair of entities, i.e. sometimes the ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher")," needs to be flushed first to satisfy an ",(0,o.kt)("inlineCode",{parentName:"p"},"author.publisher_id")," foreign key constraint, and other times the ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," needs to be flushed first to satisfy a (say) ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher.top_author_id")," foreign key constraint. Or, even trickier, if mixing ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher")," ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),"s in the same transaction; should we delete authors then insert publishers, or delete publishers then insert authors, etc."),(0,o.kt)("p",null,'The easiest way for Joist to deal with this, and still keep it\'s "batch everything" goal, is to rely on deferred foreign key constraints, which tells Postgres that ',(0,o.kt)("em",{parentName:"p"},"temporarily")," violating foreign key constraints in the middle of a transaction is fine,\nas long as at ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT")," time, the right values are in place and satisfy the checks."),(0,o.kt)("p",null,"To turn this capability on, you need to create your foreign keys with this syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "authors" (\n  ...\n  "publisher_id" integer REFERENCES "publishers" DEFERRABLE INITIALLY DEFERRED,\n  ...\n);\n')),(0,o.kt)("p",null,"See the ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," utility methods, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"createEntityTable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"foreignKey")," to always apply these defaults for you."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need to convert your existing foreign keys to deferrable, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"pg-structure")," in a migration to loop over them like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const db = await newPgStructure({ includeSchemas: "public" });\nfor (const table of db.tables) {\n  for (const constraint of table.constraints) {\n    if (constraint instanceof ForeignKey) {\n      await b.db.query(`\n        ALTER TABLE ${table.name}\n        ALTER CONSTRAINT ${constraint.name}\n        DEFERRABLE INITIALLY DEFERRED\n      `);\n    }\n  }\n}\n')))),(0,o.kt)("h3",{id:"composite-primary-keys"},"Composite Primary Keys"),(0,o.kt)("p",null,"Joist does not support composite primary keys."))}u.isMDXComponent=!0}}]);