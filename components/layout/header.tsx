'use client'

import {useEffect, useState} from 'react'
import Logo from '@/components/logo'
import SearchBar from '@/components/search-bar'
import UserButton from '@/components/user-button'
import CartButton from '@/components/cart/cart-button'
import Sidebar from './sidebar/sidebar'
import Darkmode from '../switch-darkmode'
import { cn } from '@/lib/utils'

const Header = () => {
    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
      }, []);
    
  return (
      <div className={
        cn('w-full fixed top-0 py-6 px-4 md:px-8 lg:px-16 z-50',
            y > 50 ? 'logoToUp' : 'logoToDown'
      )}>
          <div className='flex items-center justify-between'>
              <Logo />
              <SearchBar />
              <div className='flex item-center space-x-4'>
                  <UserButton />
                  <CartButton />
                  <Sidebar />
                  <Darkmode />
              </div>
          </div>
      </div>
    
  )
}

export default Header