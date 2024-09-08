import SeeMoreButton from '@/components/buttons/SeeMoreButton'
import SectionHeading from '@/components/heading/SectionHeading'
import React from 'react'
import CardContainer from '../gridCard/CardContainer'
import { trendingProducts } from '@/lib/data'
import Card from '../gridCard/Card'

function RelatedProductSection() {
  return (
    <section className='my-6'>
        <div className="header flex justify-between items-center gap-x-5 flex-wrap">
            <SectionHeading>Customers also viewed</SectionHeading>
            <SeeMoreButton title='View all' />
        </div>

        <CardContainer>
            {
                trendingProducts.slice(0,4).map(item => (
                    <Card key={item.id} {...item} />
                ))
            }
        </CardContainer>
    </section>
  )
}

export default RelatedProductSection