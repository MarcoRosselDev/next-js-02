import { useContext } from 'react';
import './header.css'
import { SiBlueprint } from "react-icons/si";
import counterContext from '../../context/counterContext';

function HeaderVar() {
  
  const {counter, plusCount, lestCount} = useContext(counterContext)

  return (
    <>
      <header>
        <div className='icon-header'>
          <SiBlueprint />
        </div>
        <h3 onClick={() => plusCount()}>proyectos</h3>
        <h3 onClick={() => lestCount()} >cv</h3>
        <h3>modo claro</h3>
        <p>{counter}</p>
      </header>
    </>
  )
}

export default HeaderVar;