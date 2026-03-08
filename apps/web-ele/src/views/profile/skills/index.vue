<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">个人技能</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProceduralProgrammingCard />
      <ObjectOrientedProgrammingCard />
      <AiProgrammingCard />
      <FunctionalProgrammingCard />
      <ReactiveProgrammingCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProceduralProgrammingCard from './skillCom/ProceduralProgrammingCard.vue';
import ObjectOrientedProgrammingCard from './skillCom/ObjectOrientedProgrammingCard.vue';
import AiProgrammingCard from './skillCom/AiProgrammingCard.vue';
import FunctionalProgrammingCard from './skillCom/FunctionalProgrammingCard.vue';
import ReactiveProgrammingCard from './skillCom/ReactiveProgrammingCard.vue';
</script>
