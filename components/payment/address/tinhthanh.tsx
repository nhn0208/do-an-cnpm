import {address} from '@/lib/address'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const TinhThanh = ({sendTinhThanh}:{sendTinhThanh:any}) => {

    const handleClick = (tinh:string) => {  
        sendTinhThanh(tinh)
    }
  return (
    <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Chọn tỉnh thành" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {address.map((tinh,index)=>(
                    <SelectItem key={index} value={tinh.Name} onClick={()=>handleClick(tinh.Name)}>{tinh.Name}</SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default TinhThanh