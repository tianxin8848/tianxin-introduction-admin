import type { RouteRecordRaw } from 'vue-router';

import { preferences } from '@vben/preferences';

const BasicLayout = () => import('#/layouts/basic.vue');
// const AuthPageLayout = () => import('#/layouts/auth.vue');

/** 全局404页面 */
const fallbackNotFoundRoute: RouteRecordRaw = {
  component: () => import('#/views/_core/fallback/not-found.vue'),
  meta: {
    hideInBreadcrumb: true,
    hideInMenu: true,
    hideInTab: true,
    title: '404',
  },
  name: 'FallbackNotFound',
  path: '/:path(.*)*',
};

/** 认证相关路由 - 注释掉，不需要登录界面 */
/*
const authRoutes: RouteRecordRaw[] = [
  {
    component: AuthPageLayout,
    meta: {
      hideInBreadcrumb: true,
      hideInMenu: true,
      hideInTab: true,
      title: '登录',
    },
    name: 'Auth',
    path: '/auth',
    children: [
      {
        component: () => import('#/views/_core/authentication/login.vue'),
        meta: {
          hideInBreadcrumb: true,
          hideInMenu: true,
          hideInTab: true,
          title: '登录',
        },
        name: 'Login',
        path: 'login',
      },
      {
        component: () => import('#/views/_core/authentication/register.vue'),
        meta: {
          hideInBreadcrumb: true,
          hideInMenu: true,
          hideInTab: true,
          title: '注册',
        },
        name: 'Register',
        path: 'register',
      },
      {
        component: () => import('#/views/_core/authentication/forget-password.vue'),
        meta: {
          hideInBreadcrumb: true,
          hideInMenu: true,
          hideInTab: true,
          title: '忘记密码',
        },
        name: 'ForgetPassword',
        path: 'forget-password',
      },
      {
        component: () => import('#/views/_core/authentication/code-login.vue'),
        meta: {
          hideInBreadcrumb: true,
          hideInMenu: true,
          hideInTab: true,
          title: '验证码登录',
        },
        name: 'CodeLogin',
        path: 'code-login',
      },
    ],
  },
];
*/

/** 基本路由，这些路由是必须存在的 */
const coreRoutes: RouteRecordRaw[] = [
  /**
   * 根路由
   * 使用基础布局，作为所有页面的父级容器，子级就不必配置BasicLayout。
   * 此路由必须存在，且不应修改
   */
  {
    component: BasicLayout,
    meta: {
      hideInBreadcrumb: true,
      title: 'Root',
    },
    name: 'Root',
    path: '/',
    redirect: preferences.app.defaultHomePath,
    children: [],
  },
  // ...authRoutes,
];

export { coreRoutes, fallbackNotFoundRoute };
