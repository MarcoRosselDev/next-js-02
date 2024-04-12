import { useContext, useRef } from "react";
import counterContext from '../../../context/counterContext'
import { gsap } from "gsap";
import { useEffect } from "react";


function Proyectos() {

  const {idioma} = useContext(counterContext)
  
  useEffect(() =>{
    gsap.from(".box", {
      opacity: 1,
      y: 100,
      duration: 2
    });
  }, [])

  return (
    <div className="div-proyectos">
      <p className="box">{idioma === 'spanish'? 'contenido main en espanish' : 'main content in english'}</p>
    </div>
  )
}

export default Proyectos;