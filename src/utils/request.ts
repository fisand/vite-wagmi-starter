import axios from 'axios'

export const http = axios.create({
  baseURL: '/',
})

http.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)
http.interceptors.response.use(
  ({ data }) => {
    if (data.error) {
      throw new Error(data.error)
    }
    return data
  },
  ({ response }) => {
    if (!(response && response.data && response.data.error)) {
      console.error(response)
      throw new Error('Network Error')
    }
    throw new Error(response.data.error)
  },
)

export const post = http.post as <T>(...rest: Parameters<typeof http.post>) => Promise<T>
export const get = http.get as <T>(...rest: Parameters<typeof http.get>) => Promise<T>
export const deleteApi = http.delete as <T>(...rest: Parameters<typeof http.delete>) => Promise<T>
