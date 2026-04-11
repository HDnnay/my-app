export type GetUsers = {
    readonly "input": GetUsers$input;
    readonly "result": GetUsers$result | undefined;
};

export type GetUsers$result = {
    /**
     * 获取用户列表
    */
    readonly users: {
        /**
         * A flattened list of the nodes.
        */
        readonly nodes: ({
            readonly id: string;
            readonly name: string;
            readonly email: string;
            readonly userType: string;
            readonly isDisabled: boolean;
            readonly roles: ({
                readonly id: string;
                readonly name: string;
            } | null)[] | null;
        })[] | null;
        /**
         * Information to aid in pagination.
        */
        readonly pageInfo: {
            /**
             * Indicates whether more edges exist following the set defined by the clients arguments.
            */
            readonly hasNextPage: boolean;
            /**
             * Indicates whether more edges exist prior the set defined by the clients arguments.
            */
            readonly hasPreviousPage: boolean;
            /**
             * When paginating backwards, the cursor to continue.
            */
            readonly startCursor: string | null;
            /**
             * When paginating forwards, the cursor to continue.
            */
            readonly endCursor: string | null;
        };
        /**
         * Identifies the total count of items in the connection.
        */
        readonly totalCount: number;
    } | null;
};

export type GetUsers$input = {
    first: number;
    after?: string | null | undefined;
};

export type GetUsers$artifact = {
    "name": "GetUsers";
    "kind": "HoudiniQuery";
    "hash": "277a30882ce1b21975e7e250623ce85639053fa995f5a43abe528a8daab0fc05";
    "raw": `query GetUsers($first: Int!, $after: String) {
  users(first: $first, after: $after) {
    nodes {
      id
      name
      email
      userType
      isDisabled
      roles {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}`;
    "rootType": "Query";
    "stripVariables": [];
    "selection": {
        "fields": {
            "users": {
                "type": "UsersConnection";
                "keyRaw": "users(after: $after, first: $first)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "nodes": {
                            "type": "AppUserDto";
                            "keyRaw": "nodes";
                            "nullable": true;
                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "name": {
                                        "type": "String";
                                        "keyRaw": "name";
                                        "visible": true;
                                    };
                                    "email": {
                                        "type": "String";
                                        "keyRaw": "email";
                                        "visible": true;
                                    };
                                    "userType": {
                                        "type": "String";
                                        "keyRaw": "userType";
                                        "visible": true;
                                    };
                                    "isDisabled": {
                                        "type": "Boolean";
                                        "keyRaw": "isDisabled";
                                        "visible": true;
                                    };
                                    "roles": {
                                        "type": "AppRoleDto";
                                        "keyRaw": "roles";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "id": {
                                                    "type": "ID";
                                                    "keyRaw": "id";
                                                    "visible": true;
                                                };
                                                "name": {
                                                    "type": "String";
                                                    "keyRaw": "name";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "pageInfo": {
                            "type": "PageInfo";
                            "keyRaw": "pageInfo";
                            "selection": {
                                "fields": {
                                    "hasNextPage": {
                                        "type": "Boolean";
                                        "keyRaw": "hasNextPage";
                                        "visible": true;
                                    };
                                    "hasPreviousPage": {
                                        "type": "Boolean";
                                        "keyRaw": "hasPreviousPage";
                                        "visible": true;
                                    };
                                    "startCursor": {
                                        "type": "String";
                                        "keyRaw": "startCursor";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "endCursor": {
                                        "type": "String";
                                        "keyRaw": "endCursor";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "totalCount": {
                            "type": "Int";
                            "keyRaw": "totalCount";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "first": "Int";
            "after": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};