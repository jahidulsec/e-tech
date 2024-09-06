import { cn } from '@/lib/utils'
import React from 'react'

function PageHeading({children, className} : {
    children: React.ReactNode,
    className?:string
}) {
  return (
    <h2 className={cn("font-bold text-3xl md:text-4xl mb-5 text-secondary-foreground",className)}>{children}</h2>
  )
}

export default PageHeading