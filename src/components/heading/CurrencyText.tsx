import { formatCurrency } from '@/lib/formatter'
import { cn } from '@/lib/utils'
import React from 'react'

function CurrencyText({currency=0, className}: {currency: number, className?:string}) {
  return (
    <p className={cn('', className)}><span>{formatCurrency(currency)}</span> <span className='font-bangla'>৳</span></p>
  )
}

export default CurrencyText