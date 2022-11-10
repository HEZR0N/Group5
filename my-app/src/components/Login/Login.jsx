import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div id="lugin">
    <div class="login-box">
    <h1>Login</h1>
    <form>
        <label>Email</label>
        <input type="email" placeholder=""/>
        <label>Password</label>
        <input type="password" placeholder=""/>
        <input type="button" value="Submit"/>
        </form>
</div>
<p class="para-2">Not have an account? <a href="signup.html">Sign Up Here</a></p>
</div>
</>
  )
}

export default Login