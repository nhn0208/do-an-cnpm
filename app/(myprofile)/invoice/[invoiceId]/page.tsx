'use client'

import { cancelInvoice, getAllItemInInvoice } from '@/app/api/invoice/invoice'
import InvoiceItem from '@/components/invoice/invoice-item'
import { Button } from '@/components/ui/button'
import { formatToVND } from '@/lib/format'
import { ItemInInvoiceProps} from '@/lib/interface'
import { cn } from '@/lib/utils'
import {  usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const InvoiceIdPage = () => {
    const pathname = usePathname()
    const router = useRouter()
    const parts = pathname.split("/")
    const [itemInvoice, setItemInvoice] = useState<ItemInInvoiceProps[]>([])
    const [infoInvoice, setInfoInvoice] = useState<any>([])

    const handleCancel = async (id_invoice:number) => {
      await cancelInvoice(id_invoice)
      .then(()=>{
        router.back()
      })
    }

    useEffect(()=>{
      const getItemInvoice = async ()=>{
        await getAllItemInInvoice(Number(parts[parts.length -1]))
        .then(data=>{
            //console.log(data);
          setItemInvoice(data.data);
          setInfoInvoice(data.info);
        })
        
      }
      getItemInvoice()
      
    },[])
  return (
    <div
     className='w-1/2 border-b border-primary flex flex-col items-center pt-2 dark:bg-slate-950 hover:cursor-pointer'>
        <div className='w-full flex items-center justify-between py-2 border-b border-slate-500'>
            <h2 className=' text-red-500'>Đơn hàng # {parts[parts.length -1]}</h2>
            <span className={cn(['uppercase', infoInvoice.name_status === "Chưa xác nhận" ? "text-orange-500" : 'text-green-500'])}>
                {infoInvoice.name_status}
            </span>
        </div>
        <div className='w-full py-2 border-b border-slate-500'>
            <h2>{infoInvoice.description}</h2>
            <h2>{infoInvoice.address}</h2>
        </div>
        <div className='w-full flex flex-col space-y-2 items-center'>
            { itemInvoice && itemInvoice.map((item,index)=>(
                <InvoiceItem key={index}
                id_item={item.id_item}
                size={item.size}
                quantity={item.quantity}
              />
            ))}
        </div>
        <span className='w-full py-1  text-slate-950 dark:text-white'>Tổng tiền hàng: {formatToVND(infoInvoice.item_fee | 0)}</span>
        <span className='w-full py-1  text-slate-950 dark:text-white'>Phí vận chuyển: {formatToVND(infoInvoice.ship_fee | 0)}</span>
        <span className='w-full py-1 font-bold text-red-600'>Thành tiền: {formatToVND(infoInvoice.total | 0)}</span>
        <Button 
        onClick={ ()=> handleCancel(infoInvoice.id_invoice)}
          disabled={infoInvoice.name_status !== "Chưa xác nhận"}
          variant={"secondary"}>
          Hủy đơn hàng
        </Button>
    </div>
  )
}

export default InvoiceIdPage