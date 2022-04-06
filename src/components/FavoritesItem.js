import React from 'react'
import { useNavigate } from 'react-router-dom'

const FavoritesItem = ({handleDeleteSong,song}) => {
    const navigate = useNavigate()

    const handleDelete = () =>{
        handleDeleteSong(song.bio.artists[0].idArtist)
    }

    const handlePlay = () =>{
        navigate(`/song/${song.search.artist}=${song.search.song}`)
    }
    
    return (
        <button className='favorite__container'>
            <img className='favorite__logo' src={song.bio.artists[0].strArtistLogo} alt={song.search.artist} />
            <p className='favorite__song'>
                {song.search.song}
                <span className='span'></span>
            </p>
                <svg onClick={handleDelete} className='favorite__delete' viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>
                </svg>
                <svg onClick={handlePlay} className='favorite__play' viewBox="0 0 512 512">
                    <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"/>
                </svg>
        </button>
    )
}

export default FavoritesItem