import React from 'react'
import Showcase from '../components/Showcase'
import PopularDishes from '../components/PopularDishes'
import Intro from '../components/Intro'
import Gallery from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='w-full h-full overflow-x-hidden'>
   
      <Intro/> 
        <Showcase/>
      <PopularDishes/>
      <Gallery/>
      <section id='contact-us'>
      <ContactUs/>
      </section>
      <Testimonials/>
    </div>
  )
}