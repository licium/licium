import React from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import {
  ButtonGroup,
  Col,
  Container,
  DropdownButton,
  Row,
  Dropdown,
} from 'react-bootstrap'
import IdentificationTable from './components/IdentificationTable/IdentificationTable'

function App() {
  return (
    <Container>
      <AppHeader />
      <Row>
        <Col>
          <h2>Your Assets</h2>
          <h5>Select an Item from the list to perfom an action on it</h5>
        </Col>
        <Col className="action-buttons">
          <DropdownButton
            as={ButtonGroup}
            title="Actions"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Registration</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <IdentificationTable />
      </Row>
    </Container>
  )
}

export default App
