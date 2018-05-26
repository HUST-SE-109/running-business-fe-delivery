<template>
  <div class="update-distance-con">
    <el-form :model="distanceForm" label-width="80px">
      <el-form-item label="订单距离">
        {{ distanceForm.distance }} 公里
      </el-form-item>
      <el-form-item label="跑腿费">
        {{ distanceForm.amount }} 元
      </el-form-item>
      <el-form-item label="预计时间">
        {{ distanceForm.predictTime }} 分钟
      </el-form-item>
      <el-form-item label="付款方式">
        <el-radio-group v-model="distanceForm.payType">
          <el-radio label="2" border size="medium">货到付款</el-radio>
          <el-radio label="1" border size="medium">在线付款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleUpdateDistance">修改配送距离</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCanDeliveryDistance, updateCanDeliveryDistance } from '@/api/delivery';

export default {
  name: 'UpdateDistance',
  data() {
    return {
      hasCount: '',
      canOrder: '',
      distanceForm: {
        distance: '',
        amount: '',
        predictTime: '',
        payType: '',
      },
    };
  },
  mounted() {
    getCanDeliveryDistance()
      .then(({ data: { code, data } }) => {
        console.log(code, data);
      });
  },
  methods: {
    fetchDiatance() {
    },
    handleUpdateDistance() {
    },
  },
};
</script>

<style lang="less">
  .update-distance-con {
    .el-form {
      background-color: #fff;
      padding: 20px 20px 1px 20px;
      .warn-message {
        color: #ff4d51;
      }
    }
  }
</style>
