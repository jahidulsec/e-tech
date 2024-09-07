'use client'

import Image from 'next/image'
import React from 'react'
import CurrencyText from '../heading/CurrencyText'
import { trendingProducts } from '@/lib/data'

function Card({id, imagePath, name, price}: typeof trendingProducts[0]) {
  return (
    <article
            key={id}
            className="flex gap-5 justify-between border-b pb-5"
          >
            <div className="flex gap-5">
              {/* image */}
              <div className="w-[80px] aspect-square p-2 bg-white rounded overflow-hidden">
                <div className="w-full aspect-square relative mix-blend-multiply">
                  <Image src={imagePath} fill objectFit="cover" alt="" />
                </div>
              </div>

              {/* info */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-medium line-clamp-1">
                  {name}
                </h4>
                <h5 className="text-xs text-muted-foreground">1x</h5>
              </div>
            </div>

            <div className="text-sm text-primary">
              <p>
                <CurrencyText currency={price} />
              </p>
            </div>
          </article>
  )
}

export default Card