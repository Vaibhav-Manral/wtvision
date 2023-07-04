import { useState } from 'react'

import './App.css'

function App() {
  const [move,setmove]=useState(2);
  // const [color,setcolor]=useState(true);
  const [index,setindex]=useState(0);

  const tabs = ["Runs", "Noball", "LegBye", "Bye", "Wide"];

 

const show=(el,i)=>{
  if(i==0){
    setmove(2)
  }else{
    setmove(i*(100/tabs.length))
  }
    setindex(i)
}

  return (
      <div className='maindiv'>
        <div className='item' style={{left:`${move}%`}}>
        </div>
        {
          tabs.map((el, i) => {
            return (
              <div className='_item1' style={{color:i==index?"#fff":"#808080"}} 
              onClick={()=>show(el,i)}>
              {el}
              </div>  
            )
          })
        }
      </div>

  )
}

export default App
