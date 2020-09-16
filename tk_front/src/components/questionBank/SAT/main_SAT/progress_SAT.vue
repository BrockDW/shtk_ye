<template>
  <div style="padding-top: 60px;">
    <el-row :gutter="60" style="margin-bottom: 60px;">
      <el-col :span="12">
        <div class="grid-content">
          <el-card class="box-card">
            <div class="playButton">
              <el-button circle>
                <i class="el-icon-caret-right"></i>
              </el-button>
            </div>
            <div class="cardName">上一次学习</div>
            <div class="recordName">Math</div>
            <div class="date">08:30 pm, 2020-08-27</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-card class="box-card">
            <div id="main" class="echarts"></div>
            <div class="cardName">本周学习</div>
            <div class="recordName">17 题</div>
            <div class="compare">
              <span class="change">
                4.9%
                <i class="fa fa-long-arrow-down"></i>
              </span>
              compared to last week
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="60">
      <el-col :span="12">
        <div class="grid-content">
          <el-card class="box-card">
            <div class="cardName">专项进度</div>
            <el-row style="padding-top: 20px">
              <el-col :span="5">
                <div class="practiceName">Reading</div>
              </el-col>
              <el-col :span="19">
                <div class="progress">
                  <div class="progress_inner">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="20"></el-progress>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="practiceName">Math</div>
              </el-col>
              <el-col :span="19">
                <div class="progress">
                  <div class="progress_inner">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="100"></el-progress>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="practiceName">Math (NC)</div>
              </el-col>
              <el-col :span="19">
                <div class="progress">
                  <div class="progress_inner">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="80"></el-progress>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="practiceName">Writng</div>
              </el-col>
              <el-col :span="19">
                <div class="progress">
                  <div class="progress_inner">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="50"></el-progress>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-card class="box-card">
            <div class="cardName" style="float:left">模考进度</div>
            <div id="chartPie" class="pie-wrap"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
// require("echarts/theme/macarons");

export default {
  data() {
    return {
      charts: "",
      chartPie: "",
      thisWeek: ["2", "3", "2", "4", "5", "1", "2"],
      lastWeek: ["4", "3", "7", "2", "2", "1", "5"]
    };
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["本周学习", "上周学习"],
          textStyle: { color: "rgb(123, 130, 161)" }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function() {
              return "";
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: function() {
              return "";
            }
          },
          axisTick: {
            show: false
          },
          splitLine: { show: false }
        },
        series: [
          {
            name: "本周学习",
            type: "line",
            stack: "总量",
            data: this.thisWeek,
            itemStyle: {
              normal: {
                color: "rgb(65, 119, 255)",
                lineStyle: {
                  color: "rgb(65, 119, 255)"
                }
              }
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(65,119,255,0.6)" },
                { offset: 0.8, color: "rgba(61,234,255,0)" }
              ])
            }
          },
          {
            name: "上周学习",
            type: "line",
            stack: "总量",
            data: this.lastWeek,
            itemStyle: {
              normal: {
                color: "#F7B42A",
                lineStyle: {
                  color: "#F7B42A"
                }
              }
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#F7B42A" },
                { offset: 0.8, color: "rgba(255,204,51,0)" }
              ])
            }
          }
        ]
      });
    },

    drawPieChart() {
      let mytextStyle = {
        color: "#333",
        fontSize: 18
      };
      let mylabel = {
        show: false,
        position: "right",
        offset: [30, 40],
        formatter: "{b} : {c} ({d}%)",
        textStyle: mytextStyle
      };
      this.chartPie = echarts.init(
        document.getElementById("chartPie")
        // "macarons"
      );
      this.chartPie.setOption({
        title: {
          text: "33%",
          left: "310",
          top: "24%",
          textStyle: {
            color: "#4158d0",
            fontSize: 30,
            textAlign: "center"
          },
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          data: ["已完成", "已开始", "待开始"],
          textStyle: {
            rich: {
              a: { color: "black", fontSize: 12 },
              b: { color: "black", fontSize: 22, fontWeight: "bold" }
            }
          },
          left: "20",
          top: "50",
          orient: "vertical",
          formatter: function(name) {
            var index = 0;
            var clientlabels = ["已完成", "已开始", "待开始"];
            var clientcounts = ["3套", "2套", "4套"];
            clientlabels.forEach(function(value, i) {
              if (value == name) {
                index = i;
              }
            });
            return (
              "{a|" + name + "}" + "       " + "{b|" + clientcounts[index] + "}"
            );
          }
        },
        graphic: {
          type: "text",
          right: "90",
          top: "45%",
          style: {
            text: "已完成",
            textAlign: "center",
            fill: "rgb(123, 130, 161)",
            fontSize: 14,
            fontWeight: 100
          }
        },
        series: [
          {
            name: "模考进度",
            type: "pie",
            radius: ["55%", "70%"],
            center: ["76%", "40%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              { value: 3, name: "已完成", itemStyle: { color: "#4158d0" } },
              { value: 2, name: "已开始", itemStyle: { color: "#21D59B" } },
              { value: 4, name: "待开始", itemStyle: { color: "#F7B42A" } }
            ],
            animationEasing: "cubicInOut",
            animationDuration: 800,
            label: {
              emphasis: mylabel
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawLine("main");
      this.drawPieChart();
    });
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
.box-card {
  height: 240px;
}
.box-card >>> .el-card__body {
  padding: 40px 30px;
}
.cardName {
  font-family: "Microsoft Yahei";
  font-size: 1.4em;
  color: rgb(123, 130, 161);
  font-weight: 400;
}
.recordName {
  font-family: "Microsoft Yahei";
  font-size: 2.5em;
  font-weight: bold;
  color: black;
  padding-top: 30px;
}
.date {
  font-family: "Microsoft Yahei";
  font-size: 1em;
  color: rgb(123, 130, 161);
  font-weight: 400;
  padding-top: 20px;
}
.playButton .el-button {
  width: 75px;
  height: 75px;
  position: relative;
  float: right;
  color: rgb(33, 213, 155);
  border: 2px solid rgb(33, 213, 155);
  margin-top: 40px;
  margin-right: 40px;
}
.el-button [class^="el-icon-"] {
  font-size: 3.5em;
}
.compare {
  padding-top: 20px;
  font-weight: 400;
  color: rgb(123, 130, 161);
  font-size: 0.8em;
}
.change {
  font-weight: bold;
  color: rgb(219, 40, 40);
  font-size: 1.2em;
}
.echarts {
  float: right;
  width: 200px;
  height: 150px;
  padding-right: 25px;
}
.practiceName {
  font-size: 0.8em;
  padding-top: 7px;
  text-align: center;
  font-weight: bold;
  color: black;
}
.progress {
  height: 30px;
}
.progress_inner {
  padding: 0px 20px;
  padding-top: 8px;
}
.pie-wrap {
  width: 100%;
  height: 200px;
}
</style>