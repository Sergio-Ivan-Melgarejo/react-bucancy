import React from 'react'
import "./songLyric.css"

const SongLyric = ({title,lyrics}) => {
  return (
    <section className="lyric">
      <h1 className='title'>{title}</h1>
      <blockquote className='letters' >{lyrics}</blockquote>
    </section>
  )
}

export default SongLyric