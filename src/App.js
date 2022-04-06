import React,{useState,useEffect} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import SongPage from './page/SongPage';
import ButtonDark from './components/ButtonDark';

import {helpHttp} from "./helpers/helpHttp"

import './App.css';
import ButtonLanguages from './components/ButtonLanguages';
import SongDetails from './components/SongDetails';

// localStorage
let getDark = localStorage.getItem("dark");
getDark ? getDark = JSON.parse(getDark) : getDark = true;
let getLanguage = localStorage.getItem("language") || "EN";
const getMySongs = JSON.parse(localStorage.getItem("mySongs")) || [];

function App() {
  const [dark, setDark] = useState(getDark)
  const [language, setLanguage] = useState(getLanguage)

  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mySongs, setMySongs] = useState(getMySongs)

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

    fetchData();
  }, [search, ])

    useEffect(() => {
      localStorage.setItem("mySongs", JSON.stringify(mySongs))
    }, [mySongs])
  
  
  const handleSearch = (data) =>{
    setSearch(data);
  }

  const handleSaveSong = () =>{
    // añadir componente de carte de guardando
    let included = false;

    for(let i=0; i<mySongs.length;i++){
      if (search.song === mySongs[i].search.song){
        included = true;
        break
      }
    }

    if(!included){
      let currentSong = {search,lyric,bio}

      setMySongs((mySongs)=>[...mySongs,currentSong])
    }
  }

  const handleDeleteSong = (id) =>{
    // let included = false;
    // for(let i=0; i<mySongs.length;i++){
    //   if (id === mySongs[i].bio.artists[0].idArtist){
    //     included = true;
    //     break
    //   }
    // }

    // if(included){
      let filter = mySongs.filter(el => id !== el.bio.artists[0].idArtist)
      setMySongs(filter)
    // }
  }

  return (
    <main className={dark ? "App dark" : "App"}>
      
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <Home 
              dark={dark}
              language={language}
              mySongs={mySongs}
              handleSearch={handleSearch} 
              handleDeleteSong={handleDeleteSong}
              setBio={setBio}
              setLyric={setLyric} 
              setSearch={setSearch}
            />
          }/>

          <Route path="/song/*" element={
            <SongPage 
              search={search}
              lyric={lyric} setLyric={setLyric} 
              bio={bio} setBio={setBio}
              language={language}
              loading={loading}
              handleSearch={handleSearch} 
              handleSaveSong={handleSaveSong}
              handleDeleteSong={handleDeleteSong}
              mySongs={mySongs}
            />
          }>
            <Route path=':id' element={
            <SongDetails 
            language={language} 
            search={search} 
            lyric={lyric} 
            bio={bio} 
            />
            } />
          </Route>

          
          <Route path="/song/*" element={
            <SongPage 
              search={search}
              lyric={lyric} setLyric={setLyric} 
              bio={bio} setBio={setBio}
              language={language}
              loading={loading}
              handleSaveSong={handleSaveSong}
              handleDeleteSong={handleDeleteSong}
            />
          }>
            <Route path=':id' element={
            <SongDetails 
            language={language} 
            search={search} 
            lyric={lyric} 
            bio={bio} 
            />
            } />
          </Route>
          
          <Route path="*" element={<ErrorPage language={language} />} />
        </Routes>

      </HashRouter>

      <ButtonDark dark={dark} setDark={setDark} />
      <ButtonLanguages language={language} setLanguage={setLanguage} />
    </main>
  );
}

export default App;
