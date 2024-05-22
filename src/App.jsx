import React from 'react'
import Google from './components/Google'
import ReactHooks from './components/ReactHooks'
import Mapping from './components/Mapping'
import Signin from './components/Signin'
import Input from './components/Input'
const App = () => {
  return (
    <div>
      <ReactHooks/>
      <Mapping/>
      {/* <Signin/> */}

      <Input/>
    </div>
  )
}

export default App