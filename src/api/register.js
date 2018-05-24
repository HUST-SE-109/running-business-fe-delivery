import request from '@/utils/request';

// 检查账号是否已注册
const checkDeliveryRegistered = phone => request({
  url: `/index/delivery/check/${phone}`,
  method: 'get',
});

// 用户注册
const register = data => request({
  url: '/index/delivery',
  method: 'post',
  data,
});

export {
  checkDeliveryRegistered,
  register,
};
