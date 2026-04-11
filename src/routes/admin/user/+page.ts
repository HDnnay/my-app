import type { PageLoad } from './$types';
import { GetUsersStore } from '$houdini';

export const load = (async (event) => {
    console.log('=== Load function executed ===');
    
    try {
        // 从 URL 查询参数中获取当前页码和游标
        const currentPage = parseInt(event.url.searchParams.get('page') || '1');
        const after = event.url.searchParams.get('after') || null;
        
        console.log('URL 参数 - 页码:', currentPage);
        console.log('URL 参数 - 游标:', after);
        
        // 分页参数
        const itemsPerPage = 1;
        
        // 使用 Houdini store 获取用户数据
        console.log('使用 Houdini store - first:', itemsPerPage, 'after:', after);
        const store = new GetUsersStore();
        
        // 直接调用 Houdini 的 fetch 方法
        const result = await store.fetch({
            event,
            variables: {
                first: itemsPerPage,
                after
            }
        });
        
        console.log('Houdini result:', result);
        console.log('Houdini data:', result.data);
        console.log('Houdini errors:', result.errors);
        
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
                itemsPerPage: 1,
                currentPage: 1,
                totalPages: 0,
                hasNextPage: false,
                hasPreviousPage: false,
                endCursor: null
            }
        };
    }
}) satisfies PageLoad;