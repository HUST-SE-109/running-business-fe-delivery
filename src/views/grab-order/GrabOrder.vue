<template>
  <div class="grab-order-con">
    <GrabHeader @get-params="handleSearch"></GrabHeader>
    <GrabList :data="grabList"></GrabList>
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
import { fetchCanGrabOrders } from '@/api/order';
import GrabHeader from './components/GrabHeader';
import GrabList from './components/GrabList';

export default {
  name: 'GrabOrder',
  components: { GrabHeader, GrabList },
  data() {
    return {
      grabList: [],
      params: {},
      total: 1,
      page: 1,
    };
  },
  methods: {
    /**
     * 获取配送员可抢单列表
     *
     * @Object params 获取可抢单列表 Query
     */
    fetchData(params) {
      fetchCanGrabOrders(params)
        .then(({ data: { code, data } }) => {
          if (code === '200') {
            this.total = data.totalCount;
            this.grabList = data.items;
          }
        });
    },
    /**
     * 处理 Header 组件搜索事件
     *
     * @Object params
     */
    handleSearch(params) {
      this.params = params;
      this.fetchData(params);
    },
    /**
     * 分页事件处理
     *
     * @Number page 页数
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
