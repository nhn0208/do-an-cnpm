'use client'

import { useEffect, useState, useRef } from 'react'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useTheme } from 'next-themes'

const Darkmode = () => {
  const {theme, setTheme} = useTheme();
  let saveTheme 
  const [ isChecked, setChecked] = useState(saveTheme === 'dark' ? true : false);

  useEffect(()=>{
    saveTheme = localStorage.getItem('theme')
    setTheme(isChecked === true ? 'dark' : 'light')
  },[isChecked])

  return (
    <div className="flex items-center space-x-2">
    <Switch id="dark-mode" checked={isChecked} onCheckedChange={setChecked}/>
    <Label htmlFor="dark-mode" className='text-black dark:text-white'>Dark Mode</Label>
  </div>
  )
}

export default Darkmode