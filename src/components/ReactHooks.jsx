import React, { useState } from 'react'

const reactHooks = () => {
    const [name, setName] = useState('Daniel')
    const [num, setNum] = useState(0)
  return (
    <div>
        <p>{name}</p>
        <p className='bg-red-300 p-2 font-semibold mb-4'>The number is {num}</p>
        <button onClick={()=>setName('Seun')} className='bg-blue-300 p-2 rounded me-2'>Change Name</button>
        <button onClick={()=>setNum(num+1)} className='bg-violet-300 p-2 rounded me-2'>Increase</button>
        <button onClick={()=>setNum(num >= 1 ? num-1: num)} className='bg-green-300 p-2 rounded'>Decrease</button>
    </div>
  )
}

export default reactHooks