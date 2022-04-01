import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Profile = (props) => {
    const { id } = useParams()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/profile/${id}`)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>Profile</div>
  )
}

export default Profile