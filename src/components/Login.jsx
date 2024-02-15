import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    useEffect(()=>{
        const data = localStorage.getItem('automation_linkedin')
        if(data)
        navigate('/')
    })
  const handleLogin = async()=>
  {
    const response = await fetch('http://localhost:3000/api/auth/linkedin/authorize',{
        method:"GET"
    })
    const data = await response.json()
    window.location.href = data['url']
  }
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>Linkeion </b>
            </a>
          </div>
          <div className="card-body text-center">
            <p className="login-box-msg">Sign in to start your session</p>
            <button className="btn btn-primary" onClick={handleLogin}>SignIn with LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
