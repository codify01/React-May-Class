import React from 'react'
import Google from './components/Google'
import ReactHooks from './components/ReactHooks'
import Mapping from './components/Mapping'
const App = () => {
  let gender = 'male'
 
  return (
    <div className='px-'>
      <div className={gender=='male'? "text-green-500":'text-violet-900'}>
        App
       
      </div>
      <ReactHooks/>
      <Mapping/>
      {/* <Google/> */}
    </div>
  )
}

export default App