import * as React from "react";
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
import './liste-note.css';
import ListItem from "../../components/list-item/list-item";
import Card from "react-bootstrap/Card";

class ListeNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            note_service:[
                {
                    id:1,
                    title:'Titre',
                    updated_at: new Date().toLocaleDateString()
                },
                {
                    id:2,
                    title:'Titre 2',
                    updated_at: new Date().toLocaleDateString()
                }
            ],
            note_info:[
                {
                    id:1,
                    title:'Titre info',
                    updated_at: new Date().toLocaleDateString()
                },
                {
                    id:2,
                    title:'Titre 2',
                    updated_at: new Date().toLocaleDateString()
                }
            ],
        }
    }

    componentDidMount(){

    }


    render(){
        return (
            <div>
                <Header/>

                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h1>Notes de service</h1>
                            <ListGroup className="list">
                                {
                                    this.state.note_service.map( n=>{
                                        return <ListItem note={n} />
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col>
                            <h1>Notes d'information</h1>
                            <Card>
                                <ListGroup variant="flush">
                                    {
                                        this.state.note_info.map( n=>{
                                            return <ListItem note={n} />
                                        })
                                    }

                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Footer/>
            </div>
        );
    }
}

export default ListeNote;