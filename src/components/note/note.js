import * as React from "react";
import './note.css';

class Note extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>{this.props.note.title}</h1>
                <iframe src={this.props.note.pdf} width="100%" height="100%"></iframe>
            </div>
        );
    }
}

export default Note;

