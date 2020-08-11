import React from 'react'
import { Link } from 'react-router-dom'

export interface ActionButtonProps {
  disabled?: boolean
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button is-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          disabled={props.disabled}
        >
          <span>Actions</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <Link
              to={{
                pathname: `/registration/`,
              }}
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
