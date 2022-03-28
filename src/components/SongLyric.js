import React from 'react'
import "./songLyric.css"

const SongLyric = ({title,lyrics}) => {
  return (
    <section className='lyric'>
      <h2 className='title'>{title}</h2>
      <blockquote className='letters' >{lyrics}</blockquote>
    </section>
  )
}

export default SongLyric