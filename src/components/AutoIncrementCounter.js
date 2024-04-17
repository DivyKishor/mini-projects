import React, {useEffect, useState} from 'react'

const AutoIncrementCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () =>{
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    },[]);

  return (
    <div className='flex justify-center'>
      {count}
    </div>
  )
}

export default AutoIncrementCounter
