import { fetchProductID } from "@/app/api/product/[productId]/productId"
import { formatToVND } from "@/lib/format"
import { ProductProps } from "@/lib/interface"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const InvoiceItem = (
  { size,quantity,id_item} :  
  { size:number, quantity:number, id_item: number}) => {
    const [product,setProduct] = useState<ProductProps>()
    useEffect(()=>{
      const fdata = async () => {
        if (id_item ){
          await fetchProductID(id_item)
          .then(data => {
            setProduct(data)
          })
        }
      }
      fdata()
    },[])
  return (
    <Link href={`/product/${id_item}`}
     className='w-full flex justify-between items-center border-b border-slate-500 py-2'>
      <div className='flex space-x-2'>
        <Image src={product?.image || '/google.png'} alt='' width={80} height={100} priority style={{width: '80px', height: "auto"}} />
        <div>
          <h3 className='font-bold'>{product?.name}</h3>
          <h4>Size {size}</h4>
          <h4>{formatToVND(product?.sizes && product.sizes[0].price || 0)}</h4>
        </div>
      </div>
      <h3 className='text-red-600 text-lg'>x{quantity}</h3>
    </Link>
  )
}

export default InvoiceItem