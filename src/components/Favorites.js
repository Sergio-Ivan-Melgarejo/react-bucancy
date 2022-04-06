import React from 'react'
import "./favorites.css"
import FavoritesItem from './FavoritesItem'

const Favorite = ({language,mySongs,handleDeleteSong}) => {
  console.log(mySongs)
  return (
    <section className='favorites'>
      <h2 className='favorite__title'>{language === "EN" ? "Favorites Song" : "Favoritos Canciones"}</h2>
        {
            mySongs.map(song => <FavoritesItem key={song.bio.artists[0].idArtist} song={song} handleDeleteSong={handleDeleteSong} />)
        }
    </section>
  )
}

export default Favorite