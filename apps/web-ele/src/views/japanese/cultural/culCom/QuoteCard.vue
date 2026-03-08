<template>
  <div class="card-box p-4 w-full">
    <h2 class="text-lg font-semibold mb-4">日本名人名言</h2>
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

// 日语名言列表
const japaneseQuotes: Quote[] = [
  {
    text: '人生には、失望することもあるが、希望を持ち続けよう。',
    author: '福沢諭吉'
  },
  {
    text: '努力は必ず報われる。',
    author: '夏目漱石'
  },
  {
    text: '逆境は人を磨く。',
    author: '武者小路実篤'
  },
  {
    text: '失敗は成功のもと。',
    author: '松下幸之助'
  },
  {
    text: '夢は逃げない。逃げるのはいつも自分だ。',
    author: '高村光太郎'
  },
  {
    text: '行動こそが最も良い知識である。',
    author: '山本五十六'
  },
  {
    text: '人は一人では生きられない。',
    author: '太宰治'
  },
  {
    text: '時間は金なり。',
    author: '日本のことわざ'
  },
  {
    text: '千里の道も一歩から。',
    author: '日本のことわざ'
  },
  {
    text: '早起きは三文の得。',
    author: '日本のことわざ'
  },
  {
    text: '知識は力なり。',
    author: '日本のことわざ'
  },
  {
    text: '恩を忘れず、恨みを忘れよ。',
    author: '日本のことわざ'
  }
];

const quote = ref<Quote | null>(null);
const lastUpdated = ref('加载中...');
let updateInterval: number | null = null;

const fetchQuote = () => {
  // 从日语名言列表中随机选择一条
  const randomIndex = Math.floor(Math.random() * japaneseQuotes.length);
  quote.value = japaneseQuotes[randomIndex];
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
