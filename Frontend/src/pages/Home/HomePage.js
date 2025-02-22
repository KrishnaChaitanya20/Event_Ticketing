import React, { useEffect } from 'react'
import Navbar from 'components/Navbar'
import Search from 'components/Search'
import Body from './Body'
import Categories from './Categories'

import config from 'config';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Body/>
      <Categories/>
    </div>
  )
}

export default HomePage
