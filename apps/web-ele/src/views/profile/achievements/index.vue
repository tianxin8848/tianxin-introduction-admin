<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">21世纪ai产品展示</h1>
    
    <div class="mt-5 flex flex-col lg:flex-row gap-6">
      <div class="w-full lg:w-1/2">
        <DomesticAICard />
      </div>
      <div class="w-full lg:w-1/2">
        <InternationalAICard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DomesticAICard from './achiveCom/DomesticAICard.vue';
import InternationalAICard from './achiveCom/InternationalAICard.vue';
</script>
