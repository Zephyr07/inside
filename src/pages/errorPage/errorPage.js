import * as React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class ErrorPage extends React.Component{


    render(){
        return (
            <Container>
                <Jumbotron>
                    <h1 className='text-center'>Oups!!! Cette page n'existe pas</h1>
                </Jumbotron>
            </Container>
        );
    }
}

export default ErrorPage;