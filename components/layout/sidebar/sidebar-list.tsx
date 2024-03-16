'use client'

import { Menu } from 'lucide-react'
import requests from '@/lib/requests'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem from "./sidebar-item"
import { useState } from 'react'


const SidebarList = (
) => {
  const [open, setOpen] = useState(false)
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
          {Object.entries(requests).map(([key, {title,url}]) => (
            <div onClick={()=> setOpen(!open)}><SidebarItem key={key} title={title} href={url} /></div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList