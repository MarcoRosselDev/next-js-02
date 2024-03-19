import { useContext } from 'react';
import './main.css'
import counterContext from '../../context/counterContext';
import CV from './cv/CV'
import Proyectos from './proyectos/Proyectos'
import CanvasComponent from './box/CanvasComponent';

function Main() {

  const {main} = useContext(counterContext)

  return (
    <main>
      <div className='main-div-canvas'>
      {main === 'proyectos'?  <Proyectos /> : <CanvasComponent />}
      </div>
    </main>
  )
}

export default Main;