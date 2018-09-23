<template>
  <mavon-editor
    class="me-editor"
    ref="editor"
    v-model="editor.value"
    @imgAdd="imgAdd"
    :toolbars="toolbars"
    @htmlCode="htmlCode"
    :ishljs ="ishljs"
    v-bind="editor">
  </mavon-editor>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import {upload} from '@/api/upload'
export default {
  name: 'plugin-markdown-editor',
  props: {
    editor: Object,
    // 代码高亮
    ishljs: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$set(this.editor, 'ref', this.$refs.editor)
  },
  methods: {
    imgAdd (filename, $file) {
      // let that = this
      let servicePath = '服务器地址'
      let formdata = new FormData()
      formdata.append('image', $file)
      let config = {
        headers: {'Content-Type': 'multipart/form-data'},
        emulateJSON: true
      }
      this.$http.post(servicePath + 'uplode/userHead', formdata, config).then(function (response) {
        if (response.body.message) {
          this.$refs.editor.$img2Url(filename, response.body.data) // 更改图片内文章上传地址
        } else {
        }
      }, function (response) {
        this.$message.error('抱歉!图片上传失败!请来联系管理员')
      })
      // upload(formdata).then(data => {
      //   // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
      //   if (data.code == 0) {
      //     that.$refs.md.$img2Url(pos, data.data.url);
      //   } else {
      //     that.$message({message: data.msg, type: 'error', showClose: true})
      //   }
      // }).catch(err => {
      //   that.$message({message: err, type: 'error', showClose: true});
      // })
    },
    htmlCode (htmlcode, code) {
      console.log('code', htmlcode, code)
    }
  },
  computed: {
    toolbars () {
      return {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  components: {
    mavonEditor
  }
}
</script>
<style scoped>
  .me-editor {
    z-index: 6 !important;
  }

  .v-note-wrapper.fullscreen {
    top: 60px !important
  }
</style>
