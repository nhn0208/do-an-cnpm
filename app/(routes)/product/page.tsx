'use client'

import { useState, useEffect} from 'react'
import {  useSearchParams } from 'next/navigation'


import { fetchProductData } from '@/app/api/product/route'
import { ProductProps } from '@/lib/interface'
import ProductCard from '@/components/product/product-card'
import FilterBar from '@/components/product/filter-bar'



const ProductPage = () => {
  const searchParmas =  useSearchParams();
  const searchBrand = searchParmas.get('id_brand');
  const searchType = searchParmas.get('id_type');
  const searchOrigin = searchParmas.get('id_origin');
  const searchMaterial = searchParmas.get('id_material');
  
  const [ products, setProducts] = useState<ProductProps [] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const productData: [] = await fetchProductData({id_brand: Number(searchBrand) ,id_type: Number(searchType)})
      setProducts(productData)
    }
    fetchData()
    setLoading(false)
    return () => {
      
    }
  },[searchBrand,searchType]);

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    
      <div className='w-full'>
        <FilterBar searchBrand={searchBrand} searchType={searchType}/>
      <div className='flex justify-center w-full flex-wrap px-10'>
        { products ? products.map((product,index) => (
          <ProductCard key={index} id_item={product.id_item} title={product.name} image={product.image}/>
        )) : (
          <div>No product</div>
        )}
      </div>
      </div>
  )
}
export default ProductPage