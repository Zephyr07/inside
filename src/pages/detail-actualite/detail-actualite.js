import * as React from "react";
import Header from "../../components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../../components/footer/footer";
import Col from "react-bootstrap/Col";
import bg1 from '../../asset/images/bg_login.jpg'
import Card from "react-bootstrap/Card";
import './detail-actualite.css';
import Button from "react-bootstrap/Button";

class DetailActualite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[
                {
                    id: 1,
                    name:'Name',
                    type: 'news',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore doloremque hic nostrum obcaecati perferendis repellat sed similique sint voluptate? Consequuntur corporis distinctio id ipsa officia quaerat vitae voluptate? Facere.',
                    image:'',
                    updated_at: new Date().toDateString()
                },
                {
                    id: 2,
                    name:'Lancement VP',
                    type: 'news',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore doloremque hic nostrum obcaecati perferendis repellat sed similique sint voluptate? Consequuntur corporis distinctio id ipsa officia quaerat vitae voluptate? Facere.',
                    image:bg1,
                    updated_at: new Date().toDateString()
                },
                {
                    id: 3,
                    name:'FUsion VP',
                    type: 'news',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore doloremque hic nostrum obcaecati perferendis repellat sed similique sint voluptate? Consequuntur corporis distinctio id ipsa officia quaerat vitae voluptate? Facere.',
                    image:bg1,
                    updated_at: new Date().toDateString()
                },
                {
                    id: 4,
                    name:'COngé VP',
                    type: 'news',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore doloremque hic nostrum obcaecati perferendis repellat sed similique sint voluptate? Consequuntur corporis distinctio id ipsa officia quaerat vitae voluptate? Facere.',
                    image:bg1,
                    updated_at: new Date().toDateString()
                },
            ],
        }
    }

    componentDidMount(){

    }


    render(){
        return (
            <div>
                <Header/>

                <Container className="mb-3 mt-7">
                    <Row>
                        <Col>
                            <Card className="img">
                                <Card.Img src={bg1} alt="Card image" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>
                                        Document(s)
                                    </Card.Text>
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                    <div className="text-right" >
                                        <Button variant="dark">Retour</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default DetailActualite;