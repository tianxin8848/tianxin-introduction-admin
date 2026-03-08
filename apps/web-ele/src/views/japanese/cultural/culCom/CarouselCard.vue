<template>
  <div class="card-box p-4 w-full">
    <h2 class="text-lg font-semibold mb-4">日本文化展览</h2>
    <div class="aspect-video max-h-64 overflow-hidden rounded-md relative">
      <div 
        class="flex transition-transform duration-500 ease-in-out" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="w-full flex-shrink-0">
          <img 
            src="/日本1.png" 
            alt="日本图片1" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full flex-shrink-0">
          <img 
            src="/日本2.png" 
            alt="日本图片2" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full flex-shrink-0">
          <img 
            src="/日本3.png" 
            alt="日本图片3" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <!-- 轮播指示器 -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button 
          v-for="(item, index) in images" 
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="index === currentIndex ? 'bg-white w-6' : 'bg-white/50'"
          @click="currentIndex = index"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
  '/日本1.png',
  '/日本2.png',
  '/日本3.png'
];

const currentIndex = ref(0);
let interval: number | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
  // 自动轮播，每3秒切换一次
  interval = window.setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>
