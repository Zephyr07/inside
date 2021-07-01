import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './liste-note.css';
import ListItem from "../../components/list-item/list-item";
import Card from "react-bootstrap/Card";
import * as api from "../../providers/api/api";
import _ from 'lodash';

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
        // recupération DES NOTES
        let data = _.orderBy(api.getNotes(), 'type');
        data = _.groupBy(data, 'type');
        this.setState(
            {
                note_service: _.orderBy(data.service, 'updated_at').reverse(),
                note_info: _.orderBy(data.info, 'updated_at').reverse()
            }
        )
    }


    render(){
        return (
            <div className="liste-noite-page ">
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
            </div>
        );
    }
}

export default ListeNote;