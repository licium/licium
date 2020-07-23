import React from 'react'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export interface ActionButtonProps {
  disabled?: boolean
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <DropdownButton
      as={ButtonGroup}
      title="Actions"
      id="action-button"
      disabled={props.disabled}
    >
      <Dropdown.Item eventKey="1">
        <Link to={'/registration'}>Registration</Link>
      </Dropdown.Item>
    </DropdownButton>
  )
}
