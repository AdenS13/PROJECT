import { Link, useEffect, useState } from 'react-router-dom'
import React from 'react'
import logo from './../images/Logo.png'
import styles from './../styles/Projects.module.css'

const Projects = () => {
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
            <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.login_btn}>Login/Reg</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Projects