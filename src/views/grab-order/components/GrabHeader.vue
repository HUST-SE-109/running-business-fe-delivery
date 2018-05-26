<template>
  <div class="grab-header-con">
    <el-row type="flex" justify="center">
      <el-input
        placeholder="请输入抢单关键字"
        v-model="keyword"
        clearable>
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-location-outline"
        @click="getCurrentPosition">定位
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-search"
        :disabled="!canSearch"
        @click="handleSearch">搜索
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'GrabHeader',
  data() {
    return {
      // 定位成功才能搜索
      canSearch: false,
      keyword: '',
      longitude: '',
      latitude: '',
    };
  },
  methods: {
    /**
     * location (定位)
     *
     * 使用 HTML5 Api 运用浏览器进行定位
     * 并存储经纬度信息
     */
    getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        this.longitude = longitude;
        this.latitude = latitude;
        this.canSearch = true;
        this.$message({
          showClose: true,
          message: '定位成功 QAQ',
          type: 'success',
        });
      }, () => {
        this.$message({
          showClose: true,
          message: '定位失败QwQ 请查看浏览器权限',
          type: 'warning',
        });
      });
    },
    /**
     * Search Button handler
     *
     * 将 Header 组件关键字及经纬度传给父组件
     */
    handleSearch() {
      const params = {
        keyword: this.keyword,
        longitude: this.longitude,
        latitude: this.latitude,
      };
      // 触发 GrabOrder 组件事件
      this.$emit('get-params', params);
    },
  },
};
</script>

<style lang="less">
  .grab-header-con {
    .el-input {
      width: 400px;
      margin-right: 10px;
    }
  }
</style>
