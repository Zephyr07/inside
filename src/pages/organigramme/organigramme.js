import * as React from "react";
import './organigramme.css';
import CustomNodeChart from "../../components/custom-node-chart/custom-node-chart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Organigramme extends React.Component{


    componentDidMount(){
        document.title = "Points de vente - BVS Inside"
    }


    render(){

        return (
            <div className="pos-page">
                <Container>
                    <Row>
                        <h1>Organigramme</h1>
                    </Row>
                </Container>
                <div className="container-fluid">
                    <CustomNodeChart/>
                </div>
            </div>
        );
    }
}

export default Organigramme;