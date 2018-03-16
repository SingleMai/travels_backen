import axios from 'axios'
import { options } from './config'

export const getUsers = () => {
  const url = '/users'
  return axios.get(url, Object.assign({}, options, { }))
}

export const getDetail = (data) => {
  const url = '/user'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const deleteUser = (id) => {
  const url = `/user`
  const data = {
    id
  }
  return axios.delete(url, Object.assign({}, options, { data }))
}

export const updateUser = (data) => {
  const url = `/user`
  if (data.phone) {
    data.phone = parseInt(data.phone)
  }
  return axios.put(url, data, Object.assign({}, options, { }))
}

export const createUser = (data) => {
  const url = `/user`
  return axios.post(url, data, Object.assign({}, options, { }))
}
