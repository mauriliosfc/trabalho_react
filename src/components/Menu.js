import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Menu() {
    return (
        <div className="Menu">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="1">Ex1</Nav.Link>
                    <Nav.Link href="2">Ex2</Nav.Link>
                    <Nav.Link href="4">Ex4</Nav.Link>
                    <Nav.Link href="5">Ex5</Nav.Link>
                    <Nav.Link href="imagens">Imagens</Nav.Link>
                    <Nav.Link href="form">Formulário</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Menu;
