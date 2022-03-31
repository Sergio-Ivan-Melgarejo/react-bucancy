import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <nav className='nav'>
        <Link to="/" className='btn btn-right'>Home</Link>
        <div className='line'></div>
        <Link to="/info" className='btn btn-left'>Info</Link>
    </nav>
  )
}

export default Nav