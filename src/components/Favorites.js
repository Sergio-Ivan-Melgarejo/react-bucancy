import React from 'react'
import "./favorites.css"
import FavoritesItem from './FavoritesItem'

const Favorite = ({language,favorites,handleDeleteSong}) => {

  const pruebafavorites = [
    {
      src : "https://www.theaudiodb.com/images/media/artist/logo/qrytyx1549404201.png",
      song: "someone to love",
      band: "queen"
    }
  ]
  return (
    <section className='favorites'>
      <h2 className='favorite__title'>{language === "EN" ? "Favorites Song" : "Favoritos Canciones"}</h2>
        {
            pruebafavorites.map((favorite, i) => <FavoritesItem key={"favorite-" + i} favorite={favorite} />)
        }
    </section>
  )
}

export default Favorite