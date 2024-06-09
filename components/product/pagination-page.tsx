import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const PaginationComponent = () => {
  const [page,setPage] = useState<number>(1);
  const router = useRouter();
  

  const handlePage = (p : number) => {
    setPage(p)
  }

  useEffect(()=>{
    router.push(`/product?p=${page}`)
  },[page])
  return (
    <Pagination>
    <PaginationContent className="flex space-x-2">
      <PaginationItem className={cn(page === 1 ? "underline text-primary" : "text-gray-400")}>
        <span onClick={()=>handlePage(1)}>1</span>
      </PaginationItem>
      <PaginationItem className={cn(page === 2 ? "underline text-primary":"text-gray-400")}>
        <span onClick={()=> handlePage(2)} >
          2
        </span>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationComponent