'use client'

import { useState, useEffect} from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { ProductProps } from "@/lib/interface"
import { fetchProductID } from "@/app/api/product/[productId]/route"
import { Button } from "@/components/ui/button"
import { formatToVND } from "@/lib/format"
import AddCartButton from "@/components/product/add-cart-button"

const ProductIDPage = () => {
  const [product, setProduct] = useState<ProductProps>();
  const [isSelectedSize, setSelectedSize] = useState<number>()
  //console.log(isSelectedSize);
  
  const [loading,setLoading] = useState<boolean>(false)
  const pathname = usePathname();
  const parts = pathname.split("/")
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchProductID(Number(parts[parts.length -1]))
      setProduct(data)
      setLoading(!loading)
    }
    fetchData()
    
  },[])

  if (!loading) {
    <div>Loading...</div>
  }
  
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
        
        <p className="text-sm">Thong tin san pham</p>
        <p>Thuong hieu: {product.id_brand}</p>
        <p>xuat xu: {product.id_origin}</p>
        <p>Kieu dang: {product.id_type}</p>
        <p>Mo ta: {product.description}</p>
        <div className="flex space-x-2">
          {product.sizes && product.sizes.map((size,index)=>(
            <div key={index}>
              <Button
              onClick={()=>setSelectedSize(size.id_item_detail)}
              className={cn([
                "dark:text-white dark:border-2  dark:hover:text-white dark:border-white dark:hover:bg-slate-950",
                isSelectedSize === size.id_item_detail && "bg-green-600 dark:bg-green-600"
                ])}>
                {size.id_size}
              </Button>
            </div>
          ))}
        </div>
        <div>
          <AddCartButton id_item_detail={isSelectedSize? isSelectedSize : 0} />
        </div>
      </div>
    </div>
  )
}

export default ProductIDPage