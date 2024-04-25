'use client'

import { decreaseProductCart, deleteProductCart, fetchCart, increaseProductCart } from '@/app/api/cart/route';
import { Button } from '@/components/ui/button';
import { CartProps } from '@/lib/interface';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Payment = () => {
    const [itemSelected,setItemSelected] = useState<string>("order");
  return (
    <div className='w-full flex justify-center py-10 space-x-4'>
        <h1 className={cn([itemSelected === "order" ? "text-blue-600" : " text-gray-500","cursor-pointer"])} onClick={()=>setItemSelected("order")}>Kiểm tra đơn hàng</h1>
        <h1 className={cn([itemSelected === "infor" ? "text-blue-600" : " text-gray-500",'cursor-pointer'])} onClick={()=>setItemSelected("infor")}>Thông tin người nhận</h1>
        <h1 className={cn([itemSelected === "payment" ? "text-blue-600" : " text-gray-500",'cursor-pointer'])} onClick={()=>setItemSelected("payment")}>Phương thức thanh toán</h1>
    </div>
  )
}

export default Payment