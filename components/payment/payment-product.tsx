import { fetchProductID } from "@/app/api/product/[productId]/productId"
import { formatToVND } from "@/lib/format"
import { CartProps, ProductProps } from "@/lib/interface"
import Image from "next/image"
import { useEffect, useState } from "react"

const PaymentProduct = (cart : CartProps) => {
    const [cartProduct,setCartProduct] = useState<ProductProps>()

    useEffect(()=>{
        const fetch = async (id_item: number) => {
            const data = await fetchProductID(id_item)
            setCartProduct(data)
        }
        fetch(cart.id_item)
        //console.log(cartProduct);
        
    },[])
  return (
    <div className='w-full flex items-center justify-between border-b border-slate-300 py-2'>
      <div className='w-full flex'>
        <div className="relative rounded-lg border border-black">
            <Image src={cartProduct?.image || '/logo.png'} alt='' 
                className="rounded-lg"
                width={60} height={60} decoding='async' data-nimg='1' 
                style={{width: "60px", height:'auto'}}/>
            <div className="absolute top-[-8px] right-[-8px] h-5 w-5 rounded-full bg-gray-500 text-center text-sm">{cart.quantity}</div>   
        </div>
        <div className="pl-4 w-full flex justify-between">
          <div>
              <span>{cart.name}</span><br/>
              <h3>Size {cart.size}</h3>
          </div>
          <h3>{formatToVND(cart.price)}</h3>
        </div>
      </div>
    </div>
  )
}

export default PaymentProduct