<template>
  <div class="module-article-scroll-page">
    <plugin-scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
      <module-article-item v-for="a in articles" :key="a.id" v-bind="a"></module-article-item>
    </plugin-scroll-page>
  </div>
</template>

<script>
// import api from 'api/modules/article'
import $api from '$api/table/article'
export default {
  name: 'module-article-scroll-page',
  props: {
    offset: {
      type: Number,
      default: 100
    },
    page: {
      type: Object,
      default () {
        return {}
      }
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    'query': {
      handler () {
        this.noData = false
        this.articles = []
        this.innerPage.pageNumber = 1
        this.getArticles()
      },
      deep: true
    },
    'page': {
      handler () {
        this.noData = false
        this.articles = []
        this.innerPage = this.page
        this.getArticles()
      },
      deep: true
    }
  },
  created () {
    // let vm = this
    this.getArticles()
    // $api.save().then(res => {
    //   console.log('res', res.id)
    //   console.log('data', JSON.parse(JSON.stringify(res))
    // })
    // 保存
    // $api.save().then(function (res) {
    //   console.log('res', res.id)
    //   console.log('data', JSON.parse(JSON.stringify(res)))
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message)
    // })
    // 查询单个
    // $api.findOne().then(function (res) {
    //   console.log('findOne.res.id', res.id)
    //   console.log('findOne.res', res)
    //   console.log('findOne.data', JSON.parse(JSON.stringify(res)))
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message)
    // })
    // 查询分页 --- 暂时没用
    // $api.findPage().then(function (res) {
    //   console.log('findPage.res.id', res.id)
    //   console.log('findPage.res', res)
    //   console.log('findPage.data', JSON.parse(JSON.stringify(res)))
    //   vm.articles = JSON.parse(JSON.stringify(res))
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message)
    // })
    // 更新
    // $api.update({viewCounts: 9}).then(function (res) {
    //   console.log('update.res.id', res.id)
    //   console.log('update.res', res)
    //   console.log('update.data', JSON.parse(JSON.stringify(res)))
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message)
    // })
    // $api.delete().then(function (res) {
    //   console.log('delete.res.id', res.id)
    //   console.log('delete.res', res)
    //   console.log('delete.data', JSON.parse(JSON.stringify(res)))
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message)
    // })
  },
  data () {
    return {
      loading: false,
      noData: false,
      innerPage: {
        pageSize: 5,
        pageNumber: 1,
        name: 'a.createDate',
        sort: 'desc'
      },
      articles: [
        {
          author: {
            nickname: ''
          },
          commentCounts: 0,
          createDate: '2018.02.01 14:47',
          id: 10,
          summary: '',
          tags: [{tagname: 'vue'}],
          title: 'jpa相关',
          viewCounts: 4,
          weight: 0
        }
      ]
    }
  },
  methods: {
    load () {
      this.getArticles()
    },
    view (id) {
      this.$router.push({path: `/view/${id}`})
    },
    getArticles () {
      let vm = this
      vm.loading = true
      // api.findPage({}).then(res => {
      //   console.log('res', res)
      //   vm.loading = false
      //   console.log('res.data', res.data)
      //   vm.articles = res.data
      // })
      $api.findPage().then(function (res) {
        vm.loading = false
        console.log('findPage.res.id', res.id)
        console.log('findPage.res', res)
        console.log('findPage.data', JSON.parse(JSON.stringify(res)))
        vm.articles = JSON.parse(JSON.stringify(res))
      }, function (error) {
        console.error('Failed to create new object, with error message: ' + error.message)
      })
    }
  },
  components: {
    'module-article-item': () => import('./ArticleItem.vue')
  }

}
</script>

<style scoped>
.module-article-scroll-page {
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>
