import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './detail-note.css';
import * as api from "../../providers/api/api";
import _ from 'lodash';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";

class DetailNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note : {
                title:'',
                pdf: ''
            }
        }
    }

    componentDidMount(){
        //recupération id note
        const id = parseInt(this.props.match.params.id);
        // recupération DES NOTES
        let data = _.filter(api.getNotes(), {id});
        this.setState(
            {
                note: data[0]
            }
        )
    }

    render(){
        const {title, file} = this.state.note;
        return (
            <div className="detail-note-page">
                <Jumbotron>
                    <Container>
                        <Row>
                            <h1>{title}</h1>
                            <iframe src={file} width="100%" title={title} height={700}></iframe>
                            <br/>
                            <LinkContainer to={"/notes"}>
                                <Button variant="dark">Retour</Button>
                            </LinkContainer>
                        </Row>
                    </Container>
                </Jumbotron>

            </div>
        );
    }
}

export default DetailNote;