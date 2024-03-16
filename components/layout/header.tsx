import React from 'react'
import Logo from '@/components/logo'
import SearchBar from '@/components/search-bar'
import UserButton from '@/components/user-button'
import CartButton from '../cart-button'
import Sidebar from './sidebar/sidebar'
import Darkmode from '../switch-darkmode'

const Header = () => {
  return (
    
      <div className='w-full fixed top-0 bg-black py-6 px-4 md:px-8 lg:px-16 z-50'>
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