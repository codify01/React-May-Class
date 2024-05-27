import React from 'react'
import Google from './components/Google'
import ReactHooks from './components/ReactHooks'
import Mapping from './components/Mapping'
import Signin from './components/Signin'
import Input from './components/Input'
import Api from './components/Api'
const App = () => {
  return (
    <div>
      <ReactHooks/>
      <Mapping/>
      {/* <Signin/> */}
      <Input/>
      <Api/>
    </div>
  )
}

export default App