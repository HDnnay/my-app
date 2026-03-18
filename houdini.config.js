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