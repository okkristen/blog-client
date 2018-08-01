<template>
  <div class="me-allct-body" v-title :data-title="categoryTagTitle" >
    <el-container class="me-allct-container">
      <el-main>
        <el-tabs v-model="activeName">
          <el-tab-pane label="文章分类" name="category">
            <ul class="me-allct-items">
              <li v-for="c in categorys" @click="view(c.id)" :key="c.id" class="me-allct-item">
                <div class="me-allct-content">
                  <a class="me-allct-info">
                    <img class="me-allct-img" :src="c.avatar"/>
                    <h4 class="me-allct-name">{{c.categoryname}}</h4>
                    <p class="me-allct-description">{{c.description}}</p>
                  </a>

                  <div class="me-allct-meta">
                    <span>{{c.articles}} 文章</span>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="标签" name="tag">
            <ul class="me-allct-items">
              <li v-for="t in tags" @click="view(t.id)" :key="t.id" class="me-allct-item">
                <div class="me-allct-content">
                  <a class="me-allct-info">
                    <img class="me-allct-img" :src="t.avatar"/>
                    <h4 class="me-allct-name">{{t.tagname}}</h4>
                  </a>

                  <div class="me-allct-meta">
                    <span>{{t.articles}} 文章</span>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import defaultAvatar from '@/assets/img/logo.png'
// import {getAllCategorysDetail} from '@/api/category'
// import {getAllTagsDetail} from '@/api/tag'
// import web from '@/components/app/config/website'
export default {
  name: 'BlogAllCategoryTag',
  created () {
    // this.getCategorys()
    // this.getTags()
  },
  data () {
    return {
      categorys: [
        {
          articles: 3,
          avatar: '/category/front.png',
          categoryname: '前端',
          description: '',
          id: 1
        },
        {
          articles: 3,
          avatar: '/category/front.png',
          categoryname: '前端',
          description: '',
          id: 11111
        },
        {
          articles: 3,
          avatar: '/category/front.png',
          categoryname: '前端',
          description: '',
          id: 11
        },
        {
          articles: 3,
          avatar: '/category/front.png',
          categoryname: '前端',
          description: '',
          id: 111
        }
      ],
      tags: [
        {
          articles: 0,
          avatar: '/tag/java.png',
          id: 1,
          tagname: 'Java'
        }
      ],
      currentActiveName: 'category'
    }
  },
  computed: {
    activeName: {
      get () {
        // this.currentActiveName = this.$route.params.type
        return this.currentActiveName
      },
      set (newValue) {
        this.currentActiveName = newValue
      }
    },
    categoryTagTitle () {
      if (this.currentActiveName === 'category') {
        return '文章分类 - For Fun'
      }
      console.info('dddd')
      return '标签 - For Fun'
    }
  },
  methods: {
    view (id) {
      this.$router.push({path: `/${this.currentActiveName}/${id}`})
    },
    getCategorys () {
      // let that = this
      // getAllCategorysDetail().then(data => {
      //   that.categorys = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '文章分类加载失败', showClose: true})
      //   }
      // })
    },
    getTags () {
      // let that = this
      // getAllTagsDetail().then(data => {
      //   that.tags = data.data
      // }).catch(error => {
      //   if (error !== 'error') {
      //     that.$message({type: 'error', message: '标签加载失败', showClose: true})
      //   }
      // })
    }
  }
}
</script>

<style>
  .me-allct-body {
    margin: 60px auto 140px;
  }

  .me-allct-container {
    width: 1000px;
  }

  .me-allct-items {
    padding-top: 2rem;
  }

  .me-allct-item {
    width: 25%;
    display: inline-block;
    margin-bottom: 2.4rem;
    padding: 0 .7rem;
    box-sizing: border-box;
  }

  .me-allct-content {
    display: inline-block;
    width: 100%;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    transition: border-color .3s;
    text-align: center;
    padding: 1.5rem 0;
  }

  .me-allct-info {
    cursor: pointer;
  }

  .me-allct-img {
    margin: -40px 0 10px;
    width: 60px;
    height: 60px;
    vertical-align: middle;

  }

  .me-allct-name {
    font-size: 21px;
    font-weight: 150;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
  }

  .me-allct-description {
    min-height: 50px;
    font-size: 13px;
    line-height: 25px;
  }

  .me-allct-meta {
    font-size: 12px;
    color: #969696;
  }
</style>
