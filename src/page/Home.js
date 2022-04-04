import React from 'react'
import SongSearch from '../components/SongSearch'
import Bg from '../components/Bg'
import "./home.css"
import Day23 from '../components/Day23'
import Favorites from '../components/Favorites'

const favorites = localStorage.getItem("favorites");

const Home = ({handleSearch, language}) => {
  console.log(favorites)
  return (
    <main className='home'>
        <Bg />
        <Day23 center={"Bucandy"} />
        <SongSearch handleSearch={handleSearch} language={language} />
        {/* {
          favorites && <Favorite favorites={favorites} language={language} />
        } */}
        <Favorites language={language} />
    </main>
  )
}

export default Home