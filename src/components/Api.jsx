import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    const [data, setData] = useState([])
    const [item, setitem] = useState([])
    const [isloading, setIsloading] = useState(false)
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setData(response.data)
            console.log(response);
            setIsloading(true)
        }).catch((err)=>{
            console.log(err);
        })
    },[])


  return (
    <div>
        {/* <button onClick={getData} className='bg-slate-900 text-teal-100 rounded m-3 p-3'>Fetch</button> */}
        <div className='flex flex-wrap text-center text-xl font-bold bg-slate-800  text-teal-100'>
                <h1 className='flex-1 border p-3'>Name</h1>
                <h1 className='flex-1 border p-3'>Email</h1>
                <h1 className='flex-1 border p-3'>Username</h1>
        </div>
        {!isloading?<div className='loader'></div>:
            <div>
            {data.map((eachData)=>(
            
            <>
            <div className='flex flex-wrap'>
                <h1 className='flex-1 border p-3 font-semibold'>{eachData.name}</h1>
                <h1 className='flex-1 border p-3 font-semibold'>{eachData.email}</h1>
                <h1 className='flex-1 border p-3 font-semibold'>{eachData.username}</h1>
            </div>
            </>
        ))}
        </div>

}
       
    </div>

  )
}

export default Api