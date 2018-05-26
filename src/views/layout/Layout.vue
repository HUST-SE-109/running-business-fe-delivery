<template>
  <el-container direction="vertical">
    <Header></Header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: { Header, Footer },
  name: 'Layout',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="less">
  .el-main {
    flex: 1;
    background-color: #E9EEF3;
    color: #333;
  }
</style>
