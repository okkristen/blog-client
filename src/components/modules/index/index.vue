<template>
  <div class="module-index ">
      <module-article-scroll-page></module-article-scroll-page>
  </div>
</template>

<script>
import $api from '$api/table/user'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import {
} from '$actions'
import { GET_TYPE } from '$getters'
import {
  SET_TYPE
} from '$mutations'
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
    ...mapActions([
    ]),
    ...mapMutations([
      SET_TYPE
    ])
  },
  computed: {
    ...mapGetters({
      type: GET_TYPE
    })

  },
  mounted () {
    let todo = $api.save({})
    console.log('测试', todo)
    // Vuex
    console.log('vuex', this.type)
    this.SET_TYPE('测试')
    console.log('vuex', this.type)
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
