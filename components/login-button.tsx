import React from 'react'
import { Button } from './ui/button'
import { login } from '@/app/api/login/login'

const LoginButton = ({username,password,handleClick}:{username : string, password: string,handleClick: any}) => {

    const handleLogin = async () => {
        await login({
            email: username,
            password: password
        })
        handleClick()
    }
  return (
    <Button 
    onClick={()=> handleLogin()}
    className="w-full rounded-full bg-black dark:bg-slate-950 mt-4 text-white dark:text-white hover:bg-green-600 dark:hover:bg-green-600" type="submit">
        LOG IN
    </Button>
  )
}

export default LoginButton