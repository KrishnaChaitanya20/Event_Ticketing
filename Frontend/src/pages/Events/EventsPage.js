import React from 'react'
import Navbar from 'components/Navbar'
import Search from 'components/Search'
import SortFilter from './SortFilter'
import Eventsbody from './Eventsbody'
const EventsPage = () => {
  return (
    <div>
      <Navbar/>
        <Search/>
        <SortFilter/>
        <Eventsbody/>
    </div>
  )
}

export default EventsPage
