import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CheckoutButton = () => {
  return (
    <Button variant={'custom'}>
        <Link href="/checkout">Thanh Toán</Link>
    </Button>
  )
}

export default CheckoutButton