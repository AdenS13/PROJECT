import { Link, useEffect, useState } from 'react-router-dom'
import React from 'react'
import logo from './../images/Logo.png'
import styles from './../styles/Login_Reg.module.css'
import Register from './../components/Register'
import Login from './../components/Login'

const LoginReg = () => {
  return (
    <div>
      <nav>
        <div className={styles.logo_text}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1>Project Place</h1>
        </div>
        <div>
          <ul className={styles.listItems}>
            <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.links}>Home</li></Link>
            <Link to='/projects' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.links}>Projects</li></Link>
            <Link to='/login-reg' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.login_btn}>Login/Reg</li></Link>
          </ul>
        </div>
      </nav>
      <main>
        <div className={styles.register_col}>
          <Register />
        </div>
      </main>
      <footer>
        <div className={styles.footer_row}>
          <figure>
            <img src={logo} className={styles.logo} alt="Logo" />
          </figure>
          <div className={styles.footer_links}>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact Us</p>
            <p>Settings</p>
          </div>
          <div className={styles.footer_copyright}>Copyright &copy; 2021 Aden Smith Inc.</div>
        </div>
      </footer>
    </div>
  )
}

export default LoginReg