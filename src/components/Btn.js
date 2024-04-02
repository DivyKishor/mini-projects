import React from 'react'

const Btn = ({children, ...rest}) => {
  return (
    <button className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 "
    {...rest}
  >
    {children}
  </button>
  )
}

export default Btn
