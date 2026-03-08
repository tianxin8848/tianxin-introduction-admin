import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:globe-2',
      order: 20,
      title: '日语人生',
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
          title: '日语文创',
        },
      },
      {
        name: 'JapaneseMarket',
        path: '/japanese/market',
        component: () => import('#/views/japanese/market/index.vue'),
        meta: {
          icon: 'lucide:shopping-cart',
          title: '日语市场',
        },
      },
    ],
  },
];

export default routes;