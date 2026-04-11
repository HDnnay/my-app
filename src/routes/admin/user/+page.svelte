<script lang="ts">
    import type { PageProps } from './$types';
    import Pagination from '$lib/components/Pagination.svelte';
    import { goto } from '$app/navigation';

    let { data }: PageProps = $props();
    
    // 使用 $derived 创建响应式状态，依赖于 data
    const state = $derived({
        users: data?.users || [],
        pagination: data?.pagination || {
            totalItems: 0,
            itemsPerPage: 1,
            currentPage: 1,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
            endCursor: null
        }
    });
    
    // 处理页码变化
    const handlePageChange = (page: number, after: string | null) => {
        console.log('=== 页面处理页码变化 ===');
        console.log('目标页:', page);
        console.log('游标:', after);
        
        // 更新 URL 查询参数，触发页面重新加载
        const params = new URLSearchParams();
        params.set('page', page.toString());
        if (after) {
            params.set('after', after);
        }
        console.log('生成的 URL:', `/admin/user?${params.toString()}`);
        
        goto(`/admin/user?${params.toString()}`);
    };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-900">用户管理</h1>
    <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">序号</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户类型</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                {#each state.users as user, index}
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user?.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user?.email}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user?.userType}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            {#if user?.isDisabled}
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                    禁用
                                </span>
                            {:else}
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    启用
                                </span>
                            {/if}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            {#if user?.roles && user?.roles.length > 0}
                                {#each user?.roles as role, index}
                                    {role?.name}{index < user?.roles.length - 1 ? ', ' : ''}
                                {/each}
                            {:else}
                                无角色
                            {/if}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button class="text-white bg-primary-500 hover:bg-primary-400 px-2 py-2 rounded-md mr-3">编辑</button>
                            <button class="text-red-600 px-2 py-2 border border-red-600 hover:bg-red-100 rounded-md hover:text-red-900">删除</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    
    <!-- 分页组件 -->
    <Pagination
        currentPage={state.pagination.currentPage}
        totalItems={state.pagination.totalItems}
        itemsPerPage={state.pagination.itemsPerPage}
        endCursor={state.pagination.endCursor}
        onPageChange={handlePageChange}
    />
</div>
