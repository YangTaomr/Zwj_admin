<template>
  <div class="home">
    <el-container>
      <el-header>
        <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt="">
        <h3>积云后台管理系统</h3>
      </el-header>
      <el-container>
        <el-aside width="199px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/index">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/member">
              <i class="el-icon-document"></i>
              <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="/supplier">
              <i class="el-icon-setting"></i>
              <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/goods">
              <i class="el-icon-setting"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/staff">
              <i class="el-icon-setting"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.el-menu{
  width: 199px;
}
.home {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #2d3a4b;
  color: #333;
  display: flex;
  align-items: center;
}

.el-aside {
  background-color: #545c64;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header img{
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.el-header h3{
  color: #fff;
}
</style>

