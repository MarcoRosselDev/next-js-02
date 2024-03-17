import './App.css'
import HeaderVar from './components/header/header-var'
import Main from './components/main/main-component'
import Footer from './components/footer/footer-component'
import StateCompo from './context/StateCompo'

function App() {

  return (
    <StateCompo>
      <HeaderVar />
      <Main />
      <Footer />
    </StateCompo>
  )
}

export default App
