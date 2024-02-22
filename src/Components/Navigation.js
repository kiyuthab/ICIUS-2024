import React, {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = ()=>{

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = ()=>{
        if(window.scrollY > 380){
            setChangeColor(true);
        } else{
            setChangeColor(false);
        }
    };

    useEffect(() =>{
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return(
        <>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""} fixed="top">
            <Container fluid>
                <Navbar.Brand href="#" className="fs-3"><b>ICIUS 2024</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="px-2"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className="me-2" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/callpaper">Call For Papers</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/themes">Themes</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/committee">Committee</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/importantdates">Important Dates</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/abstract">Abstract Submission</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/registration">Registration</Nav.Link>
                        <Nav.Link className="me-2" as={Link} to="/venue">Venue</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation;