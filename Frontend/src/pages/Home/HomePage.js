import React from 'react'
import Navbar from 'components/Navbar'
import Search from 'components/Search'
import Body from './Body'
import Categories from './Categories'
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
