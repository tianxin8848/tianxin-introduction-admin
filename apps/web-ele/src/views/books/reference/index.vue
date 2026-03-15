<template>
  <div class="p-6">
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
    
    <!-- 显示当前选中的书籍参数 -->
    <div v-if="bookId" class="mt-6 p-4 bg-blue-50 rounded-md">
      <p>当前选中的书籍参数: {{ bookId }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const bookId = route.params.bookId as string;
</script>
