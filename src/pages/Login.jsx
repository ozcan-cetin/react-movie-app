import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='d-flex row'>
        <div className='d-none d-md-block col-6'>
        <img src={'https://picsum.photos/700/700'} alt="sample-movie" />
        </div>
        <div className='ms-5 col-10 col-md-5'>
            <h1>Login Form</h1>
            <form>
                <div className='input-group mb-3 gap-4'>
                    <label htmlFor="email" className="form-label col-1 me-3">Email</label>
                    <input type="email" className='form-control' placeholder="Enter Your Email Adress" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input-group mb-3 gap-4'>
                    <label htmlFor="password" className="form-label col-1 me-3">Password</label>
                    <input type="password" className='form-control' placeholder="Enter Your Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default Login