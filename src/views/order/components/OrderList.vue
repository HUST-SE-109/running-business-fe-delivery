<template>
  <div class="order-list-con">
    <el-row type="flex" justify="center" :key="item.orderid" v-for="item in this.data">
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <span>订单号：{{ item.orderid }}</span>
          <el-button
            type="text"
            @click="handleStatusChange(item.status + 1, item.orderid)"
            v-if="item.status === 3 || 4"
          >{{ handleStatusText(item.status) }}
          </el-button>
        </div>
        <div class="order-item">
          业务类型
          ：{{item.orderTypeDesc}}
        </div>
        <div class="order-item">
          商品内容
          ：{{item.goods}}
        </div>
        <div class="order-item">
          {{ handleAddressDesc(item.type)[0] }}
          ：{{item.sourceAddress + item.sourceRemarkAddress}}
        </div>
        <div class="order-item">
          {{ handleAddressDesc(item.type)[1] }}
          ：{{item.targetAddress + item.targetRemarkAddress}}
        </div>
        <div class="order-item">
          总计金额
          ：{{item.amount}}元
        </div>
        <div class="order-item">
          联系方式
          ：{{item.sourcePhone}}
        </div>
        <div class="order-item">
          备注信息
          ：{{item.remark}}
        </div>
        <div class="order-item">
          {{handleTimeDesc(item.type)}}
          ：{{handleTime(item.requireTime)}}
        </div>
        <div class="order-item order-status">
          订单状态
          ：{{item.orderStatusDesc}}
        </div>
        <time class="time">{{handleTime(item.addTime)}}</time>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { formatTime } from '@/utils/util';
import { updateOrderStatus } from '@/api/order';

export default {
  name: 'OrderList',
  props: {
    data: Array,
  },
  methods: {
    // 处理时间说明
    handleTimeDesc(type) {
      const timeDescList = ['送货时间', '发货时间', '取货时间', '排队时间'];
      return timeDescList[type - 1];
    },
    // 处理时间戳
    handleTime(time) {
      const date = new Date(time);
      return formatTime(date);
    },
    // 处理地址说明
    handleAddressDesc(type) {
      const descList = [['收货地址', '购买地址'], ['发货地址', '收货地址'], ['取货地址', '收货地址'], ['排队地址', '备注地址']];
      return descList[type - 1];
    },
    // 处理修改状态按钮文本
    handleStatusText(status) {
      const statusList = ['开始配送', '确认送达'];
      return statusList[status - 3];
    },
    /**
     * 修改订单状态
     *
     * @Number status 要修改成的订单状态 4: 配送中 5: 已完成
     * @String orderId 订单 id
     */
    handleStatusChange(status, orderId) {
      updateOrderStatus(status, orderId)
        .then(({ data: { code } }) => {
          if (code === '200') {
            this.$message({
              showClose: true,
              message: '修改状态成功啦 u2u',
              type: 'success',
            });
          }
        });
    },
  },
};
</script>

<style lang="less">
  .order-list-con {
    margin: 20px 0 15px 0;

    .el-row {
      margin-bottom: 5px;

      .el-card {
        width: 45%;

        .order-item {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .order-status {
          color: #ff0000;
        }

        .time {
          font-size: 12px;
          color: #999;
        }

        .el-button {
          float: right;
          padding: 3px 0;
        }
      }
    }
  }
</style>
