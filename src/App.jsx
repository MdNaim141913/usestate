import { useState } from 'react'
import './App.css'

function App() {
   const [count,setCount] = useState(124);
   console.log(count)
  return (
   <div className='wrapper'>
    <p>{0}</p>
    <div className="btn-container">
      <button 
       style={{padding:"22px", background:'#59dd38',border:"none",borderRadius:"12px" ,fontSize:'18px'}}>
        Increment
        </button>
      <button onClick={()=> console.log(count-1)}
      style={{padding:"22px", background:'#d83d3d',border:"none",borderRadius:"12px" ,fontSize:'18px'}}> 
    Decrement
</button>
    </div>
   </div>
  )
} 

export default App
