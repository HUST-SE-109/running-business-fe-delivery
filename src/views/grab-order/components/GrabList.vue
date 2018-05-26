<template>
  <div class="grab-list-con">
    <el-row type="flex" justify="center" :key="item.orderid" v-for="item in this.data">
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <span>{{ item.orderTypeDesc }}</span>
          <el-button type="text" @click="handleGrabOrder(item.orderid)">抢单</el-button>
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
          {{handleTimeDesc(item.type)}}
          ：{{handleTime(item.requireTime)}}
        </div>
        <time class="time">{{handleTime(item.addTime)}}</time>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { formatTime } from '@/utils/util';
import { grabOrderById } from '@/api/order';

export default {
  props: {
    data: Array,
  },
  name: 'GrabList',
  methods: {
    // 处理时间说明
    handleTimeDesc(type) {
      const timeDescList = ['送货时间', '发货时间', '取货时间', '排队时间'];
      return timeDescList[type - 1];
    },
    handleTime(time) {
      const date = new Date(time);
      return formatTime(date);
    },
    // 处理地址说明
    handleAddressDesc(type) {
      const descList = [['收货地址', '购买地址'], ['发货地址', '收货地址'], ['取货地址', '收货地址'], ['排队地址', '备注地址']];
      return descList[type - 1];
    },
    handleGrabOrder(id) {
      grabOrderById(id)
        .then(({ data: { code, message } }) => {
          if (code === '200') {
            this.$message({
              showClose: true,
              message: '抢单成功 QwQ',
              type: 'success',
            });
          } else {
            this.$message({
              showClose: true,
              message,
              type: 'info',
            });
          }
        })
        .catch(() => {
          this.$message({
            showClose: true,
            message: '服务异常',
            type: 'error',
          });
        });
    },
  },
};
</script>

<style lang="less">
  .grab-list-con {
    margin: 20px 0 15px 0;

    .el-row {
      margin-bottom: 5px;

      .el-card {
        width: 45%;

        .order-item {
          font-size: 14px;
          margin-bottom: 10px;
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
