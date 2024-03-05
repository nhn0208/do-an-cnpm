import { ChevronRight } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem, { SidebarItemProps } from "./sidebar-item"

interface SidebarSubListProps {
    title:string;
    data: SidebarItemProps[]
}

const SidebarSubList = (
    { title,data } : SidebarSubListProps
) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2 hover:opacity-80'>
          {title}
          <ChevronRight width={16} height={16} className="hidden group-hover:block animate-in"/>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='pb-8'>
          <SheetTitle className='text-[20px]'>{title}</SheetTitle>
        </SheetHeader>
        <div className='p-6'>
            {/* Back to parent sidebar */}
            <div className="flex flex-col overflow-auto border-y-[2px] py-6">
              {data?.map(item => (
                <SidebarItem key={item.title} title={item.title} href={item.href} children={item.children} />
              ))}
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarSubList