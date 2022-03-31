import React from 'react'
import Nav from '../components/Nav'
import SongDetails from '../components/SongDetails'
import Loader from '../components/Loader'
import "./songPage.css"
import ButtonFavorite from '../components/ButtonFavorite'

const SongPage = ({search,lyric,bio,handleSaveSong}) => {
  console.log(search)
  return (
    <>
      <div className='songPage'>
          <Nav />
          <div className='container'>
            {
              lyric || bio ?
                <SongDetails search={search} lyric={lyric} bio={bio} />
              :
                <Loader />
            }
          </div>
          
      </div>
      {
       (lyric) && <ButtonFavorite handleSaveSong={handleSaveSong} />
      }
    </>
  )
}

export default SongPage