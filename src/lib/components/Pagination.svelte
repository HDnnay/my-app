<script lang="ts">
    // 分页组件的属性
    let { 
        currentPage = 1, 
        totalItems = 0, 
        itemsPerPage = 10, 
        onPageChange 
    }: {
        currentPage?: number;
        totalItems?: number;
        itemsPerPage?: number;
        onPageChange: (page: number) => void;
    } = $props();

    // 处理页码变化
    const handlePageChange = (page: number) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // 生成页码数组
    const getPageNumbers = () => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pageNumbers = [];
        const maxPagesToShow = 5; // 最多显示 5 个页码
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        // 调整起始页码，确保显示足够的页码
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    // 计算总页数
    const getTotalPages = () => {
        return Math.ceil(totalItems / itemsPerPage);
    };
</script>

<div class="flex items-center justify-center mt-8">
    <div class="flex items-center space-x-2">
        <!-- 上一页按钮 -->
        <button
            class="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onclick={() => handlePageChange(currentPage - 1)}
        >
            上一页
        </button>

        <!-- 页码按钮 -->
        {#each getPageNumbers() as page}
            <button
                class="px-3 py-1 rounded-md {currentPage === page ? 'bg-primary-500 text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}"
                onclick={() => handlePageChange(page)}
            >
                {page}
            </button>
        {/each}

        <!-- 下一页按钮 -->
        <button
            class="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === getTotalPages()}
            onclick={() => handlePageChange(currentPage + 1)}
        >
            下一页
        </button>
    </div>

    <!-- 分页信息 -->
    <div class="ml-4 text-sm text-gray-600">
        第 {currentPage} 页，共 {getTotalPages()} 页
    </div>
</div>