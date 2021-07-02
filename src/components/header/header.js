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
                                <Nav.Link className="dropdown-i">Notes</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/anniversaire">
                                <Nav.Link className="dropdown-i">Anniversaires</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/actualite">
                                <Nav.Link className="dropdown-i">Evènements</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="BVS" id="collasible-nav-dropdown">
                            <LinkContainer to="/histoire">
                                <Nav.Link className="dropdown-i">Histoire</Nav.Link>
                            </LinkContainer>
                            <NavDropdown.Item href="#action/3.2">CEO</NavDropdown.Item>
                            <LinkContainer to="/organigramme">
                                <Nav.Link className="dropdown-i">Organigramme</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/product">
                                <Nav.Link className="dropdown-i">Produits</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/pos">
                                <Nav.Link className="dropdown-i">Points de vente</Nav.Link>
                            </LinkContainer>
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