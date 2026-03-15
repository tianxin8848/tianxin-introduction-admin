<template>
  <div class="p-6">
    <!-- 书籍列表 -->
    <div v-if="!bookId">
      <h1 class="text-2xl font-bold mb-6">工具书类</h1>
      
      <!-- 书籍卡片展示 - 第一行 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link :to="'/books/reference/A'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍1-think-like.png" alt="书籍1" class="w-full h-full object-cover" />
          </div>
        </router-link>
        <router-link :to="'/books/reference/B'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍2.png" alt="书籍2" class="w-full h-full object-cover" />
          </div>
        </router-link>
        <router-link :to="'/books/reference/C'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍3.png" alt="书籍3" class="w-full h-full object-cover" />
          </div>
        </router-link>
      </div>
      
      <!-- 书籍卡片展示 - 第二行 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <router-link :to="'/books/reference/D'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍4.png" alt="书籍4" class="w-full h-full object-cover" />
          </div>
        </router-link>
        <router-link :to="'/books/reference/E'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍5.png" alt="书籍5" class="w-full h-full object-cover" />
          </div>
        </router-link>
        <router-link :to="'/books/reference/F'" class="card-box p-4 cursor-pointer">
          <div class="aspect-[3/4] overflow-hidden rounded-md">
            <img src="/书籍6.png" alt="书籍6" class="w-full h-full object-cover" />
          </div>
        </router-link>
      </div>
    </div>
    
    <!-- PDF 查看器 -->
    <div v-else-if="bookId === 'A'" class="pdf-container">
      <h1 class="text-2xl font-bold mb-4">PDF 浏览器</h1>
      <div class="pdf-controls mb-4">
        <el-button @click="previousPage" :disabled="currentPage <= 1">上一页</el-button>
        <span class="mx-4">{{ currentPage }} / {{ totalPages }}</span>
        <el-button @click="nextPage" :disabled="currentPage >= totalPages">下一页</el-button>
      </div>
      <div class="pdf-canvas-container">
        <canvas ref="pdfCanvas" class="pdf-canvas"></canvas>
      </div>
    </div>
    
    <!-- 其他书籍 -->
    <div v-else class="mt-6 p-4 bg-blue-50 rounded-md">
      <p>当前选中的书籍参数: {{ bookId }}</p>
      <p>书籍内容正在加载中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';

// 设置 worker 路径
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const route = useRoute();
const bookId = route.params.bookId as string;

const pdfCanvas = ref<HTMLCanvasElement | null>(null);
const currentPage = ref(1);
const totalPages = ref(0);
let pdfDoc: pdfjsLib.PDFDocumentProxy | null = null;

const loadPdf = async () => {
  if (!pdfCanvas.value || bookId !== 'A') return;
  
  try {
    // 加载 PDF 文件
    pdfDoc = await pdfjsLib.getDocument('/think-like-a-programmer.pdf').promise;
    totalPages.value = pdfDoc.numPages;
    
    // 渲染第一页
    renderPage(currentPage.value);
  } catch (error) {
    console.error('加载 PDF 失败:', error);
  }
};

const renderPage = async (pageNum: number) => {
  if (!pdfDoc || !pdfCanvas.value) return;
  
  try {
    // 获取指定页码的页面
    const page = await pdfDoc.getPage(pageNum);
    
    // 设置渲染参数
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = pdfCanvas.value;
    const context = canvas.getContext('2d');
    
    if (!context) return;
    
    // 设置 canvas 尺寸
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // 渲染页面
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
  } catch (error) {
    console.error('渲染页面失败:', error);
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    renderPage(currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    renderPage(currentPage.value);
  }
};

// 监听页码变化，重新渲染页面
watch(currentPage, (newPage) => {
  renderPage(newPage);
});

// 监听 bookId 变化，加载 PDF
watch(() => bookId, (newBookId) => {
  if (newBookId === 'A') {
    loadPdf();
  }
});

// 组件挂载时加载 PDF
onMounted(() => {
  if (bookId === 'A') {
    loadPdf();
  }
});
</script>

<style scoped>
.pdf-canvas {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pdf-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-canvas-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
</style>
