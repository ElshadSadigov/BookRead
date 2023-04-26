import React from 'react'
import Slider from './Slider/Slider'
import VipBooks from './VipBooks/VipBooks'
import AllBooks from './AllBooks/Books'
import Authors from './Authors/Authors'

const Home = () => {
  return (
    <div>
      <Slider/>
      <VipBooks/>
      <AllBooks/>
      <Authors/>
    </div>
  )
}

export default Home
