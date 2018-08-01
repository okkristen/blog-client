/**
 * 注册全局组件
 */
import Vue from 'vue'
// 插件
import PluginScrollPage from './plugins/scrollPage.vue'
import PluginMarkdownEditor from './plugins/MarkdownEditor.vue'
Vue.component(PluginMarkdownEditor.name, PluginMarkdownEditor)
Vue.component(PluginScrollPage.name, PluginScrollPage)
