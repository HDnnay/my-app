<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-900">用户管理</h1>
    <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户类型</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                {#each data?.users || [] as user}
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.userType}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            {#if user.isDisabled}
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
                            {#if user.roles && user.roles.length > 0}
                                {#each user.roles as role, index}
                                    {role.name}{index < user.roles.length - 1 ? ', ' : ''}
                                {/each}
                            {:else}
                                无角色
                            {/if}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button class="text-green-600 hover:text-green-900 mr-3">编辑</button>
                            <button class="text-red-600 hover:text-red-900">删除</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>