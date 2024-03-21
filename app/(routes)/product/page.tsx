'use client'

import { useState, useEffect} from 'react'
import { fetchProductData } from '@/app/api/product/route'
import { ProductProps } from '@/lib/interface'
import ProductCard from '@/components/product/product-card'
import axios from 'axios'

const ProductPage = () => {
  const [ products, setProducts] = useState<ProductProps [] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    const fetchData = async () => {
      const productData: [] = await fetchProductData();
      setProducts(productData)
    }
    fetchData()
    setLoading(false)
    return () => {
      
    }
  },[]);

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='flex justify-center w-full flex-wrap px-10'>
      { products ? products.map((product,index) => (
        <ProductCard key={index} id_item={product.id_item} title={product.name} image={product.image} price={product.price}/>
      )) : null}
    </div>
  )
}
export default ProductPage