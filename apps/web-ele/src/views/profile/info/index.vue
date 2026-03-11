<template>
  <div class="relative min-h-screen">
    <!-- 毛玻璃效果的隐藏页面 -->
    <div v-if="!isAuthenticated" class="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <!-- 密码输入弹窗 -->
      <div class="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-2xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-6 text-center">请面试官输入密码</h2>
        <h2 class="text-xl font-bold mb-6 text-center">非面试官请浏览其他公共内容</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">密码</label>
            <input 
              type="password" 
              v-model="password" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              @keyup.enter="verifyPassword"
            />
          </div>
          <button 
            @click="verifyPassword" 
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            验证
          </button>
          <p v-if="error" class="text-red-500 text-sm text-center">密码错误，请重试</p>
        </div>
      </div>
    </div>
    
    <!-- 正常内容 -->
    <div v-if="isAuthenticated" class="p-5">
      <Info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Info from './infoCom/info.vue';

// 状态管理
const isAuthenticated = ref(false);
const password = ref('');
const error = ref('');

// 密码验证
const verifyPassword = () => {
  // 使用更安全的加密方式 - 双重加密
  const hashPassword = (pass: string) => {
    let hash = 0;
    for (let i = 0; i < pass.length; i++) {
      const char = pass.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return btoa(String(hash));
  };
  
  const encryptedPassword = hashPassword(password.value);
  const correctPassword = '20260308'; // 这里使用一个示例密码，实际项目中应该使用更复杂的加密
  
  if (hashPassword(correctPassword) === encryptedPassword) {
    isAuthenticated.value = true;
    error.value = '';
    // 存储验证状态到会话存储，使用加密的方式
    sessionStorage.setItem('profileInfoAuth', btoa('true'));
  } else {
    error.value = '密码错误';
    password.value = '';
  }
};

// 初始化验证状态
onMounted(() => {
  // 检查会话存储中的验证状态
  const authStatus = sessionStorage.getItem('profileInfoAuth');
  if (authStatus && atob(authStatus) === 'true') {
    isAuthenticated.value = true;
  }
  
  // 防调试措施
  (function() {
    // 检测开发工具打开
    const detectDevTools = () => {
      // 方法1：检测控制台打开
      const checkConsole = () => {
        const startTime = performance.now();
        console.profile('devtools-detector');
        console.profileEnd('devtools-detector');
        const endTime = performance.now();
        
        if (endTime - startTime > 100) {
          // 开发工具打开，执行防护措施
          isAuthenticated.value = false;
          sessionStorage.removeItem('profileInfoAuth');
        }
        
        setTimeout(checkConsole, 500);
      };
      
      // 方法2：检测窗口大小变化
      window.addEventListener('resize', () => {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold) {
          // 开发工具打开，执行防护措施
          isAuthenticated.value = false;
          sessionStorage.removeItem('profileInfoAuth');
        }
      });
      
      checkConsole();
    };
    
    detectDevTools();
    
    // 禁用右键菜单
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    
    // 禁用F12键
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        isAuthenticated.value = false;
        sessionStorage.removeItem('profileInfoAuth');
      }
    });
  })();
});
</script>
