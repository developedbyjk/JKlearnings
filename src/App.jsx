import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {data} from './data'

function App() {
  // const [count, setCount] = useState(0)

  const showData = data.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.text}- <i>{item.date}</i> </p>
        
      </div>
    )
  })


  return (
    <>
    <div class="container">
      <h1>#Learnings✨</h1>
      <br/>
    

         {showData}
   
        
    </div>
    </>
  )
}

export default App
