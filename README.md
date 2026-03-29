# Svelte + Houdini + Tailwind CSS 配置教程

本教程详细说明如何在 SvelteKit 项目中配置 Houdini GraphQL 客户端和 Tailwind CSS。

## 1. 项目初始化

首先，使用 Vite 创建一个 SvelteKit 项目：

```bash
npm create vite@latest my-app -- --template sveltekit
cd my-app
npm install
```

## 2. 安装 Houdini

安装 Houdini 及其相关依赖：

```bash
# 安装 Houdini 核心包
npm install houdini

# 安装 Houdini Svelte 插件
npm install -D houdini-svelte
```

## 3. 配置 Houdini

### 3.1 创建 Houdini 配置文件

在项目根目录创建 `houdini.config.js` 文件：

```javascript
/** @type {import('houdini').ConfigFile} */
export default {
    watchSchema: {
        url: process.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:5231/graphql',
    },

    // 本地 schema 文件路径（用于生成类型和查询验证）
    schemaPath: './src/gql/app.graphql',

    // 插件配置
    plugins: {
        "houdini-svelte": {
            defaultRouteBlocking: false
        }
    },

    scalars: {
        DateTime: {
            type: 'Date',
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            marshal(date) {
                return date && date.getTime()
            }
        }
    }
}
```

### 3.2 配置 Svelte 别名

更新 `svelte.config.js` 文件，添加 Houdini 别名：

```javascript
import adapter from '@sveltejs/adapter-auto';
import { path } from 'houdini';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            $houdini: path.resolve('.', '.houdini'),
        }
    }
};

export default config;
```

### 3.3 创建 GraphQL 客户端

在 `src/client.ts` 文件中创建 Houdini 客户端：

```typescript
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:5231/graphql'  // 使用环境变量配置后端 GraphQL 端点
});
```

## 4. 配置 GraphQL Schema

### 4.1 创建 Schema 文件

在 `src/gql` 目录中创建 `app.graphql` 文件，添加 GraphQL schema 定义：

```graphql
"""
The purpose of the `cost` directive is to define a `weight` for GraphQL types, fields, and arguments. Static analysis can use these weights when calculating the overall cost of a query or response.
"""
directive @cost(
  """
  The `weight` argument defines what value to add to the overall cost for every appearance, or possible appearance, of a type, field, argument, etc.
  """
  weight: String!
) on SCALAR | OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | ENUM | INPUT_FIELD_DEFINITION

type SuccessResponse {
  success: Boolean!
}

input CreateUserCommandInput {
  name: String!
  email: String!
  userType: String!
}

input UpdateRoleCommandInput {
  name: String!
  code: String!
  description: String
  permissionIds: [ID]
  roleId: UUID!
}

input CreateRoleCommandInput {
  name: String!
  code: String!
  description: String
  permissionIds: [ID]
}

type Query {
  """
  获取菜单详情
  """
  menu(
    """
    菜单ID
    """
    id: UUID!
  ): MenuDto

  """
  获取菜单树形结构
  """
  menuTree: [MenuDto]

  """
  获取用户列表
  """
  users: [UserDto]

  """
  获取用户详情
  """
  user(
    """
    用户ID
    """
    id: UUID!
  ): UserDto

  """
  获取角色列表
  """
  roles: [RoleDto]

  """
  获取角色详情
  """
  role(
    """
    角色ID
    """
    id: UUID!
  ): RoleDto

  """
  获取权限列表
  """
  permissions: [PermissionDto]
}

type UserDto {
  id: ID!
  name: String!
  email: String!
  userType: String!
  isDisabled: Boolean!
  roles: [RoleDto]
}

input UpdateMenuCommandInput {
  name: String!
  path: String
  icon: String
  order: Int
  parentId: ID
  id: UUID!
}

type RoleDto {
  id: ID!
  name: String!
  code: String!
  description: String
  isDisabled: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime
  permissions: [PermissionDto]
}

input CreateMenuCommandInput {
  name: String!
  path: String
  icon: String
  order: Int
  parentId: ID
}

type MenuDto {
  id: ID
  name: String
  path: String
  icon: String
  order: Int
  parentId: ID
  createdAt: DateTime
  updatedAt: DateTime
  childMenus: [MenuDto]
  permissions: [PermissionDto]
}

scalar UUID

input UpdateUserCommandInput {
  name: String!
  email: String!
  userType: String!
  id: UUID!
}

type Mutation {
  """
  创建菜单
  """
  createMenu(command: CreateMenuCommandInput!): MenuDto

  """
  更新菜单
  """
  updateMenu(id: ID!, command: UpdateMenuCommandInput!): MenuDto

  """
  删除菜单
  """
  deleteMenu(id: ID!): SuccessResponse

  """
  为菜单分配权限
  """
  assignPermissionsToMenu(id: ID!, permissionIds: [ID!]!): SuccessResponse

  """
  创建用户
  """
  createUser(command: CreateUserCommandInput!): ID!

  """
  更新用户
  """
  updateUser(id: ID!, command: UpdateUserCommandInput!): UserDto

  """
  删除用户
  """
  deleteUser(id: ID!): SuccessResponse

  """
  为用户分配角色
  """
  assignRolesToUser(id: ID!, roleIds: [ID!]!): SuccessResponse

  """
  创建角色
  """
  createRole(command: CreateRoleCommandInput!): RoleDto

  """
  更新角色
  """
  updateRole(id: ID!, command: UpdateRoleCommandInput!): RoleDto

  """
  删除角色
  """
  deleteRole(id: ID!): SuccessResponse

  """
  为角色分配权限
  """
  assignPermissionsToRole(id: ID!, permissionIds: [ID!]!): SuccessResponse
}

"""
The `DateTime` scalar represents an ISO-8601 compliant date time type.
"""
scalar DateTime

type PermissionDto {
  id: ID!
  name: String!
  code: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime
  parentId: UUID
  childPermissions: [PermissionDto!]!
}
```

