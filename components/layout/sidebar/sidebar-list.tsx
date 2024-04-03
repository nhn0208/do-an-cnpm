'use client'

import { Menu } from 'lucide-react'
import { fetchBrand } from '@/app/api/product/filter/route'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem from "./sidebar-item"
import { Key, useEffect, useState } from 'react'

interface SidebarProps {
  brand : string
}

const SidebarList = (
  
) => {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState<SidebarProps[] | null>([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetchBrand();
      setList(response)
    }
    fetchData();
  },[])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className='bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-slate-950 dark:border-white border rounded-full p-2 hover:opacity-80'>
          <Menu width={20} height={20}/>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-black">
        <SheetHeader className='pb-8'>
          <SheetTitle className='text-[20px]'>Menu</SheetTitle>
        </SheetHeader>
        <div className="p-6 flex flex-col overflow-auto border-y-[2px] ">
         <div  onClick={()=> setOpen(!open)}> <SidebarItem brand='All' /></div>
          {list ? list.map((brand,index) => (
            <div key={index} onClick={()=> setOpen(!open)}><SidebarItem  brand={brand.brand} /></div>
          )) : null}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList