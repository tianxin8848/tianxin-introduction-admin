<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">个人信息</h1>
    
    <!-- 个人出生年月日卡片 -->
    <BirthdayCard />
    
    <!-- 个人基本信息卡片 -->
    <BasicInfoCard />
    
    <!-- 联系方式卡片 -->
    <ContactCard />
    
    <!-- 向日葵图片卡片 -->
    <div class="grid grid-cols-1 gap-6">
      <ImageCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import BirthdayCard from './infoCom/BirthdayCard.vue';
import BasicInfoCard from './infoCom/BasicInfoCard.vue';
import ContactCard from './infoCom/ContactCard.vue';
import ImageCard from './infoCom/ImageCard.vue';
</script>
