import React from 'react'
import { Button } from './button'
const Signup = () => {
  return (
    <div >
        SignUp
      <div>
            <input type="text" placeholder='enter email'/>
            <input type="text" placeholder='enter password'/>
      </div>
      <div>
        <Button appName='Sumbitttt'>Sumbit</Button>
      </div>
    </div>
  )
}

export default Signup
