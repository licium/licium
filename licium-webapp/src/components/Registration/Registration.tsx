import React, { useState } from 'react'
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { useSelector } from 'react-redux'
import { selectSelectedAssets } from '../../store/asset/assetSlice'
import './Registration.scss'

export default function Registration() {
  const pageTitleProps: PageTitleProps = {
    title: 'Registration',
    description: 'Register your assets on the blockchain.',
  }

  const selectedAssets = useSelector(selectSelectedAssets)

  const assetList = selectedAssets.map((asset) => (
    <ListGroup.Item>
      <span>{asset.fileName}</span>
      <li className="fas fa-trash" />
    </ListGroup.Item>
  ))

  const [assetsVisible, setAssetsVisible] = useState<boolean>(false)

  const buttonText = () => (assetsVisible ? 'Hide assets' : 'Show assets')

  return (
    <Container className="registration">
      <Row>
        <PageTitle {...pageTitleProps} />
      </Row>
      <Row className="asset-info">
        <h6>{selectedAssets.length} assets selected.</h6>
        <Button onClick={() => setAssetsVisible(!assetsVisible)}>
          {buttonText()}
        </Button>
      </Row>
      <Row>
        <Collapse in={assetsVisible}>
          <ListGroup variant="flush">{assetList}</ListGroup>
        </Collapse>{' '}
      </Row>
      <Col>
        <Form>
          <Form.Group controlId="registrationForm.SelectBlockChain">
            <Form.Label>Select Blockchain</Form.Label>
            <Form.Control as="select">
              <option>Ethereum</option>
              <option>Bloxberg</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="registrationForm.SelectBlockChain">
            <Form.Label>Select Wallet</Form.Label>
            <Form.Control as="select">
              <option>MyWallet</option>
              <option>Someone elses wallet</option>
            </Form.Control>
          </Form.Group>
          <Button variant={'primary'} type={'submit'}>
            Register
          </Button>
        </Form>
      </Col>
    </Container>
  )
}
