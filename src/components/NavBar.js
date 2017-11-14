import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = (props) => {

  const homeBackground = () => {
    return  props.location.pathname === '/' ? 'white-back' : ''
  }
  
  return (
    <div id="nav-bar">
      <NavLink className={homeBackground()} to='/home'>Home</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/bio'>Bio</NavLink>
      <NavLink to='/resume'>Quick Résumé</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default NavBar;