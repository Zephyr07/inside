import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './header.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'
class Header extends React.Component{


    render(){
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg"  variant="dark" className="gold header-page">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Accueil</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="News" id="collasible-nav-dropdown">
                            <LinkContainer to="/notes">
                                <Nav.Link>Notes</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/anniversaire">
                                <Nav.Link>Anniversaires</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/actualite">
                                <Nav.Link>Evènements</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="BVS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/histoire">Histoire</NavDropdown.Item>
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