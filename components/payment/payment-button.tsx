import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const PaymentButton = () => {
  return (
    <Button>
        <Link href="/myaccount/payment/">Thanh Toan</Link>
    </Button>
  )
}

export default PaymentButton