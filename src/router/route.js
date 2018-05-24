import Layout from '@/views/layout/Layout';

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
  },
  component: () => import('@/views/login/Login.vue'),
};

export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: 'Register - 注册',
  },
  component: () => import('@/views/register/Register.vue'),
};

export const error404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在',
  },
  component: () => import('@/views/error-page/404.vue'),
};

export const error500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误',
  },
  component: () => import('@/views/error-page/500.vue'),
};

export const appRouter = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        title: '首页',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
      },
      {
        path: 'grabOrder',
        title: '抢单',
        name: 'grabOrder',
        component: () => import('@/views/grab-order/GrabOrder.vue'),
      },
      {
        path: 'order',
        title: '我的订单',
        name: 'order',
        component: () => import('@/views/order/Order.vue'),
      },
    ],
  },
];

export const routers = [
  loginRouter,
  registerRouter,
  ...appRouter,
  error500,
  error404,
];
