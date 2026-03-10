<script lang="ts" setup>
import type { WorkbenchProjectItem } from '@vben/common-ui';

import { WorkbenchProject } from '@vben/common-ui';

// 技术栈项目数据
const projectItems: WorkbenchProjectItem[] = [
  // PHP 项目
  {
    color: '#777bb4',
    content: 'PHP 后端项目，使用原生 PHP 开发',
    date: '2024-01-01',
    group: 'PHP',
    icon: 'logos:php',
    title: 'PHP 基础项目',
    url: 'https://www.php.net',
  },
  {
    color: '#009900',
    content: '使用 ThinkPHP 框架开发的后端系统',
    date: '2024-02-01',
    group: 'PHP',
    icon: 'logos:php',
    title: 'ThinkPHP 项目',
    url: 'https://www.thinkphp.cn',
  },
  
  // Java 项目
  {
    color: '#007396',
    content: '使用 Java 开发的后端应用',
    date: '2024-03-01',
    group: 'Java',
    icon: 'logos:java',
    title: 'Java 基础项目',
    url: 'https://www.java.com',
  },
  {
    color: '#6DB33F',
    content: '使用 Spring 框架开发的企业级应用',
    date: '2024-04-01',
    group: 'Java',
    icon: 'logos:spring',
    title: 'Spring 项目',
    url: 'https://spring.io',
  },
  {
    color: '#6DB33F',
    content: '使用 Spring Boot 开发的微服务应用',
    date: '2024-05-01',
    group: 'Java',
    icon: 'logos:spring',
    title: 'Spring Boot 项目',
    url: 'https://spring.io/projects/spring-boot',
  },
  
  // Flutter 项目
  {
    color: '#02569B',
    content: '使用 Flutter 开发的跨平台移动应用',
    date: '2024-06-01',
    group: 'Flutter',
    icon: 'logos:flutter',
    title: 'Flutter 项目',
    url: 'https://flutter.dev',
  },
  {
    color: '#0175C2',
    content: '使用 Dart 开发的后端服务',
    date: '2024-07-01',
    group: 'Flutter',
    icon: 'logos:dart',
    title: 'Dart 项目',
    url: 'https://dart.dev',
  },
  
  // Python 项目
  {
    color: '#3776AB',
    content: '使用 Python 开发的数据分析工具',
    date: '2024-08-01',
    group: 'Python',
    icon: 'logos:python',
    title: 'Python 基础项目',
    url: 'https://www.python.org',
  },
  {
    color: '#000000',
    content: '使用 Flask 框架开发的 Web 应用',
    date: '2024-09-01',
    group: 'Python',
    icon: 'logos:flask',
    title: 'Flask 项目',
    url: 'https://flask.palletsprojects.com',
  },
  {
    color: '#0C4B33',
    content: '使用 Django 框架开发的全栈 Web 应用',
    date: '2024-10-01',
    group: 'Python',
    icon: 'logos:django',
    title: 'Django 项目',
    url: 'https://www.djangoproject.com',
  },
  
  // JavaScript 项目
  {
    color: '#61DAFB',
    content: '使用 React 开发的前端应用',
    date: '2024-11-01',
    group: 'JavaScript',
    icon: 'logos:react',
    title: 'React 项目',
    url: 'https://reactjs.org',
  },
  {
    color: '#4FC08D',
    content: '使用 Vue.js 开发的前端应用',
    date: '2024-12-01',
    group: 'JavaScript',
    icon: 'logos:vue',
    title: 'Vue 项目',
    url: 'https://vuejs.org',
  },
];


</script>

<template>
  <div class="p-5">
    <h2 class="text-xl font-bold mb-5">个人项目</h2>
    <WorkbenchProject :items="projectItems" title="技术栈项目" />
  </div>
</template>
