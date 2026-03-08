<template>
  <div class="bg-white rounded-lg shadow-md p-4 h-full">
    <h2 class="text-lg font-semibold mb-4">国外AI产品</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    title: 'ChatGPT',
    content: 'OpenAI推出的大型语言模型',
    date: '2022-11-30',
    color: '#00d8ff',
    icon: 'lucide:chat-bubble',
  },
  {
    title: 'Cursor',
    content: '智能代码编辑器',
    date: '2023-03-01',
    color: '#4daf1bc9',
    icon: 'lucide:code',
  },
]);
</script>
