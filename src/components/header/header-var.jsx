import { useContext, useState } from 'react';
import './header.css'
import { SiBlueprint } from "react-icons/si";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import counterContext from '../../context/counterContext';

function HeaderVar() {
  
  const {dark, darkMode, setMainF, idioma, setIdioma} = useContext(counterContext)
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <header>
        <div className='icon-header'>
          <SiBlueprint />
        </div>
        <h3 onClick={() => setMainF('proyectos')}>{idioma === 'spanish'? 'proyectos': 'proyects'}</h3>
        <h3 onClick={() => setMainF('CV')} >cv</h3>
        <h3 onClick={() => darkMode()}>{dark? <CiLight /> : <CiDark />}</h3>
        <div className='div-idiomas' onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)}>
          <h3>{idioma === 'spanish'? 'idioma': 'language'}</h3>
          <div className={`h3-items ${toggle? '': 'hidden'}`}>
            <h3 className={`${dark? 'h3-idioma' : 'h3-idioma-light'}`} onClick={() => setIdioma('spanish')} >{idioma === 'spanish'? 'Español': 'Spanish'}</h3>
            <h3 className={`${dark? 'h3-idioma' : 'h3-idioma-light'}`} onClick={() => setIdioma('english')} >{idioma === 'spanish'? 'Ingles': 'English'}</h3>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderVar;