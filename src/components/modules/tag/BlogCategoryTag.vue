<template>
  <div class="module-blog-category-tag">
    <el-container class="me-ct-container">
      <el-main>
        <div class="me-ct-title">
          <template v-if="this.$route.params.type === 'tag'">
            <img class="me-ct-picture" :src="ct.avatar"/>
            <h3 class="me-ct-name">{{ct.tagname}}</h3>
          </template>

          <template v-else>
            <img class="me-ct-picture" :src="ct.avatar"/>
            <h3 class="me-ct-name">{{ct.categoryname}}</h3>
            <p>{{ct.description}}</p>
          </template>

          <span class="me-ct-meta">{{ct.articles}} 文章</span>
        </div>

        <div class="me-ct-articles">
          <module-article-scroll-page></module-article-scroll-page>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
// import ArticleScrollPage from '@/views/common/ArticleScrollPage'
// import {getArticlesByCategory, getArticlesByTag} from '@//api/api/article'
// import {getTagDetail} from '@/api/tag'
// import {getCategoryDetail} from '@/api/category'
import defaultAvatar from '@/assets/img/logo.png'
// import web from '@/components/app/config/website'
export default {
  name: 'module-blog-category-tag',
  created () {
    // this.getCategoryOrTagAndArticles()
    this.ct = {
      articles: 3,
      avatar: '/tag/vue.png',
      id: 7,
      tagname: 'Vue'
    }
  },
  watch: {
    '$route': 'getCategoryOrTagAndArticles'
  },
  data () {
    return {
      defaultAvatar: defaultAvatar,
      ct: {},
      article: {
        query: {
          tagId: '',
          categoryId: ''
        }
      }
    }
  },
  computed: {
    title () {
      if (this.$route.params.type === 'tag') {
        return `${this.ct.tagname} - 标签 - For Fun`
      }
      return `${this.ct.categoryname} - 文章分类 - For Fun`
    }
  },
  methods: {
    getCategoryOrTagAndArticles () {
      // let id = this.$route.params.id
      // let type = this.$route.params.type
      // if ('tag' === type) {
      //   this.getTagDetail(id)
      //   this.article.query.tagId = id
      // } else {
      //   this.getCategoryDetail(id)
      //   this.article.query.categoryId = id
      // }
    },
    getCategoryDetail (id) {
      // let that = this
      // getCategoryDetail(id).then(data => {
      //   that.ct = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '文章分类加载失败', showClose: true})
      //   }
      // })
    },
    getTagDetail (id) {
      // let that = this
      // getTagDetail(id).then(data => {
      //   that.ct = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '标签加载失败', showClose: true})
      //   }
      // })
    },
    getArticlesByCategory (id) {
      // let that = this
      // getArticlesByCategory(id).then(data => {
      //   that.articles = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '文章加载失败', showClose: true})
      //   }
      // })
    },
    getArticlesByTag (id) {
      // let that = this
      // getArticlesByTag(id).then(data => {
      //   that.articles = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '文章加载失败', showClose: true})
      //   }
      // })
    }
  },
  components: {
    'module-article-scroll-page': () => import('~/modules/article/ArticleScrollPage.vue')
  }
}
</script>

<style>
  /* .me-ct-body {
    margin: 60px auto 140px;
    min-width: 100%;
  }

  .el-main {
    padding: 0;
  }

  .me-ct-title {
    text-align: center;
    height: 150px;
    padding: 20px;
  }

  .me-ct-picture {
    width: 60px;
    height: 60px;
  }

  .me-ct-name {
    font-size: 28px;
  }

  .me-ct-meta {
    font-size: 12px;
    color: #969696;
  }

  .me-ct-articles {
    width: 640px;
    margin: 30px auto;
  } */
</style>
