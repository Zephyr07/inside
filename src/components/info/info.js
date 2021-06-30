import * as React from "react";
import './info.css';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {LinkContainer} from "react-router-bootstrap";


class Info extends React.Component{

    render(){
        const {name, image, description, type} = this.props.news;
        return (
            <Col className="mb-3" xs={12} md={6}>
                <h1>{name}</h1>
                <img
                    width="100%"
                    height={250}
                    src={image}
                    alt="Generic placeholder"
                />
                <p>
                    {description}
                </p>
            </Col>
        );
    }
}

export default Info;