import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectSelectedAssets } from '../../store/asset/assetSlice'

export default function RegistrationSuccess() {
  const selecedAssets = useSelector(selectSelectedAssets)

  return (
    <section className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Registration successful</h1>
          <h2 className="subtitle">
            You sucessfully registered {selecedAssets.length} assets.
          </h2>
          <Link to="/">
            <button className="button">Back to home</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
