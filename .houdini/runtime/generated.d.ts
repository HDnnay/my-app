import type { Record } from "./public/record";
import { GetUsers$result, GetUsers$input } from "$houdini/artifacts/GetUsers";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import type { UserType } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { SortEnumType } from "$houdini/graphql/enums";

type EmailSortInput = {
    value?: ValueOf<typeof SortEnumType> | null | undefined;
};

type UserSortInput = {
    email?: EmailSortInput | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
    isDisabled?: ValueOf<typeof SortEnumType> | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    passwordHash?: ValueOf<typeof SortEnumType> | null | undefined;
    refreshToken?: ValueOf<typeof SortEnumType> | null | undefined;
    refreshTokenExpiryTime?: ValueOf<typeof SortEnumType> | null | undefined;
    userType?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ArticleSortInput = {
    content?: ValueOf<typeof SortEnumType> | null | undefined;
    createTiem?: ValueOf<typeof SortEnumType> | null | undefined;
    createUser?: UserSortInput | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
    isVisiable?: ValueOf<typeof SortEnumType> | null | undefined;
    subtitle?: ValueOf<typeof SortEnumType> | null | undefined;
    title?: ValueOf<typeof SortEnumType> | null | undefined;
    topic?: ValueOf<typeof SortEnumType> | null | undefined;
    userId?: ValueOf<typeof SortEnumType> | null | undefined;
};

type StringOperationFilterInput = {
    and?: (StringOperationFilterInput)[] | null | undefined;
    contains?: string | null | undefined;
    endsWith?: string | null | undefined;
    eq?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    ncontains?: string | null | undefined;
    nendsWith?: string | null | undefined;
    neq?: string | null | undefined;
    nin?: (string | null | undefined)[] | null | undefined;
    nstartsWith?: string | null | undefined;
    or?: (StringOperationFilterInput)[] | null | undefined;
    startsWith?: string | null | undefined;
};

type DateTimeOperationFilterInput = {
    eq?: Date | null | undefined;
    gt?: Date | null | undefined;
    gte?: Date | null | undefined;
    in?: (Date | null | undefined)[] | null | undefined;
    lt?: Date | null | undefined;
    lte?: Date | null | undefined;
    neq?: Date | null | undefined;
    ngt?: Date | null | undefined;
    ngte?: Date | null | undefined;
    nin?: (Date | null | undefined)[] | null | undefined;
    nlt?: Date | null | undefined;
    nlte?: Date | null | undefined;
};

type UuidOperationFilterInput = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
    ngt?: any | null | undefined;
    ngte?: any | null | undefined;
    nin?: (any | null | undefined)[] | null | undefined;
    nlt?: any | null | undefined;
    nlte?: any | null | undefined;
};

type BooleanOperationFilterInput = {
    eq?: boolean | null | undefined;
    neq?: boolean | null | undefined;
};

