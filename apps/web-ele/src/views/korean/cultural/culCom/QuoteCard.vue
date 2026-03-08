<template>
  <div class="card-box p-4 w-full">
    <h2 class="text-lg font-semibold mb-4">韩国名人名言</h2>
    <div class="bg-white rounded-md p-6 shadow-sm">
      <p class="text-gray-700 italic mb-4" v-if="quote">{{ quote.text }}</p>
      <p class="text-gray-500 text-right" v-if="quote">— {{ quote.author }}</p>
      <div class="flex justify-center items-center h-32" v-else>
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
      <p class="text-xs text-gray-400 mt-4 text-right">
        上次更新: {{ lastUpdated }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Quote {
  text: string;
  author: string;
}

// 韩语名言列表
const koreanQuotes: Quote[] = [
  {
    text: '인생은 한 번뿐이다. 그것을 잘 살자.',
    author: '金大中'
  },
  {
    text: '희망은 사람을 살게 한다.',
    author: '李明博'
  },
  {
    text: '끈기는 모든 어려움을 이긴다.',
    author: '朴槿惠'
  },
  {
    text: '사람은 서로 도와야 한다.',
    author: '文在寅'
  },
  {
    text: '노력은 절대 배신하지 않는다.',
    author: '尹锡悦'
  },
  {
    text: '변화는 발전의 시작이다.',
    author: '金泳三'
  },
  {
    text: '자신을 믿어라. 당신은 더 강하다.',
    author: '全斗焕'
  },
  {
    text: '꿈은 이루어질 수 있다. 노력하라.',
    author: '朴正熙'
  },
  {
    text: '평화는 가장 소중한 가치다.',
    author: '李承晚'
  },
  {
    text: '사랑은 세상을 변화시킨다.',
    author: '金九'
  },
  {
    text: '학습은 평생의 과정이다.',
    author: '韩国谚语'
  },
  {
    text: '희생은 성공의 가격이다.',
    author: '韩国谚语'
  }
];

const quote = ref<Quote | null>(null);
const lastUpdated = ref('加载中...');
let updateInterval: number | null = null;

const fetchQuote = () => {
  // 从韩语名言列表中随机选择一条
  const randomIndex = Math.floor(Math.random() * koreanQuotes.length);
  quote.value = koreanQuotes[randomIndex];
  lastUpdated.value = new Date().toLocaleString('zh-CN');
};

onMounted(() => {
  fetchQuote();
  // 每小时更新一次
  updateInterval = window.setInterval(fetchQuote, 3600000);
});

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
</script>
