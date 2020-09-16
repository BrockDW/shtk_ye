<template>
  <div style="padding-top: 40px;">
    <el-row>
      <el-col :span="4">
        <div class="grid-content" style="color: #4158d0; font-size: 1.4em; font-weight: bold">可选套题</div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="500"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "201605NA",
          date: "2016-05",
          region: "NA",
          download: "201605NA.pdf",
          progress: 23,
          complete: ""
        },
        {
          id: "201610AS",
          date: "2016-10",
          region: "AS",
          download: "201610AS.pdf",
          progress: 67,
          complete: ""
        },
        {
          id: "201605AS",
          date: "2016-05",
          region: "AS",
          download: "201605AS.pdf",
          progress: 50,
          complete: ""
        },
        {
          id: "201610NA",
          date: "2016-10",
          region: "NA",
          download: "201610NA.pdf",
          progress: 16,
          complete: ""
        },
        {
          id: "201705AS",
          date: "2017-05",
          region: "AS",
          download: "201705AS.pdf",
          progress: 54,
          complete: ""
        },
        {
          id: "201710AS",
          date: "2017-10",
          region: "AS",
          download: "201710AS.pdf",
          progress: 0,
          complete: ""
        },
        {
          id: "201705NA",
          date: "2017-05",
          region: "NA",
          download: "201705NA.pdf",
          progress: 0,
          complete: ""
        },
        {
          id: "201710NA",
          date: "2017-10",
          region: "NA",
          download: "201710NA.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "2018105AS",
          date: "2018-10",
          region: "AS",
          download: "2018105AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201805NA",
          date: "2018-05",
          region: "NA",
          download: "201805NA.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201810NA",
          date: "2018-10",
          region: "NA",
          download: "201810NA.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201805AS",
          date: "2018-05",
          region: "AS",
          download: "201805AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201910NA",
          date: "2019-10",
          region: "NA",
          download: "201910NA.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201905NA",
          date: "2019-05",
          region: "NA",
          download: "201905NA.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201910AS",
          date: "2019-10",
          region: "AS",
          download: "201910AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "201905AS",
          date: "2019-05",
          region: "AS",
          download: "201905AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "202010AS",
          date: "2020-10",
          region: "AS",
          download: "202010AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "202005AS",
          date: "2020-05",
          region: "AS",
          download: "202005AS.pdf",
          progress: 100,
          complete: ""
        },
        {
          id: "202010NA",
          date: "2020-10",
          region: "NA",
          download: "202010NA.pdf",
          progress: 100,
          complete: ""
        }
      ],
      search: "",
      customColors: [
        { color: "#4158d0", percentage: 20 },
        { color: "#4158d0", percentage: 40 },
        { color: "#4158d0", percentage: 60 },
        { color: "#4158d0", percentage: 80 },
        { color: "#21D59B", percentage: 100 }
      ]
    };
  },
  methods: {
    filterRegion(value, row) {
      return row.region === value;
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    handleDownload(download) {
      console.log(download);
    },
    handleContinue(id) {
      console.log(id);
      this.$router.push("/home/questionBank/SAT/answerSheet/reading");
    },
    handleStart(id) {
      console.log(id);
      this.$router.push("/home/questionBank/SAT/answerSheet/reading");
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
  text-align: center;
  font-family: "Microsoft Yahei";
}
.el-table >>> .cell {
  text-align: center;
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
