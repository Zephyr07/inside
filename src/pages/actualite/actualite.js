import * as React from "react";
import './actualite.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardColumns from 'react-bootstrap/CardColumns'
import Col from "react-bootstrap/Col";
import CustomCard from "../../components/custom-card/custom-card";
import * as api from "../../providers/api/api";

class Actualite extends React.Component{
    state = {
        news : []
    };

    componentDidMount(){
        // recupération DES NOTES
        const datas = api.getNotes();
        this.setState(
            {
                news: datas
            }
        )
    }


    render(){
        return (
            <div>

                <Container className="mb-3 mt-7">
                    <Row>
                        <Col>
                            <h1>Evènements</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                {
                                    this.state.news.map( n=>{
                                        return <CustomCard key={n.id} news={n} />
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

export default Actualite;