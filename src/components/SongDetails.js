import React from 'react'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import "./songDetails.css"

const SongDetails = ({search,lyric,bio}) => {
  if(!lyric || !bio) return null;
  console.log(lyric)
  return (
    <div className='container-grid'>  
        {
          !bio.artists  ? 
          <Message msg={`Error no exite el interprete <em>"${search.artist}</em>"`} bgColor="#dc3545" color="#000" /> 
          : 
          <SongArtist  artist={bio.artists[0]}/>
        }  
        {
          lyric.error || lyric.err || lyric.name === "AbortError" ? 
          <Message msg={`Error no exite la cancion <em>"${search.song}</em>"`} bgColor="#dc3545" color="#000" /> 
          : 
          
          <SongLyric title={search.song} lyrics={lyric.lyrics}
          />
        }  
    </div>
  )
}

export default SongDetails