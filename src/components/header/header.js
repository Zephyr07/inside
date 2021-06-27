import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './header.css';
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component{


    render(){
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="gold">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Accueil</Nav.Link>
                        <NavDropdown title="News" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Notes de service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Notes d'information</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Anniversaires</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Evènements</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="BVS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Histoire</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">CEO</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Direction</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Produits</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Promos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Points de vente</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Administration" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Utilisateurs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Actualités</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#deets">Mon espace</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Déconnexion
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;