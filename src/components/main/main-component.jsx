import { useContext } from 'react';
import './main.css'
import counterContext from '../../context/counterContext';
import CV from './cv/CV'
import Proyectos from './proyectos/Proyectos'

function Main() {

  const {main} = useContext(counterContext)

  return (
    <main>
      {main === 'proyectos'?  <Proyectos /> : <CV />}
    </main>
  )
}

export default Main;