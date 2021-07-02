import * as React from "react";
import './product.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardColumns from 'react-bootstrap/CardColumns'
import Col from "react-bootstrap/Col";
import * as api from "../../providers/api/api";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

class Product extends React.Component{
    state = {
        products : []
    };

    componentDidMount(){
        // recupération DES NOTES
        const datas = api.getProducts();
        this.setState(
            {
                products: datas
            }
        )
    }


    render(){
        return (
            <div className="product-page">
                <Container className="mb-3 mt-7">
                    <Row>
                        <Col>
                            <h1>Nos produits</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                {
                                    this.state.products.map( n=>{
                                        return (
                                            <Card>
                                                <Card.Img variant="top" src={n.picture} />
                                                <Card.Body>
                                                    <Card.Title>{n.name}</Card.Title>
                                                    <Card.Text>
                                                        <p className="price">
                                                            {n.price} FCFA
                                                        </p>
                                                        <Accordion>
                                                            <Accordion.Toggle key={n.id} variant="link" eventKey={n.id}>
                                                                Détails
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={n.id}>
                                                                <Table size="sm">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Catégorie</td>
                                                                        <td>{n.category}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gamme</td>
                                                                        <td>{n.range}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Marque</td>
                                                                        <td>{n.brand}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Accordion.Collapse>
                                                        </Accordion>

                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Product;