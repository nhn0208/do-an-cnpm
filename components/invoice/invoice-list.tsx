'use client'

import { useState, useEffect } from 'react'
import { ItemInInvoiceProps } from '@/lib/interface'
import { getAllItemInInvoice } from '@/app/api/invoice/invoice'
import { formatToVND } from '@/lib/format'
import Link from 'next/link'
import InvoiceItem from './invoice-item'
import { cn } from '@/lib/utils'

const InvoiceList = ({id_invoice}:{id_invoice:number}) => {
    const [itemInvoice, setItemInvoice] = useState<ItemInInvoiceProps[]>([])
    const [infoInvoice, setInfoInvoice] = useState<any>()

    useEffect(()=>{
      const fdata = async ()=>{
        await getAllItemInInvoice(id_invoice)
        .then( data=>{
          setItemInvoice(data.data);
          setInfoInvoice(data.info);
        })
        
      }
      fdata()
      console.log(itemInvoice);
      
    },[])
  return (
    <Link
      href={`/invoice/${infoInvoice?.id_invoice}`}
     className='w-1/2 border-b border-primary flex flex-col items-center pt-8 dark:bg-slate-950 hover:cursor-pointer'>
        <div className='w-full flex items-center justify-between'>
          <h2 className=' text-red-500'>Đơn hàng # {infoInvoice?.id_invoice}</h2>
          <span className={cn(['uppercase', infoInvoice?.name_status === "Chưa xác nhận" ? "text-orange-500" : 'text-green-500'])}>
            {infoInvoice?.name_status}
          </span>
        </div>
        { itemInvoice[0]?.id_item &&
         <InvoiceItem
         id_item={itemInvoice[0]?.id_item}
          size={itemInvoice[0]?.size}
          quantity={itemInvoice[0]?.quantity}
        />}
        <div className='w-full text-sm text-slate-500 py-1 border-b border-slate-500 text-center'>Xem thêm sản phẩm</div>
        
        <span className='w-full py-1 text-right text-red-500'>Thành tiền: {formatToVND(infoInvoice?.total)}</span>
    </Link>
  )
}

export default InvoiceList