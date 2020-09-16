<template>
  <div>
    <el-col :span="12" v-show="radioType">
      <div>
        <el-row>
          <el-col :span="24">
            <div
              :class="{'beforeSubmit': beforeSubmit}"
              style="border: 1px solid; height: 600px; width: 550px;"
            >
              <el-row :gutter="30" style="padding: 20px 20px;">
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(0, 13)" :key="i">
                    <el-row style="margin-top: 5px">
                      <el-col :span="4" :offset="8">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >A</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >B</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >C</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >D</div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <div
                          :class="{'questionNum':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="A"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="B"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="C"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="D"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(13, 26)" :key="i">
                    <el-row style="margin-top: 5px">
                      <el-col :span="4" :offset="8">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >A</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >B</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >C</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >D</div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <div
                          :class="{'questionNum':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="A"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="B"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="C"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="D"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(26, 39)" :key="i">
                    <el-row style="margin-top: 5px">
                      <el-col :span="4" :offset="8">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >A</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >B</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >C</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >D</div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <div
                          :class="{'questionNum':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="A"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="B"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="C"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="D"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(39, 45)" :key="i">
                    <el-row style="margin-top: 5px">
                      <el-col :span="4" :offset="8">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >A</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >B</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >C</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'choice':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >D</div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <div
                          :class="{'questionNum':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="A"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="B"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="C"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          :class="{'radioBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-radio
                            :disabled="disabled"
                            v-model="user_answer[i-1]"
                            label="D"
                          >{{ "" }}</el-radio>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="12" v-show="inputType">
      <div>
        <el-row>
          <el-col :span="24">
            <div
              :class="{'beforeSubmit': beforeSubmit}"
              style="border: 1px solid; height: 600px; width: 550px;"
            >
              <el-row :gutter="30" style="padding-left:30px; padding-top:12px">
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(0, 13)" :key="i">
                    <el-row>
                      <el-col :span="6" style="padding-top:26px">
                        <div
                          :class="{'questionNumInput':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="12">
                        <div
                          :class="{'inputBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-input :disabled="disabled" v-model="user_answer[i-1]" :maxlength="1"></el-input>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(13, 26)" :key="i">
                    <el-row>
                      <el-col :span="6" style="padding-top:26px">
                        <div
                          :class="{'questionNumInput':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="12">
                        <div
                          :class="{'inputBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-input :disabled="disabled" v-model="user_answer[i-1]" :maxlength="1"></el-input>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(26, 39)" :key="i">
                    <el-row>
                      <el-col :span="6" style="padding-top:26px">
                        <div
                          :class="{'questionNumInput':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="12">
                        <div
                          :class="{'inputBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-input :disabled="disabled" v-model="user_answer[i-1]" :maxlength="1"></el-input>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content" v-for="i in section_2.slice(39, 45)" :key="i">
                    <el-row>
                      <el-col :span="6" style="padding-top:26px">
                        <div
                          :class="{'questionNumInput':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >{{ i }}</div>
                      </el-col>
                      <el-col :span="12">
                        <div
                          :class="{'inputBefore':1, 'isWrong':wrongList[i-1], 'isCorrect':correctList[i-1]}"
                        >
                          <el-input :disabled="disabled" v-model="user_answer[i-1]" :maxlength="1"></el-input>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6" style="text-align:center">
      <div style="padding-top: 70px" v-show="typeExplain">
        <el-button icon="el-icon-sort" @click="handleTypeChange()" plain>切换输入模式</el-button>
        <p class="typeExplain" v-show="radioType">
          当前为
          <b class="type">点选输入</b> 模式
          <br />用鼠标点击选项对应按钮进行选择
        </p>
        <p class="typeExplain" v-show="inputType">
          当前为
          <b class="type">键盘输入</b> 模式
          <br />按
          <b>键盘</b> 字母键输入答案，按tab键进入下一题，如需修改已输入的题，请先用鼠标点选将光标移至相应位置
        </p>
      </div>
      <el-popover placement="top" width="160" v-model="visible">
        <p>你还有题没有完成哦！确认提交吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="popSubmit()">确认</el-button>
          <el-button type="primary" size="mini" @click="visible = false">取消</el-button>
        </div>
        <el-button
          type="primary"
          icon="el-icon-check"
          style="position: absolute;bottom: 110px;right: 80px"
          v-show="handleSubmitButton"
          slot="reference"
          @click="handleSubmit()"
        >确认提交</el-button>
      </el-popover>
      <el-button
        type="primary"
        icon="el-icon-caret-bottom"
        style="position: absolute;bottom: 110px;right: 80px"
        @click="nextSection()"
        v-show="nextSectionButton"
      >下一部分</el-button>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      beforeSubmit: 0,
      questionTitle: "",
      section_2: [],
      user_answer: [],
      section_2_answer: [],
      active: 1,
      radio: "",
      radioType: false,
      inputType: false,
      typeExplain: true,
      handleSubmitButton: true,
      nextSectionButton: false,
      wrongList: [],
      correctList: [],
      disabled: false
    };
  },
  mounted() {
    this.section_2 = this.$store.state.section_2;
    this.section_2_answer = this.$store.state.section_2_answer;
    this.radioType = true;
    this.$store.state.step = 1;
  },
  methods: {
    handleTypeChange() {
      this.radioType = !this.radioType;
      this.inputType = !this.inputType;
    },
    handleSubmit() {
      if (this.user_answer.length != 44) {
        this.visible = false;
      } else {
        this.visible = true;
        this.$store.state.statusWL = "success";
        this.$store.state.showWL = true;
        this.disabled = true;
        this.beforeSubmit = 1;
        for (var i = 0; i < 44; i++) {
          if (this.user_answer[i] == this.section_2_answer[i]) {
            this.wrongList.push(0);
            this.correctList.push(1);
            this.$store.state.countWL++;
          } else {
            this.wrongList.push(1);
            this.correctList.push(0);
            this.$store.state.wrongWL.push(this.section_2[i]);
          }
        }
        this.typeExplain = false;
        this.handleSubmitButton = false;
        this.nextSectionButton = true;
      }
    },
    popSubmit() {
      this.visible = false;
      this.$store.state.statusWL = "success";
      this.$store.state.showWL = true;
      this.disabled = true;
      this.beforeSubmit = 1;
      for (var i = 0; i < 44; i++) {
        if (this.user_answer[i] == this.section_2_answer[i]) {
          this.wrongList.push(0);
          this.correctList.push(1);
          this.$store.state.countWL++;
        } else {
          this.wrongList.push(1);
          this.correctList.push(0);
          this.$store.state.wrongWL.push(this.section_2[i]);
        }
      }
      this.typeExplain = false;
      this.handleSubmitButton = false;
      this.nextSectionButton = true;
    },
    nextSection() {
      if (this.$store.state.statusMathNC == "success") {
      } else {
        this.$store.state.statusMathNC = "process";
      }
      this.$store.state.section_2_user_answer = this.user_answer;
      this.$router.push("/home/questionBank/SAT/answerSheet/mathNC");
    }
  }
};
</script>

