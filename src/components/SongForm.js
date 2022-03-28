import React,{useState,useEffect} from 'react'
import "./songForm.css"

const initialForm = {
  artist:"",
  song:""
}

const SongForm = ({handleSearch}) => {
  const [form, setForm] = useState(initialForm)

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
    }

  }
  return (
    <form className='search' onSubmit={handleSutmit}>
      <input className='search__input' type="text" name="artist" placeholder='Artist...' onChange={handleChange} value={form.artist} />
      <input className='search__input' type="text" name="song" placeholder='Song...' onChange={handleChange} value={form.song} />
      <input className='btn' type="submit" value="Search" />
    </form>
  )
}

export default SongForm