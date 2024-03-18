import { useContext } from "react";
import counterContext from "../context/counterContext";
import HeaderVar from './header/header-var'
import Main from "./main/main-component";
import Footer from './footer/footer-component'
import './myComponent.css'
function MyComponent() {

  const {dark} = useContext(counterContext)

  return (
    <div className={`${dark? 'body-dark': 'body-light'} main-div`}>
      <HeaderVar />
      <Main />
      <Footer />
    </div>
  )
}

export default MyComponent;