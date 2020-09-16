<template>
  <div>
    <el-row>
      <el-col :span="20">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="4">
        <div class="page_name">我的题库</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>