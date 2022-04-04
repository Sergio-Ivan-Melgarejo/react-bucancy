import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = ({songOrArtist,setSongOrArtist, setLyric, setBio, language}) => {
  const handleClick = () =>{
    setBio(null)
    setLyric(null)
  }

  return (
    <>
      <nav className='nav' id='nav'>
        <Link onClick={handleClick} to="/" className='btn btn-left' >{language ==="EN" ? "Home" : "Inicio"}</Link>
        <div className='line'></div>
        <button onClick={()=>setSongOrArtist(!songOrArtist)} className='btn btn-right'>{songOrArtist ? (language ==="EN" ? "Information" : "Informacion") : (language === "EN" ? "Song" : "Canción")}</button>
      </nav>
    </>
  )
}

export default Nav