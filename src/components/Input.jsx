import React, { useState } from 'react'

const Input = () => {

    const [firstname,setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [user, setUser] = useState([])
   
    const saveUser = ()=>{
        console.log(firstname,lastname);
        setUser([...user, {firstname,lastname,username,password}])
        console.log(user);
    }

  return (
    <div className='text-center max-w-md mx-auto p-4'>
        <input 
            type="text" 
            className='border-2 border-green-300 rounded  block mb-3 w-full' 
            onChange={(e)=>setfirstname(e.target.value)}
            placeholder='First Name' />
        <input 
            type="text" 
            className='border-2 border-green-300 rounded  block mb-3 w-full' 
            onChange={(e)=>setlastname(e.target.value)}
            placeholder='Last Name' />
        <input 
            type="text" 
            className='border-2 border-green-300 rounded  block mb-3 w-full' 
            onChange={(e)=>setusername(e.target.value)}
            placeholder='User Name' />
        <input 
            type="text" 
            className='border-2 border-green-300 rounded  block mb-3 w-full' 
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='Password' />
        <button 
            className='border-2 bg-green-300 p-2 rounded hover:bg-transparent hover:text-black hover:border-green-300 text-white w-full transition duration-300'
            onClick={saveUser}
        >Change name</button>

        <div>
            <div className='flex justify-between my-3 px-3 py-2 shadow-lg rounded'>
                <p>First Name</p>
                <p>Last Name</p>
                <p>User Name</p>
                <p>Password</p>
            </div>
            {user.map((res, index)=>(
                <div className='flex justify-between my-3 py-2 px-3 rounded even:bg-violet-300 odd:bg-orange-300' key={index}>
                    <p>{res.firstname}</p>
                    <p>{res.lastname}</p>
                    <p>{res.username}</p>
                    <p>{res.password}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Input