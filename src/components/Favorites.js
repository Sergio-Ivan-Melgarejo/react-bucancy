import React from 'react'
import "./favorites.css"
import FavoritesItem from './FavoritesItem'

const Favorite = ({language,favorites,handleDeleteSong}) => {

  return (
    <section className='favorites'>
      <h2 className='favorite__title'>{language === "EN" ? "Favorites Song" : "Favoritos Canciones"}</h2>
        {
            favorites.map(favorite => <FavoritesItem key={favorite.id} favorite={favorite} handleDeleteSong={handleDeleteSong} />)
        }
    </section>
  )
}

export default Favorite