## 5. 创建 GraphQL 操作

### 5.1 创建查询操作

在 `src/routes/admin/user` 目录中创建 `page.gql` 文件，添加查询操作：

```graphql
query GetUsers {
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
}
```

## 6. 生成 Houdini 代码

运行 Houdini 代码生成命令：

```bash
npx houdini generate
```

## 7. 在组件中使用 Houdini

### 7.1 更新页面加载函数

在 `src/routes/admin/user/+page.ts` 文件中，使用 Houdini 生成的查询：

```typescript
import type { PageLoad } from './$types';
import { GetUsersStore } from '$houdini';

export const load = (async (event) => {
    const store = new GetUsersStore();
    const { data } = await store.fetch({ event });
    console.log('Users:', data?.users);
    return { users: data?.users };
}) satisfies PageLoad;
```

### 7.2 更新页面组件

在 `src/routes/admin/user/+page.svelte` 文件中，使用获取的数据：

```svelte
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
```

## 8. 配置环境变量

创建 `.env` 文件，配置 GraphQL 端点：

```
# 后端 GraphQL 端点地址
VITE_GRAPHQL_ENDPOINT=http://localhost:5231/graphql
```

## 9. 安装与配置 Tailwind CSS

### 9.1 安装 Tailwind CSS 及其依赖

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

### 9.2 创建 Tailwind 配置文件

创建 `tailwind.config.js` 文件：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 9.3 创建 PostCSS 配置文件

创建 `postcss.config.js` 文件：

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 9.4 更新样式文件

在 `src/routes/layout.css` 文件中添加 Tailwind 指令：

```css
@import '@fontsource/fira-mono';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --font-body:
        Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'Fira Mono', monospace;
    --color-bg-0: rgb(202, 216, 228);
    --color-bg-1: hsl(209, 36%, 86%);
    --color-bg-2: hsl(224, 44%, 95%);
    --color-theme-1: #ff3e00;
    --color-theme-2: #4075a6;
    --color-text: rgba(0, 0, 0, 0.7);
    --column-width: 42rem;
    --column-margin-top: 4rem;
    font-family: var(--font-body);
    color: var(--color-text);
}

/* 其他样式... */
```

## 10. 运行项目

启动开发服务器：

```bash
npm run dev
```

访问 `http://localhost:5173/admin/user` 查看用户管理页面。

## 11. 构建项目

构建生产版本：

```bash
npm run build
```

## 总结

通过以上步骤，你已经成功配置了一个使用 SvelteKit、Houdini GraphQL 客户端和 Tailwind CSS 的项目。这个项目可以：

1. 从 GraphQL API 获取数据
2. 使用 Houdini 生成的类型和查询
3. 使用 Tailwind CSS 进行样式设计
4. 通过环境变量管理配置

这样，你就可以开始开发你的应用了！