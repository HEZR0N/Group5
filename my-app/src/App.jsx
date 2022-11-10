import React, {useState} from 'react'
import NavBar from './components/NavBar/NavBar'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import Shop from './components/Shop/Shop'
import SignUp from './components/SignUp/SignUp'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Altshop from './components/Altshop/Altshop'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Default from './components/Defualt/Defualt';

const app = () => {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Shop" element={<Altshop/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/SignUp" element={<SignUp/>}/> 
      <Route path="/About" element={ <About/>} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Admin" element={<Admin/>}/> 
      <Route path="*" element={ <Default/>} />
    </Routes>
     </>
    
  )
}

export default app