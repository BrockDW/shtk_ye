<template>
  <el-col :span="18">
    <el-row style="padding-top: 80px">
      <el-col :span="8">
        <el-card class="box-card">
          <div class="section">Reading</div>
          <div class="grade">780</div>
        </el-card>
      </el-col>
      <el-col :span="4" style="text-align: center">
        <i class="fa fa-plus" style="color: #4158D0; font-size: 2.0em; line-height: 140px"></i>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="section">Math</div>
          <div class="grade">780</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="6">
        <div class="total">
          <div style="padding: 20px">
            <div class="totalName">Total</div>
            <div class="totalGrade">1560</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="18" style="padding-top: 80px">
        <el-button type="primary" @click="handleBack()" icon="el-icon-right" plain>返回列表</el-button>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.push("/home/questionBank/SAT/test");
    }
  }
};
</script>

<style scoped>
.section {
  font-family: "Microsoft Yahei", "Lato";
  color: #4158d0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
}

.grade {
  font-family: "Microsoft Yahei", "Lato";
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  color: #707070;
  padding-top: 10px;
}

.total {
  background: #4158d0;
  border-radius: 5px;
  margin-top: 40px;
}

.totalName {
  text-align: center;
  font-family: "Microsoft Yahei", "Lato";
  font-weight: bold;
  font-size: 2.2em;
  color: white;
}

.totalGrade {
  text-align: center;
  font-family: "Microsoft Yahei", "Lato";
  font-weight: bold;
  font-size: 2.2em;
  color: white;
  padding-top: 10px;
}
</style>