import {
  BaseEntity,
  Changes,
  ConfigApi,
  EntityFilter,
  EntityGraphQLFilter,
  EntityOrmField,
  FilterOf,
  Flavor,
  GraphQLFilterOf,
  hasOneToOne,
  isLoaded,
  Lens,
  Loaded,
  LoadHint,
  loadLens,
  newChangesProxy,
  newRequiredRule,
  OneToOneReference,
  OptsOf,
  OrderBy,
  PartialOrNull,
  setField,
  setOpts,
  ValueFilter,
  ValueGraphQLFilter,
} from "joist-orm";
import { Context } from "src/context";
import { EntityManager } from "src/entities";
import { Critic, CriticColumn, CriticColumnId, criticColumnMeta, criticMeta, newCritic } from "./entities";

export type CriticId = Flavor<string, "Critic">;

export interface CriticOpts {
  name: string;
  criticColumn?: CriticColumn | null;
}

export interface CriticIdsOpts {
  criticColumnId?: CriticColumnId | null;
}

export interface CriticFilter {
  id?: ValueFilter<CriticId, never>;
  name?: ValueFilter<string, never>;
  createdAt?: ValueFilter<Date, never>;
  updatedAt?: ValueFilter<Date, never>;
  criticColumn?: EntityFilter<CriticColumn, CriticColumnId, FilterOf<CriticColumn>, null | undefined>;
}

export interface CriticGraphQLFilter {
  id?: ValueGraphQLFilter<CriticId>;
  name?: ValueGraphQLFilter<string>;
  createdAt?: ValueGraphQLFilter<Date>;
  updatedAt?: ValueGraphQLFilter<Date>;
  criticColumn?: EntityGraphQLFilter<CriticColumn, CriticColumnId, GraphQLFilterOf<CriticColumn>>;
}

export interface CriticOrder {
  id?: OrderBy;
  name?: OrderBy;
  createdAt?: OrderBy;
  updatedAt?: OrderBy;
}

export const criticConfig = new ConfigApi<Critic, Context>();

criticConfig.addRule(newRequiredRule("name"));
criticConfig.addRule(newRequiredRule("createdAt"));
criticConfig.addRule(newRequiredRule("updatedAt"));

export abstract class CriticCodegen extends BaseEntity<EntityManager> {
  static defaultValues: object = {};

  readonly __orm!: EntityOrmField & {
    filterType: CriticFilter;
    gqlFilterType: CriticGraphQLFilter;
    orderType: CriticOrder;
    optsType: CriticOpts;
    optIdsType: CriticIdsOpts;
    factoryOptsType: Parameters<typeof newCritic>[1];
  };

  readonly criticColumn: OneToOneReference<Critic, CriticColumn> = hasOneToOne(
    criticColumnMeta,
    "criticColumn",
    "critic",
    "critic_id",
  );

  constructor(em: EntityManager, opts: CriticOpts) {
    super(em, criticMeta, CriticCodegen.defaultValues, opts);
    setOpts(this as any as Critic, opts, { calledFromConstructor: true });
  }

  get id(): CriticId | undefined {
    return this.__orm.data["id"];
  }

  get name(): string {
    return this.__orm.data["name"];
  }

  set name(name: string) {
    setField(this, "name", name);
  }

  get createdAt(): Date {
    return this.__orm.data["createdAt"];
  }

  get updatedAt(): Date {
    return this.__orm.data["updatedAt"];
  }

  set(opts: Partial<CriticOpts>): void {
    setOpts(this as any as Critic, opts);
  }

  setPartial(opts: PartialOrNull<CriticOpts>): void {
    setOpts(this as any as Critic, opts as OptsOf<Critic>, { partial: true });
  }

  get changes(): Changes<Critic> {
    return newChangesProxy(this as any as Critic);
  }

  async load<U, V>(fn: (lens: Lens<Critic>) => Lens<U, V>): Promise<V> {
    return loadLens(this as any as Critic, fn);
  }

  async populate<H extends LoadHint<Critic>>(hint: H): Promise<Loaded<Critic, H>> {
    return this.em.populate(this as any as Critic, hint);
  }

  isLoaded<H extends LoadHint<Critic>>(hint: H): this is Loaded<Critic, H> {
    return isLoaded(this as any as Critic, hint);
  }
}