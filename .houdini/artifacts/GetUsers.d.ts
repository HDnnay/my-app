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
    "hash": "95cb72b113e2fcac43c4c358fab56174924c147c05690eb2116cca31b5915d9f";
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
}`;
    "rootType": "Query";
    "stripVariables": [];
    "selection": {
        "fields": {
            "users": {
                "type": "AppUserDto";
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
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};