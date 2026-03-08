import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:user',
      order: 0,
      title: $t('page.profile.title'),
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
          title: $t('page.profile.info'),
        },
      },
      {
        name: 'ProfileAchievements',
        path: '/profile/achievements',
        component: () => import('#/views/profile/achievements/index.vue'),
        meta: {
          icon: 'lucide:trophy',
          title: $t('page.profile.achievements'),
        },
      },
      {
        name: 'ProfileSkills',
        path: '/profile/skills',
        component: () => import('#/views/profile/skills/index.vue'),
        meta: {
          icon: 'lucide:code-2',
          title: $t('page.profile.skills'),
        },
      },
    ],
  },
];

export default routes;
