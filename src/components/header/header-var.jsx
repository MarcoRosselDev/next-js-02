import { useContext } from 'react';
import './header.css'
import { SiBlueprint } from "react-icons/si";
import counterContext from '../../context/counterContext';

function HeaderVar() {
  
  const {dark, darkMode, setMainF} = useContext(counterContext)

  return (
    <>
      <header>
        <div className='icon-header'>
          <SiBlueprint />
        </div>
        <h3 onClick={() => setMainF('proyectos')}>proyectos</h3>
        <h3 onClick={() => setMainF('CV')} >cv</h3>
        <h3 onClick={() => darkMode()}>{dark? 'modo claro' : 'modo oscuro'}</h3>
        <h3>idioma</h3>
      </header>
    </>
  )
}

export default HeaderVar;