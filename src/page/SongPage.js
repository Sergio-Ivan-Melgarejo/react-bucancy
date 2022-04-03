import React, { useState } from 'react'
import Nav from '../components/Nav'
import SongDetails from '../components/SongDetails'
import Loader from '../components/Loader'
import ButtonFavorite from '../components/ButtonFavorite'
import "./songPage.css"

const SongPage = ({ search, lyric, bio, handleSaveSong }) => {
  console.log(search)
  const [songOrArtist, setSongOrArtist] = useState(false)
  return (
    <>
      <div className='songPage'>
        <Nav songOrArtist={songOrArtist} setSongOrArtist={setSongOrArtist} />
        {
          lyric || bio ?
            <SongDetails search={search} lyric={lyric} bio={bio} songOrArtist={songOrArtist} />
            :
            <Loader />
        }
      </div>
      {
        (lyric) && <ButtonFavorite handleSaveSong={handleSaveSong} />
      }
    </>
  )
}

export default SongPage