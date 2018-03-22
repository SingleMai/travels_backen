import axios from 'axios'
import { options } from './config'

export const getOrdersBook = () => {
  const url = '/user/orders/book'
  return axios.get(url, Object.assign({}, options))
}

export const getOrdersUnaccept = () => {
  const url = '/user/orders/unaccept'
  return axios.get(url, Object.assign({}, options))
}

export const getOrdersConfirmed = () => {
  const url = '/user/orders/confirmed'
  return axios.get(url, Object.assign({}, options))
}

export const getOrdersFinish = () => {
  const url = '/user/orders/finish'
  return axios.get(url, Object.assign({}, options))
}

export const createOrders = data => {
  const url = '/orders'
  return axios.post(url, data, Object.assign({}, options))
}

export const payOrders = data => {
  const url = 'orders/pay'
  data.id = parseInt(data.id)
  return axios.put(url, data, Object.assign({}, options))
}

export const cancelOrders = data => {
  const url = '/orders/cancel'
  return axios.put(url, data, Object.assign({}, options))
}
