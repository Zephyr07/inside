import * as React from "react";
import './list-item.css';
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import {LinkContainer} from "react-router-bootstrap";

class ListItem extends React.Component{

    render(){
        return (
            <ListGroup.Item className="list-item-page">
                <LinkContainer to={"/detail-note/"+this.props.note.id}>
                    <Media>
                        <Media.Body>
                            <h5>{this.props.note.title}</h5>
                            <small className="text-muted">Publié le {this.props.note.updated_at}</small>
                        </Media.Body>
                    </Media>
                </LinkContainer>
            </ListGroup.Item>
        );
    }
}

export default ListItem;