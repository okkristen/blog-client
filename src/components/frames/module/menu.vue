<template>
  <div class="modle-menu">
    <el-menu  :router="true" :default-active="activeIndex" class="el-menu-demo width-100 height-100" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/main/index">首页</el-menu-item>
        <el-menu-item index="/category/all">文章分类</el-menu-item>
        <el-menu-item index="/archives">文章归档</el-menu-item>
        <el-menu-item index="/log">日志</el-menu-item>
        <el-menu-item index="/messageBoard">留言板</el-menu-item>
      <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created () {

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {

  }
}
</script>

<style scoped>
.modle-menu {
  width: 100%;
  height: 100%;
}
.modle-menu >>> .el-col {
  height: 100%;
}
.modle-menu >>> .el-menu--horizontal {
  border: 0px;
}
</style>
