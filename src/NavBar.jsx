import React from 'react'
import { Col, Form, Nav, NavDropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
export default function NavBar() {
    return (
        <>
            <Container id="nav-container" fluid="xl">
                <Row id="nav-row" className='p-2'>
                    <Col xs={1}>
                        <img
                                src="logo.png"
                                width="90"
                                height="90"
                                className="d-inline-block align-top"
                                alt="GTU logo"
                            />
                    </Col>
                    <Col>
                        <div className='text-center text-capitalize' >
                            <div style={{ color: '#1d4e9e' }} className="text-uppercase fs-2 pb-3" id='headingOne'>
                                Gujarat Technological University
                            </div>
                            <div className="fs-3" id='headingTwo'>
                                Centre for Industrial Design (Open&nbsp;Design&nbsp;School)
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>              
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/"><Nav.Link href="#features" >Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/about"><Nav.Link href="/about" >About Us</Nav.Link></LinkContainer>
                            <NavDropdown title="Canvases" id="collasible-nav-dropdown" >
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/AEIOU%20Summary%20Canvas%20-%20A1%20size.jpg">AEIOU Summary Canvas</NavDropdown.Item>
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/Empathy%20Mapping%20canvas%20-%20A1%20size.png">Empathy Mapping Canvas</NavDropdown.Item>
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/Ideation%20Canvas_A1%20size.jpg">Ideation Canvas</NavDropdown.Item>
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/Product%20Development%20Canvas_A1%20size.pdf">Product Development Canvas</NavDropdown.Item>
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/Business_Model_Canvas_A1%20size.pdf">Bussiness Model Canvas</NavDropdown.Item>
                                <NavDropdown.Item target="_blank" href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/LNM_A2%20size.png">LNM Canvas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/" disabled  >Blog</Nav.Link>
                            <Nav.Link href="/" disabled >Academics</Nav.Link>
                            <Nav.Link href={'//'+window.location.hostname+":8000/register"} target="_blank">Registration</Nav.Link>
                            <Nav.Link href={'//'+window.location.hostname+":8000/login"} target="_blank">Login</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
