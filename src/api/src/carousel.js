import axios from 'axios'
import { options } from './config'

export const CarouselApi = {
  getCarousel: () => {
    const url = '/api/carousel'
    return axios.get(url, Object.assign({}, options))
  },
  createCarousel: (data) => {
    const url = '/backen/carousel'
    return axios.post(url, data, Object.assign({}, options))
  },
  delCarousel: (data) => {
    const url = `/backen/carousel/${data.id}`
    return axios.delete(url, Object.assign({}, options))
  }
}
