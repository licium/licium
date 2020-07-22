import React from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to licum.</h1>
        <p>Licium does cool stuff with the blockchain.</p>
        <Link to="/assets">
          <Button>Show your assets</Button>
        </Link>
      </Jumbotron>
    </Container>
  )
}
