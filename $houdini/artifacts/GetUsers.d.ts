export type GetUsers = {
    readonly "input": GetUsers$input;
    readonly "result": GetUsers$result | undefined;
};

export type GetUsers$result = {
    /**
     * 获取用户列表
    */
    readonly users: ({
        readonly id: string;
        readonly name: string;
        readonly email: string;
        readonly userType: string;
        readonly isDisabled: boolean;
        readonly roles: ({
            readonly id: string;
            readonly name: string;
        } | null)[] | null;
    } | null)[] | null;
};

export type GetUsers$input = null;

export type GetUsers$artifact = {
    "name": "GetUsers";
    "kind": "HoudiniQuery";
    "hash": "185ebf4155cc99ff7a67524d7b9b5f3c36cbd76aaeab1ab640037abdcb10951d";
    "raw": `query GetUsers {
  users {
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
}
`;
    "rootType": "Query";
    "stripVariables": [];
    "selection": {
        "fields": {
            "users": {
                "type": "UserDto";
                "keyRaw": "users";
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
                            "type": "RoleDto";
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
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};