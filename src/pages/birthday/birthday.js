import * as React from "react";
import Header from "../../components/header/header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './birthday.css';
import anniv_juillet from '../../asset/images/anniv_juillet.png'
import Footer from "../../components/footer/footer";
import Info from "../../components/info/info";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

class Birthday extends React.Component{

    componentDidMount(){

    }


    render(){
        return (
            <div className="birthday-page">
                <Header/>
                <Jumbotron fluid>
                    <Container>
                        <h1>Anniversaires</h1>
                        <Row>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle variant="link" as={Card.Header} eventKey="0">
                                            Janvier
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="1">
                                            Février
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="2">
                                            Mars
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="3">
                                            Avril
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="4">
                                            Mai
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="5">
                                            Juin
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>
                            </Col>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle variant="link" as={Card.Header} eventKey="6">
                                            Juillet
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="7">
                                            Août
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="8">
                                            Septembre
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="9">
                                            Octobre
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="10">
                                            Novembre
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle  as={Card.Header} eventKey="11">
                                            Decembre
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="11">
                                            <Card.Body>
                                                <div>
                                                    <Badge variant="warning">01</Badge> Edward
                                                </div>
                                                <div>
                                                    <Badge variant="warning">02</Badge> Nanda
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>


                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Birthday;