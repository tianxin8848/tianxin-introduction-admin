<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">韩语文创</h1>
    
    <!-- 韩国文化图片轮播 -->
    <CarouselCard />
    
    <!-- 韩国名人名言 -->
    <QuoteCard class="mt-6" />
    
    <div class="card-box p-4 mt-6">
      <p class="text-gray-600">这里是韩语文创页面，展示与韩语相关的文化创意产品。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CarouselCard from './culCom/CarouselCard.vue';
import QuoteCard from './culCom/QuoteCard.vue';
</script>
