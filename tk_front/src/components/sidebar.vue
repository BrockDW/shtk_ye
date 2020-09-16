<template>
  <div>
    <el-row style="padding: 26px 0px;">
      <el-col :span="14" :offset="5">
        <el-image class="logo" :src="require('../assets/logo/favicon.png')"></el-image>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-menu
          default-active="/home/questionBank"
          class="sidebar_menu"
          background-color="#4158D0"
          text-color="#fff"
          active-text-color="#4158D0"
          router
        >
          <el-menu-item index="/home/center" class="account_tab">
            <el-avatar :size="90" :src="circleUrl"></el-avatar>
            <br />
            <span slot="title">账号中心</span>
          </el-menu-item>
          <el-menu-item index="/home/myCourses">
            <i class="fa fa-book"></i>
            <br />
            <span slot="title">我的课程</span>
          </el-menu-item>
          <el-menu-item index="/home/questionBank">
            <i class="fa fa-archive"></i>
            <br />
            <span slot="title">我的题库</span>
          </el-menu-item>
          <el-menu-item index="/home/toDoList">
            <i class="fa fa-tasks"></i>
            <br />
            <span slot="title">To-Do-List</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css";
export default {
  data() {
    return {
      circleUrl: require("../assets/avatar/default_avatar.svg")
    };
  }
};
</script>

<style scoped>
.sidebar_menu {
  width: 195px !important;
  min-height: 100%;
  border: none;
}

.account_tab {
  padding-top: 15px !important;
  height: 150px !important;
}

.el-menu-item {
  height: 100px;
  margin-right: 0px;
  line-height: 35px;
  padding-top: 20px;
  font-size: 1em;
  font-weight: bold;
}

.el-menu-item.is-active {
  background-color: white !important;
}

.el-menu-item.is-active i {
  color: #4158d0 !important;
}

.el-menu-item i {
  color: white;
}

.el-menu-item [class^="fa fa-"] {
  margin-right: 0px;
  font-size: 2em;
}
</style>