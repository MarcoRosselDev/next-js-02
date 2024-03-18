import { useState } from "react";
import counterContext from "./counterContext";

const StateCompo = ({children}) => {
  const [dark, setDark] = useState(true)
  const [main, setMain] = useState('proyectos')

  function darkMode() {
    setDark(prev => !prev)
  }

  function setMainF(prop) {
    setMain(prop)
  }

  return (
    <counterContext.Provider 
      value={{
        dark,
        darkMode,
        main,
        setMainF,
        }}>
      {children}
    </counterContext.Provider>
  )
}

export default StateCompo;