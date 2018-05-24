import request from '@/utils/request';

// 登录
const login = data => request({
  url: '/index/delivery/login',
  method: 'post',
  data,
});

// 登出
const logout = token => request({
  url: `/delivery/token/${token}`,
  method: 'post',
});

export {
  login,
  logout,
};
