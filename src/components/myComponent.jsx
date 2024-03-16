import { useContext } from "react";

function MyComponent() {
  const theme = useContext('theme')
  return (
    <div>
      <p>my component</p>
    </div>
  )
}

export default MyComponent;