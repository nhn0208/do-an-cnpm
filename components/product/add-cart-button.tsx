'use client'

import { Button } from '../ui/button'
import { addProductId } from '@/app/api/cart/route'

const AddCartButton = ({id_item_detail} : { id_item_detail : number} ) => {
    const addHandle = async () => {
        await addProductId(id_item_detail)
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