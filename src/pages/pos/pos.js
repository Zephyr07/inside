import * as React from "react";
import Container from "react-bootstrap/Container";
import './pos.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

class Pos extends React.Component{


    componentDidMount(){
        document.title = "Points de vente - BVS Inside"
    }


    render(){
        return (
            <div className="pos-page">
                <Jumbotron>
                    <Container>
                        <h1>Boutiques et points de vente partenaires</h1>

                        <Table striped bordered hover responsive size="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Gérant</th>
                                <th>Contact</th>
                                <th>Localisation</th>
                                <th>Ville</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Pos;