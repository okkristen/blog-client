<template>
  <div class="module-main">
    <div class="header">
      <div class="header-content">
        <module-header></module-header>
      </div>
    </div>
    <div class="main">
     <div class="main-content">
       <el-row>
           <el-col :span="14" :offset="5">
              <module-my-info></module-my-info>
           </el-col>
            <el-col :span="5">
            </el-col>
        </el-row>
        <el-row>
           <el-col :span="14" :offset="5">
              <router-view/>
           </el-col>
            <el-col :span="5">
            </el-col>
        </el-row>
     </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <module-footer></module-footer>
      </div>
    </div>
  </div>
</template>

<script>
import api from 'api/test'
export default {
  name: 'module-main',
  data () {
    return {
    }
  },
  mounted () {
    // var a = document.getElementById('app')
    // this.mainStyle.height = a.clientHeight - 60 - 60 - 60 + 'px'
    // util.createCanvas()
    api.findOne().then(res => {
      // console.log('res', res.data)
    })
  },
  components: {
    'module-footer': () => import('./module/footer.vue'),
    'module-header': () => import('./module/header.vue'),
    'module-my-info': () => import('./module/myInfo.vue')
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.activeIndex = to.path
    })
  },
  beforeRouteUpdate (to, from, next) {
    if (to.path === '/') {
      this.footerShow = true
    } else {
      this.footerShow = false
    }
    this.activeIndex = to.path
    next()
  }
}
</script>

<style media="screen" scoped>
.module-main {
  width: 100%;
  height: 100%;
}
</style>
