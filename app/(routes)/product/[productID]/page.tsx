'use client'

import { useState, useEffect } from "react"

import { ProductProps } from "@/lib/interface"
import { fetchProductID } from "@/app/api/product/[productID]/route"

const ProductIDPage = ({params}:{params: {productID: string}}) => {
  const [product, setProduct] = useState<any>();

  useEffect(()=>{
    const fetchProductData = async () => {
      try {
        const data = await fetchProductID(params.productID);

        setProduct(data);
      }catch (error){

      }
    }

    fetchProductData();
  },[])
  return (
    <div className="w-full">
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductIDPage