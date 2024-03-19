import { useContext } from 'react';
import './main.css'
import counterContext from '../../context/counterContext';
import CV from './cv/CV'
import Proyectos from './proyectos/Proyectos'
import CanvasComponent from '../box/CanvasComponent';

function Main() {

  const {main} = useContext(counterContext)

  return (
    <main>
      {/* {main === 'proyectos'?  <Proyectos /> : <CV />} */}
      {main === 'proyectos'?  <Proyectos /> : <CanvasComponent />}
    </main>
  )
}

export default Main;