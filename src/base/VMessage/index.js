import vmessageBox from './src/index'
export default {
  install (Vue) {
    Vue.prototype.$vmessage = vmessageBox
  }
}
