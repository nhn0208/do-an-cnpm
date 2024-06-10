'use client'

import { CartProps } from '@/lib/interface';
import { useEffect, useState } from 'react'
import { fetchCart } from "@/app/api/cart/cart";
import CartItem from './cart-item';
import CheckoutButton from '../payment/checkout-button';

const CartInAccount = () => {
  const [cartList,setCartList] = useState<CartProps[] | null>([]);
  useEffect(()=> {
    const fetchCartData = async ()=>{
      const data = await fetchCart()
      setCartList(data)
    }
    fetchCartData()
  })
  return (
    <div className="w-full p-20 flex flex-col space-y-4">
        <div className="w-full flex flex-col items-center">
          {cartList && cartList.map((cart,index)=>(
                      <div key={index} className="w-1/2">
                          <CartItem name={cart.name} 
                          id_item_detail={cart.id_item_detail} 
                          id_item={cart.id_item} 
                          size={cart.size}
                          quantity={cart.quantity}
                          price={cart.price} />
                      </div>
                  ))}
        </div>
        <div className="w-full flex justify-end pr-[300px]"><CheckoutButton/></div>
      </div>
  )
}

export default CartInAccount