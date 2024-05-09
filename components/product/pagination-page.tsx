import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const PaginationComponent = () => {
  const [page,setPage] = useState<number>(1);
  const router = useRouter();
  

  const handlePage = (p : number) => {
    setPage(p)
  }

  useEffect(()=>{
    router.push(`http://localhost:3000/product?p=${page}`)
  },[page])
  return (
    <Pagination>
    <PaginationContent>
      <PaginationItem>
        <span onClick={()=>handlePage(1)}>1</span>
      </PaginationItem>
      <PaginationItem>
        <span onClick={()=> handlePage(2)} >
          2
        </span>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationComponent