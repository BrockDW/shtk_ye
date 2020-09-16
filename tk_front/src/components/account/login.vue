<template>
  <div>
    <el-row style="margin-top: 30px">
      <el-col :span="6" :offset="9">
        <el-col :span="6">
          <el-image class="logo" :src="require('../../assets/logo/favicon.png')"></el-image>
        </el-col>
        <el-col :span="18" style="line-height: 35px">
          <el-row class="company_name">学霸山丘 LMS</el-row>
          <el-row class="page_title">登录</el-row>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-card class="box-card">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="username">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="padding-top: 40px">
              <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        <p
          style="font-size: 0.8em; text-align: center"
        >Copyright © 2020 The Trustees of Scholar Hills.</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号名称"));
      } else {
        // 对接database里已注册的username
        // if (this.ruleForm.username !== "") {
        //   this.$refs.ruleForm.validateField("username");
        // }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      msg: "Welcome to Scholarhills LMS App",
      ruleForm: {
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home/questionBank");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company_name {
  font-size: 1em;
}
.page_title {
  font-size: 1.8em;
  font-weight: bold;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.el-form-item >>> .el-form-item__label {
  font-weight: bold;
  text-align: left;
}

.el-form-item >>> .el-form-item__content {
  margin-left: 0px !important;
}

.logo{
  width: 80px;
  height: 80px;
  margin-left: 10px
}
</style>
