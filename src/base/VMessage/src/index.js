import Vue from 'vue'
import vmessageVue from 'base/VMessage/src/VMessage'

const defaults = {
  content: '嘻嘻',
  type: 'info',
  prefixCls: 'vmessage',
  duration: 2000
}

const MessageVueConstructor = Vue.extend(vmessageVue)

MessageVueConstructor.prototype.close = () => {
  console.log('close')
}

const messageBox = (options = {}) => {
  // 判断当前vue是否运行在服务器
  if (Vue.prototype.$isServer) return
  options = Object.assign({}, defaults, options)
  let parent = document.body
  let instance = new MessageVueConstructor({
    el: document.createElement('div'),
    data: options
  })
  // 将内容插入到body中去
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.show = true
    // setTimeout(() => {
    //   instance.close()
    // }, options.duration)
  })

  return instance
}

export default messageBox
