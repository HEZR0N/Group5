import React, {useState, useContext} from 'react'
import './NavBar.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import clouds from '../../assets/storm.png'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {BiPackage} from 'react-icons/bi'
import { useCart } from "react-use-cart";
import {BsFillPersonFill} from 'react-icons/bs'
import {GrUserAdmin} from 'react-icons/gr'
import {AiFillLock} from 'react-icons/ai'
const NavBar = () => {
  const isadmin=null;
  const isauthenicated=null;
  const { totalItems } = useCart();
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
       <li> { isadmin && <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Admin" end ><AiFillLock/>Admin</NavLink>}</li>
        <li> { !isauthenicated ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Cart" end ><HiOutlineShoppingCart />cart {totalItems}</NavLink>:<NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/SignUp" end ><BiPackage/> orders 2</NavLink>}</li>
        <li> { !isauthenicated ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/SignUp" end > Signup </NavLink> : <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Cart" end ><HiOutlineShoppingCart />cart {totalItems}</NavLink>}</li>
        <li> { !isauthenicated ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Login" end > Login </NavLink> : <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/login" end ><BsFillPersonFill/> Marco</NavLink>}</li>
      </ul>
    </div>
  </nav>
  </div>
    </>
  )
}

export default NavBar