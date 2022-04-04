import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import "./songSearch.css"

const initialForm = {
  artist:"",
  song:""
}

const SongSearch = ({handleSearch,language}) => {
    const [form, setForm] = useState(initialForm)
    const navigate = useNavigate();

    const handleChange = e =>{
      setForm(
        {
          ...form,
          [e.target.name]: e.target.value,
        }
      );
    }

    const handleSutmit = (e) =>{
      e.preventDefault();
      if(!form.artist || !form.song ){
        alert("datos incompletos");
        // hacer alerta de datos incompletos
        return
      }
      else{
        handleSearch(form);
        setForm(initialForm);
        navigate(`/song/${form.song}`)
      }

    }

  return (
    <>
      <form className='search' onSubmit={handleSutmit}>
        <input className='search__input' type="text" name="artist" placeholder={language === "EN" ? 'Artist ...' : "Artista ..."} onChange={handleChange} value={form.artist} />
        <input className='search__input' type="text" name="song" placeholder={language === "EN" ? 'Song ...' : "Canción ..."} onChange={handleChange} value={form.song} />
        <input className='btn' type="submit" value={language === "EN" ? "Search" : "Buscar"} />
      </form>
    </>
  )
}

export default SongSearch