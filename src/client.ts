import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:5231/graphql'  // 使用环境变量配置后端 GraphQL 端点
});