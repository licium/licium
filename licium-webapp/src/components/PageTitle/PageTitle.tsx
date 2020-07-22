import React from 'react'

export interface PageTitleProps {
  title: string
  description: string
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>{props.description}</h5>
    </div>
  )
}
