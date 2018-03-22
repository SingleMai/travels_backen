import axios from 'axios'
import { options } from './config'

<<<<<<< HEAD
export const getTravels = data => {
  const url = '/travels'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const getTravelsByUser = data => {
  const url = '/travel/user'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const createTravels = (data) => {
  const url = '/travels'
  return axios.post(url, data, Object.assign({}, options))
}

export const createComment = (data) => {
  const url = '/travels/comment'
  return axios.post(url, data, Object.assign({}, options))
}

export const createLikes = (data) => {
  const url = '/travels/likes'
  return axios.post(url, data, Object.assign({}, options))
=======
export const getTravels = (data) => {
  const url = '/api/travels'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const getDetail = (data) => {
  const url = '/backen/user'
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
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
}
