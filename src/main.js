import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入通用样式文件
import 'sass/index.sass'
// import store from './store' // 引入store

Vue.config.productionTip = false
Vue.use(ElementUI)

// 富文本插件
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
