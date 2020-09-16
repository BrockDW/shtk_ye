<template>
  <el-container>
    <el-aside width="195px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
import sidebar from "@/components/sidebar.vue";

export default {
  components: {
    sidebar
  }
};
</script>

<style>
.el-header {
  color: #333;
  position: absolute;
  height: 80px !important;
  margin-left: 285px;
  width: calc(100% - 375px);
  border-bottom: 1px solid rgb(112, 112, 112);
  padding: 0 0;
}

.el-aside {
  background-color: #4158d0;
  color: #333;
  text-align: center;
  position: absolute;
  height: 100%;
}

.el-main {
  color: #333;
  position: absolute;
  margin-top: 80px;
  height: calc(100% - 80px);
  margin-left: 285px;
  width: calc(100% - 375px);
  padding: 0 0;
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
</style>