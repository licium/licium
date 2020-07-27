import React from 'react'

export interface PageTitleProps {
  title: string
  description: string
}

export default function PageTitle(props: PageTitleProps) {
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
