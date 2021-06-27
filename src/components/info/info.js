import * as React from "react";
import './info.css';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";


class Info extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Col className="mb-3" xs={12} md={6}>
                <h1>{this.props.news.name}</h1>
                <img
                    width="100%"
                    height={250}
                    src={this.props.news.image}
                    alt="Generic placeholder"
                />
                <p>
                    {this.props.news.description}
                </p>

                <div className="text-right" >
                    <Button variant="dark">Afficher tous les {this.props.news.type}</Button>
                </div>
            </Col>
        );
    }
}

export default Info;