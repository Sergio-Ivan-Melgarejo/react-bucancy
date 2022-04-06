import React, { useState } from 'react'
import Nav from '../components/Nav'
import SongDetails from '../components/SongDetails'
import Loader from '../components/Loader'
import ButtonFavorite from '../components/ButtonFavorite'
import "./songPage.css"
import ButtonToUp from '../components/ButtonToUp'

const SongPage = ({ loading, search, lyric, setLyric, bio, setBio, handleSaveSong, language, handleDeleteSong, handleSearch, mySongs }) => {
  const [songOrArtist, setSongOrArtist] = useState(false)

  return (
    <>
      <div className='songPage'>
        <Nav language={language} setLyric={setLyric} setBio={setBio} songOrArtist={songOrArtist} setSongOrArtist={setSongOrArtist} search={search} lyric={lyric} bio={bio} />
        {
          !loading ?
            <>
              <SongDetails language={language} search={search} lyric={lyric} bio={bio} songOrArtist={songOrArtist} 
              handleSearch={handleSearch}  />
              <ButtonToUp />
            </>
            :
            <Loader language={language} />
        }
      </div>
      {
        lyric?.lyrics ? <ButtonFavorite search={search} mySongs={mySongs} handleDeleteSong={handleDeleteSong} handleSaveSong={handleSaveSong} id={bio.artists[0].idArtist} /> : null
      }
    </>
  )
}

export default SongPage