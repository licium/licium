import React from 'react';
import { SelectCallback } from 'react-bootstrap/esm/helpers';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { goToSection, selectNavSection, NavSection } from '../../store/navigation/navigationSlice';


export function NavBar() {

    const navSection = useSelector(selectNavSection)

    const dispatch = useDispatch()

    const onSelect: SelectCallback = (eventKey) => dispatch(goToSection(eventKey as NavSection))

    return (

        <Nav variant="tabs" defaultActiveKey={navSection} onSelect={onSelect}>
            <Nav.Item>
                <Nav.Link eventKey="id"><i className="fas fa-address-card"></i> Identification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="reg"><i className="fas fa-pen"></i> Registration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="cert"><i className="fas fa-award"></i> Certification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="veri"><i className="fas fa-thumbs-up"></i> Verification</Nav.Link>
            </Nav.Item>

        </Nav>

    )
}
