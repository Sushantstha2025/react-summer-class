import React from 'react'
import Routes from './Navigations'
import Hamburger from './Hamburger'
import Navigations from './Navigations'

const Navbar = () => {
  return (
    <div className='p-4 rounded-md flex justify-between'>
        < Hamburger />
        < Navigations />

      </div>
  )
}

export default Navbar
