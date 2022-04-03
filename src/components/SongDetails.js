import React from 'react'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import "./songDetails.css"

const SongDetails = ({search,lyric,bio,songOrArtist}) => {
  if(!lyric || !bio) return null;
  console.log(lyric)
  return (
    <div className='container-effect'>  
      <div className={songOrArtist ? "front active" :'front'}>
        {
          lyric.error || lyric.err || lyric.name === "AbortError" ? 
          <Message msg={`Error no exite la cancion <em>"${search.song}</em>"`} bgColor="#dc3545" color="#000" /> 
          : 
          <SongLyric songOrArtist={songOrArtist} title={search.song} lyrics={lyric.lyrics}
          />
        }   
      </div>
      <div className={!songOrArtist ? "back active" : 'back'}>
        {
          !bio.artists  ? 
          <Message msg={`Error no exite el interprete <em>"${search.artist}</em>"`} bgColor="#dc3545" color="#000" /> 
          : 
          <SongArtist songOrArtist={songOrArtist} artist={bio.artists[0]}/>
        } 
      </div>
    </div>
  )
}

export default SongDetails