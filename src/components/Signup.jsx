import React from 'react'

const Signup = () => {
  return (
    <form action='' method='' className='max-w-screen-md mx-auto rounded shadow-lg px-4 py-10 flex flex-col gap-5 mt-5'>
        <h1 className='text-2xl font-bold text-center'>Sign In</h1>
        <input className='border-0 border-b-2 border-b-green-500 focus:border-b-black focus:ring-0' placeholder='Enter your full name' type="text" />
        <input className='border-0 border-b-2 border-b-green-500 focus:border-b-black focus:ring-0' placeholder='Enter your email' type="text" />
        <input className='border-0 border-b-2 border-b-green-500 focus:border-b-black focus:ring-0' placeholder='Enter your password' type="text" />
        <button className='bg-green-500 text-white py-2 rounded'>Sign In</button>
    </form>
  )
}

export default Signup