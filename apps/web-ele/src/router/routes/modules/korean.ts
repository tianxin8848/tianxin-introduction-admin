import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:globe',
      order: 10,
      title: $t('page.korean.title'),
    },
    name: 'KoreanLife',
    path: '/korean',
    children: [
      {
        name: 'KoreanCultural',
        path: '/korean/cultural',
        component: () => import('#/views/korean/cultural/index.vue'),
        meta: {
          icon: 'lucide:palette',
          title: $t('page.korean.cultural'),
        },
      },
      {
        name: 'KoreanMarket',
        path: '/korean/market',
        component: () => import('#/views/korean/market/index.vue'),
        meta: {
          icon: 'lucide:shopping-cart',
          title: $t('page.korean.market'),
        },
      },
    ],
  },
];

export default routes;
