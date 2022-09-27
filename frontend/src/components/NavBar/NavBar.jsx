import React, {useState, useContext} from 'react'
import './NavBar.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import clouds from '../../assets/storm.png'
import {HiOutlineShoppingCart} from 'react-icons/hi'
const NavBar = () => {
  return (
    <>
    <div id="navbaronly">
    <nav class="menu-container">
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
    <a href="#" class="menu-logo"><img src={clouds} alt="hello"/></a>
    <div class="menu">
      <ul>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/" end> Home </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Shop" end> Shop </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/About" end> About </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Contact" end > Contact Us </NavLink></li>
      </ul>
      <ul>
        <li><Link to="/shop"><HiOutlineShoppingCart />0</Link></li>
        <li><Link to="/SignUp">Sign-up</Link></li><li><Link to="/login">login</Link></li>
      </ul>
    </div>
  </nav>
  </div>
    </>
  )
}

export default NavBar