// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import '~/global.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/theme/index.css'
import '@/assets/icon/iconfont.css'
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'
import config from '$config'
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false
// 加载测试数据，正式环境或者联调时去除！
if (config.enableMock) {
  require('@/data/mock-data.js')
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
