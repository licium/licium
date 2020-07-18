import React from 'react';
import Nav from 'react-bootstrap/Nav'

export function ContentNavbar() {
    return (

        <Nav variant="tabs">
            <Nav.Item>
                <Nav.Link><i className="far fa-address-card"></i>Identification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <i className="far fa-address-card"></i>Identification
                </Nav.Link>
            </Nav.Item>
        </Nav>

    )
}
