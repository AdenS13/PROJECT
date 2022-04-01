import React from 'react'
import { Link } from 'react-router-dom'
import MainImg from './../images/MainImg.png'
import logo from './../images/Logo.png'
import styles from './../styles/Main.module.css'

const Main = () => {
    return (
        <div className={styles.container}>
            <nav>
                <div className={styles.logo_text}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h1>Project Place</h1>
                </div>
                <div>
                    <ul className={styles.listItems}>
                        <li className={styles.links}>Home</li>
                        <Link to='/projects' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.links}>Projects</li></Link>
                        <li className={styles.login_btn}>Login/Reg</li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className={styles.col1}>
                    <h1>Welcome to Project<br />Place</h1>
                    <p>Here at Project Place, we want you to be able to<br />manage your projects while getting feedback from others.<br />We all get stuck when it comes to ideas and here<br />we want to help you fix that!</p>
                    <div className={styles.btns}>
                        <button>Browse</button>
                        <button>Create</button>
                    </div>
                </div>
                <div className={styles.col2}>
                    <img src={MainImg} alt="" className={styles.main_img} />
                </div>
            </main>
            <hr />
            <section>
                <div className={styles.cards}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </section>
        </div>
    )
}

export default Main