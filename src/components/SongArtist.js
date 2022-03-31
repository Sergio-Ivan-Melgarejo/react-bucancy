import React, { useState } from 'react'
import "./songArtist.css"
import facebook from "../logoSocialMedia/facebook-brands.svg"
import lastFm from "../logoSocialMedia/lastfm-brands.svg"
import globe from "../logoSocialMedia/globe-solid.svg"
import Day23 from './Day23'

const SongArtist = ({artist}) => {
  const [acordionOpen, setAcordionOpen] = useState(true)
  const language = "EN";
  return (
    <article className='artist'>

      {/* Titulo */}
      <header className='header'>
        <div className='container'>
          {/* <img className='logo' src={artist.strArtistLogo} alt={artist.strArtist + " logo"}/> */}
          <img className='banner' src={artist.strArtistBanner} alt={ artist.strArtist + " banner"}/>
        </div>
        <Day23  top={""} center={artist.strArtist} bottom={""} />
      </header>

      {/* Arcodeon */}
      <section className='accordion-container'>
        <button onClick={()=>setAcordionOpen(!acordionOpen)} className='btn'>{language === "EN" ? "More Information" : "Más información"}</button>
          <ul className={acordionOpen ? 'accordion hidden' : "accordion"}>
            <li className="li" ><span className='span'>{artist.strArtistAlternate ? artist.strArtistAlternate : artist.strArtist}</span></li>
            <li className="li" ><span className='span'>{language === "EN" ? "Date: " : "Fecha: "}</span>{artist.intBornYear} - {artist.intDiedYear || language === "EN" ? "Present" : "Presente"}</li>
            <li className="li" ><span className='span'>{language === "EN" ? "Country: " : "Pais: " }</span>{artist.strCountry}</li>
            <li className="li" ><span className='span'>{language === "EN" ? "Members: " : "Miembros: " }</span>{artist.intMembers}</li>
            <li className="li" ><span className='span'>{language === "EN" ? "Genre: " : "Genero: " }</span>{artist.strGenre}</li>
            <li className="li" ><span className='span'>{language === "EN" ? "Style: " : "Estilo: " }</span>{artist.strStyle}</li>
            <li className="li" >
            <span className='span'>{language === "EN" ? "Bio: " : "Biografía: "}</span>
              {
              artist[`strBiography${language}`] 
              ? artist[`strBiography${language}`] 
              : (language === "EN" ? "Biography in English is not available" : "La biografía en Español no está disponible.")
              }
            </li>
          </ul>
      </section>

      {/* artista */}
      <img className='img' src={artist.strArtistThumb} alt={artist.strArtist} />
      
      <footer className='footer'>
        {artist.strWebsite && <a className='a btn' href={"https://" + artist.strWebsite} target="_blank" rel="noreferrer">
          <span className='span-letter' >{language === "EN" ? "WebSite" : "Sitio web"}</span>
          <img className='icon' src={globe} alt={language === "EN" ? "world" : "mundo"} />
        </a>}
        {artist.strLastFMChart && <a className='a btn' href={artist.strLastFMChart} target="__blank">
          <span className='span-letter' >Last.fm</span>
          <img className='icon' src={lastFm} alt="Last.fm" />
        </a>}
        {artist.strFacebook && <a className='a btn' href={"https://" + artist.strFacebook} target="_blank" rel="noreferrer">
          <span className='span-letter' >Facebook</span>
          <img className='icon icon-f' src={facebook} alt="facelbook" />
        </a>}
      </footer>

    </article>
  )
}

export default SongArtist

// min 12:06