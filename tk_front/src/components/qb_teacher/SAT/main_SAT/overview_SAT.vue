<template>
  <div style="padding-top: 40px;">
    <el-row>
      <el-col :span="4">
        <div class="grid-content" style="color: #4158d0; font-size: 1.4em; font-weight: bold">学生总览</div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="500"
      style="width: 100%;"
      :default-sort="{prop: 'name', order: 'ascending'}"
    >
      <el-table-column prop="name" label="姓名" width="150" sortable align="left"></el-table-column>
      <el-table-column prop="finishedCount" label="完成套题数" width="150" align="center"></el-table-column>
      <el-table-column prop="avg_grade" label="平均成绩" width="150" align="center"></el-table-column>
      <el-table-column prop="avg_wrong_math" label="数学平均错题" width="150" align="center"></el-table-column>
      <el-table-column prop="avg_wrong_reading" label="阅读平均错题" width="150" align="center"></el-table-column>
      <el-table-column prop="lastDate" label="最后做题时间" width="250" align="center"></el-table-column>
      <el-table-column label="查看详情" align="center">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-right"
            @click="handleMoreDetails(scope.row.name)"
            size="mini"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "201605NA",
          name: "Ruei Yeh",
          avg_grade: 1580,
          finishedCount: 3,
          avg_wrong_math: 3,
          avg_wrong_reading: 8,
          lastDate: "2020-08-28"
        },
        {
          id: "201610AS",
          name: "Jamie Harington",
          avg_grade: 1510,
          finishedCount: 2,
          avg_wrong_math: 4,
          avg_wrong_reading: 8,
          lastDate: "2020-08-21"
        },
        {
          id: "201605AS",
          name: "John Lilki",
          avg_grade: 1480,
          finishedCount: 7,
          avg_wrong_math: 4,
          avg_wrong_reading: 8,
          lastDate: "2020-07-03"
        },
        {
          id: "201610NA",
          name: "Cesar Norman",
          avg_grade: 1377,
          finishedCount: 9,
          avg_wrong_math: 3.7,
          avg_wrong_reading: 11.3,
          lastDate: "2020-09-03"
        },
        {
          id: "201705AS",
          name: "Jasmine Mason",
          avg_grade: 1400,
          finishedCount: 3,
          avg_wrong_math: 7,
          avg_wrong_reading: 15.3,
          lastDate: "2020-08-22"
        },
        {
          id: "201710AS",
          name: "Marion Valdez",
          avg_grade: 1514,
          finishedCount: 7,
          avg_wrong_math: 7.6,
          avg_wrong_reading: 4.6,
          lastDate: "2020-08-25"
        },
        {
          id: "201705NA",
          name: "Angela Sanders",
          avg_grade: 1572,
          finishedCount: 12,
          avg_wrong_math: 7.4,
          avg_wrong_reading: 15.3,
          lastDate: "2020-08-23"
        },
        {
          id: "201710NA",
          name: "Arnold Clayton",
          avg_grade: 1255,
          finishedCount: 6,
          avg_wrong_math: 5.2,
          avg_wrong_reading: 17.4,
          lastDate: "2020-08-24"
        },
        {
          id: "2018105AS",
          name: "Armando Francis",
          avg_grade: 1488,
          finishedCount: 17,
          avg_wrong_math: 9.2,
          avg_wrong_reading: 13.3,
          lastDate: "2020-08-25"
        },
        {
          id: "201805NA",
          name: "Deanna Wade",
          avg_grade: 1430,
          finishedCount: 16,
          avg_wrong_math: 9,
          avg_wrong_reading: 2.4,
          lastDate: "2020-08-23"
        },
        {
          id: "201810NA",
          name: "Alex Wheeler",
          avg_grade: 1450,
          finishedCount: 2,
          avg_wrong_math: 8,
          avg_wrong_reading: 1.7,
          lastDate: "2020-08-23"
        },
        {
          id: "201805AS",
          name: "Angelica Fernandez",
          avg_grade: 1560,
          finishedCount: 3,
          avg_wrong_math: 0,
          avg_wrong_reading: 5.4,
          lastDate: "2020-09-13"
        },
        {
          id: "201910NA",
          name: "Julian Berry",
          avg_grade: 1240,
          finishedCount: 4,
          avg_wrong_math: 6,
          avg_wrong_reading: 8.4,
          lastDate: "2020-09-11"
        },
        {
          id: "201905NA",
          name: "Gwen Schultz",
          avg_grade: 1300,
          finishedCount: 4,
          avg_wrong_math: 4.1,
          avg_wrong_reading: 14.4,
          lastDate: "2020-09-15"
        },
        {
          id: "201910AS",
          name: "Kelvin Rhodes",
          avg_grade: 1335,
          finishedCount: 5,
          avg_wrong_math: 2.4,
          avg_wrong_reading: 13.4,
          lastDate: "2020-09-15"
        },
        {
          id: "201905AS",
          name: "Karl Johnson",
          avg_grade: 1544,
          finishedCount: 8,
          avg_wrong_math: 2,
          avg_wrong_reading: 2.3,
          lastDate: "2020-09-08"
        },
        {
          id: "202010AS",
          name: "Della Vega",
          avg_grade: 1175,
          finishedCount: 6,
          avg_wrong_math: 12.4,
          avg_wrong_reading: 21,
          lastDate: "2020-09-06"
        },
        {
          id: "202005AS",
          name: "Levi Stevens",
          avg_grade: 1440,
          finishedCount: 7,
          avg_wrong_math: 3,
          avg_wrong_reading: 6,
          lastDate: "2020-09-06"
        },
        {
          id: "202010NA",
          name: "Lynda Ortega",
          avg_grade: 1490,
          finishedCount: 13,
          avg_wrong_math: 4.2,
          avg_wrong_reading: 2,
          lastDate: "2020-09-13"
        }
      ],
    };
  },
  methods: {
    handleMoreDetails(name) {
      this.$store.state.name = name;
      this.$router.push("/teacher/home/questionBank/SAT/studentProfile");
    }
  }
};
</script>

<style scoped>
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
