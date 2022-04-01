import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './../styles/Register.module.css'

const Register = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler = e => {
        let {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <header>
                <h1>Register</h1>
            </header>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <div className={styles.submit_wrapper}>
                    <button className={styles.submit}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register