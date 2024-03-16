import './App.css'
import HeaderVar from './components/header/header-var'
import Main from './components/main/main-component'
import Footer from './components/footer/footer-component'
import { createContext, useContext } from 'react'

function App() {

  const ThemeContext = createContext(null)

  return (
    <>
      <ThemeContext.Provider value='dark'>
        <HeaderVar />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
