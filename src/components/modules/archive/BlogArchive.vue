<template>
  <div>
    <div class="width-15 float-left">
        <ul class="me-month-list">
          <li v-for="a in archives" :key="a.year + a.month" class="me-month-item">
            <el-badge :value="a.count">
              <el-button @click="changeArchive(a.year, a.month)" size="small">{{a.year +'年' + a.month + '月'}}
              </el-button>
            </el-badge>
          </li>
        </ul>
        </div>
        <div class="width-85 float-left">
            <div class="me-month-title">{{currentArchive}}</div>
          <module-article-scroll-page v-bind="article"></module-article-scroll-page>
        </div>
  </div>

</template>

<script>
export default {
  name: 'BlogArchive',
  created () {
    // this.listArchives()
  },
  watch: {
    '$route' () {
      if (this.$route.params.year && this.$route.params.month) {
        this.article.query.year = this.$route.params.year
        this.article.query.month = this.$route.params.month
      }
    }
  },
  data () {
    return {
      article: {
        query: {
          month: this.$route.params.month,
          year: this.$route.params.year
        }
      },
      archives: [
        {
          commentCounts: 0,
          count: 1,
          month: 1,
          summary: '',
          title: '',
          viewCounts: 0,
          weight: 0,
          year: 2018
        }
      ]
    }
  },
  computed: {
    title () {
      return this.currentArchive + ' - 文章归档 - For Fun'
    },
    currentArchive () {
      if (this.article.query.year && this.article.query.month) {
        return `${this.article.query.year}年${this.article.query.month}月`
      }
      return '全部'
    }
  },
  methods: {
    changeArchive (year, month) {
      // this.currentArchive = `${year}年${month}月`
      // this.article.query.year = year
      // this.article.query.month = month
      this.$router.push({path: `/archives/${year}/${month}`})
    },
    listArchive () {
    }
  },
  components: {
    'module-article-scroll-page': () => import('~/modules/article/ArticleScrollPage.vue')
  }
}
</script>

<style scoped>

  .el-container {
    width: 640px;
  }

  .el-aside {
    position: fixed;
    left: 200px;
    margin-right: 50px;
    width: 150px !important;
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .me-month-list {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    list-style-type: none;
  }

  .me-month-item {
    margin-top: 18px;
    padding: 4px;
    font-size: 18px;
    color: #5FB878;
  }

  .me-order-list {
    float: right;
  }

  .me-month-title {
    margin-left: 4px;
    margin-bottom: 12px;
  }
</style>
