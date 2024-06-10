'use client'

import { useState, useEffect } from "react"
import { InvoiceProps } from "@/lib/interface"
import { getAllInvoice } from "@/app/api/invoice/invoice"
import InvoiceList from "./invoice-list"

const InvoiceInAccount = () => {
  const [invoices, setInvoices] = useState<InvoiceProps[] | null>([])

  useEffect(()=>{
    const fetchInvoicesData = async () => {
      await getAllInvoice()
      .then(data => {
        setInvoices(data)
      })
    }
    fetchInvoicesData()
    console.log(invoices);
    
  },[])

  return (
    <div className='w-full p-20 flex flex-col items-center space-y-4'>
      {invoices && invoices.map((invoice,index)=>(
        <InvoiceList key={index}
          id_invoice={invoice.id_invoice}
        />
      ))}
    </div>
  )
}

export default InvoiceInAccount