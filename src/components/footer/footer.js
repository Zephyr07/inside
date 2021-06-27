import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'
import './footer.css';

class Footer extends React.Component{


    render(){
        return (
            <Navbar sticky="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark" className="gold">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                &copy; 2021

            </Navbar>
        );
    }
}

export default Footer;