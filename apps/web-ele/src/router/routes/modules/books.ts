import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:book',
      order: 5,
      title: '书籍柜',
    },
    name: 'Books',
    path: '/books',
    children: [
      {
        name: 'ReferenceBooks',
        path: '/reference',
        component: () => import('#/views/books/reference/index.vue'),
        meta: {
          icon: 'lucide:book-open',
          title: '工具书类',
        },
      },
      {
        name: 'Philosophy',
        path: '/philosophy',
        component: () => import('#/views/books/philosophy/index.vue'),
        meta: {
          icon: 'lucide:brain',
          title: '思想哲学',
        },
      },
      {
        name: 'EconomicsHistory',
        path: '/economics-history',
        component: () => import('#/views/books/economics-history/index.vue'),
        meta: {
          icon: 'lucide:trending-up',
          title: '经济历史',
        },
      },
    ],
  },
];

export default routes;
