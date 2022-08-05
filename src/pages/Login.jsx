import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { forgotPassword, signIn, signUpProvider } from '../auth/firebase'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(email, password, navigate)
    }

    const handleProviderLogin = () => {
        signUpProvider(navigate);
      };

  return (
    <div className='d-flex justify-content-between row'>
        <div className='d-none d-md-block col-md-6'>
        <img src={'https://picsum.photos/700/700'} className="w-100" alt="sample-movie" />
        </div>
        <div className="col-md-6 mx-auto">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center px-2">
                <div className='input-group mb-3 gap-4'>
                    {/* <label htmlFor="email" className="form-label col-1 me-3">Email</label> */}
                    <input type="email" className='form-control' placeholder="Enter Your Email Adress" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input-group mb-3 gap-4'>
                    {/* <label htmlFor="password" className="form-label col-1 me-3">Password</label> */}
                    <input type="password" className='form-control' placeholder="Enter Your Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="link" onClick={() => forgotPassword(email)}>
            Forgot Password?
          </div>
                <button className='btn btn-primary text-white form-control mb-1'>Login</button>
            <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Continue with Google
        </button>
            </form>
        </div>
    </div>
  )
}

export default Login