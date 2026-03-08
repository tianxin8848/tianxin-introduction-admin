import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:user',
      order: 0,
      title: '个人主页',
    },
    name: 'Profile',
    path: '/profile',
    children: [
      {
        name: 'ProfileInfo',
        path: '/profile/info',
        component: () => import('#/views/profile/info/index.vue'),
        meta: {
          icon: 'lucide:user-circle',
          title: '个人信息',
        },
      },
      {
        name: 'ProfileAchievements',
        path: '/profile/achievements',
        component: () => import('#/views/profile/achievements/index.vue'),
        meta: {
          icon: 'lucide:trophy',
          title: '21世纪ai产品展示',
        },
      },
      {
        name: 'ProfileSkills',
        path: '/profile/skills',
        component: () => import('#/views/profile/skills/index.vue'),
        meta: {
          icon: 'lucide:code-2',
          title: '个人技能',
        },
      },
    ],
  },
];

export default routes;
