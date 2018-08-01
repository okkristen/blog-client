<template>
    <div class="module-header">
    <!-- <el-row>
      <el-col :span="4">
        <router-link to="/">
            <div class="nameClass">ok克里斯汀</div>
        </router-link>
      </el-col>
      <el-col v-if="!simple" :span="16">
        <el-menu :router=true menu-trigger="click" active-text-color="#5FB878" :default-active="activeIndex"
                 mode="horizontal">
          <el-menu-item index="/main/index">首页</el-menu-item>
          <el-menu-item index="/category/all">文章分类</el-menu-item>
          <el-menu-item index="/tag/all">标签</el-menu-item>
          <el-menu-item index="/archives">文章归档</el-menu-item>
          <el-menu-item index="/log">日志</el-menu-item>
          <el-menu-item index="/messageBoard">留言板</el-menu-item>
          <el-col :span="4" :offset="4">
            <el-menu-item index="/write"><i class="el-icon-edit"></i>写文章</el-menu-item>
          </el-col>
        </el-menu>
      </el-col>
      <template v-else>
        <slot></slot>
      </template>
      <el-col :span="4">
        <el-menu :router=true menu-trigger="click" mode="horizontal" active-text-color="#5FB878">
          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button type="text">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="text">注册</el-button>
            </el-menu-item>
          </template>

          <template v-else>
            <el-submenu index>
              <template slot="title">
                <img class="me-header-picture" :src="user.avatar"/>
              </template>
              <el-menu-item index @click="logout"><i class="el-icon-back"></i>退出</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row> -->
    <el-row class="width-100 height-100">
        <el-col :span="6">
        <!-- <router-link to="/">
            <div class="nameClass">ok克里斯汀</div>
        </router-link> -->
      </el-col>
      <el-col :span="12" :offset="6">
          <module-menu></module-menu>
      </el-col>
      <el-col :span="6">
        <!-- <router-link to="/">
            <div class="nameClass">ok克里斯汀</div>
        </router-link> -->
      </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
  name: 'module-header',
  props: {
    activeIndex: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    user () {
      // let login = this.$store.state.account.length !== 0
      // let avatar = this.$store.state.avatar
      // return {
      //   login, avatar
      // }
      return {}
    }
  },
  methods: {
    logout () {
      let that = this
      this.$store.dispatch('logout').then(() => {
        this.$router.push({path: '/'})
      }).catch((error) => {
        if (error !== 'error') {
          that.$message({message: error, type: 'error', showClose: true})
        }
      })
    }
  },
  components: {
    'module-menu': () => import('./menu.vue')
  }
}
</script>

<style>
.module-header {
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
}
</style>
