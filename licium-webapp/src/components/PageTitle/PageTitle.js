import React from 'react'

export default function PageTitle(props) {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{props.title}</h1>
                    <h2 className="subtitle">{props.description}</h2>
                </div>
            </div>
        </section>
    )
}
