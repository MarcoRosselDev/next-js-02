import { useContext } from 'react';
import './main.css'
import counterContext from '../../context/counterContext';

function Main(params) {

  const {counter} = useContext(counterContext)
  

  return (
    <main>
      <h1>counter: {counter}</h1>
    </main>
  )
}

export default Main;