import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import Mint from 'mint-ui'
import store from './store' // 引入store
import 'js/aliFont.js' // 阿里图标
import 'mint-ui/lib/style.css'
// 引入通用样式文件
import 'sass/index.sass'
import 'sass/mint.sass'
Vue.config.productionTip = false

Vue.use(Mint)
=======
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入通用样式文件
import 'sass/index.sass'
// import store from './store' // 引入store

Vue.config.productionTip = false
Vue.use(ElementUI)

>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
// 富文本插件
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  store,
=======
  // store,
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
  render: h => h(App)
})
