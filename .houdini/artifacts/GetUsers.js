export default {
    "name": "GetUsers",
    "kind": "HoudiniQuery",
    "hash": "06d44670c938d4c2326e77e4d48f544043f53a8ffde8a649c0815ebf8466bba8",

    "raw": `query GetUsers($first: Int, $after: String) {
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
}`,

    "rootType": "Query",
    "stripVariables": [],

    "selection": {
        "fields": {
            "users": {
                "type": "UsersConnection",
                "keyRaw": "users(after: $after, first: $first)",
                "nullable": true,

                "selection": {
                    "fields": {
                        "nodes": {
                            "type": "AppUserDto",
                            "keyRaw": "nodes",
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
                                        "type": "AppRoleDto",
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
                        },

                        "pageInfo": {
                            "type": "PageInfo",
                            "keyRaw": "pageInfo",

                            "selection": {
                                "fields": {
                                    "hasNextPage": {
                                        "type": "Boolean",
                                        "keyRaw": "hasNextPage",
                                        "visible": true
                                    },

                                    "hasPreviousPage": {
                                        "type": "Boolean",
                                        "keyRaw": "hasPreviousPage",
                                        "visible": true
                                    },

                                    "startCursor": {
                                        "type": "String",
                                        "keyRaw": "startCursor",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "endCursor": {
                                        "type": "String",
                                        "keyRaw": "endCursor",
                                        "nullable": true,
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        },

                        "totalCount": {
                            "type": "Int",
                            "keyRaw": "totalCount",
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

    "input": {
        "fields": {
            "first": "Int",
            "after": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=de8826158f6f5ca9cb0906284b362ace1411a1a7ac405c3c747566c8a1d4af0c";