type ArticleCommentFilterInput = {
    and?: (ArticleCommentFilterInput)[] | null | undefined;
    comment?: StringOperationFilterInput | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    or?: (ArticleCommentFilterInput)[] | null | undefined;
    userId?: UuidOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfArticleCommentFilterInput = {
    all?: ArticleCommentFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: ArticleCommentFilterInput | null | undefined;
    some?: ArticleCommentFilterInput | null | undefined;
};

type EmailFilterInput = {
    and?: (EmailFilterInput)[] | null | undefined;
    or?: (EmailFilterInput)[] | null | undefined;
    value?: StringOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfMenuFilterInput = {
    all?: MenuFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: MenuFilterInput | null | undefined;
    some?: MenuFilterInput | null | undefined;
};

type IntOperationFilterInput = {
    eq?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    neq?: number | null | undefined;
    ngt?: number | null | undefined;
    ngte?: number | null | undefined;
    nin?: (number | null | undefined)[] | null | undefined;
    nlt?: number | null | undefined;
    nlte?: number | null | undefined;
};

type ByteOperationFilterInput = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
    ngt?: any | null | undefined;
    ngte?: any | null | undefined;
    nin?: (any | null | undefined)[] | null | undefined;
    nlt?: any | null | undefined;
    nlte?: any | null | undefined;
};

type ListByteOperationFilterInput = {
    all?: ByteOperationFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: ByteOperationFilterInput | null | undefined;
    some?: ByteOperationFilterInput | null | undefined;
};

type MenuFilterInput = {
    and?: (MenuFilterInput)[] | null | undefined;
    children?: ListFilterInputTypeOfMenuFilterInput | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    icon?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (MenuFilterInput)[] | null | undefined;
    order?: IntOperationFilterInput | null | undefined;
    parent?: MenuFilterInput | null | undefined;
    parentId?: UuidOperationFilterInput | null | undefined;
    path?: StringOperationFilterInput | null | undefined;
    permissionMenus?: ListFilterInputTypeOfPermissionMenuFilterInput | null | undefined;
    updatedAt?: DateTimeOperationFilterInput | null | undefined;
    version?: ListByteOperationFilterInput | null | undefined;
};

type PermissionMenuFilterInput = {
    and?: (PermissionMenuFilterInput)[] | null | undefined;
    createdAt?: DateTimeOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    menu?: MenuFilterInput | null | undefined;
    menuId?: UuidOperationFilterInput | null | undefined;
    or?: (PermissionMenuFilterInput)[] | null | undefined;
    permission?: PermissionFilterInput | null | undefined;
    permissionId?: UuidOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfPermissionMenuFilterInput = {
    all?: PermissionMenuFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: PermissionMenuFilterInput | null | undefined;
    some?: PermissionMenuFilterInput | null | undefined;
};

type PermissionFilterInput = {
    and?: (PermissionFilterInput)[] | null | undefined;
    childPermissions?: ListFilterInputTypeOfPermissionFilterInput | null | undefined;
    code?: StringOperationFilterInput | null | undefined;
    createdAt?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (PermissionFilterInput)[] | null | undefined;
    parent?: PermissionFilterInput | null | undefined;
    parentId?: UuidOperationFilterInput | null | undefined;
    permissionMenus?: ListFilterInputTypeOfPermissionMenuFilterInput | null | undefined;
    roles?: ListFilterInputTypeOfRoleFilterInput | null | undefined;
    updatedAt?: DateTimeOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfPermissionFilterInput = {
    all?: PermissionFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: PermissionFilterInput | null | undefined;
    some?: PermissionFilterInput | null | undefined;
};

type ListFilterInputTypeOfUserFilterInput = {
    all?: UserFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: UserFilterInput | null | undefined;
    some?: UserFilterInput | null | undefined;
};

type RoleFilterInput = {
    and?: (RoleFilterInput)[] | null | undefined;
    code?: StringOperationFilterInput | null | undefined;
    createdAt?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isDisabled?: BooleanOperationFilterInput | null | undefined;
    isSuperAdmin?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (RoleFilterInput)[] | null | undefined;
    permissions?: ListFilterInputTypeOfPermissionFilterInput | null | undefined;
    updatedAt?: DateTimeOperationFilterInput | null | undefined;
    users?: ListFilterInputTypeOfUserFilterInput | null | undefined;
};

type ListFilterInputTypeOfRoleFilterInput = {
    all?: RoleFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: RoleFilterInput | null | undefined;
    some?: RoleFilterInput | null | undefined;
};

type UserTypeOperationFilterInput = {
    eq?: ValueOf<typeof UserType> | null | undefined;
    in?: (ValueOf<typeof UserType>)[] | null | undefined;
    neq?: ValueOf<typeof UserType> | null | undefined;
    nin?: (ValueOf<typeof UserType>)[] | null | undefined;
};

type UserFilterInput = {
    and?: (UserFilterInput)[] | null | undefined;
    email?: EmailFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isDisabled?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (UserFilterInput)[] | null | undefined;
    passwordHash?: StringOperationFilterInput | null | undefined;
    refreshToken?: StringOperationFilterInput | null | undefined;
    refreshTokenExpiryTime?: DateTimeOperationFilterInput | null | undefined;
    roles?: ListFilterInputTypeOfRoleFilterInput | null | undefined;
    userType?: UserTypeOperationFilterInput | null | undefined;
};

type TagFilterInput = {
    and?: (TagFilterInput)[] | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (TagFilterInput)[] | null | undefined;
};

type ListFilterInputTypeOfTagFilterInput = {
    all?: TagFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: TagFilterInput | null | undefined;
    some?: TagFilterInput | null | undefined;
};

type ArticleFilterInput = {
    and?: (ArticleFilterInput)[] | null | undefined;
    comments?: ListFilterInputTypeOfArticleCommentFilterInput | null | undefined;
    content?: StringOperationFilterInput | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    createUser?: UserFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    or?: (ArticleFilterInput)[] | null | undefined;
    subtitle?: StringOperationFilterInput | null | undefined;
    tags?: ListFilterInputTypeOfTagFilterInput | null | undefined;
    title?: StringOperationFilterInput | null | undefined;
    topic?: StringOperationFilterInput | null | undefined;
    userId?: UuidOperationFilterInput | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        AppArticleCommentDto: {
            idFields: {
                id: string;
            };
            fields: {
                comment: {
                    type: string | null;
                    args: never;
                };
                createTiem: {
                    type: Date | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                isVisiable: {
                    type: boolean | null;
                    args: never;
                };
                userId: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppArticleDto: {
            idFields: {
                id: string;
            };
            fields: {
                comments: {
                    type: ((Record<CacheTypeDef, "AppArticleCommentDto"> | null))[] | null;
                    args: never;
                };
                content: {
                    type: string | null;
                    args: never;
                };
                createTiem: {
                    type: Date | null;
                    args: never;
                };
                createUser: {
                    type: Record<CacheTypeDef, "AppUserDto"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                isVisiable: {
                    type: boolean | null;
                    args: never;
                };
                subtitle: {
                    type: string | null;
                    args: never;
                };
                tags: {
                    type: ((Record<CacheTypeDef, "AppTagDto"> | null))[] | null;
                    args: never;
                };
                title: {
                    type: string | null;
                    args: never;
                };
                topic: {
                    type: string | null;
                    args: never;
                };
                userId: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppMenuDto: {
            idFields: {
                id: string;
            };
            fields: {
                childMenus: {
                    type: ((Record<CacheTypeDef, "AppMenuDto"> | null))[] | null;
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
                    type: (Record<CacheTypeDef, "PermissionDto">)[];
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppPermissionDto: {
            idFields: {
                id: string;
            };
            fields: {
                childPermissions: {
                    type: ((Record<CacheTypeDef, "AppPermissionDto"> | null))[] | null;
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
                    type: (Record<CacheTypeDef, "AppRoleDto">)[] | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppRoleDto: {
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
                    type: ((Record<CacheTypeDef, "AppPermissionDto"> | null))[] | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppTagDto: {
            idFields: {
                id: string;
            };
            fields: {
                id: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AppUserDto: {
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
                    type: ((Record<CacheTypeDef, "AppRoleDto"> | null))[] | null;
                    args: never;
                };
                userType: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Article: {
            idFields: {
                id: any;
            };
            fields: {
                comments: {
                    type: (Record<CacheTypeDef, "ArticleComment">)[] | null;
                    args: never;
                };
                content: {
                    type: string;
                    args: never;
                };
                createTiem: {
                    type: Date;
                    args: never;
                };
                createUser: {
                    type: Record<CacheTypeDef, "User"> | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                isVisiable: {
                    type: boolean;
                    args: never;
                };
                subtitle: {
                    type: string | null;
                    args: never;
                };
                tags: {
                    type: (Record<CacheTypeDef, "Tag">)[] | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                topic: {
                    type: string | null;
                    args: never;
                };
                userId: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticleComment: {
            idFields: {
                id: any;
            };
            fields: {
                comment: {
                    type: string;
                    args: never;
                };
                createTiem: {
                    type: Date;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                isVisiable: {
                    type: boolean;
                    args: never;
                };
                userId: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticlesConnection: {
            idFields: never;
            fields: {
                edges: {
                    type: (Record<CacheTypeDef, "ArticlesEdge">)[] | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "Article">)[] | null;
                    args: never;
                };
                pageInfo: {
                    type: Record<CacheTypeDef, "PageInfo">;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticlesEdge: {
            idFields: never;
            fields: {
                cursor: {
                    type: string;
                    args: never;
                };
                node: {
                    type: Record<CacheTypeDef, "Article">;
                    args: never;
                };
            };
            fragments: [];
        };
        Email: {
            idFields: never;
            fields: {
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Menu: {
            idFields: {
                id: any;
            };
            fields: {
                children: {
                    type: (Record<CacheTypeDef, "Menu">)[];
                    args: never;
                };
                createTiem: {
                    type: Date;
                    args: never;
                };
                icon: {
                    type: string;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                isVisiable: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                order: {
                    type: number;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "Menu"> | null;
                    args: never;
                };
                parentId: {
                    type: any | null;
                    args: never;
                };
                path: {
                    type: string;
                    args: never;
                };
                permissionMenus: {
                    type: (Record<CacheTypeDef, "PermissionMenu">)[];
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
                version: {
                    type: (any)[];
                    args: never;
                };
            };
            fragments: [];
        };
        PageInfo: {
            idFields: never;
            fields: {
                endCursor: {
                    type: string | null;
                    args: never;
                };
                hasNextPage: {
                    type: boolean;
                    args: never;
                };
                hasPreviousPage: {
                    type: boolean;
                    args: never;
                };
                startCursor: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Permission: {
            idFields: {
                id: any;
            };
            fields: {
                childPermissions: {
                    type: (Record<CacheTypeDef, "Permission">)[];
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
                    type: any;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "Permission"> | null;
                    args: never;
                };
                parentId: {
                    type: any | null;
                    args: never;
                };
                permissionMenus: {
                    type: (Record<CacheTypeDef, "PermissionMenu">)[];
                    args: never;
                };
                roles: {
                    type: (Record<CacheTypeDef, "Role">)[];
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
                id: any;
            };
            fields: {
                childPermissions: {
                    type: (Record<CacheTypeDef, "PermissionDto">)[];
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
                    type: any;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parentId: {
                    type: any | null;
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
            };
            fragments: [];
        };
        PermissionMenu: {
            idFields: {
                id: any;
            };
            fields: {
                createdAt: {
                    type: Date;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                menu: {
                    type: Record<CacheTypeDef, "Menu">;
                    args: never;
                };
                menuId: {
                    type: any;
                    args: never;
                };
                permission: {
                    type: Record<CacheTypeDef, "Permission">;
                    args: never;
                };
                permissionId: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                article: {
                    type: Record<CacheTypeDef, "AppArticleDto"> | null;
                    args: {
                        id: any;
                    };
                };
                articles: {
                    type: Record<CacheTypeDef, "ArticlesConnection"> | null;
                    args: {
                        after?: string | null | undefined;
                        before?: string | null | undefined;
                        first?: number | null | undefined;
                        last?: number | null | undefined;
                        order?: (ArticleSortInput)[] | null | undefined;
                        where?: ArticleFilterInput | null | undefined;
                    };
                };
                menu: {
                    type: Record<CacheTypeDef, "AppMenuDto"> | null;
                    args: {
                        id: any;
                    };
                };
                menuTree: {
                    type: ((Record<CacheTypeDef, "AppMenuDto"> | null))[] | null;
                    args: never;
                };
                permissions: {
                    type: ((Record<CacheTypeDef, "AppPermissionDto"> | null))[] | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "AppRoleDto"> | null;
                    args: {
                        id: any;
                    };
                };
                roles: {
                    type: ((Record<CacheTypeDef, "AppRoleDto"> | null))[] | null;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "AppUserDto"> | null;
                    args: {
                        id: any;
                    };
                };
                users: {
                    type: ((Record<CacheTypeDef, "AppUserDto"> | null))[] | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Role: {
            idFields: {
                id: any;
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
                    type: any;
                    args: never;
                };
                isDisabled: {
                    type: boolean;
                    args: never;
                };
                isSuperAdmin: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: (Record<CacheTypeDef, "Permission">)[];
                    args: never;
                };
                updatedAt: {
                    type: Date | null;
                    args: never;
                };
                users: {
                    type: (Record<CacheTypeDef, "User">)[];
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
        Tag: {
            idFields: {
                id: any;
            };
            fields: {
                createTiem: {
                    type: Date;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                isVisiable: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        User: {
            idFields: {
                id: any;
            };
            fields: {
                email: {
                    type: Record<CacheTypeDef, "Email">;
                    args: never;
                };
                id: {
                    type: any;
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
                passwordHash: {
                    type: string;
                    args: never;
                };
                refreshToken: {
                    type: string | null;
                    args: never;
                };
                refreshTokenExpiryTime: {
                    type: Date | null;
                    args: never;
                };
                roles: {
                    type: (Record<CacheTypeDef, "Role">)[];
                    args: never;
                };
                userType: {
                    type: UserType;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[GetUsersStore, GetUsers$result, GetUsers$input]];
};