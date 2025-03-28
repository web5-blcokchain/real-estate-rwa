import { TokenHeaderName } from '@/constants/setting'
import axios from 'axios'
// const apiHost = import.meta.env.VITE_API_HOST;

// axios.defaults.baseURL = apiHost;

interface responseDataParams {
  code?: number
  data?: any
  error?: any
}

axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('privy:token')?.replace(/"/g, '') || localStorage.getItem(TokenHeaderName)
    const type = localStorage.getItem('privy:token') ? 2 : 1
    if (token) {
      config.headers.Authorization = token
    }
    config.headers.server = true
    config.headers.type = type
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((res: responseDataParams) => {
  return res.data
})

const apiClient = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  patch: axios.patch
}

export default apiClient

export interface PageParams {
  pageCount: number
  pageId: number
}

export interface PageResponse {
  pageCount: number
  pageId: number
  platformId: number
  serverTime: number
  totalCount: number
}

export type ListResponse<T> = {
  list: Array<T>
} & PageResponse
