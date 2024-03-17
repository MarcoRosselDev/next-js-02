import './App.css'
import StateCompo from './context/StateCompo'
import MyComponent from './components/myComponent'

function App() {

  return (
    <StateCompo >
      <MyComponent />
    </StateCompo>
  )
}

export default App
