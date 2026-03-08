<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-lg font-semibold mb-4">向日葵展览</h2>
    <div class="aspect-square overflow-hidden rounded-md relative">
      <div 
        class="flex transition-transform duration-500 ease-in-out" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="w-full flex-shrink-0">
          <img 
            src="/生成向日葵图片-1.png" 
            alt="向日葵图片1" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full flex-shrink-0">
          <img 
            src="/生成向日葵图片-2.png" 
            alt="向日葵图片2" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full flex-shrink-0">
          <img 
            src="/生成向日葵图片.png" 
            alt="向日葵图片3" 
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
  '/生成向日葵图片-1.png',
  '/生成向日葵图片-2.png',
  '/生成向日葵图片.png'
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
