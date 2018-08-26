<template>
  <div class="me-view-body">
    <el-container class="me-view-container">
      <el-main>
        <div class="me-view-card">
          <h1 class="me-view-title">{{article.title}}</h1>
          <!-- <div class="me-view-author">
            <a class="">
              <img class="me-view-picture" :src="article.author.avatar" />
            </a>
            <div class="me-view-info">
              <span>{{article.author.nickname}}</span>
              <div class="me-view-meta">
                <span>{{article.createDate}}</span>
                <span>阅读   {{article.viewCounts}}</span>
                <span>评论   {{article.commentCounts}}</span>
              </div>
            </div>
            <el-button
              v-if="false"
              @click="editArticle()"
              style="position: absolute;left: 60%;"
              size="mini"
              round
              icon="el-icon-edit">编辑</el-button>
          </div> -->
          <div class="me-view-content" v-html="article.body.content">
            <!-- <plugin-markdown-editor :editor=article.editor>
            </plugin-markdown-editor> -->
          </div>
          <div class="me-view-end">
            <el-alert
              title="文章End..."
              type="success"
              center
              :closable="false">
            </el-alert>
          </div>
          <div class="me-view-tag">
            标签：
            <!--<el-tag v-for="t in article.tags" :key="t.id" class="me-view-tag-item" size="mini" type="success">{{t.tagname}}</el-tag>-->
            <el-button @click="tagOrCategory('tag', t.id)" size="mini" type="primary" v-for="t in article.tags" :key="t.id" round plain>{{t.tagname}}</el-button>
          </div>

          <div class="me-view-tag">
            文章分类：
            <!--<span style="font-weight: 600">{{article.category.categoryname}}</span>-->
            <el-button @click="tagOrCategory('category', article.category.id)" size="mini" type="primary" round plain>{{article.category.categoryname}}</el-button>
          </div>

          <!-- <div class="me-view-comment">
            <div class="me-view-comment-write">
              <el-row :gutter="20">
                <el-col :span="2">
                  <a class="">
                    <img class="me-view-picture" :src="avatar" />
                  </a>
                </el-col>
                <el-col :span="22">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2}"
                    placeholder="你的评论..."
                    class="me-view-comment-text"
                    v-model="comment.content"
                    resize="none">
                  </el-input>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="2" :offset="22">
                  <el-button type="text" @click="publishComment()">评论</el-button>
                </el-col>
              </el-row>
            </div>

            <div class="me-view-comment-title">
              <span>{{article.commentCounts}} 条评论</span>
            </div>

            <module-comment-item
              v-for="(c,index) in comments"
              :comment="c"
              :articleId="article.id"
              :index="index"
              :rootCommentCounts="comments.length"
              @commentCountsIncrement="commentCountsIncrement"
              :key="c.id">
            </module-comment-item>

          </div> -->

        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
// import MarkdownEditor from '@/components/markdown/MarkdownEditor'
// import CommmentItem from '@/components/comment/CommentItem'
// import {viewArticle} from '@//api/api/article'
// import {getCommentsByArticle, publishComment} from '@/api/comment'
import defaultAvatar from '@/assets/img/default_avatar.png'
export default {
  name: 'BlogView',
  beforeMount () {
    // this.$options.components['markdown-editor2'] = () => import('@/components/markdown/MarkdownEditor');
  },
  mounted () {
    // this.getArticle()
    this.article = {
      author: {
        avatar: '/user/admin.png',
        id: 1,
        nickname: '杨思静'
      },
      body: {
        content: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
        id: 21
      },
      category: {
        avatar: '/category/front.png',
        categoryname: '前端',
        description: '',
        id: 1
      },
      commentCounts: 0,
      createDate: '2018.02.01 14:47',
      id: 10,
      summary: '本节将介绍如何在项目中使用 Element。',
      tags: [{
        id: 7,
        tagname: 'Vue'
      }],
      title: 'Element相关',
      viewCounts: 17,
      weight: 0
    }
  },
  watch: {
    '$route': 'getArticle'
  },
  data () {
    return {
      article: {
        id: '',
        title: '',
        commentCounts: 0,
        viewCounts: 0,
        summary: '',
        author: {},
        tags: [],
        category: {},
        createDate: '',
        editor: {
          value: '',
          toolbarsFlag: false,
          subfield: false,
          defaultOpen: 'preview'
        }
      },
      comments: [],
      comment: {
        article: {},
        content: ''
      }
    }
  },
  computed: {
    avatar () {
      // let avatar = this.$store.state.avatar
      // if (avatar.length > 0) {
      //   return avatar
      // } else {
      //   return defaultAvatar
      // }
      return defaultAvatar
    },
    title () {
      return `${this.article.title} - 文章 - For Fun`
    }
  },
  methods: {
    tagOrCategory (type, id) {
      this.$router.push({path: `/${type}/${id}`})
    },
    editArticle () {
      this.$router.push({path: `/write/${this.article.id}`})
    },
    getArticle () {
      // let that = this
      // viewArticle(that.$route.params.id).then(data => {
      //   Object.assign(that.article, data.data)
      //   that.article.editor.value = data.data.body.content
      //   that.getCommentsByArticle()
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '文章加载失败', showClose: true})
      //   }
      // })
    },
    publishComment () {
      // let that = this
      // if (!that.comment.content) {
      //   return;
      // }
      // that.comment.article.id = that.article.id
      // publishComment(that.comment).then(data => {
      //   that.$message({type: 'success', message: '评论成功', showClose: true})
      //   that.comments.unshift(data.data)
      //   that.commentCountsIncrement()
      //   that.comment.content = ''
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '评论失败', showClose: true})
      //   }
      // })
    },
    getCommentsByArticle () {
      // let that = this
      // getCommentsByArticle(that.article.id).then(data => {
      //   that.comments = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '评论加载失败', showClose: true})
      //   }
      // })
    },
    commentCountsIncrement () {
      this.article.commentCounts += 1
    }
  },
  components: {
    // 'markdown-editor': MarkdownEditor,
    // CommmentItem
    'module-comment-item': () => import('./module/CommentItem.vue')
  }
}
</script>

<style>
  /* .me-view-body {
    margin: 100px auto 140px;
  } */

  .me-view-container {
    width: 700px;
  }

  .el-main {
    overflow: hidden;
  }

  .me-view-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }

  .me-view-author {
    /*margin: 30px 0;*/
    margin-top: 30px;
    vertical-align: middle;
  }

  .me-view-picture {
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #5fb878;
  }

  .me-view-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }

  .me-view-meta {
    font-size: 12px;
    color: #969696;
  }

  .me-view-end {
    margin-top: 20px;
  }

  .me-view-tag {
    margin-top: 20px;
    padding-left: 6px;
    /* border-left: 4px solid #c5cac3; */
  }

  .me-view-tag-item {
    margin: 0 4px;
  }

  .me-view-comment {
    margin-top: 60px;
  }

  .me-view-comment-title {
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
  }

  .me-view-comment-write {
    margin-top: 20px;
  }

  .me-view-comment-text {
    font-size: 16px;
  }

  .v-show-content {
    padding: 8px 25px 15px 0px !important;
  }

  .v-note-wrapper .v-note-panel {
    box-shadow: none !important;
  }

  .v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    background: #fff !important;
  }
</style>
