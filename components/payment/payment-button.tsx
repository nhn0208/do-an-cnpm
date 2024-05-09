import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const PaymentButton = () => {
  return (
    <Button>
        <Link href="/myaccount/payment/">Thanh Toán</Link>
    </Button>
  )
}

export default PaymentButton