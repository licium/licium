import React from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectSelectedAssets } from '../../store/asset/assetSlice'

export default function RegistrationSuccess() {
  const selecedAssets = useSelector(selectSelectedAssets)

  return (
    <Container>
      <Jumbotron>
        <h1>Registration successful</h1>
        <p>You sucessfully registered {selecedAssets.length} assets.</p>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </Jumbotron>
    </Container>
  )
}
