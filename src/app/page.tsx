import Feature2 from '@/components/Feature2'
import { FeaturesSectionDemo } from '@/components/FeatureGrid'
import Features from '@/components/Features'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'
const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      {/* <FeaturesSectionDemo /> */}
      <Feature2 />
    </div>
  )
}

export default Home