<style scoped>
.beforeSubmit {
  box-shadow: inset 0px 0px 15px 0px #c0c4cc;
}

.choice {
  font-family: "Microsoft Yahei";
  font-size: 0.7em;
  font-weight: bold;
  padding-left: 2px;
  color: #4158d0;
}

.questionNum {
  font-family: "Microsoft Yahei";
  font-size: 0.7em;
  font-weight: bold;
  line-height: 10px;
  color: #4158d0;
}

.questionNumInput {
  font-family: "Microsoft Yahei";
  font-size: 0.7em;
  font-weight: bold;
  color: #4158d0;
}

.radioBefore .el-radio >>> .el-radio__inner {
  width: 12px;
  height: 12px;
  border: 1.2px solid #707070;
}

.radioBefore .el-radio >>> .el-radio__input.is-checked .el-radio__inner::after {
  transform: translate(-50%, -50%) scale(0.1);
}

.radioBefore .el-radio >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: gray;
  background: gray;
}

.isWrong .el-radio >>> .el-radio__inner {
  width: 12px;
  height: 12px;
  border: 1.2px solid #db2828;
}

.isWrong .el-radio >>> .el-radio__input.is-checked .el-radio__inner::after {
  transform: translate(-50%, -50%) scale(0.1);
}

.isWrong .el-radio >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: #db2828;
  background: #db2828;
}

.isCorrect .el-radio >>> .el-radio__inner {
  width: 12px;
  height: 12px;
  border: 1.2px solid #c0c4cc;
}

.isCorrect .el-radio >>> .el-radio__input.is-checked .el-radio__inner::after {
  transform: translate(-50%, -50%) scale(0.1);
}

.isCorrect .el-radio >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: #c0c4cc;
  background: #c0c4cc;
}

.inputBefore .el-input >>> .el-input__inner {
  border: none;
  color: #707070;
  border-bottom: 1px solid #707070;
  border-radius: 0px;
  text-align: center;
  padding-top: 25px;
}

.isWrong .el-input >>> .el-input__inner {
  border: none;
  color: #db2828;
  border-bottom: 1px solid #db2828;
  border-radius: 0px;
  text-align: center;
  padding-top: 25px;
}

.isCorrect .el-input >>> .el-input__inner {
  border: none;
  color: #c0c4cc;
  border-bottom: 1px solid #c0c4cc;
  border-radius: 0px;
  text-align: center;
  padding-top: 25px;
}

.el-input.is-disabled >>> .el-input__inner {
  background: none;
}

.typeExplain {
  color: #707070;
  line-height: 40px;
  padding: 20px 20px;
}

.type {
  font-size: 1.2em;
}

.isWrong {
  color: #db2828;
}

.isCorrect {
  color: #c0c4cc;
}
</style>