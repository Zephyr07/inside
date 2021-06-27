import * as React from "react";
import './home.css';
import Header from "../../components/header/header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";
import bg1 from '../../asset/images/bg_login.jpg'
import Footer from "../../components/footer/footer";
import Info from "../../components/info/info";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }

    componentDidMount(){

    }


    getNews(){
        return [
            {
                name:'news A',
                type: 'News',
                description: 'Description',
                image: bg1
            },
            {
                name:'Even A',
                type: 'Evènements',
                description: 'Description',
                image: bg1
            }
        ]
    };

    render(){
        return (
            <div>
                <Header/>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
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
                                            src={bg1}
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
                            <Col>
                                <ListGroup className="list">
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={bg1}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={bg1}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={bg1}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={bg1}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={bg1}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>


                                </ListGroup>

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
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Home;