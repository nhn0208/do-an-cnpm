import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const SearchBar = () => {
  return (
    <div className="flex rounded-full p-2 items-center w-1/2 h-[46px] dark:bg-slate-950 border border-primary ">
        <Input placeholder="Search for products" className="border-none focus-visible:ring-offset-0 focus-visible:ring-0
         font-bold placeholder:text-gray-400 text-slate-950 dark:text-white"/>
        <div className="bg-white dark:bg-slate-950 mr-2">
            <Search className="text-primary opacity-70 hover:opacity-100" width={24} height={24}  />
        </div>
    </div>
  )
}

export default SearchBar