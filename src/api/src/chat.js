import axios from 'axios'
import { options } from './config'

export const getFriends = data => {
  const url = '/friend'
  return axios.get(url, Object.assign({}, options))
}

export const addFriend = data => {
  const url = '/friend'
  return axios.post(url, data, Object.assign({}, options))
}

export const createMsg = data => {
  const url = '/chat'
  return axios.post(url, data, Object.assign({}, options))
}

export const getOneChatByOne = data => {
  const url = '/chat'
  return axios.get(url, Object.assign({}, options, { params: data }))
}
