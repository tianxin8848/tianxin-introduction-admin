import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:globe',
      order: 10,
      title: '韩语人生',
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
          title: '韩语文创',
        },
      },
      {
        name: 'KoreanMarket',
        path: '/korean/market',
        component: () => import('#/views/korean/market/index.vue'),
        meta: {
          icon: 'lucide:shopping-cart',
          title: '韩语市场',
        },
      },
    ],
  },
];

export default routes;