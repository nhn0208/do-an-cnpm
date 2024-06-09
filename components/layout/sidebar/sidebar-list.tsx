'use client'

import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem from "./sidebar-item"
import { useEffect, useState } from 'react'
import { getAllBrand } from '@/app/api/brand/brand'
import { BrandProps } from '@/lib/interface'

const SidebarList = (
  
) => {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState<BrandProps[] | null>([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await getAllBrand();
      setList(response)
    }
    fetchData();
  },[])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className=' text-primary  border-primary border rounded-full p-2 hover:opacity-80'>
          <Menu width={20} height={20}/>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-black">
        <SheetHeader className='pb-8'>
          <SheetTitle className='text-[20px]'>Menu</SheetTitle>
        </SheetHeader>
        <div className="p-6 flex flex-col overflow-auto border-y-[2px] ">
         <div  onClick={()=> setOpen(!open)}> <SidebarItem id_brand={0} name='All' /></div>
          {list ? list.map((brand,index) => (
            <div key={index} onClick={()=> setOpen(!open)}><SidebarItem id_brand={brand.id_brand} name={brand.name} /></div>
          )) : null}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList