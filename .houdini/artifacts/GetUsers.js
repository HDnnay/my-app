export default {
    "name": "GetUsers",
    "kind": "HoudiniQuery",
    "hash": "95cb72b113e2fcac43c4c358fab56174924c147c05690eb2116cca31b5915d9f",

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
}`,

    "rootType": "Query",
    "stripVariables": [],

    "selection": {
        "fields": {
            "users": {
                "type": "UserDto",
                "keyRaw": "users",
                "nullable": true,

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
                            "visible": true
                        },

                        "email": {
                            "type": "String",
                            "keyRaw": "email",
                            "visible": true
                        },

                        "userType": {
                            "type": "String",
                            "keyRaw": "userType",
                            "visible": true
                        },

                        "isDisabled": {
                            "type": "Boolean",
                            "keyRaw": "isDisabled",
                            "visible": true
                        },

                        "roles": {
                            "type": "RoleDto",
                            "keyRaw": "roles",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        }
                    }
                },

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=ad0c04fa94a5e08cfc1fb6b6969badcb0db9ffa26445841012c1c7e1e412e0ee";