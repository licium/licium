import React from 'react'
import { Link } from 'react-router-dom'

export default function RegistrationSuccess() {
  return (
    <section className="hero is-medium is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Registration successful</h1>
          <h2 className="subtitle">You sucessfully registered {0} assets.</h2>
          <Link to="/">
            <button className="button">Back to home</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
