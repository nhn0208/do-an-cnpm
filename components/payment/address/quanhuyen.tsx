import {address} from '@/lib/address'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const QuanHuyen = ({sendQuanHuyen,tinhThanh}:{sendQuanHuyen:any,tinhThanh: string}) => {

    const handleClick = (tinh:string) => {
        sendQuanHuyen(tinh)
    }
  return (
    <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn quận huyện" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {address.find(dc=> dc.Name === tinhThanh)?.Districts.map((quan,index)=>(
                                <SelectItem key={index} value={quan.Name} onClick={()=>handleClick(quan.Name)}>{quan.Name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
  )
}

export default QuanHuyen