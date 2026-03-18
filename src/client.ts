import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'http://localhost:5231/graphql'  // 与配置文件中的 watchSchema.url 保持一致
});