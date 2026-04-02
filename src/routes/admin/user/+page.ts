import type { PageLoad } from './$types';

export const load = (async (event) => {
    console.log('Load function executed');
    
    try {
        // 从 URL 查询参数中获取当前页码和游标
        const currentPage = parseInt(event.url.searchParams.get('page') || '1');
        const after = event.url.searchParams.get('after') || null;
        
        // 分页参数
        const itemsPerPage = 10;
        
        // 直接使用 fetch 调用 GraphQL 服务器
        const response = await fetch('http://localhost:5231/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetUsers($first: Int!, $after: String) {
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
                variables: {
                    first: itemsPerPage,
                    after
                }
            })
        });
        
        console.log('Response status:', response.status);
        
        const result = await response.json();
        
        console.log('GraphQL response:', result);
        
        if (result.errors) {
            console.error('Error fetching users:', result.errors);
            return { 
                users: [], 
                pagination: {
                    totalItems: 0,
                    itemsPerPage,
                    currentPage,
                    totalPages: 0,
                    hasNextPage: false,
                    hasPreviousPage: false,
                    endCursor: null
                }
            };
        }
        
        const data = result.data;
        console.log('Users:', data?.users);
        
        // 分页相关数据
        const totalItems = data?.users?.totalCount || 0;
        const hasNextPage = data?.users?.pageInfo?.hasNextPage || false;
        const hasPreviousPage = data?.users?.pageInfo?.hasPreviousPage || false;
        const endCursor = data?.users?.pageInfo?.endCursor || null;
        
        return { 
            users: data?.users?.nodes || [], 
            pagination: {
                totalItems,
                itemsPerPage,
                currentPage,
                totalPages: Math.ceil(totalItems / itemsPerPage),
                hasNextPage,
                hasPreviousPage,
                endCursor
            }
        };
    } catch (error) {
        console.error('Error in load function:', error);
        return { 
            users: [], 
            pagination: {
                totalItems: 0,
                itemsPerPage: 10,
                currentPage: 1,
                totalPages: 0,
                hasNextPage: false,
                hasPreviousPage: false,
                endCursor: null
            }
        };
    }
}) satisfies PageLoad;