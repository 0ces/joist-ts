"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/getting-started","docId":"getting-started/installation"},{"type":"link","label":"Schema Assumptions","href":"/docs/getting-started/schema-assumptions","docId":"getting-started/schema-assumptions"},{"type":"link","label":"Configuration","href":"/docs/configuration","docId":"getting-started/configuration"}]},{"type":"category","label":"Goals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/goals","docId":"goals/overview"},{"type":"link","label":"Code Generation","href":"/docs/goals/code-generation","docId":"goals/code-generation"},{"type":"link","label":"Avoiding N+1s","href":"/docs/goals/avoiding-n-plus-1s","docId":"goals/avoiding-n-plus-1s"},{"type":"link","label":"Type-Safe Relations","href":"/docs/goals/type-safe-relations","docId":"goals/type-safe-relations"},{"type":"link","label":"Great Tests","href":"/docs/goals/great-tests","docId":"goals/great-tests"}]},{"type":"category","label":"Domain Modeling","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fields","href":"/docs/modeling/fields","docId":"modeling/fields"},{"type":"link","label":"Relations","href":"/docs/modeling/relations","docId":"modeling/relations"},{"type":"link","label":"Validation Rules","href":"/docs/modeling/validation-rules","docId":"modeling/validation-rules"},{"type":"link","label":"Lifecycle Hooks","href":"/docs/modeling/lifecycle-hooks","docId":"modeling/lifecycle-hooks"},{"type":"link","label":"Enum Tables","href":"/docs/modeling/enum-tables","docId":"modeling/enum-tables"},{"type":"link","label":"Derived Fields","href":"/docs/modeling/derived-fields","docId":"modeling/derived-fields"},{"type":"link","label":"JSONB Fields","href":"/docs/modeling/jsonb-fields","docId":"modeling/jsonb-fields"}]},{"type":"category","label":"Querying","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Finders","href":"/docs/querying/finders","docId":"querying/finders"},{"type":"link","label":"Create/Update/Delete","href":"/docs/querying/create-update-delete","docId":"querying/create-update-delete"},{"type":"link","label":"Changed Fields","href":"/docs/querying/changed-fields","docId":"querying/changed-fields"},{"type":"link","label":"Bulk Operations","href":"/docs/querying/bulk-operations","docId":"querying/bulk-operations"},{"type":"link","label":"Cascading Deletions","href":"/docs/querying/cascade-deletions","docId":"querying/cascade-deletions"},{"type":"link","label":"Partial Update APIs","href":"/docs/querying/partial-update-apis","docId":"querying/partial-update-apis"}]},{"type":"category","label":"Advanced Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Unit of Work","href":"/docs/features/unit-of-work","docId":"features/unit-of-work"},{"type":"link","label":"Tagged Ids","href":"/docs/features/tagged-ids","docId":"features/tagged-ids"},{"type":"link","label":"Soft Deletes","href":"/docs/features/soft-deletes","docId":"features/soft-deletes"},{"type":"link","label":"graphql-filters","href":"/docs/features/graphql-filters","docId":"features/graphql-filters"},{"type":"link","label":"Lenses","href":"/docs/features/lenses","docId":"features/lenses"},{"type":"link","label":"Optimistic Locking","href":"/docs/features/optimistic-locking","docId":"features/optimistic-locking"}]},{"type":"category","label":"Testing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Factories","href":"/docs/testing/test-factories","docId":"testing/test-factories"},{"type":"link","label":"Fast Database Resets","href":"/docs/testing/fast-database-resets","docId":"testing/fast-database-resets"},{"type":"link","label":"Custom Matchers","href":"/docs/testing/entity-matcher","docId":"testing/entity-matcher"}]}]},"docs":{"features/graphql-filters":{"id":"features/graphql-filters","title":"graphql-filters","description":"GraphQL-Compatible Filters","sidebar":"tutorialSidebar"},"features/lenses":{"id":"features/lenses","title":"Lenses","description":"As covered in type safe relations, Joist provides populate hints to more ergonomically traverse the object graph.","sidebar":"tutorialSidebar"},"features/optimistic-locking":{"id":"features/optimistic-locking","title":"Optimistic Locking","description":"Joist implements optimistic locking to avoid conflicting/dropped UPDATEs.","sidebar":"tutorialSidebar"},"features/soft-deletes":{"id":"features/soft-deletes","title":"Soft Deletes","description":"Joist has built-in support for the soft-delete pattern, of marking rows with a deleted_at column and then \\"mostly ignoring them\\" within the application.","sidebar":"tutorialSidebar"},"features/tagged-ids":{"id":"features/tagged-ids","title":"Tagged Ids","description":"Joist automatically \\"tags\\" entity ids, which means prefixing them with a per-entity identifier.","sidebar":"tutorialSidebar"},"features/unit-of-work":{"id":"features/unit-of-work","title":"Unit of Work","description":"Joist\'s EntityManager acts as a Unit of Work, which caches the entities that are currently loaded/being mutated for each request.","sidebar":"tutorialSidebar"},"getting-started/configuration":{"id":"getting-started/configuration","title":"Configuration","description":"Joist prefers convention over configuration, but it still has some knobs to control its behavior.","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Installing Joist in your project has four main steps:","sidebar":"tutorialSidebar"},"getting-started/schema-assumptions":{"id":"getting-started/schema-assumptions","title":"Schema Assumptions","description":"Joist makes several assumptions about your database schema, as described below.","sidebar":"tutorialSidebar"},"goals/avoiding-n-plus-1s":{"id":"goals/avoiding-n-plus-1s","title":"Avoiding N+1s","description":"Joist is built on top of Facebook\'s dataloader library, which avoids N+1s in a fundamental, systematic way that almost always \\"just works\\".","sidebar":"tutorialSidebar"},"goals/code-generation":{"id":"goals/code-generation","title":"Code Generation","description":"One of the primary ways Joist achieves ActiveRecord-level productivity is by generating the boilerplate part of domain models from the database schema.","sidebar":"tutorialSidebar"},"goals/great-tests":{"id":"goals/great-tests","title":"Great Tests","description":"Joist focuses not just on great production code & business logic, but also on enabling great test coverage of your business logic, by facilitating tests that are:","sidebar":"tutorialSidebar"},"goals/overview":{"id":"goals/overview","title":"Goals","description":"The high-level goal of Joist is to bring ActiveRecord-level productivity to TypeScript/Node projects.","sidebar":"tutorialSidebar"},"goals/type-safe-relations":{"id":"goals/type-safe-relations","title":"Type-Safe Relations","description":"Joist models all relations as async-by-default (i.e. you must access them via an await-d .load() call).","sidebar":"tutorialSidebar"},"modeling/derived-fields":{"id":"modeling/derived-fields","title":"Derived Fields","description":"Derived fields are field values (i.e. primitives) that can be calculated from other data within your domain model.","sidebar":"tutorialSidebar"},"modeling/enum-tables":{"id":"modeling/enum-tables","title":"Enum Tables","description":"Joist supports enum tables for modeling fields that can be set to a fixed number of values (i.e. state, status, and other fields)","sidebar":"tutorialSidebar"},"modeling/fields":{"id":"modeling/fields","title":"Fields","description":"Fields are the primitive columns in your domain model, so all of the (non-foreign key) int, varchar, datetime, etc. columns.","sidebar":"tutorialSidebar"},"modeling/jsonb-fields":{"id":"modeling/jsonb-fields","title":"JSONB Fields","description":"Postgres has rich support for storing JSON, which Joist supports.","sidebar":"tutorialSidebar"},"modeling/lifecycle-hooks":{"id":"modeling/lifecycle-hooks","title":"Lifecycle Hooks","description":"Joist supports hooks that can run business logic at varies stages in an entity\'s lifecycle, for example to implement business logic like \\"when an Author entity is updated, always do x/y/z\\".","sidebar":"tutorialSidebar"},"modeling/relations":{"id":"modeling/relations","title":"Relations","description":"Relations are relationships between entities in your domain model, for example an Author\'s list of Books or an Author\'s current Publisher.","sidebar":"tutorialSidebar"},"modeling/validation-rules":{"id":"modeling/validation-rules","title":"Validation Rules","description":"Entities can have validation rules that are run during EntityManager.flush():","sidebar":"tutorialSidebar"},"querying/bulk-operations":{"id":"querying/bulk-operations","title":"Bulk Operations","description":"Joist aims for best-in-class performance by performing all INSERT, UPDATE, DELETE, and even SELECT operations in bulk/batch.","sidebar":"tutorialSidebar"},"querying/cascade-deletions":{"id":"querying/cascade-deletions","title":"Cascading Deletions","description":"You can have a parent cascade delete its children by doing:","sidebar":"tutorialSidebar"},"querying/changed-fields":{"id":"querying/changed-fields","title":"Changed Fields","description":"Each entity tracks which of its fields has changed within the current unit of work/EntityManager:","sidebar":"tutorialSidebar"},"querying/create-update-delete":{"id":"querying/create-update-delete","title":"Create/Update/Delete","description":"All work is made off of the Joist entity manager. When .flush() is called on the entity manager, Joist will perform all the hooks and validation checks before writing to the database. Flush can be called multiple times as work is done an entities.","sidebar":"tutorialSidebar"},"querying/finders":{"id":"querying/finders","title":"Finders","description":"Joist\'s EntityManager has several methods for easily finding/loading entities.","sidebar":"tutorialSidebar"},"querying/partial-update-apis":{"id":"querying/partial-update-apis","title":"Partial Update APIs","description":"Joist has built-in support for building \\"partial update\\"-style APIs on top of your domain model.","sidebar":"tutorialSidebar"},"testing/entity-matcher":{"id":"testing/entity-matcher","title":"Custom Matchers","description":"Joist provides a toMatchEntity matcher for more pleasant assertions in Jest.","sidebar":"tutorialSidebar"},"testing/fast-database-resets":{"id":"testing/fast-database-resets","title":"Fast Database Resets","description":"To reset the database between each unit test, Joist generates a flush_database stored procedure that will delete all rows/reset the sequence ids:","sidebar":"tutorialSidebar"},"testing/test-factories":{"id":"testing/test-factories","title":"Test Factories","description":"Joist generates customizable factories for easily creating test data.","sidebar":"tutorialSidebar"}}}')}}]);