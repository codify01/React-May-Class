import React from 'react'
import Google from './components/Google'
import ReactHooks from './components/ReactHooks'
import Mapping from './components/Mapping'
import Signin from './components/Signin'
import Input from './components/Input'
import Api from './components/Api'
import Signup from './components/Signup'
const App = () => {
  return (
    <div>
      <ReactHooks/>
      <Mapping/>
      <Signin/>
      <Signup/>
      <Input/>
      <Api/>
    </div>
  )
}

export default App