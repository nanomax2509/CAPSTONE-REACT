import React from 'react'
import { Fragment } from 'react'
import './FooterHomeTemplate.scss'
import { NavLink } from 'react-router-dom'
export default function FooterHomeTemplate() {
  return (
    <Fragment>
        <footer className="footer-home-template">
        <div className="footer-section">
    <h3>GET HELP</h3>
    <NavLink className={'footer-link'} to='/'>Home</NavLink>
    <NavLink className={'footer-link'} to='/'>Nike</NavLink>
    <NavLink className={'footer-link'} to='/'>Adidas</NavLink>
    <NavLink className={'footer-link'} to='/'>Contact</NavLink>

  </div>
  <div className="footer-section">
    <h3>SUPPORT</h3>
    <NavLink className={'footer-link'} to='/'>About</NavLink>
    <NavLink className={'footer-link'} to='/'>Contact</NavLink>
    <NavLink className={'footer-link'} to='/'>Help</NavLink>
    <NavLink className={'footer-link'} to='/'>Phone</NavLink>

  </div>
  <div className="footer-section">
    <h3>REGISTER</h3>
    <NavLink className={'footer-link'}to='/'>Register</NavLink>
    <NavLink className={'footer-link'}to='/'>Login</NavLink>

  </div>
  </footer>
  <div className="footer-copyright">
    <h4>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải. </h4>
  </div>
  </Fragment>
  )
}
