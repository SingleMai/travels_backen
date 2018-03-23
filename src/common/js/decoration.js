export const noConcurrent = _noConcurrentTplt.bind(null, { mutexStore: '_noConCurrentLocks' })

function _noConcurrentTplt ({ namespace = {}, mutexStore = '_noConCurrentLocks', mutexId }, target, funcName, descriptor) {
  namespace[mutexStore] = namespace[mutexStore] || {}
  mutexId = mutexId || funcName
  let oriFunc = descriptor.value
  descriptor.value = function () {
    if (namespace[mutexStore][mutexId]) { // 上一次操作尚未结束，则无视本次调用
      return
    }
    namespace[mutexStore][mutexId] = true // 操作开始
    let res = oriFunc.apply(this, arguments)
    if (res instanceof Promise) {
      res.then(() => {
        namespace[mutexStore][mutexId] = false
      }).catch((e) => {
        namespace[mutexStore][mutexId] = false
        console.error(funcName, e)
      })
    } else {
      console.error('noConcurrent decorator shall be used with async function, yet got sync usage:', funcName)
      namespace[mutexStore][mutexId] = false
    }
    return res
  }
}
