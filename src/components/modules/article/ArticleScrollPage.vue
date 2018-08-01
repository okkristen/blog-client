<template>
  <div class="module-article-scroll-page">
    <plugin-scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
      <module-article-item v-for="a in articles" :key="a.id" v-bind="a"></module-article-item>
    </plugin-scroll-page>
  </div>
</template>

<script>
// import api from 'api/modules/article'
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
    // this.getArticles()
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
            nickname: '史明辉'
          },
          commentCounts: 0,
          createDate: '2018.02.01 14:47',
          id: 10,
          summary: '本节将介绍如何在项目中使用 Element。',
          tags: [{tagname: 'vue'}],
          title: 'Element相关',
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
