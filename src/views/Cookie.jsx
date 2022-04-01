import React, { useEffect } from 'react'
import axios from 'axios'

const Cookie = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/cookie', {withCredentials: true})
            .then(res => console.log('success'))
            .catch(err => console.log(err))
    })
  return (
    <div>Cookie</div>
  )
}

export default Cookie