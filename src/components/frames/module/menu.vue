<template>
  <div class="modle-menu">
    <el-menu  :router="true" :default-active="activeIndex" class="el-menu-demo width-100 height-100" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/main/index">首页</el-menu-item>
        <!-- <el-menu-item index="/category/all">文章分类</el-menu-item>
        <el-menu-item index="/archives">文章归档</el-menu-item>
        <el-menu-item index="/log">日志</el-menu-item> -->
        <el-menu-item index="/pit">踩坑记</el-menu-item>
        <!-- <el-menu-item index="/messageBoard">留言板</el-menu-item> -->
        <el-menu-item index="/aboutMe">关于我</el-menu-item>
        <el-submenu index="/project">
            <template slot="title">项目经验</template>
            <el-menu-item index="2-1">买钢乐</el-menu-item>
            <el-menu-item index="2-2">智慧河道</el-menu-item>
        </el-submenu>
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
