import { formatCurrency } from '@/lib/formatter'
import React from 'react'

function CurrencyText({currency=0}: {currency: number}) {
  return (
    <><span>{formatCurrency(currency)}</span> <span className='font-bangla'>৳</span></>
  )
}

export default CurrencyText