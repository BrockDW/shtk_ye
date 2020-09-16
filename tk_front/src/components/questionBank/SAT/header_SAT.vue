<template>
  <div>
    <el-row>
      <el-col :span="20">
        <div class="grid-content">
          <el-menu :default-active="activeIndex" class="headerSAT" mode="horizontal" router>
            <el-menu-item index="/home/questionBank/SAT/progress">进度总览</el-menu-item>
            <!-- <el-menu-item index="/home/questionBank/SAT/practice">专项练习</el-menu-item> -->
            <el-menu-item index="/home/questionBank/SAT/test">模拟考试</el-menu-item>
            <!-- <el-menu-item index="/home/questionBank/SAT/review">错题复习</el-menu-item> -->
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="page_name">SAT备考</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/home/questionBank/SAT/progress"
    };
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.page_name {
  text-align: right;
  padding-top: 45px;
  font-weight: bold;
  color: rgb(112, 112, 112);
}
.headerSAT {
  height: 79px;
  border-bottom: 1px solid rgb(112, 112, 112);
}

.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 79px;
  line-height: 110px;
  margin: 0;
  font-size: 1em;
  font-weight: bold;
}
</style>