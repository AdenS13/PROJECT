import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = e => {
    
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" onChange={e => setPassword(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default Login