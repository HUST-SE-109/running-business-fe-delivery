<template>
  <div class="order-con">
    <OrderHeader @get-keyword="handleSearch"></OrderHeader>
    <OrderList :data="orderList"></OrderList>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import { fetchDeliveryOrderList } from '@/api/order';
import OrderHeader from './components/OrderHeader';
import OrderList from './components/OrderList';

export default {
  name: 'Order',
  components: { OrderHeader, OrderList },
  data() {
    return {
      orderList: [],
      params: {
        size: 10,
      },
      total: 100,
      page: 1,
    };
  },
  mounted() {
    this.fetchData(this.params);
  },
  methods: {
    /**
     * 获取配送员订单列表
     *
     * @Object params
     */
    fetchData(params) {
      fetchDeliveryOrderList(params)
        .then(({ data: { code, data } }) => {
          if (code === '200') {
            this.total = data.totalCount;
            this.orderList = data.items;
          }
        });
    },
    /**
     * 处理 Header 搜索
     *
     * @String keyword
     */
    handleSearch(keyword) {
      const params = {
        keyword,
        ...this.params,
      };
      // console.log(params);
      this.fetchData(params);
    },
    /**
     * 分页
     *
     * @Number page
     */
    handleCurrentChange(page) {
      const params = {
        page,
        ...this.params,
      };
      this.fetchData(params);
    },
  },
};
</script>

<style lang="less">

</style>
