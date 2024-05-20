import React from 'react'

const Mapping = () => {
    let allStudents = [
        {
          firstName:'Uthman',
          lastName:'Abdullahi',
          gender:'male',
        },
        {
          firstName:'Seun',
          lastName:'Abdullahi',
          gender:'male',
        },
        {
          firstName:'Oluwas',
          lastName:'Abdullahi',
          gender:'male',
        },
        {
          firstName:'Uthman',
          lastName:'Abdullahi',
          gender:'male',
        },
        {
          firstName:'Omo mi',
          lastName:'Abdullahi',
          gender:'male',
        },
      ]
  return (
    <div>
         {
          allStudents.map((res, index)=>(
            <div key={index} className='my-2'>
              <h1 className='bg-orange-300 mb-2 p-2 font-semibold'>{res.firstName}</h1>
            </div>
          ))
        }
    </div>
  )
}

export default Mapping