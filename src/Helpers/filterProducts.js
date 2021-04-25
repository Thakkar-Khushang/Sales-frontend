import { useEffect, useState } from 'react'
import axiosForProducts from './axiosForProducts'

const FilterProducts = (filter = '') => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axiosForProducts.get(`/product/filter?f=${filter}`)
      setProducts(data)
    }

    fetchProducts()
  }, [filter])

  return products
}

export default FilterProducts