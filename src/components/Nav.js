import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = ({songOrArtist,setSongOrArtist}) => {
  return (
    <nav className='nav'>
        <Link to="/" className='btn btn-left'>Home</Link>
        <div className='line'></div>
        <button onClick={()=>setSongOrArtist(!songOrArtist)} className='btn btn-right'>{songOrArtist ? "Info" : "Song"}</button>
    </nav>
  )
}

export default Nav