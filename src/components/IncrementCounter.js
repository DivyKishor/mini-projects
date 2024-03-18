import React, {useState} from 'react'

const IncrementCounter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <button onClick={()=>setCounter(counter-1)} className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 ">-</button>
      {counter}
      <button onClick={()=>setCounter(counter+1)} className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 ">+</button>
    </div>
  )
}

export default IncrementCounter
