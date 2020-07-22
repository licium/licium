import React from 'react'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'

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
      <Dropdown.Item eventKey="1">Registration</Dropdown.Item>
    </DropdownButton>
  )
}
