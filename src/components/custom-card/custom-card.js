import * as React from "react";
import Card from "react-bootstrap/Card";


class CustomCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Card>
                <Card.Img variant="top" src={this.props.news.image} />
                <Card.Body>
                    <Card.Title>{this.props.news.name}</Card.Title>
                    <Card.Text>
                        {this.props.news.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Publié le {this.props.news.updated_at}</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default CustomCard;