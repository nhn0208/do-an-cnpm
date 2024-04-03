import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

import { fetchType } from "@/app/api/product/filter/route"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from 'lucide-react'

interface TypeProps {
    type : string
}

const FilterBar = ( 
    {searchBrand, searchType} : {searchBrand: string | null, searchType : string | null}
    ) => {
    const router = useRouter()
    const pathname= usePathname();
    const [value, setValue] = useState(searchType === null ? "" : searchType)
    const [open, setOpen] = useState(false)
    const [typeList,setTypeList] = useState<TypeProps[] | []>([])

    useEffect(()=>{
        const fetchData = async () => {
            const data : [] = await fetchType();
            setTypeList(data)
        }
        fetchData();
    },[])

    useEffect(()=> {
        if (value== '') {
            router.push(`${pathname}?brand=${searchBrand}`)
        }else {
            router.push(`${pathname}?brand=${searchBrand}&type=${value}`)
        }
    },[value])
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {typeList.find((type) => type.type === searchType)?.type === searchType
              ? typeList.find((type) => type.type === searchType)?.type
              : "Select type..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 h-[255px] overflow-y-scroll">
              {typeList ? typeList.map((type,index) => (
                <div className='flex items-center pl-2 py-2'
                  key={index}
                  onClick={() => {
                    setValue(type.type === value ? "" : type.type)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      type.type === searchType ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {type.type}
                </div>
              )): null}
        </PopoverContent>
      </Popover>
  )
}

export default FilterBar