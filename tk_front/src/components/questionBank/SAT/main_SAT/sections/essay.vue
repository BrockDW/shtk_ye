<template>
  <div>
    <el-col :span="12" style="padding-top: 50px">
      <el-card class="box-card">
        <p style="color: #4158D0; font-weight:bold">作文部分无标准答案，请大家自行练笔</p>
        <p style="color: #4158D0; font-weight:bold">如有需要批改服务，请扫一下公众号二维码</p>
        <el-image class="wechatScan" :src="require('../../../../../assets/logo/wechat_scan.svg')"></el-image>
        <p>本套题到此结束</p>
      </el-card>
    </el-col>
    <el-col :span="6" style="text-align:center">
      <el-button
        type="primary"
        icon="el-icon-tickets"
        style="margin-top: 70px;position: absolute;bottom: 110px;right: 80px"
        @click="handleGrade()"
      >成绩总览</el-button>
    </el-col>
  </div>
</template>

<script>
export default {
  methods: {
    handleGrade() {
      this.$router.push("/home/questionBank/SAT/answerSheet/grade");
    }
  },
  mounted() {
    this.$store.state.step = 4;
  }
};
</script>

<style scoped>
.box-card {
  width: 480px;
  text-align: center;
}
.wechatScan {
  width: 300px;
}
</style>