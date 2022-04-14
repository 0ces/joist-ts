import { camelCase, sentenceCase } from "change-case";
import { CodeGenFile, Config, EntityDbMetadata } from "joist-codegen";
import { code, imp } from "ts-poet";

const getMetadata = imp("getMetadata@joist-orm");
const entityResolver = imp("entityResolver@src/resolvers/entityResolver");
const makeRunResolverKeys = imp("makeRunResolverKeys@src/resolvers/testUtils");
const makeRunResolver = imp("makeRunResolver@src/resolvers/testUtils");

/**
 * Generates a base resolver using the entityResolver utility.
 *
 * This basically preempts the Joist-agnostic resolvers generated by [1] b/c `joist-codegen`
 * will run first and put these Joist-aware resolvers in place first.
 *
 * Then when [1] runs, it will only output resolver scaffolding for non-entity resolvers.
 *
 * [1]: https://github.com/homebound-team/graphql-typescript-resolver-scaffolding
 */
export function generateObjectResolvers(config: Config, entities: EntityDbMetadata[]): CodeGenFile[] {
  const resolvers = entities.map((e) => {
    const camelName = camelCase(e.name);
    const type = imp(`${e.name}@src/entities`);
    const resolverType = imp(`${e.name}Resolvers@src/generated/graphql-types`);
    const contents = code`
      export const ${camelName}Resolvers: ${resolverType} = {
        ...${entityResolver}(${getMetadata}(${type})),
      };
    `;
    return { name: `resolvers/objects/${camelName}/${camelName}Resolvers.ts`, overwrite: false, contents };
  });

  const testFiles = entities.map((e) => {
    const { name } = e;
    const camelName = camelCase(name);
    const factory = imp(`new${name}@src/entities`);
    const idType = imp(`${name}Id@src/entities`);
    const resolverType = imp(`${name}Resolvers@src/generated/graphql-types`);
    const resolverConst = imp(`${camelName}Resolvers@src/resolvers/objects/${camelName}/${camelName}Resolvers`);

    const tagName = config.entities[name].tag || "entity";

    const keys = e.primitives.map((field) => `"${field.fieldName}"`).join(", ");

    const contents = code`
      describe("${camelName}Resolvers", () => {
        it.withCtx("can return", async (ctx) => {
          const { em } = ctx;
          // Given a ${sentenceCase(name)}
          const ${tagName} = ${factory}(em);
          // Then we can query it
          const result = await run${name}Keys(ctx, ${tagName}, [${keys}]);
          expect(${tagName}).toMatchObject(result);
        });
      });

      const run${name}Keys = ${makeRunResolverKeys}(${resolverConst});
      const run${name} = ${makeRunResolver}(${resolverConst});
    `;
    return { name: `resolvers/objects/${camelName}/${camelName}Resolvers.test.ts`, overwrite: false, contents };
  });

  return [...resolvers, ...testFiles];
}
