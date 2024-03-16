'use client'

import { useState, useEffect} from 'react'
import { fetchProductData } from '@/app/api/product/route'
import ProductCard from '@/components/product/product-card'

const ProductPage = () => {
  const [ products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        
          const productData: [] = await fetchProductData();
          
          
          setProducts(Object.values(productData));
         
          
      } catch (error) {
        // handle error
      } finally {
        // handle finally
        setLoading(false);
      }
    }
    fetchData();
    
    return () => {
      
    }
  },[]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (products.length === 0) {
    <div>No product...</div>
  }
  return (
    <div className='flex justify-center w-full flex-wrap px-10'>
      { products.map((product,index) => (
        <ProductCard key={index} id={product.id} title={product.title} thumbnail={product.thumbnail} images={product.images} />
      ))}
    </div>
  )
}
export default ProductPage