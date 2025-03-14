
// import  {config}  from "./config"

import { env } from "./env.ts"

// console.log(env)

const App = () => {
  
  
  // const SOME_SECRET = config.VITE_SOME_SECRET
  // const ANOTHER_SECRET = config.VITE_ANOTHER_SECRET
  const thing = env.VITE_ANOTHER_SECRET
  const api = env.VITE_SOME_SECRET
  console.log(thing)
  console.log(api)

  return (
    <div>
      
    </div>
  )
}

export default App
