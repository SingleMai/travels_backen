import axios from 'axios'
import router from '../router'
import * as user from './src/user'
import * as servers from './src/servers'
import * as travels from './src/travels'

export const UserApi = user
export const ServersApi = servers
export const TravelsApi = travels
export { CarouselApi } from './src/carousel'

// 拦截request，如果有token字段，则添加token到header
axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  const data = response.data

  // 根据返回的code值来做不同的处理（和后端约定）
  switch (data.code) {
    case 1:
      // 这一步保证数据返回，如果没有return则会走接下来的代码，不是未登录就是报错
      return data.data

    default:
  }
  // 若不是正确的返回code，就抛出错误
  const err = new Error(data.message)

  err.data = data
  err.response = response

  throw err
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  const result = {}
  if (err && err.response) {
    switch (err.response.data.code) {
      case -1:
        result.message = '参数为空或者非法'
        break

      case -2:
        result.message = '新增内容已存在'
        break

      case -4:
        result.message = '该优先级已被使用'
        break

      case -5:
        result.message = '密码错误'
        break

      case -6:
        result.message = '邮箱错误或不存在'
        break

      case -7:
        result.message = '身份验证失败，token已过期'
        // 身份认证失败则回退到登录页面
        window.localStorage.removeItem('token')
        router.replace({
          path: '/login'
        })
        break

      case -8:
        result.message = 'bot配置已存在,请手动修改bot管理中的配置内容'
        break

      case -9:
        result.message = '该用户权限不足'
        break

      case -10:
        result.message = '文件不存在'
        break

      case -11:
        result.message = '文件类型格式错误'
        break

      case -12:
        result.message = '更新文件出错'
        break

      case -13:
        result.message = '文件内容格式出错'
        break

      case -14:
        result.message = '想更新的值是唯一且被使用.请检查'
        break

      case -15:
        result.message = '该项内容正在被其他内容引用，请取消引用后删除'
        break

      case -4000:
        result.message = '后台服务出错'
        break

      default: result.message = 'Interval Server Error'
    }
  }
  return Promise.reject(result)
})
