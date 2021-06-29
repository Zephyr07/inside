import * as React from "react";
import './list-item.css';
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";

class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ListGroup.Item>
                <Media>
                    <Media.Body>
                        <h5>{this.props.note.title}</h5>
                        <small className="text-muted">Publié le {this.props.note.updated_at}</small>
                    </Media.Body>
                </Media>
            </ListGroup.Item>
        );
    }
}

export default ListItem;