"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[172],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1859:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(2685),o=n(1244),l=(n(7378),n(5318)),r=["components"],i={title:"Enum Tables",sidebar_position:6},s=void 0,u={unversionedId:"modeling/enum-tables",id:"modeling/enum-tables",title:"Enum Tables",description:"Joist supports enum tables for modeling fields that can be set to a fixed number of values (i.e. state, status, and other fields)",source:"@site/docs/modeling/enum-tables.md",sourceDirName:"modeling",slug:"/modeling/enum-tables",permalink:"/docs/modeling/enum-tables",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/enum-tables.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Enum Tables",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"One to Ones",permalink:"/docs/modeling/one-to-ones"},next:{title:"Polymorphic References",permalink:"/docs/modeling/polymorphic-references"}},d={},p=[{value:"What&#39;s an Enum Table",id:"whats-an-enum-table",level:3},{value:"Why Tables?",id:"why-tables",level:2},{value:"Enum Details and Extra Columns",id:"enum-details-and-extra-columns",level:2},{value:"Integrated with Testing",id:"integrated-with-testing",level:2},{value:"Enum Arrays",id:"enum-arrays",level:2},{value:"When to Use Enums",id:"when-to-use-enums",level:2},{value:"Native Enums",id:"native-enums",level:2}],m={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Joist supports enum tables for modeling fields that can be set to a fixed number of values (i.e. state, status, and other fields)"),(0,l.kt)("h3",{id:"whats-an-enum-table"},"What's an Enum Table"),(0,l.kt)("p",null,"Enum tables are a pattern of putting each enum in your domain model into a corresponding table in the database, with rows for each enum values."),(0,l.kt)("p",null,"For example, for a ",(0,l.kt)("inlineCode",{parentName:"p"},"Color")," enum with values of ",(0,l.kt)("inlineCode",{parentName:"p"},"Color.RED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Color.GREEN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Color.Blue"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," table would look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'joist=> \\d color;\n                 Table "public.color"\n Column |  Type   | Nullable |              Default\n--------+---------+----------+-----------------------------------\n id     | integer | not null | nextval(\'color_id_seq\'::regclass)\n code   | text    | not null |\n name   | text    | not null |\nIndexes:\n    "color_pkey" PRIMARY KEY, btree (id)\n    "color_unique_enum_code_constraint" UNIQUE CONSTRAINT, btree (code)\n')),(0,l.kt)("p",null,"With rows for each value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"joist=> select * from color;\n id | code  | name\n----+-------+-------\n  1 | RED   | Red\n  2 | GREEN | Green\n  3 | BLUE  | Blue\n(3 rows)\n")),(0,l.kt)("p",null,"Which are codegen'd into TypeScript enums:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum Color {\n  Red = "RED",\n  Green = "GREEN",\n  Blue = "BLUE",\n}\n')),(0,l.kt)("p",null,"And then other domain entities use foreign keys to point back to valid values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'\\d authors\n                          Table "public.authors"\n   Column           |           Type           | Nullable |                Default\n--------------------+--------------------------+----------+----------------------------------------\n id                 | integer                  | not null | nextval(\'authors_id_seq\'::regclass)\n name               | character varying(255)   | not null |\n favorite_color_id  | integer                  |          |\n created_at         | timestamp with time zone | not null |\n updated_at         | timestamp with time zone | not null |\nIndexes:\n    "authors_pkey" PRIMARY KEY, btree (id)\n    "authors_favorite_color_id_idx" btree (size_id)\nForeign-key constraints:\n    "authors_favorite_color_id_fkey" FOREIGN KEY\n       (favorite_color_id) REFERENCES color(id)\n')),(0,l.kt)("h2",{id:"why-tables"},"Why Tables?"),(0,l.kt)("p",null,"There are multiple ways to model enums, i.e. other options are database-native enums (which Joist does support, see below), or using enum values declared solely within your codebase."),(0,l.kt)("p",null,"Joist generally recommended/refers the enum table pattern because:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The foreign keys enforce data integrity at the database-level"),(0,l.kt)("p",{parentName:"li"},"(Database-native enums do this as well, codebase-only enums would not.)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ability to store ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," vs. ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,l.kt)("p",{parentName:"li"},"Although minor, it's nice to have a dedicated ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field to store the display name for enum values, and have them available in the database for updating/looking up.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ability to add extra columns (see later)"),(0,l.kt)("p",{parentName:"li"},"Joist supports adding addition columns to the code, so like ",(0,l.kt)("inlineCode",{parentName:"p"},"color.customization_cost")," could be an additional column on the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," table that Joist will automatically expose to the domain layer.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Changing enum values is generally simpler DML instead of DDL"),(0,l.kt)("p",{parentName:"li"},"With a ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," table, adding/removing new values is just ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"s / ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s, whereas database-native enums require ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER"),"s to change the type."))),(0,l.kt)("h2",{id:"enum-details-and-extra-columns"},"Enum Details and Extra Columns"),(0,l.kt)("p",null,"Besides the basic ",(0,l.kt)("inlineCode",{parentName:"p"},"Color"),' enum, Joist generates "details" types, i.e. ',(0,l.kt)("inlineCode",{parentName:"p"},"ColorDetails")," that include more information about each enum:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export type ColorDetails = { id: number; code: Color; name: string };\n\nconst details: Record<Color, ColorDetails> = {\n  [Color.Red]: { id: 1, code: Color.Red, name: "Red" },\n  [Color.Green]: { id: 2, code: Color.Green, name: "Green" },\n  [Color.Blue]: { id: 3, code: Color.Blue, name: "Blue" },\n};\n')),(0,l.kt)("p",null,"Which you can lookup via static methods on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorDetails")," class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export const Colors = {\n  getByCode(code: Color): ColorDetails;\n\n  findByCode(code: string): ColorDetails | undefined;\n\n  findById(id: number): ColorDetails | undefined;\n\n  getValues(): ReadonlyArray<Color>;\n\n  getDetails(): ReadonlyArray<ColorDetails>;\n};\n")),(0,l.kt)("p",null,"Also, as mentioned before, if you add additional columns to the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," table, they will be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorDetails")," type, i.e.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'b.addColumn("color", { sort_order: { type: "integer", notNull: true, default: 1 } });\n')),(0,l.kt)("p",null,"Will result in a ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorDetails")," that looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ColorDetails = {\n  id: number;\n  code: Color;\n  name: string;\n  sortOrder: 1 | 2 | 3;\n};\n")),(0,l.kt)("p",null,'Currently, "extra details columns" only supports primitive columns (integers, strings, etc.), i.e. not other enums, JSONB columns, or arrays.'),(0,l.kt)("h2",{id:"integrated-with-testing"},"Integrated with Testing"),(0,l.kt)("p",null,"During tests, ",(0,l.kt)("inlineCode",{parentName:"p"},"flush_database")," will skip enum tables, so they do not need to be re-populated each time."),(0,l.kt)("h2",{id:"enum-arrays"},"Enum Arrays"),(0,l.kt)("p",null,"If you want to store a list of enums in a single column (for example, instead of just ",(0,l.kt)("inlineCode",{parentName:"p"},"Author.favoriteColor"),", you want ",(0,l.kt)("inlineCode",{parentName:"p"},"Author.favoriteColors"),"), Joist supports modeling that as a ",(0,l.kt)("inlineCode",{parentName:"p"},"int[]")," column, i.e.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'joist=> \\d authors;\n                        Table "public.authors"\n   Column         |           Type           | Nullable |               Default\n\n------------------+--------------------------+----------+-----------------------------------\n--\n id               | integer                  | not null | nextval(\'authors_id_seq\'::regclass\n)\n first_name       | character varying(255)   | not null |\n favorite_colors  | integer[]                |          | ARRAY[]::integer[]\n created_at       | timestamp with time zone | not null |\n updated_at       | timestamp with time zone | not null |\nIndexes:\n    "authors_pkey" PRIMARY KEY, btree (id)\n')),(0,l.kt)("p",null,"Note that Postgres does not yet support foreign key constraints on array columns, so you'll lose that aspect of data integrity with enum arrays."),(0,l.kt)("p",null,'Also, because of this lack of foreign key constraint, Joist cannot use that to know "what enum type is this column?"'),(0,l.kt)("p",null,"As an admittedly hacky approach, we encode that information in a schema comment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'b.addColumns("authors", {\n  favorite_colors: {\n    type: "integer[]",\n    comment: `enum=color`,\n    notNull: false,\n    default: PgLiteral.create("array[]::integer[]"),\n  },\n});\n')),(0,l.kt)("h2",{id:"when-to-use-enums"},"When to Use Enums"),(0,l.kt)("p",null,"In general, you should only use enums when you have business logic that directly branches based on the values."),(0,l.kt)("p",null,'For an example, if your system has a list of "markets", and you only have ~2-3 markets, it can be tempting to think of ',(0,l.kt)("inlineCode",{parentName:"p"},"Market")," as an enum, because currently there are only a few of them. And if you make it an enum, then ",(0,l.kt)("inlineCode",{parentName:"p"},"flush_database")," will not reset the ",(0,l.kt)("inlineCode",{parentName:"p"},"market"),' table, so you don\'t have to keep adding test data that is "we have markets 1/2/3".'),(0,l.kt)("p",null,"However, now adding/removing new markets changes the ",(0,l.kt)("inlineCode",{parentName:"p"},"Market")," enum, and so has to be coordinated with deployments. And renaming/removing ",(0,l.kt)("inlineCode",{parentName:"p"},"Market"),"s is a breaking change."),(0,l.kt)("p",null,"So, unless if you have codepaths that are explicitly dedicated to ",(0,l.kt)("inlineCode",{parentName:"p"},"Market 1"),' codepath is "chunk of business logic" and ',(0,l.kt)("inlineCode",{parentName:"p"},"Market 2"),' codepath is "different chunk of business logic", these "small lookup tables" are generally better modeled as just regular entities.'),(0,l.kt)("h2",{id:"native-enums"},"Native Enums"),(0,l.kt)("p",null,"While Joist generally prefers enum tables, if you have native enums in your schema, Joist will work for those as well."),(0,l.kt)("p",null,'Note that you don\'t get enum details, or extra columns, but the basic out of "a TypeScript" enum and ',(0,l.kt)("inlineCode",{parentName:"p"},"Author.favoriteColor")," is typed as the ",(0,l.kt)("inlineCode",{parentName:"p"},"Color")," enum will work."))}c.isMDXComponent=!0}}]);