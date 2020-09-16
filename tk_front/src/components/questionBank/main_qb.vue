<template>
  <el-row :gutter="50" style="padding-top: 60px;">
    <el-col :span="8" v-for="course in qbData" :key="course.index">
      <el-card class="box-card">
        <div class="qbCover">
          <div class="qbName">{{ course.qbName }}</div>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :percentage="course.progress"
              :stroke-width="20"
              :color="customColorMethod"
            ></el-progress>
          </div>
        </div>
        <div class="leaderboard">
          <el-row class="bg13">
            <el-col :span="7">
              <el-image class="leaderboard_avatar" :src="course.avatar1"></el-image>
            </el-col>
            <el-col class="leaderboard_name" :span="9">{{ course.star1 }}</el-col>
            <el-col class="leaderboard_award" :span="8">进步之星</el-col>
          </el-row>
          <el-row class="bg2">
            <el-col :span="7">
              <el-image class="leaderboard_avatar" :src="course.avatar2"></el-image>
            </el-col>
            <el-col class="leaderboard_name" :span="9">{{ course.star2 }}</el-col>
            <el-col class="leaderboard_award" :span="8">题数之星</el-col>
          </el-row>
          <el-row class="bg13">
            <el-col :span="7">
              <el-image class="leaderboard_avatar" :src="course.avatar3"></el-image>
            </el-col>
            <el-col class="leaderboard_name" :span="9">{{ course.star3 }}</el-col>
            <el-col class="leaderboard_award" :span="8">正确率之星</el-col>
          </el-row>
        </div>
        <div class="startButton">
          <el-button type="primary" @click="handleStart(course.id)">开始</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      qbData: [
        {
          id: "CBEnglishA1",
          qbName: "剑桥英语 A1",
          progress: 47,
          avatar1: require("../../assets/avatar/avatar_5.svg"),
          avatar2: require("../../assets/avatar/avatar_2.svg"),
          avatar3: require("../../assets/avatar/avatar_3.svg"),
          star1: "Ruei Yeh",
          star2: "Xiao Xiong",
          star3: "Lluvia"
        },
        {
          id: "IBEnglish",
          qbName: "IB 体系",
          progress: 82,
          avatar1: require("../../assets/avatar/avatar_7.svg"),
          avatar2: require("../../assets/avatar/avatar_14.svg"),
          avatar3: require("../../assets/avatar/avatar_18.svg"),
          star1: "龙猫",
          star2: "CoCo",
          star3: "南瓜"
        },
        {
          id: "SAT",
          qbName: "SAT 备考",
          progress: 17,
          avatar1: require("../../assets/avatar/avatar_4.svg"),
          avatar2: require("../../assets/avatar/avatar_10.svg"),
          avatar3: require("../../assets/avatar/avatar_9.svg"),
          star1: "Cindy",
          star2: "Wendy",
          star3: "Elsa"
        }
      ]
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    handleStart(id) {
      // student
      // this.$router.push("/home/questionBank/" + id + "/progress");

      // teacher
      this.$router.push("/teacher/home/questionBank/" + id + "/overview");
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
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
.box-card {
  border-radius: 25px;
  height: 550px;
}
.box-card >>> .el-card__body {
  padding: 0px;
}
.qbCover {
  width: 100%;
  height: 250px;
  background: #4158d0;
}
.qbName {
  color: white;
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 30px;
}
.progress {
  padding: 0px 40px;
}
.startButton {
  text-align: center;
  padding: 0px 100px;
}
.startButton .el-button {
  width: 100%;
  font-weight: bold;
}
.leaderboard {
  padding: 0 20px;
}
.bg13 {
  margin-top: 30px;
  background-color: #21d59b;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 5px;
}
.bg2 {
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
  border-radius: 5px;
}
.leaderboard_avatar {
  margin-top: -15px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
}
.leaderboard_name {
  font-weight: bold;
  line-height: 40px;
  font-size: 0.8em;
}
.bg13 .leaderboard_name {
  color: white;
}
.bg2 .leaderboard_name {
  color: #21d59b;
}
.leaderboard_award {
  font-weight: bold;
  line-height: 40px;
  font-size: 0.8em;
  text-align: right;
  padding-right: 10px;
}
.bg13 .leaderboard_award {
  color: white;
}
.bg2 .leaderboard_award {
  color: #21d59b;
}
</style>