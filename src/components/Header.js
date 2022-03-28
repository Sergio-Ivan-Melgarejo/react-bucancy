import React from 'react'
import imgSvg from "../logoApp/logo.svg"
import imgDark from "../logoApp/logo_small_icon_only_inverted.png"
import imglight from "../logoApp/logo_small_icon_only.png"
import "./header.css"

const Header = () => {
  const theme = true;

  return (
    <header className='header'>
        <h1 className='tittle'>Bucandy</h1>
        
        <div className='disappear'>
            <img className='logo' src={theme ? imgDark : imglight} alt="logo" />
        </div>

        <div className='appear'>
            <img className='logo' src={imgSvg} alt="logo" />
        </div>
    </header>
  )
}

export default Header