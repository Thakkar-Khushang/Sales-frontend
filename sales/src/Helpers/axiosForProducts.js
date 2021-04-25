import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
})

const axiosForProducts = axios.create({
  adapter: cache.adapter, // we are using this cache adapter to improve performance
  baseURL: 'https://iste-sales.azurewebsites.net/',
})

axiosForProducts.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default axiosForProducts