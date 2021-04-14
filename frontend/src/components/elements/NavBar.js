import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component
{
    render() {
        return(
            <header  className="App-header">
            <Navbar className="navbar">
                <Nav>
                    <Nav.Link className="navlink" href="/">Home</Nav.Link>
                    <Nav.Link className="navlink" href="/register">Register</Nav.Link>
                    <Nav.Link className="navlink" href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
            </header>
        )

    }
}
export default NavBar