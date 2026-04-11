import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query GetUsers($first: Int!, $after: String) {\r\n  users(first: $first, after: $after) {\r\n    nodes {\r\n      id\r\n      name\r\n      email\r\n      userType\r\n      isDisabled\r\n      roles {\r\n        id\r\n        name\r\n      }\r\n    }\r\n    pageInfo {\r\n      hasNextPage\r\n      hasPreviousPage\r\n      startCursor\r\n      endCursor\r\n    }\r\n    totalCount\r\n  }\r\n}"
): GetUsersStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;