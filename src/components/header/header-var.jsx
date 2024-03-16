import './header.css'
import { SiBlueprint } from "react-icons/si";

function HeaderVar() {
  return (
    <>
      <header>
        <div className='icon-header'>
          <SiBlueprint />
        </div>
        <h3>proyectos</h3>
        <h3>cv</h3>
        <h3>modo claro</h3>
      </header>
    </>
  )
}

export default HeaderVar;