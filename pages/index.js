import decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import jwt from 'jsonwebtoken';


export default function Home() {
  const [detail, setDetail] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser();
    // console.log(detail)
  }

  const authUser = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(detail)
      }).then(resData => resData.json())

      if (res.token) {
        const json = decode(res.token)
        console.log("User detail", json)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" name="username" onChange={handleChange} />
        <input placeholder="password" name="password" onChange={handleChange} />
        <button>Login</button>
      </form>
    </div>
  )
}
