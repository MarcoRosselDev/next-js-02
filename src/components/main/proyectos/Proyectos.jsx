import { useContext } from "react";
import counterContext from '../../../context/counterContext'

function Proyectos() {

  const {idioma} = useContext(counterContext)

  return (
    <div>
      <p>{idioma === 'spanish'? 'contenido main en espanish' : 'main content in english'}</p>
    </div>
  )
}

export default Proyectos;