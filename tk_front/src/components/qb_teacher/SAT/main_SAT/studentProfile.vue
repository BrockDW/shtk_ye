<template>
  <div style="padding-top: 40px;">
    <el-row>
      <el-col :span="16">
        <div
          class="grid-content"
          style="color: #4158d0; font-size: 1.4em; font-weight: bold"
        >学生详情 - {{ $store.state.name }}</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" style="text-align: right; line-height: 50px">
          <el-button
            icon="fa fa-long-arrow-right"
            type="primary"
            plain
            @click="$router.push('/teacher/home/questionBank/SAT/overview')"
          >&nbsp;返回所有学生</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="cardName">成绩变化</div>
          <div id="main" class="echarts"></div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <div class="cardName">模考进度</div>
          <div id="chartPie" class="pie-wrap"></div>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 20px">
        <el-table
          :data="tableData"
          height="514"
          style="width: 100%;"
          :default-sort="{prop: 'date', order: 'ascending'}"
        >
          <el-table-column prop="date" label="Date" width="100" sortable></el-table-column>
          <el-table-column
            prop="region"
            label="Region"
            width="200"
            :filters="[{ text: 'NA', value: 'NA' }, { text: 'AS', value: 'AS' }]"
            :filter-method="filterRegion"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.region === 'NA' ? 'primary' : 'warning'"
                disable-transitions
              >{{scope.row.region}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Download" width="100">
            <template slot-scope="scope">
              <div @click="handleDownload(scope.row.download)" style="cursor:pointer">
                <i class="fa fa-download"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="progress" label="Progress" width="600">
            <template slot-scope="scope">
              <el-progress
                :text-inside="true"
                style="padding: 0 100px"
                :color="customColors"
                :stroke-width="24"
                :percentage="scope.row.progress"
              ></el-progress>
            </template>
          </el-table-column>
          <el-table-column label="Complete">
            <template slot-scope="scope">
              <div v-if="scope.row.progress < 100 && scope.row.progress > 0">
                <el-button
                  icon="el-icon-right"
                  @click="handleContinue(scope.row.id)"
                  size="mini"
                  circle
                ></el-button>
              </div>
              <div v-else-if="scope.row.progress === 0">
                <el-button
                  icon="el-icon-caret-right"
                  @click="handleStart(scope.row.id)"
                  size="mini"
                  circle
                ></el-button>
              </div>
              <div v-else>
                <i class="el-icon-check" style="color: #21D59B; font-size: 1.5em"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      charts: "",
      chartPie: "",
      thisWeek: ["1450", "1390", "1540", "1350", "1480", "1550", "1560"]
    };
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis"
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
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          max: 1600,
          min: 800,
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
          left: "39",
          top: "39%",
          textStyle: {
            color: "#4158d0",
            fontSize: 28,
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
          right: "30",
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
          left: "47",
          top: "60%",
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
            center: ["20%", "55%"],
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
.cardName {
  font-family: "Microsoft Yahei";
  font-size: 1.2em;
  color: #707070;
  font-weight: 400;
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
  width: 350px;
  height: 180px;
}
.pie-wrap {
  width: 100%;
  height: 180px;
}
.el-row {
  margin-bottom: 20px;
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
.testTable {
  height: 560px;
  overflow: auto;
}
.el-table-column {
  text-align: center;
}
.el-table >>> th > .cell {
  color: rgb(112, 112, 112) !important;
  font-weight: bold;
  font-family: "Microsoft Yahei";
}
.el-table >>> .cell {
  color: rgb(112, 112, 112) !important;
  font-weight: bold;
}
.el-table {
  border: 1px solid rgb(235, 238, 245);
}

.el-table >>> td,
.el-table >>> th {
  padding: 8px 0 !important;
}

.el-tag {
  padding: 0 18px;
  height: 25px;
  line-height: 23px;
}

.el-button {
  color: #4158d0;
  border: 1px solid #4158d0;
}

.el-button [class^="el-icon-"] {
  font-size: 1.2em;
}
</style>