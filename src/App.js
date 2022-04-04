import React,{useState,useEffect} from 'react'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import SongPage from './page/SongPage';
import SongLyric from './components/SongLyric';
import ButtonDark from './components/ButtonDark';

import {helpHttp} from "./helpers/helpHttp"

import './App.css';
import ButtonLanguages from './components/ButtonLanguages';

// localStorage
let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
let getDark = localStorage.getItem("dark");
getDark ? getDark = JSON.parse(getDark) : getDark = true;

let getLanguage = localStorage.getItem("language") || "EN";

function App() {
  const [dark, setDark] = useState(getDark)
  const [language, setLanguage] = useState(getLanguage)

  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mySongs, setMySongs] = useState(mySongsInit)

  useEffect(() => {
    if(search === null) return;

    const fetchData = async () => {
      const {artist,song} = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      
      setLoading(true)

      const [artistRes,songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl)
      ]);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false)
    }

    localStorage.setItem("mySong", JSON.stringify(mySongs))

    fetchData();
  }, [search, mySongs])
  
  const handleSearch = (data) =>{
    setSearch(data);
  }

  const handleSaveSong = () =>{
    // añadir componente de carte de guardando
  }

  const handleDeleteSong = (id) =>{
    // añadir componente de carte de elimido
  }

  return (
    <main className={dark ? "App dark" : "App"}>
      
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <Home 
              handleSearch={handleSearch} 
              dark={dark}
              language={language}
            />
          }/>

          <Route path="/song/*" element={
            <SongPage 
              search={search}
              lyric={lyric} setLyric={setLyric} 
              bio={bio} setBio={setBio}
              handleSaveSong={handleSaveSong}
              language={language}
              loading={loading}
            />
          }>
            <Route path=':song' element={<SongLyric />} />
          </Route>
          
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

      </HashRouter>

      <ButtonDark dark={dark} setDark={setDark} />
      <ButtonLanguages language={language} setLanguage={setLanguage} />
    </main>
  );
}

export default App;
