// Code generated by Prisma (prisma@1.23.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  todoEntry: (where?: TodoEntryWhereInput) => Promise<boolean>;
  todoList: (where?: TodoListWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  todoEntry: (where: TodoEntryWhereUniqueInput) => TodoEntryPromise;
  todoEntries: (
    args?: {
      where?: TodoEntryWhereInput;
      orderBy?: TodoEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<TodoEntry>;
  todoEntriesConnection: (
    args?: {
      where?: TodoEntryWhereInput;
      orderBy?: TodoEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TodoEntryConnectionPromise;
  todoList: (where: TodoListWhereUniqueInput) => TodoListPromise;
  todoLists: (
    args?: {
      where?: TodoListWhereInput;
      orderBy?: TodoListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<TodoList>;
  todoListsConnection: (
    args?: {
      where?: TodoListWhereInput;
      orderBy?: TodoListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TodoListConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTodoEntry: (data: TodoEntryCreateInput) => TodoEntryPromise;
  updateTodoEntry: (
    args: { data: TodoEntryUpdateInput; where: TodoEntryWhereUniqueInput }
  ) => TodoEntryPromise;
  updateManyTodoEntries: (
    args: {
      data: TodoEntryUpdateManyMutationInput;
      where?: TodoEntryWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertTodoEntry: (
    args: {
      where: TodoEntryWhereUniqueInput;
      create: TodoEntryCreateInput;
      update: TodoEntryUpdateInput;
    }
  ) => TodoEntryPromise;
  deleteTodoEntry: (where: TodoEntryWhereUniqueInput) => TodoEntryPromise;
  deleteManyTodoEntries: (where?: TodoEntryWhereInput) => BatchPayloadPromise;
  createTodoList: (data: TodoListCreateInput) => TodoListPromise;
  updateTodoList: (
    args: { data: TodoListUpdateInput; where: TodoListWhereUniqueInput }
  ) => TodoListPromise;
  updateManyTodoLists: (
    args: { data: TodoListUpdateManyMutationInput; where?: TodoListWhereInput }
  ) => BatchPayloadPromise;
  upsertTodoList: (
    args: {
      where: TodoListWhereUniqueInput;
      create: TodoListCreateInput;
      update: TodoListUpdateInput;
    }
  ) => TodoListPromise;
  deleteTodoList: (where: TodoListWhereUniqueInput) => TodoListPromise;
  deleteManyTodoLists: (where?: TodoListWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  todoEntry: (
    where?: TodoEntrySubscriptionWhereInput
  ) => TodoEntrySubscriptionPayloadSubscription;
  todoList: (
    where?: TodoListSubscriptionWhereInput
  ) => TodoListSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TodoEntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "done_ASC"
  | "done_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type TodoListOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TodoListUpdateOneWithoutEntriesInput {
  create?: TodoListCreateWithoutEntriesInput;
  update?: TodoListUpdateWithoutEntriesDataInput;
  upsert?: TodoListUpsertWithoutEntriesInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: TodoListWhereUniqueInput;
}

export type TodoEntryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TodoEntryUpdateManyWithoutListInput {
  create?: TodoEntryCreateWithoutListInput[] | TodoEntryCreateWithoutListInput;
  delete?: TodoEntryWhereUniqueInput[] | TodoEntryWhereUniqueInput;
  connect?: TodoEntryWhereUniqueInput[] | TodoEntryWhereUniqueInput;
  disconnect?: TodoEntryWhereUniqueInput[] | TodoEntryWhereUniqueInput;
  update?:
    | TodoEntryUpdateWithWhereUniqueWithoutListInput[]
    | TodoEntryUpdateWithWhereUniqueWithoutListInput;
  upsert?:
    | TodoEntryUpsertWithWhereUniqueWithoutListInput[]
    | TodoEntryUpsertWithWhereUniqueWithoutListInput;
  deleteMany?: TodoEntryScalarWhereInput[] | TodoEntryScalarWhereInput;
  updateMany?:
    | TodoEntryUpdateManyWithWhereNestedInput[]
    | TodoEntryUpdateManyWithWhereNestedInput;
}

export interface TodoListCreateInput {
  title: String;
  entries?: TodoEntryCreateManyWithoutListInput;
}

export interface TodoEntryUpdateManyMutationInput {
  title?: String;
  done?: Boolean;
}

export interface TodoListSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TodoListWhereInput;
  AND?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
  OR?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
  NOT?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
}

export interface TodoEntryCreateInput {
  title: String;
  done?: Boolean;
  list?: TodoListCreateOneWithoutEntriesInput;
}

export interface TodoListUpdateManyMutationInput {
  title?: String;
}

export interface TodoListCreateOneWithoutEntriesInput {
  create?: TodoListCreateWithoutEntriesInput;
  connect?: TodoListWhereUniqueInput;
}

export interface TodoEntryUpdateManyWithWhereNestedInput {
  where: TodoEntryScalarWhereInput;
  data: TodoEntryUpdateManyDataInput;
}

export interface TodoListCreateWithoutEntriesInput {
  title: String;
}

export type TodoListWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TodoEntryUpdateInput {
  title?: String;
  done?: Boolean;
  list?: TodoListUpdateOneWithoutEntriesInput;
}

export interface TodoEntryUpdateWithoutListDataInput {
  title?: String;
  done?: Boolean;
}

export interface TodoListUpdateInput {
  title?: String;
  entries?: TodoEntryUpdateManyWithoutListInput;
}

export interface TodoListWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  entries_every?: TodoEntryWhereInput;
  entries_some?: TodoEntryWhereInput;
  entries_none?: TodoEntryWhereInput;
  AND?: TodoListWhereInput[] | TodoListWhereInput;
  OR?: TodoListWhereInput[] | TodoListWhereInput;
  NOT?: TodoListWhereInput[] | TodoListWhereInput;
}

export interface TodoListUpdateWithoutEntriesDataInput {
  title?: String;
}

export interface TodoEntryUpdateManyDataInput {
  title?: String;
  done?: Boolean;
}

export interface TodoEntryCreateManyWithoutListInput {
  create?: TodoEntryCreateWithoutListInput[] | TodoEntryCreateWithoutListInput;
  connect?: TodoEntryWhereUniqueInput[] | TodoEntryWhereUniqueInput;
}

export interface TodoEntryCreateWithoutListInput {
  title: String;
  done?: Boolean;
}

export interface TodoEntryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  done?: Boolean;
  done_not?: Boolean;
  list?: TodoListWhereInput;
  AND?: TodoEntryWhereInput[] | TodoEntryWhereInput;
  OR?: TodoEntryWhereInput[] | TodoEntryWhereInput;
  NOT?: TodoEntryWhereInput[] | TodoEntryWhereInput;
}

export interface TodoListUpsertWithoutEntriesInput {
  update: TodoListUpdateWithoutEntriesDataInput;
  create: TodoListCreateWithoutEntriesInput;
}

export interface TodoEntryScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  done?: Boolean;
  done_not?: Boolean;
  AND?: TodoEntryScalarWhereInput[] | TodoEntryScalarWhereInput;
  OR?: TodoEntryScalarWhereInput[] | TodoEntryScalarWhereInput;
  NOT?: TodoEntryScalarWhereInput[] | TodoEntryScalarWhereInput;
}

export interface TodoEntrySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TodoEntryWhereInput;
  AND?: TodoEntrySubscriptionWhereInput[] | TodoEntrySubscriptionWhereInput;
  OR?: TodoEntrySubscriptionWhereInput[] | TodoEntrySubscriptionWhereInput;
  NOT?: TodoEntrySubscriptionWhereInput[] | TodoEntrySubscriptionWhereInput;
}

export interface TodoEntryUpdateWithWhereUniqueWithoutListInput {
  where: TodoEntryWhereUniqueInput;
  data: TodoEntryUpdateWithoutListDataInput;
}

export interface TodoEntryUpsertWithWhereUniqueWithoutListInput {
  where: TodoEntryWhereUniqueInput;
  update: TodoEntryUpdateWithoutListDataInput;
  create: TodoEntryCreateWithoutListInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TodoListPreviousValues {
  id: ID_Output;
  title: String;
}

export interface TodoListPreviousValuesPromise
  extends Promise<TodoListPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface TodoListPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoListPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TodoList {
  id: ID_Output;
  title: String;
}

export interface TodoListPromise extends Promise<TodoList>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  entries: <T = FragmentableArray<TodoEntry>>(
    args?: {
      where?: TodoEntryWhereInput;
      orderBy?: TodoEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface TodoListSubscription
  extends Promise<AsyncIterator<TodoList>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  entries: <T = Promise<AsyncIterator<TodoEntrySubscription>>>(
    args?: {
      where?: TodoEntryWhereInput;
      orderBy?: TodoEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface TodoEntryEdge {
  node: TodoEntry;
  cursor: String;
}

export interface TodoEntryEdgePromise
  extends Promise<TodoEntryEdge>,
    Fragmentable {
  node: <T = TodoEntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoEntryEdgeSubscription
  extends Promise<AsyncIterator<TodoEntryEdge>>,
    Fragmentable {
  node: <T = TodoEntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TodoEntrySubscriptionPayload {
  mutation: MutationType;
  node: TodoEntry;
  updatedFields: String[];
  previousValues: TodoEntryPreviousValues;
}

export interface TodoEntrySubscriptionPayloadPromise
  extends Promise<TodoEntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoEntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoEntryPreviousValuesPromise>() => T;
}

export interface TodoEntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoEntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoEntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoEntryPreviousValuesSubscription>() => T;
}

export interface TodoEntryConnection {
  pageInfo: PageInfo;
  edges: TodoEntryEdge[];
}

export interface TodoEntryConnectionPromise
  extends Promise<TodoEntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoEntryEdge>>() => T;
  aggregate: <T = AggregateTodoEntryPromise>() => T;
}

export interface TodoEntryConnectionSubscription
  extends Promise<AsyncIterator<TodoEntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoEntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoEntrySubscription>() => T;
}

export interface TodoEntry {
  id: ID_Output;
  title: String;
  done: Boolean;
}

export interface TodoEntryPromise extends Promise<TodoEntry>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  done: () => Promise<Boolean>;
  list: <T = TodoListPromise>() => T;
}

export interface TodoEntrySubscription
  extends Promise<AsyncIterator<TodoEntry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
  list: <T = TodoListSubscription>() => T;
}

export interface TodoEntryPreviousValues {
  id: ID_Output;
  title: String;
  done: Boolean;
}

export interface TodoEntryPreviousValuesPromise
  extends Promise<TodoEntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  done: () => Promise<Boolean>;
}

export interface TodoEntryPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoEntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateTodoList {
  count: Int;
}

export interface AggregateTodoListPromise
  extends Promise<AggregateTodoList>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoListSubscription
  extends Promise<AsyncIterator<AggregateTodoList>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TodoListEdge {
  node: TodoList;
  cursor: String;
}

export interface TodoListEdgePromise
  extends Promise<TodoListEdge>,
    Fragmentable {
  node: <T = TodoListPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoListEdgeSubscription
  extends Promise<AsyncIterator<TodoListEdge>>,
    Fragmentable {
  node: <T = TodoListSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTodoEntry {
  count: Int;
}

export interface AggregateTodoEntryPromise
  extends Promise<AggregateTodoEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoEntrySubscription
  extends Promise<AsyncIterator<AggregateTodoEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TodoListSubscriptionPayload {
  mutation: MutationType;
  node: TodoList;
  updatedFields: String[];
  previousValues: TodoListPreviousValues;
}

export interface TodoListSubscriptionPayloadPromise
  extends Promise<TodoListSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoListPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoListPreviousValuesPromise>() => T;
}

export interface TodoListSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoListSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoListSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoListPreviousValuesSubscription>() => T;
}

export interface TodoListConnection {
  pageInfo: PageInfo;
  edges: TodoListEdge[];
}

export interface TodoListConnectionPromise
  extends Promise<TodoListConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoListEdge>>() => T;
  aggregate: <T = AggregateTodoListPromise>() => T;
}

export interface TodoListConnectionSubscription
  extends Promise<AsyncIterator<TodoListConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoListEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoListSubscription>() => T;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "TodoEntry",
    embedded: false
  },
  {
    name: "TodoList",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/joao-ribeiro-1d5b77/react-todo-test/dev`
});
export const prisma = new Prisma();
