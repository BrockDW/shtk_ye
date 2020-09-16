<template>
  <div style="padding-top: 40px;">
    <el-row>
      <el-col :span="6">
        <div class="grid-content" style="color: #4158d0; font-size: 1.4em; font-weight: bold">模拟考试</div>
        <el-row style="padding-top:10px" :gutter="60">
          <el-col :span="4">
            <el-tag type="warning" class="region">{{ $store.state.testRegion }}</el-tag>
          </el-col>
          <el-col :span="4">
            <el-tag type="info" class="date">{{ $store.state.testName }}</el-tag>
          </el-col>
        </el-row>
        <div class="grid-content" style="height: 450px; margin-top: 30px;">
          <el-steps direction="vertical" :active="$store.state.step" finish-status="process">
            <el-step
              title="Reading"
              @click.native="handleReading()"
              :status="$store.state.statusReading"
            >
              <template slot="description">
                <span v-show="$store.state.showReading">
                  {{ $store.state.countReading }}/52 题
                  <div style="height:60px; width: 150px">
                    <el-scrollbar style="height:100%">
                      错题：
                      <span v-for="i in $store.state.wrongReading" :key="i">{{ i }}&#32;</span>
                    </el-scrollbar>
                  </div>
                </span>
              </template>
            </el-step>
            <el-step
              title="Writing and Language"
              @click.native="handleWL()"
              :status="$store.state.statusWL"
            >
              <template slot="description">
                <span v-show="$store.state.showWL">
                  {{ $store.state.countWL }}/44 题
                  <div style="height:60px; width: 150px">
                    <el-scrollbar style="height:100%">
                      错题：
                      <span v-for="i in $store.state.wrongWL" :key="i">{{ i }},&#32;</span>
                    </el-scrollbar>
                  </div>
                </span>
              </template>
            </el-step>
            <el-step
              title="Math (No Calculator)"
              @click.native="handleMathNC()"
              :status="$store.state.statusMathNC"
            >
              <template slot="description">
                <span v-show="$store.state.showMathNC">
                  {{ $store.state.countMathNC }}/20 题
                  <div style="height:55px; width: 150px">
                    <el-scrollbar style="height:100%">
                      错题：
                      <span v-for="i in $store.state.wrongMathNC" :key="i">{{ i }},&#32;</span>
                    </el-scrollbar>
                  </div>
                </span>
              </template>
            </el-step>
            <el-step
              title="Math (Calculator OK)"
              @click.native="handleMath()"
              :status="$store.state.statusMath"
            >
              <template slot="description">
                <span v-show="$store.state.showMath">
                  {{ $store.state.countMath }}/38 题
                  <div style="height:60px; width: 150px">
                    <el-scrollbar style="height:100%">
                      错题：
                      <span v-for="i in $store.state.wrongMath" :key="i">{{ i }},&#32;</span>
                    </el-scrollbar>
                  </div>
                </span>
              </template>
            </el-step>
            <el-step
              title="Essay (Optional)"
              @click.native="handleEssay()"
              :status="$store.state.statusEssay"
            ></el-step>
          </el-steps>
        </div>
      </el-col>
      <router-view />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleReading() {
      if (this.$store.state.statusReading == "success") {
      } else {
        this.$store.state.statusReading = "process";
      }
      this.$store.commit("stepReading");
      this.$router.push("/home/questionBank/SAT/answerSheet/reading");
    },
    handleWL() {
      if (this.$store.state.statusWL == "success") {
      } else {
        this.$store.state.statusWL = "process";
      }
      this.$store.commit("stepWL");
      this.$router.push("/home/questionBank/SAT/answerSheet/wl");
    },
    handleMathNC() {
      if (this.$store.state.statusMathNC == "success") {
      } else {
        this.$store.state.statusMathNC = "process";
      }
      this.$store.commit("stepMathNC");
      this.$router.push("/home/questionBank/SAT/answerSheet/mathNC");
    },
    handleMath() {
      if (this.$store.state.statusMath == "success") {
      } else {
        this.$store.state.statusMath = "process";
      }
      this.$store.commit("stepMath");
      this.$router.push("/home/questionBank/SAT/answerSheet/math");
    },
    handleEssay() {
      if (this.$store.state.statusEssay == "success") {
      } else {
        this.$store.state.statusEssay = "process";
      }
      this.$store.commit("stepEssay");
      this.$router.push("/home/questionBank/SAT/answerSheet/essay");
    }
  }
};
</script>

<style scoped>
.region {
  padding: 0 18px;
  height: 25px;
  line-height: 23px;
}

.date {
  padding: 0 18px;
  height: 25px;
  line-height: 23px;
}

.el-step >>> .el-step__title {
  font-size: 0.8em;
  cursor: pointer;
}

.el-step >>> .el-step__title:hover {
  color: #4158d0;
  transition: color 1s;
}

.el-step >>> .el-step__description.is-success {
  color: #707070;
  font-size: 1em;
  line-height: 24px;
}

.el-scrollbar >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>