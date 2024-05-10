'use client'

import { useState, useEffect} from 'react'
import {  useSearchParams } from 'next/navigation'


import { fetchProductData } from '@/app/api/product/product'
import { ProductProps } from '@/lib/interface'
import ProductCard from '@/components/product/product-card'
import PaginationComponent from '@/components/product/pagination-page'




const ProductPage = () => {
  const searchParmas =  useSearchParams();
  const searchBrand = searchParmas.get('id_brand');
  const page = searchParmas.get('p')
  
  
  const [ products, setProducts] = useState<ProductProps [] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const productData: [] = await fetchProductData(Number(searchBrand),Number(page))
      setProducts(productData)
    }
    fetchData()
    setLoading(false)
    return () => {
      
    }
  },[searchBrand,page]);

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    
      <div className='w-full'>
      <div className='flex justify-center w-full flex-wrap px-10'>
        { products ? products.map((product,index) => (
          <ProductCard key={index} id_item={product.id_item} title={product.name} image={product.image}/>
        )) : (
          <div>No product</div>
        )}
      </div>
      {searchBrand == null &&
      <div>
        <PaginationComponent/>
      </div>}
      </div>
  )
}
export default ProductPage