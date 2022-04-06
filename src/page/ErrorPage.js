import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../components/Bg'
import ButtonDark from '../components/ButtonDark'
import Day23 from "../components/Day23"
import "./errorPage.css"

const ErrorPage = ({language}) => {
  return (
    <main className='ErrorPage'>
      <Day23 top={language === "EN" ? "This" : "Esta"} center={"URL"} bottom={language === "EN" ? "doesn't exist" : "no existe"} />
      <Bg />
      <ButtonDark />
      <Link className='btn error-page-btn' to='/' >{language === "EN" ? "Go Home" : "Ir a Inicio"}</Link>    
    </main>
  )
}

export default ErrorPage