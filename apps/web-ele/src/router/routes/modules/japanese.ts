import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:globe-2',
      order: 20,
      title: $t('page.japanese.title'),
    },
    name: 'JapaneseLife',
    path: '/japanese',
    children: [
      {
        name: 'JapaneseCultural',
        path: '/japanese/cultural',
        component: () => import('#/views/japanese/cultural/index.vue'),
        meta: {
          icon: 'lucide:palette',
          title: $t('page.japanese.cultural'),
        },
      },
      {
        name: 'JapaneseMarket',
        path: '/japanese/market',
        component: () => import('#/views/japanese/market/index.vue'),
        meta: {
          icon: 'lucide:shopping-cart',
          title: $t('page.japanese.market'),
        },
      },
    ],
  },
];

export default routes;
