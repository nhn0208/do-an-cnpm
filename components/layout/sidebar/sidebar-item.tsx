'use client'

import Link from "next/link";
import SidebarSubList from "./sidebar-sub-list";
import { useRouter, useSearchParams } from "next/navigation";

// interface ItemProps {
//   title: string;
//   href: string;
//   chilren?: ItemProps[]
// }

export interface SidebarItemProps {
    brand: string
}

const SidebarItem = ({brand}:SidebarItemProps) => {
  
  return (
    <div className="pb-8">
      <div className="lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2">
        <Link href={`http://localhost:3000/product?brand=${brand}`} className="text-slate-950 dark:text-white hover:opacity-80">{brand}</Link>         
      </div>
    </div>
    
  )
}

export default SidebarItem