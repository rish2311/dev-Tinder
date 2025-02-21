import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />  // Things will keep changing here.
      <Footer />
    </div>
  )
}

export default Body