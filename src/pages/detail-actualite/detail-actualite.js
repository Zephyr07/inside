import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './detail-actualite.css';
import Button from "react-bootstrap/Button";
import * as api from "../../providers/api/api";
import {LinkContainer} from "react-router-bootstrap";

class DetailActualite extends React.Component{

    state={
        note:{}
    };

    componentDidMount(){
        const id = this.props.match.params.idActu;
        // recupération DES NOTES
        const datas = api.getNotes();
        this.setState(
            {
                note: datas[id]
            }
        )
    }


    render(){
        const {title, description, image, file, updated_at} = this.state.note;

        return (
            <div className="detail-actualite-page">
                <Container className="mb-3 mt-7">
                    <Row>
                        <Col>
                            <Card className="img">
                                <Card.Img src={image} alt={title} />
                                <Card.Body>
                                    <Card.Title> {title} </Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                    <Card.Text>
                                        Document(s)
                                        <br/>
                                        <a href={file}>{title}</a>
                                    </Card.Text>
                                    <small className="text-muted">
                                        Publié le {updated_at}
                                    </small>
                                    <div className="text-right hide" >
                                        <LinkContainer to="/notes">
                                            <Button variant="dark">Retour</Button>
                                        </LinkContainer>
                                    </div>
                                    <br/>
                                    <LinkContainer to={"/actualite"}>
                                        <Button variant="dark">Retour</Button>
                                    </LinkContainer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DetailActualite;