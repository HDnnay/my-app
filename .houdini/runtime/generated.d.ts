import type { Record } from "./public/record";
import { GetUsers$result, GetUsers$input } from "$houdini/artifacts/GetUsers";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { SortEnumType } from "$houdini/graphql/enums";

type UserDtoSortInput = {
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
    isDisabled?: ValueOf<typeof SortEnumType> | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    userType?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ArticleDtoSortInput = {
    content?: ValueOf<typeof SortEnumType> | null | undefined;
    createTiem?: ValueOf<typeof SortEnumType> | null | undefined;
    createUser?: UserDtoSortInput | null | undefined;
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

type ArticleCommentDtoFilterInput = {
    and?: (ArticleCommentDtoFilterInput)[] | null | undefined;
    comment?: StringOperationFilterInput | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    or?: (ArticleCommentDtoFilterInput)[] | null | undefined;
    userId?: UuidOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfArticleCommentDtoFilterInput = {
    all?: ArticleCommentDtoFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: ArticleCommentDtoFilterInput | null | undefined;
    some?: ArticleCommentDtoFilterInput | null | undefined;
};

type PermissionDtoFilterInput = {
    and?: (PermissionDtoFilterInput)[] | null | undefined;
    childPermissions?: ListFilterInputTypeOfPermissionDtoFilterInput | null | undefined;
    code?: StringOperationFilterInput | null | undefined;
    createdAt?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (PermissionDtoFilterInput)[] | null | undefined;
    parentId?: UuidOperationFilterInput | null | undefined;
    roles?: ListFilterInputTypeOfRoleDtoFilterInput | null | undefined;
    updatedAt?: DateTimeOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfPermissionDtoFilterInput = {
    all?: PermissionDtoFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: PermissionDtoFilterInput | null | undefined;
    some?: PermissionDtoFilterInput | null | undefined;
};

type RoleDtoFilterInput = {
    and?: (RoleDtoFilterInput)[] | null | undefined;
    code?: StringOperationFilterInput | null | undefined;
    createdAt?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isDisabled?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (RoleDtoFilterInput)[] | null | undefined;
    permissions?: ListFilterInputTypeOfPermissionDtoFilterInput | null | undefined;
    updatedAt?: DateTimeOperationFilterInput | null | undefined;
};

type ListFilterInputTypeOfRoleDtoFilterInput = {
    all?: RoleDtoFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: RoleDtoFilterInput | null | undefined;
    some?: RoleDtoFilterInput | null | undefined;
};

type UserDtoFilterInput = {
    and?: (UserDtoFilterInput)[] | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isDisabled?: BooleanOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (UserDtoFilterInput)[] | null | undefined;
    roles?: ListFilterInputTypeOfRoleDtoFilterInput | null | undefined;
    userType?: StringOperationFilterInput | null | undefined;
};

type TagDtoFilterInput = {
    and?: (TagDtoFilterInput)[] | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    or?: (TagDtoFilterInput)[] | null | undefined;
};

type ListFilterInputTypeOfTagDtoFilterInput = {
    all?: TagDtoFilterInput | null | undefined;
    any?: boolean | null | undefined;
    none?: TagDtoFilterInput | null | undefined;
    some?: TagDtoFilterInput | null | undefined;
};

type ArticleDtoFilterInput = {
    and?: (ArticleDtoFilterInput)[] | null | undefined;
    comments?: ListFilterInputTypeOfArticleCommentDtoFilterInput | null | undefined;
    content?: StringOperationFilterInput | null | undefined;
    createTiem?: DateTimeOperationFilterInput | null | undefined;
    createUser?: UserDtoFilterInput | null | undefined;
    id?: UuidOperationFilterInput | null | undefined;
    isVisiable?: BooleanOperationFilterInput | null | undefined;
    or?: (ArticleDtoFilterInput)[] | null | undefined;
    subtitle?: StringOperationFilterInput | null | undefined;
    tags?: ListFilterInputTypeOfTagDtoFilterInput | null | undefined;
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
        ArticlesConnection: {
            idFields: never;
            fields: {
                edges: {
                    type: (Record<CacheTypeDef, "ArticlesEdge">)[] | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "AppArticleDto">)[] | null;
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
                    type: Record<CacheTypeDef, "AppArticleDto">;
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
                        order?: (ArticleDtoSortInput)[] | null | undefined;
                        sortBy?: string | null | undefined;
                        sortDescending?: boolean | null | undefined;
                        where?: ArticleDtoFilterInput | null | undefined;
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
        SuccessResponse: {
            idFields: never;
            fields: {
                message: {
                    type: string | null;
                    args: never;
                };
                success: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[GetUsersStore, GetUsers$result, GetUsers$input]];
};