'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

import { Button } from './ui/button'
import { CartProps } from '@/lib/interface'
import { decreaseProductCart, deleteProductCart, fetchCart, increaseProductCart } from '@/app/api/cart/route'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const CartButton = () => {
    const [cartList,setCartList] = useState<CartProps[] | null>([]);

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
        const fetchData = async ()=>{
            const data = await fetchCart()
            setCartList(data)
        }
        fetchData()
    })
  return (
    <Sheet>
        <SheetTrigger>
            <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-slate-950
             dark:border-white border rounded-full px-2 py-[6px] hover:opacity-80">
                <ShoppingBag width={20} height={24} />
            </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
            <SheetHeader className="pb-8">
                <SheetTitle className="text-[20px]">Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className='border-t py-2 space-y-2'>
                {cartList ? cartList.map((cart,index)=>(
                    <div key={index} className='flex items-center justify-between border-b border-slate-300 pb-2'>
                        <div className='flex'>
                            <Image src={cart.image} alt='' width={60} height={60} encoding='async' data-nimg='1' style={{width: "60px", height:'auto'}}/>
                            <div>
                                <span>{cart.name}</span><br/>
                                <div className='inline-flex border-2 border-black space-x-1'>
                                    <div 
                                    className='border-r-2 border-black px-1 cursor-pointer'
                                    onClick={()=>{
                                        decreaseCart(cart.id_item)
                                    }}
                                    >
                                        &lt;
                                    </div>
                                    <p className='px-1'>{cart.quantity}</p>
                                    <div 
                                    className='border-l-2 border-black px-1 cursor-pointer'
                                    onClick={()=>{
                                        increaseCart(cart.id_item)
                                    }}
                                    >
                                        &gt;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button onClick={()=> deleteCart(cart.id_item)}>
                            Xóa
                        </Button>
                    </div>
                )) : null}
            </div>
        </SheetContent>
        
    </Sheet>
  )
}

export default CartButton