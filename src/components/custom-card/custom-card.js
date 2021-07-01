import * as React from "react";
import Card from "react-bootstrap/Card";
import {LinkContainer} from "react-router-bootstrap";


class CustomCard extends React.Component{

    render(){
        const {id, image, title, description, updated_at} = this.props.news;
        return (
            <LinkContainer to={"/detail-actualite/"+id}>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publié le {updated_at}</small>
                    </Card.Footer>
                </Card>
            </LinkContainer>
        );
    }
}

export default CustomCard;