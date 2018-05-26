import request from '@/utils/request';

// 获取可抢订单
const fetchCanGrabOrders = params => request({
  url: '/order',
  method: 'get',
  params,
});

// 抢单
const grabOrderById = id => request({
  url: `/delivery/grabOrder?orderId=${id}`,
  method: 'put',
});

// 获取配送员订单列表
const fetchDeliveryOrderList = params => request({
  url: '/order/delivery',
  method: 'get',
  params,
});

const updateOrderStatus = (status, orderId) => request({
  url: `/delivery/modify/order/status?status=${status}&orderId=${orderId}`,
  method: 'put',
});

export {
  fetchCanGrabOrders,
  grabOrderById,
  fetchDeliveryOrderList,
  updateOrderStatus,
};
