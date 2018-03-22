import axios from 'axios'
import { options } from './config'

export const getToken = data => {
  const url = '/token'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const getList = data => {
  const url = '/users'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const login = data => {
  const url = '/login'
  return axios.post(url, data, Object.assign({}, options))
}

export const updateUsersInfo = data => {
  const url = '/users'
  return axios.put(url, data, Object.assign({}, options))
}

export const getUsersInfo = data => {
  const url = '/user'
  return axios.get(url, Object.assign({}, options, { params: data }))
}
