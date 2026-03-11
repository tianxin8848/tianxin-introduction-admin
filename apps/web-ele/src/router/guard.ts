import type { Router } from 'vue-router';

import { preferences } from '@vben/preferences';
import { useAccessStore, useUserStore } from '@vben/stores';
import { startProgress, stopProgress } from '@vben/utils';

import { accessRoutes, coreRouteNames } from '#/router/routes';
import { useAuthStore } from '#/store';

import { generateAccess } from './access';

/**
 * 通用守卫配置
 * @param router
 */
function setupCommonGuard(router: Router) {
  // 记录已经加载的页面
  const loadedPaths = new Set<string>();

  router.beforeEach((to) => {
    to.meta.loaded = loadedPaths.has(to.path);

    // 页面加载进度条
    if (!to.meta.loaded && preferences.transition.progress) {
      startProgress();
    }
    return true;
  });

  router.afterEach((to) => {
    // 记录页面是否加载,如果已经加载，后续的页面切换动画等效果不在重复执行

    loadedPaths.add(to.path);

    // 关闭页面加载进度条
    if (preferences.transition.progress) {
      stopProgress();
    }
  });
}

/**
 * 权限访问守卫配置
 * @param router
 */
function setupAccessGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    const accessStore = useAccessStore();
    const userStore = useUserStore();
    const authStore = useAuthStore();

    // 基本路由，这些路由不需要进入权限拦截
    if (coreRouteNames.includes(to.name as string)) {
      return true;
    }

    // 处理 /auth/login 路径，直接重定向到默认首页
    if (to.path.startsWith('/auth/login')) {
      const redirect = to.query.redirect as string;
      if (redirect) {
        return {
          path: decodeURIComponent(redirect),
          replace: true,
        };
      }
      return {
        path: preferences.app.defaultHomePath,
        replace: true,
      };
    }

    // 处理 /analytics 路径，重定向到 /profile/skills
    if (to.path.startsWith('/analytics')) {
      return {
        path: '/profile/skills',
        replace: true,
      };
    }

    // 模拟已登录状态，直接生成路由表
    let userInfo = userStore.userInfo;
    if (!accessStore.accessToken) {
      // 模拟用户信息
      userInfo = {
        avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=professional%20avatar&size=200x200',
        realName: '测试用户',
        roles: ['super'],
        userId: '1',
        username: 'test',
        homePath: preferences.app.defaultHomePath,
      };
      // 设置用户信息
      userStore.setUserInfo(userInfo as any);
      // 设置访问令牌
      accessStore.setAccessToken('mock-token');
    }

    // 是否已经生成过动态路由
    if (accessStore.isAccessChecked) {
      return true;
    }

    // 生成路由表
    // 当前登录用户拥有的角色标识列表
    const userRoles = userInfo?.roles ?? [];

    // 生成菜单和路由
    const { accessibleMenus, accessibleRoutes } = await generateAccess({
      roles: userRoles,
      router,
      // 则会在菜单中显示，但是访问会被重定向到403
      routes: accessRoutes,
    });

    // 保存菜单信息和路由信息
    accessStore.setAccessMenus(accessibleMenus);
    accessStore.setAccessRoutes(accessibleRoutes);
    accessStore.setIsAccessChecked(true);
    const redirectPath = (from.query.redirect ??
      (to.path === preferences.app.defaultHomePath
        ? userInfo?.homePath || preferences.app.defaultHomePath
        : to.fullPath)) as string;

    return {
      ...router.resolve(decodeURIComponent(redirectPath)),
      replace: true,
    };
  });
}

/**
 * 项目守卫配置
 * @param router
 */
function createRouterGuard(router: Router) {
  /** 通用 */
  setupCommonGuard(router);
  /** 权限访问 */
  setupAccessGuard(router);
}

export { createRouterGuard };
