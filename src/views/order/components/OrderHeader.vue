<template>
  <div class="order-header-con">
    <el-row type="flex" justify="center">
      <el-input
        placeholder="请输入历史订单关键字"
        v-model="keyword"
        clearable>
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="handleSearch">搜索
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    handleSearch() {
      this.$emit('get-keyword', this.keyword);
    },
  },
};
</script>

<style lang="less">
  .order-header-con {
    .el-input {
      width: 400px;
      margin-right: 10px;
    }
  }
</style>
