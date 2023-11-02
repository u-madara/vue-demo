<template>
  <div class="main">
    <el-container style="width: 100%; height: 100%; box-sizing: border-box">
      <el-header>
        头部
      </el-header>
      <el-container style="height: fit-content">
        <el-aside width="200px">左侧菜单</el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main{
  width: 100%;
  height: 100vh;
}
</style>
