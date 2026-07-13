import React from 'react'
import { Link } from 'react-router-dom'

const Navigations = () => {
  return (
    <div className='flex gap-7'>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navigations
