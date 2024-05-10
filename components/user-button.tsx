'use client'

import Link from "next/link"
import { User2Icon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { isLogin, logout } from "@/app/api/auth/route"
import { ProfileProps } from "@/lib/interface"
import { useRouter } from "next/navigation"
import LoginButton from "./login-button"



const UserButton = () => {
    const router = useRouter();
    //const { data: session } = useSession();
    //console.log("Session: ",session);
    const [profile,setProfile] = useState<ProfileProps | null>({});
    const [isClick,setClick] = useState(false)
    useEffect(()=>{
        const fetchProfile = async () => {
            const res = await isLogin();
            setProfile(res);
            router.refresh();
        }
        fetchProfile();
        
    },[isClick])

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    

    const handleLogout = async () => {
        await logout()
        setClick(!isClick)
        
    }
    
    if ( profile) return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image src={profile.image || '/google.png'} alt='' width={40} height={40} className="rounded-full" style={{width: "40px", height: "40px"}}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 pt-2">
                <DropdownMenuLabel>
                    <Link href={'/myaccount'}>My Account</Link>
                </DropdownMenuLabel>
                <DropdownMenuItem className="p-0">
                    <Button 
                    onClick={()=> {
                        handleLogout();
                        setUsername('')
                        setPassword('')
                    }}
                    className="w-full p-0 pl-2 justify-start border-0 text-left bg-white dark:bg-slate-950 text-slate-950 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-900">
                        <p>Sign Out</p>  
                    </Button>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
  return (
    <Sheet>
        <SheetTrigger>
            <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-slate-950
             dark:border-white border rounded-full p-2 hover:opacity-80">
                <User2Icon width={20} height={20} />
            </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
            <SheetHeader className="pb-8">
                <SheetTitle className="text-[20px]">Sign In</SheetTitle>
            </SheetHeader>
            <div className="border-y-[2px] py-6">
                <div>
                    <Label 
                    htmlFor="email" className="text-slate-950 dark:text-white">
                        Email
                    </Label>
                    <Input id="email" value={username} className="text-slate-950 dark:text-white" onChange={event => setUsername(event.target.value)} />
                </div>
                <div>
                    <Label htmlFor="password" className="text-slate-950 dark:text-white" >
                        Password
                    </Label>
                    <Input id="password" value={password} type="password" className="text-slate-950 dark:text-white" onChange={event => setPassword(event.target.value)}/>
                </div>
                <SheetClose asChild>
                    <LoginButton username={username} password={password} handleClick={()=>setClick(!isClick)}/>
                </SheetClose>
            </div>
            <div className="w-full py-4 flex item-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" />
                    <Label
                        htmlFor="remember-me"
                        className="text-slate-950 dark:text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </Label>
                </div>
                <div>
                    <SheetClose asChild>
                        <Link href={'/myaccount/lost-password'} className="hover:underline text-slate-950 dark:text-white">
                            Lost my password?
                        </Link>
                    </SheetClose>
                </div>
            </div>
            <div className="flex flex-col items-center py-8 border-y-[2px]">
                <User2Icon width={60} height={60} className="text-slate-950 dark:text-white"/>
                <h1 className="font-bold text-slate-950 dark:text-white">No account yet?</h1>
                <SheetClose asChild>
                    <Link href={'/myaccount?action=register'} className="font-bold mt-4 underline text-slate-950 dark:text-white">
                        CREATE AN ACCOUNT
                    </Link>
                </SheetClose>
            </div>
        </SheetContent>
        
    </Sheet>
  )
}

export default UserButton