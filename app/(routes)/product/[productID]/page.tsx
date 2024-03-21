'use client'

import { useState, useEffect} from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { ProductProps } from "@/lib/interface"
import { fetchProductID } from "@/app/api/product/route"
import { Button } from "@/components/ui/button"

const ProductIDPage = () => {
  const [product, setProduct] = useState<ProductProps>();
  const [isSelected, setSelected] = useState<boolean>(false)
  const pathname = usePathname();

  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchProductID(Number(pathname.charAt(pathname.length -1)))
      setProduct(data)
    }
    fetchData()
    
  },[])
  
  if (!product) {
    return (
      <div>No product</div>
    )
  }
  

  return (
    <div className="w-full px-[100px] flex">
      <div className="w-1/2">
        <Image src={product?.image} alt='' width={696} height={696} decoding="async" data-nimg="1"/>
      </div>
      <div className=" p-10 font-bold w-1/2 space-y-4 text-lg text-slate-950 dark:text-white">
        <h1 className=" text-2xl mb-4">{product.name}</h1>
        <span className="text-xl text-red-600">{product.price} VND</span>
        <p className="text-sm">Thong tin san pham</p>
        <p>Thuong hieu: {product.brand}</p>
        <p>xuat xu: {product.origin}</p>
        <p>Kieu dang: {product.type}</p>
        <p>Mo ta: {product.description}</p>
        <div>
          <Button
          onClick={()=>setSelected(!isSelected)}
          className={cn([
            "dark:text-white dark:border-2  dark:hover:text-white dark:border-white",
            isSelected ? "bg-green-600 dark:bg-green-600" : ""
            ])}>
            {product.size}
          </Button>
        </div>

        
      </div>
    </div>
  )
}

export default ProductIDPage