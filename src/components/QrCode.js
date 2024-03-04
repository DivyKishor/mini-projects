import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCode = ({value}) => {
  const [keyword,setKeyword] = useState(value);
  return (
    <div class="grid place-items-center">
      <input
        onChange={(e)=> setKeyword(e.target.value)} 
        className='m-2 p-2 border border-blue-400' 
        type="text" name="qr-code" 
        placeholder="Enter your text here" value={keyword} />
      <QRCode value={keyword} bgColor='#FFFFFF' size="200" title={keyword}/>
    </div>
  )
}

export default QrCode
