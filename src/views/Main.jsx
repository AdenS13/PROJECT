import React from 'react'
import { Link } from 'react-router-dom'
import BookImg from './../images/BookImg.svg'
import VestImg from './../images/VestImg.svg'
import BrainImg from './../images/BrainImg.svg'
import MainImg from './../images/MainImg.png'
import logo from './../images/Logo.png'
import styles from './../styles/Main.module.css'


const Main = () => {



    return (
        <div>
            <nav>
                <div className={styles.logo_text}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h1>Project Place</h1>
                </div>
                <div>
                    <ul className={styles.listItems}>
                        <li className={styles.links}>Home</li>
                        <Link to='/projects' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.links}>Projects</li></Link>
                        <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}><li className={styles.login_btn}>Login/Reg</li></Link>
                    </ul>
                </div>
            </nav>
            <main>
                <div className={styles.col1}>
                    <h1>Welcome to Project<br />Place</h1>
                    <p>Here at Project Place, we want you to be able to<br />manage your projects while getting feedback from others.<br />We all get stuck when it comes to ideas and here<br />we want to help you fix that!</p>
                    <div className={styles.btns}>
                        <button className={styles.button1}>Browse</button>
                        <button className={styles.button2}>Create</button>
                    </div>
                </div>
                <div className={styles.col2}>
                    <img src={MainImg} alt="" className={styles.main_img} />
                </div>
            </main>
            <section>
                <div className={styles.cards_header}>
                    <h3><span className={styles.blue}>FEATURES</span></h3>
                    <h1>You will be amazed by the <span className={styles.blue}>outcome.</span></h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={VestImg} alt="Icon"></img>
                        </div>
                        <div className={styles.card_text}>
                            <h1>Styling</h1>
                            <p>If you need ideas on a design, color pallette, inspiration here we can help.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={BookImg} alt="Icon" />
                        </div>
                        <div className={styles.card_text}>
                            <h1>Organization</h1>
                            <p>Everybody struggles with organization sometimes so ask for some tips.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={BrainImg} alt="Icon" className={styles.card_imgg} />
                        </div>
                        <div className={styles.card_text}>
                            <h1>Brainstorm</h1>
                            <p>Wondering what to make? People are always looking to give advice so why not get some ideas.</p>
                        </div>
                    </div>
                </div>
            </section>
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

export default Main