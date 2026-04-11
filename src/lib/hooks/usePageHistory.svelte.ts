export function usePageHistory() {
    // 页面历史记录，存储每一页的游标信息
    const pageHistory = $state<Array<{ page: number; cursor: string | null }>>([
        { page: 1, cursor: null }
    ]);

    // 处理页码变化
    const handlePageChange = (currentPage: number, newPage: number, currentCursor: string | null) => {
        let after = null;
        
        if (newPage > currentPage) {
            // 下一页，使用当前页的游标
            after = currentCursor || null;
            // 检查历史记录中是否已经存在当前页的记录
            const existingPage = pageHistory.find(item => item.page === currentPage);
            if (!existingPage) {
                // 将当前页的游标信息添加到历史记录中
                pageHistory.push({ 
                    page: currentPage, 
                    cursor: currentCursor || null 
                });
            }
        } else if (newPage < currentPage) {
            // 上一页，对于第一页，使用 null 作为游标
            if (newPage === 1) {
                after = null;
            } else {
                // 对于其他页，从历史记录中获取上一页的游标
                const previousPage = pageHistory.find(item => item.page === newPage);
                if (previousPage) {
                    after = previousPage.cursor;
                } else {
                    // 如果没有找到上一页的游标，回到第一页
                    after = null;
                }
            }
        }
        
        return after;
    };

    return {
        pageHistory,
        handlePageChange
    };
}