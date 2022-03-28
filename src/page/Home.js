import React from 'react'
import Header from '../components/Header'
import SongSearch from '../components/SongSearch'
import ButtonDark from '../components/ButtonDark'
import Bg from '../components/Bg'
import "./home.css"

const Home = () => {
  return (
    <main className='home'>
        <Bg />
        <Header />
        <SongSearch />
        <ButtonDark />
    </main>
  )
}

export default Home