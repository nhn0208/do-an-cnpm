'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'

import { CartProps } from '@/lib/interface'
import {fetchCart} from '@/app/api/cart/cart'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import CheckoutButton from '@/components/payment/checkout-button'
import CartItem from './cart-item'
import { formatToVND } from '@/lib/format'

const CartButton = () => {
    const [cartList,setCartList] = useState<CartProps[] | null>([]);
    const [openSheet,setOpenSheet] = useState<boolean>(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetchCart()
            setCartList(data)
        }
        fetchData()
    })
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger>
            <div 
            className=" text-primary  border-primary border rounded-full px-2 py-[6px] hover:opacity-80">
                <ShoppingBag width={20} height={24} />
            </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
            <SheetHeader className="pb-8">
                <SheetTitle className="text-[20px]">Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className='border-t py-2 space-y-2'>
            {cartList ? cartList.map((cart,index)=>(
                    <div key={index}>
                        <CartItem name={cart.name} 
                        id_item_detail={cart.id_item_detail} 
                        id_item={cart.id_item} 
                        size={cart.size}
                        quantity={cart.quantity}
                        price={cart.price} />
                    </div>
                )) : null}
            </div>
            <div className='w-full flex justify-between'>
                <p>Tạm tính</p>
                <p>{formatToVND(cartList ? cartList?.reduce(((total,num)=> { return total + (num.price||0)}),0) : 0)}</p>
            </div>
            <SheetFooter>
                <div onClick={()=> setOpenSheet(!openSheet)}><CheckoutButton/></div>
            </SheetFooter>
        </SheetContent>
        
    </Sheet>
  )
}

export default CartButton