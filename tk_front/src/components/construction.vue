<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="20">
            <div class="company_title">学霸山丘 Scholar Hills</div>
          </el-col>
          <el-col :span="4">
            <div class="icons"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="10" :offset="7" class="construction_pic">
            <el-image :src="require('../assets/pics/undraw_content_team_3epn.svg')"></el-image>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.company_title {
  text-align: left;
  padding-top: 45px;
  font-weight: bold;
  color: rgb(112, 112, 112);
}

.icons {
  text-align: right;
  padding-top: 45px;
  font-weight: bold;
  color: rgb(112, 112, 112);
}

.construction_pic {
  margin-top: 150px;
  text-align: center;
}

.construction_p {
  margin-top: 40px;
  text-align: center;
}
</style>