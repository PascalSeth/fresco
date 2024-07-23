import React from 'react'
import Showcase from './components/Showcase'
import PopularDishes from './components/PopularDishes'
import Intro from './components/Intro'
import Gallery from './components/Gallery'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
   
      <Intro/>   <Showcase/>
      <PopularDishes/>
      <Gallery/>
    </div>
  )
}