import React from 'react'
import SongSearch from '../components/SongSearch'
import Bg from '../components/Bg'
import "./home.css"
import Day23 from '../components/Day23'
import Favorites from '../components/Favorites'

const Home = ({handleSearch, language, handleDeleteSong, mySongs, setBio, setLyric, setSearch}) => {
  return (
    <main className='home'>
        <Bg />
        <Day23 center={"Bucandy"} />
        <SongSearch handleSearch={handleSearch} language={language} />
        {
          mySongs.length > 0 ? <Favorites handleDeleteSong={handleDeleteSong} mySongs={mySongs} language={language} /> : null
        }
    </main>
  )
}

export default Home