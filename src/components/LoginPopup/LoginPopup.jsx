/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

  const [currState , setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Enter your Name' required />}
          <input type="email" placeholder='Enter your Email' required />
          <input type="password" placeholder='Enter your Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms & conditions.</p>
        </div>
        {currState === "Login" ? <p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        : <p>Already have an Account ? <span onClick={()=>setCurrState("Login")}>Click Here</span></p>
        }
        
      </form>

    </div>
  )
}

export default LoginPopup