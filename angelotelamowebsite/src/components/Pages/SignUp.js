import React from 'react'
import '../../App.css'
import { Register } from '../Register'
import Footer from '../Footer'
import Login from '../Login'

function SignUp() {
  return (
      <div className='sign-up'> 
            <Register/>
            <Login/>
            <Footer/>
      </div>
  )
}
export default SignUp
