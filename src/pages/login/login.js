import './login.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../logo.svg';
import * as React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:''
        }
    }

    doLogin = async () => {
        const {username,password} = this.state;
        try {
            console.log('credentials',username,password);
            /*let res = await login(phone,password);
            // redirection vers Home
            this.props.navigation.popToTop();
            this.props.navigation.navigate('Home');
            console.log(res)*/
        }catch (e) {
            console.log(e)

        }
    }

    render() {
        return (
            <div className="login">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card className="form">
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email"
                                                          value={this.state.username}
                                                          onChange={(text) => {this.setState({username: text.target.value})}}
                                                          placeholder="Nom d'utilisateur" />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password"
                                                          value={this.state.password}
                                                          onChange={(text) => this.setState({password: text.target.value})}
                                                          placeholder="*********" />
                                        </Form.Group>
                                    </Form>
                                    <Button variant="dark" onClick={()=>this.doLogin()}>
                                        Connexion
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Login;