<template>
  <el-container>
    <el-header>
      <SAT-header></SAT-header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import header from "@/components/qb_teacher/SAT/header_SAT";

export default {
  components: {
    "SAT-header": header
  },
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style scoped>
</style>