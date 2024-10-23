import React, { useState } from 'react'
import { Copy } from 'lucide-react';


const Input = ({useColor, handleCopy}) => {   
  
     const handleChange = (e) => {
          useColor(e.target.value);
     }
  return (
    <div className='input-box'>
     <input type="color" onChange={handleChange} />
     <Copy onClick={handleCopy} style={{cursor:"pointer"}} />
    </div>
  )
}

export default Input