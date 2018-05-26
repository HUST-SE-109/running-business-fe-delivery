import request from '@/utils/request';

// 获取配送员信息
const getDeliveryInfo = () => request({
  url: '/delivery/info',
  method: 'get',
});

const getDeliveryInfoByToken = token => request({
  url: `/delivery/token/${token}`,
  method: 'get',
});

// 更新配送员信息
const updateDeliveryInfo = data => request({
  url: '/delivery/info',
  method: 'put',
  data,
});

// 修改密码
const updatePassword = (oldPwd, newPwd) => request({
  url: '/delivery/updatepwd',
  method: 'put',
  params: {
    oldPassword: oldPwd,
    newPassword: newPwd,
  },
});

// 验证旧密码是否匹配
const checkOldPassword = oldPwd => request({
  url: `/delivery/checkoldpwd?oldPassword=${oldPwd}`,
  method: 'get',
});

// 检查配送员身份证号
const checkDeliveryCard = (id, card) => request({
  url: `/delivery/check/card/${id}?card=${card}`,
  method: 'get',
});

/**
 * 上传配送员身份证照片
 *
 * TODO
 */
// const uploadDeliveryCard = () => request({});

/**
 * 上传配送员头像
 *
 * TODO
 */
// const uploadDeliveryPhoto = () => request({});

// 添加地址
const addAddress = data => request({
  url: '/delivery/address',
  method: 'post',
  data,
});

// 根据地址 id 查询地址详细信息
const getAddressById = id => request({
  url: `/delivery/address/${id}`,
  method: 'get',
});

// 获取配送员所有地址信息
const fetchDeliveryAddress = () => request({
  url: '/delivery/address',
  method: 'get',
});

// 修改默认地址
const updateDefaultAddress = id => request({
  url: `/delivery/address/${id}`,
  method: 'get',
});

// 获取余额
const getBalance = () => request({
  url: '/delivery/balance',
  method: 'get',
});

// 查询可配送距离
const getCanDeliveryDistance = () => request({
  url: '/delivery/distance',
  method: 'get',
});

// 更新可配送距离
const updateCanDeliveryDistance = data => request({
  url: '/delivery/distance',
  method: 'put',
  data,
});

export {
  getDeliveryInfo,
  getDeliveryInfoByToken,
  updateDeliveryInfo,
  updatePassword,
  checkOldPassword,
  checkDeliveryCard,
  addAddress,
  getAddressById,
  fetchDeliveryAddress,
  updateDefaultAddress,
  getBalance,
  getCanDeliveryDistance,
  updateCanDeliveryDistance,
};
