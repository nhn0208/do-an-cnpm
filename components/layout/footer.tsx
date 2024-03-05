import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-slate-950 dark:border-white flex justify-center py-20 mt-10'>
      <div className='text-center'>
        <h1 className='font-bold text-[22px] tracking-[1.2px] text-slate-950 dark:text-white'>SAIGONSNEAKER.COM</h1>
        <p className='text-slate-500 dark:text-white font-semibold text-[18px]'>
          Address: 48B Thạch Thị Thanh, Tân Định, Q1, Hồ Chí Minh.<br/>
          Phone: 0903 150 443<br/>
          Open: 10am – 9pm (Tất cả các ngày)<br/>
          Email: cskh@saigonsneaker.com
        </p>
      </div>
    </div>
  )
}

export default Footer