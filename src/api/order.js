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

const fetchDeliveryOrderList = params => request({
  url: '/order/delivery',
  method: 'get',
  params,
});

export {
  fetchCanGrabOrders,
  grabOrderById,
  fetchDeliveryOrderList,
};
