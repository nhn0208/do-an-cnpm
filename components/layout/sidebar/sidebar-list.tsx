import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem, { SidebarItemProps } from "./sidebar-item"

interface SidebarListProps {
    data : SidebarItemProps[]
}

const SidebarList = (
    { data } : SidebarListProps
) => {
  return (
    <Sheet>
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
          {data.map(item => (
            <SidebarItem key={item.title} title={item.title} href={item.href} children={ item.children } />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList