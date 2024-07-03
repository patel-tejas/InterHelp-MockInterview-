import React from 'react'
import Header from './_components/Header'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <Header />
      <div className='mx-5 md:mx-20 lg:mx-36'>
        
        {children}
      </div>
    </div>
  )
}

export default layout