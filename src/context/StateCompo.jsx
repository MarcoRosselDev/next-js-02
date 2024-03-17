import { useState } from "react";
import counterContext from "./counterContext";

const StateCompo = ({children}) => {
  const [counter, setCounter] = useState(0)

  function plusCount() {
    setCounter(prev => prev + 1)
  }
  function lestCount() {
    setCounter(prev => prev - 1)
  }

  return (
    <counterContext.Provider 
      value={{
        counter, 
        plusCount, 
        lestCount}}>
      {children}
    </counterContext.Provider>
  )
}

export default StateCompo;