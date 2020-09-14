import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <section className="hero is-medium is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Welcome to licium.</h1>
                    <h2 className="subtitle">
                        Licium does cool stuff with the blockchain.
                    </h2>
                    <Link to="/assets">
                        <button className="button ">Show your assets</button>
                    </Link>
                    <Link to="/iscc-registration">
                        <button className="button ">Generate ISCC</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
