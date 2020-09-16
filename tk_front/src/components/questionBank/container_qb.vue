<template>
  <el-container>
    <el-header>
      <qb-header></qb-header>
    </el-header>
    <el-main>
      <qb-main></qb-main>
    </el-main>
  </el-container>
</template>

<script>
import header from "@/components/questionBank/header_qb";
import main from "@/components/questionBank/main_qb";

export default {
  components: {
    "qb-header": header,
    "qb-main": main
  }
};
</script>

<style scoped>
</style>