import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component
{
    render() {
        return(
            <Navbar className="navbar">
                <Nav>
                    <Nav.Link className="navlink" href="/">Home</Nav.Link>
                    <Nav.Link className="navlink" href="/register">Register</Nav.Link>
                    <Nav.Link className="navlink" href="#link1">Link1</Nav.Link>
                    <Nav.Link className="navlink" href="#link2">Link2</Nav.Link>
                </Nav>
            </Navbar>
        )

    }
}
export default NavBar