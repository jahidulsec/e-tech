import React from 'react'

function SectionHeading({children}: {children: React.ReactNode}) {
  return (
    <h2 className="text-lg md:text-2xl font-semibold">{children}</h2>
  )
}

export default SectionHeading