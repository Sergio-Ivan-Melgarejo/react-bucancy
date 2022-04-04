import React from 'react'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import "./songDetails.css"
import Bg from './Bg'

const SongDetails = ({search,lyric,bio,songOrArtist, language}) => {
  if(!lyric || !bio) return null;
  return (
    <div className='container-effect'>  
      <div className={songOrArtist ? "front active" :'front'}>
        {
          lyric.error || lyric.err || lyric.name === "AbortError" ? 
          <>
            <Message msg={ 
              lyric.err && bio.artists 
              ? (language === "EN" ? `The ${bio.artists[0].strArtist} does not have the song "<em>${search.song}</em>."` : `${bio.artists[0].strArtist} no tiene la cancion "<em>${search.song}</em>".`) 
              : (language === "EN" ?  `The API LyricsOvh did not respond, try again later.` : "La API LyricsOvh no respondio, intentelo mas tarde.")
            } 
            bgColor="var(--bg-card-color)" color="var(--red)" /> 
            <Bg />
          </>
          : 
          <SongLyric songOrArtist={songOrArtist} title={search.song} lyrics={lyric.lyrics}
          />
        }   
      </div>
      <div className={!songOrArtist ? "back active" : 'back'}>
        {
          !bio.artists  ? 
          <>
            <Message msg={ 
                language === "EN" 
                ? `The Artist "<em>${search.artist}</em>" does not exist or The API TheAudioDB did not respond, try again later`
                : `El Artista "<em>${search.artist}</em>" no existe o la API TheAudioDB no respondio, intentelo mas tarde`
              } bgColor="var(--bg-card-color)" color="var(--red)" /> 
            <Bg />
          </>
          : 
          <SongArtist language={language} songOrArtist={songOrArtist} artist={bio.artists[0]}/>
        } 
      </div>
    </div>
  )
}

export default SongDetails