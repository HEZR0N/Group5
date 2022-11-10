import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <>
    <div id="signuponly">
   <div class="signup-box">
   <h1>Sign Up</h1>
    <h4>its free and only takes a minute</h4>
    <form>
        <label>First Name</label>
        <input type="text" placeholder=""/>
        <label>Last Name</label>
        <input type="text" placeholder=""/>
        <label>Email</label>
        <input type="email" placeholder=""/>
        <label>Password</label>
        <input type="password" placeholder=""/>
        <label>Confirm Password</label>
        <input type="password" placeholder=""/>
        <input type="button" value="Submit"/>
    </form>
    <p>By clicking the Sign Up button,you agree to our <br/>
    <a href="#">Terms and Condition</a> and <a href="">Policy and Privacy</a>
    </p>
</div>
<p class="para-2">Already have an account? <a href="login.html">Login here</a></p>
</div>
</>
  )
}

export default SignUp