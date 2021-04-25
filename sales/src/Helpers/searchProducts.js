import { useEffect, useState } from 'react'
import axiosForProducts from './axiosForProducts'

const SearchProducts = (query = '') => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axiosForProducts.get(`/product/search?q=${query}`)
      setProducts(data)
    }

    fetchProducts()
  }, [query])

  return products
}

export default SearchProducts