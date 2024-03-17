import { useContext } from 'react';
import './header.css'
import { SiBlueprint } from "react-icons/si";
import counterContext from '../../context/counterContext';

function HeaderVar() {
  
  const {counter, plusCount, lestCount, dark, darkMode,} = useContext(counterContext)

  return (
    <>
      <header>
        <div className='icon-header'>
          <SiBlueprint />
        </div>
        <h3 onClick={() => plusCount()}>proyectos</h3>
        <h3 onClick={() => lestCount()} >cv</h3>
        <h3 onClick={() => darkMode()}>{dark? 'modo claro' : 'modo oscuro'}</h3>
        <p>{counter}</p>
      </header>
    </>
  )
}

export default HeaderVar;