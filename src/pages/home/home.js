import * as React from "react";
import './home.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import bg1 from '../../asset/images/bg_login.jpg'
import fond from '../../asset/images/fond.jpg'
import Info from "../../components/info/info";
import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }

    componentDidMount(){

    }


    render(){
        return (
            <div className="home-page">
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={bg1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fond}
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={bg1}
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container className="mb-3">
                    <Row>
                        <Info news={{
                            name:'news A',
                            type: 'news',
                            description: 'Description',
                            image: bg1
                        }}/>
                        <Info news={{
                            name:'Even A',
                            type: 'évènements',
                            description: 'Description',
                            image: bg1
                        }}/>
                        <Col>
                            <div className="text-right" >
                                <LinkContainer to={"/actualite"}>
                                    <Button variant="dark">Afficher tous les évènements</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;