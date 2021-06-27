import * as React from "react";
import './actualite.css';
import Header from "../../components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../../components/footer/footer";
import Card from "react-bootstrap/Card";
import CardColumns from 'react-bootstrap/CardColumns'
import Col from "react-bootstrap/Col";
import bg1 from '../../asset/images/bg_login.jpg'
import CustomCard from "../../components/custom-card/custom-card";

class Actualite extends React.Component{
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
                            <h1>Titre</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                {
                                    this.state.news.map( n=>{
                                        return <CustomCard news={n} />
                                    })
                                }
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Actualite;