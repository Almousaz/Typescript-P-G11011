import './App.css'
import { env } from './config/env'

function App() {

  const thing = env.VITE_API_CODE
  console.log(thing)

  return (
    <>
     <h2>API</h2>
    </>
  )
}

export default App
