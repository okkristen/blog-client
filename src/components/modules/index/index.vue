<template>
  <div class="module-index ">
     <div>
      <module-article-scroll-page></module-article-scroll-page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  created () {
  },
  data () {
    return {
      hotTags: [
        {
          avatar: '/tag/vue.png',
          id: 7,
          tagname: 'Vue'
        }
      ],
      hotArticles: [
        {
          id: 10,
          title: 'Element相关'
        }
      ],
      newArticles: [
        {
          id: 10,
          title: 'Element相关'
        }
      ],
      archives: [
        {
          commentCounts: 0,
          count: 1,
          month: 1,
          summary: '2313123213',
          title: '321312312',
          viewCounts: 0,
          weight: 0,
          year: 2018
        }
      ]
    }
  },
  methods: {
  },
  components: {
    'module-article-scroll-page': () => import('~/modules/article/ArticleScrollPage.vue')
  }
}
</script>

<style scoped>
.module-index {
  width: 100%;
  height: 100%;
}
.el-container {
width: 100%;
}
.el-aside {
margin-left: 20px;
width: 100%;
}
.el-main {
padding: 0px;
line-height: 16px;
}
.el-card {
border-radius: 0;
}
.el-card:not(:first-child) {
margin-top: 20px;
}
</style>
