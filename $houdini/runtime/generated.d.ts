import type { Record } from "./public/record";
import { GetUsers$result, GetUsers$input } from "../artifacts/GetUsers";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";

export declare type CacheTypeDef = {
    types: {
        MenuDto: {
            idFields: {
                id: string;
            };
            fields: {
                childMenus: {
                    type: ((Record<CacheTypeDef, "MenuDto"> | null))[] | null;
                    args: never;
                };
                createdAt: {
                    type: Date | null;
                    args: never;
                };
                icon: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                order: {
                    type: number | null;
                    args: never;
                };
                parentId: {
                    type: string | null;
                    args: never;
                };
                path: {
                    type: string | null;
                    args: never;
                };
                permissions: {
                    type: ((Record<CacheTypeDef, "PermissionDto"> | null))[] | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        PermissionDto: {
            idFields: {
                id: string;
            };
            fields: {
                childPermissions: {
                    type: ((Record<CacheTypeDef, "PermissionDto"> | null))[] | null;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: Date;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parentId: {
                    type: string | null;
                    args: never;
                };
                roles: {
                    type: (Record<CacheTypeDef, "RoleDto">)[] | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                menu: {
                    type: Record<CacheTypeDef, "MenuDto"> | null;
                    args: {
                        id: any;
                    };
                };
                menuTree: {
                    type: ((Record<CacheTypeDef, "MenuDto"> | null))[] | null;
                    args: never;
                };
                permissions: {
                    type: ((Record<CacheTypeDef, "PermissionDto"> | null))[] | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "RoleDto"> | null;
                    args: {
                        id: any;
                    };
                };
                roles: {
                    type: ((Record<CacheTypeDef, "RoleDto"> | null))[] | null;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "UserDto"> | null;
                    args: {
                        id: any;
                    };
                };
                users: {
                    type: ((Record<CacheTypeDef, "UserDto"> | null))[] | null;
                    args: never;
                };
            };
            fragments: [];
        };
        RoleDto: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: Date;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                isDisabled: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: ((Record<CacheTypeDef, "PermissionDto"> | null))[] | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SuccessResponse: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UserDto: {
            idFields: {
                id: string;
            };
            fields: {
                email: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                isDisabled: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                roles: {
                    type: ((Record<CacheTypeDef, "RoleDto"> | null))[] | null;
                    args: never;
                };
                userType: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[GetUsersStore, GetUsers$result, GetUsers$input]];
};