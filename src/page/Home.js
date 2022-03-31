import React from 'react'
import Header from '../components/Header'
import SongSearch from '../components/SongSearch'
import Bg from '../components/Bg'
import "./home.css"

const Home = ({handleSearch}) => {
  return (
    <main className='home'>
        <Bg />
        <Header />
        <SongSearch handleSearch={handleSearch} />
    </main>
  )
}

export default Home