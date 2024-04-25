'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { addProductID } from '@/app/api/cart/route'

const AddCartButton = ({ id } : { id : string}) => {
    const [message, setMessage] = useState("");
    const addHandle = async () => {
        await addProductID(parseInt(id))
    }
  return (
    <div>
        <Button
        className='dark:hover:bg-slate-950 dark:text-white border-2 dark:border-white'
      onClick={() => {
        addHandle()
      }}
    >
      Thêm vào giỏ hàng
    </Button>
    </div>
  )
}

export default AddCartButton