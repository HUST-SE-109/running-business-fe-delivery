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
      {
        path: 'center',
        title: '个人中心',
        name: 'center',
        redirect: '/center/info',
        component: () => import('@/views/user-center/UserCenter.vue'),
        children: [
          {
            path: 'info',
            title: '个人信息',
            name: 'info',
            meta: {
              title: '个人中心-个人信息',
            },
            component: () => import('@/views/user-center/components/UserInfo.vue'),
          },
          {
            path: 'distance',
            title: '配送距离',
            name: 'distance',
            meta: {
              title: '个人中心-配送距离',
            },
            component: () => import('@/views/user-center/components/UpdateDistance.vue'),
          },
          {
            path: 'address',
            title: '地址管理',
            name: 'address',
            meta: {
              title: '个人中心-地址管理',
            },
            component: () => import('@/views/user-center/components/AddressMgr.vue'),
          },
          {
            path: 'password',
            title: '修改密码',
            name: 'password',
            meta: {
              title: '个人中心-修改密码',
            },
            component: () => import('@/views/user-center/components/UpdatePassword.vue'),
          },
        ],
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
