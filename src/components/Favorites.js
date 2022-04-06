import React from 'react'
import "./favorites.css"
import FavoritesItem from './FavoritesItem'

const Favorite = ({language,mySongs,handleDeleteSong}) => {
  return (
    <section className='favorites'>
      <h2 className='favorite__title'>{language === "EN" ? "Favorites Song" : "Favoritos Canciones"}</h2>
        {
            mySongs.map(song => <FavoritesItem key={`${song.search.artist}=${song.search.song}`} song={song} handleDeleteSong={handleDeleteSong} />)
        }
    </section>
  )
}

export default Favorite