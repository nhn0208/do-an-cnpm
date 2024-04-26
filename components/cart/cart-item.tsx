'use client'
import { CartProps, ProductProps } from '@/lib/interface'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'
import { decreaseProductCart, deleteProductCart, increaseProductCart } from '@/app/api/cart/route'
import { fetchProductID } from '@/app/api/product/[productId]/route'

const CartItem = (cart : CartProps) => {
    const [cartProduct,setCartProduct] = useState<ProductProps>()
    const increaseCart = async (id:number | undefined) => {
        await increaseProductCart(id)
    }

    const decreaseCart = async (id:number | undefined) => {
        await decreaseProductCart(id)
    }

    const deleteCart = async (id: number | undefined) => {
        await deleteProductCart(id)
    }

    useEffect(()=>{
        const fetch = async (id_item: number) => {
            const data = await fetchProductID(id_item)
            setCartProduct(data)
        }
        fetch(cart.id_item)
        //console.log(cartProduct);
        
    },)
  return (
    <div className='flex items-center justify-between border-b border-slate-300 pb-2'>
        <div className='flex'>
            <Image src={cartProduct ?cartProduct.image : '/logo.png'} alt='' width={60} height={60} decoding='async' data-nimg='1' style={{width: "60px", height:'auto'}}/>
            <div>
                <span>{cart.name}</span><br/>
                <div className='inline-flex border-2 border-black space-x-1'>
                    <div 
                    className='border-r-2 border-black px-1 cursor-pointer'
                    onClick={()=>{
                        decreaseCart(cart.id_item_detail)
                    }}
                    >
                        &lt;
                    </div>
                    <p className='px-1'>{cart.quantity}</p>
                    <div 
                    className='border-l-2 border-black px-1 cursor-pointer'
                    onClick={()=>{
                        increaseCart(cart.id_item_detail)
                    }}
                    >
                        &gt;
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={()=> deleteCart(cart.id_item_detail)}>
            Xóa
        </Button>
    </div>
  )
}

export default CartItem