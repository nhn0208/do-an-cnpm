'use client'
import { getBrandById } from '@/app/api/brand/brand'
import  { useEffect, useState } from 'react'

const BrandProduct = ({id_brand} : {id_brand: number}) => {
  const [brand,setBrand] = useState<any>()

  useEffect(()=>{
    const fetch =  async () => {
      const data = await  getBrandById(id_brand)
      //console.log(data);
      
      setBrand(data)
    }
    fetch()
    //console.log(brand);
    
    
  },[])
  return (
    <p>Thương hiệu: {brand ? brand.name : ''}</p>
  )
}

export default BrandProduct