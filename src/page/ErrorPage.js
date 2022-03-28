import React from 'react'
import Bg from '../components/Bg'
import ButtonDark from '../components/ButtonDark'
import Day23 from "../components/Day23"
import "./errorPage.css"

const ErrorPage = () => {
  return (
    <main className='ErrorPage'>
      <Day23 />
      <Bg />
      <div className='container-effect'></div>
      <ButtonDark />
    </main>
  )
}

export default ErrorPage