import { Button, FloatingLabel } from 'flowbite-react'
import React from 'react'

const Signin = () => {
  return (
    <form action='' method='' className='max-w-screen-md mx-auto rounded shadow px-4 py-10 flex flex-col gap-5'>
        <p>Log in</p>
        <FloatingLabel variant="standard" label="Enter your email" color='success'/>
        <FloatingLabel variant="standard" label="Enter your Password" color='success'/>
        <Button color="light">Log In</Button>    
    </form>
  )
}

export default Signin