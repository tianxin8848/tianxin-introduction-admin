<template>
  <div class="bg-white rounded-lg shadow-md p-4 h-full">
    <h2 class="text-lg font-semibold mb-4">国内AI产品</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div 
        v-for="item in aiProducts" 
        :key="item.title"
        class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col"
      >
        <div class="flex items-center mb-2">
          <div 
            class="w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white"
            :style="{ backgroundColor: item.color }"
          >
            <i :class="item.icon"></i>
          </div>
          <h3 class="font-medium">{{ item.title }}</h3>
        </div>
        <p class="text-sm text-gray-600 mb-2 flex-grow">{{ item.content }}</p>
        <p class="text-xs text-gray-500">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface AIProduct {
  title: string;
  content: string;
  date: string;
  color: string;
  icon: string;
}

const aiProducts = ref<AIProduct[]>([
  {
    title: 'DeepSeek',
    content: '深度求索，专注于通用人工智能',
    date: '2023-07-01',
    color: '#3fb27f',
    icon: 'lucide:brain',
  },
  {
    title: '千问',
    content: '阿里巴巴推出的智能问答助手',
    date: '2023-08-01',
    color: '#e18525',
    icon: 'lucide:message-square',
  },
  {
    title: '元宝',
    content: '腾讯的智能助手',
    date: '2023-09-01',
    color: '#bf0c2c',
    icon: 'lucide:coin',
  },
]);
</script>
