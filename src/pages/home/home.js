import * as React from "react";
import './home.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import a from '../../asset/images/event/a.jpeg'
import b from '../../asset/images/event/b.png'
import c from '../../asset/images/event/c.jpg'
import e from '../../asset/images/event/e.png'
import d from '../../asset/images/event/d.jpg'
import Info from "../../components/info/info";
import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }

    componentDidMount(){

    }


    render(){
        return (
            <div className="home-page">
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={a}
                                            alt="La saison des chill continue!"
                                        />
                                        <Carousel.Caption>
                                            <h3>La saison des chill continue!</h3>
                                            <p>Dans un premier temps le choix du vin nécessite la recherche d’un équilibre entre les arômes naturellement fruités du vin et votre dessert, il faut conserver une certaine harmonie entre la douceur et l’acidité des fruits, l’idée étant que l’un ne domine pas l’autre. Une règle simple et efficace consiste à choisir votre vin selon la couleur des fruits servis ! Vins blancs moelleux pour les fruits jaunes et pourquoi pas des vins rouges légers pour les fruits rouges, à tester !.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={c}
                                            alt="Mon Petit Péché"
                                        />

                                        <Carousel.Caption>
                                            <h3>Mon Petit Péché</h3>
                                            <p>Tout est une question d’équilibre. En saison pluvieuse comme en saison sèche, terminer son repas sur une note fruitée permet de combler les plus gourmands avec légèreté. Si la liste des desserts aux fruits est immense, nous avons tous la même idée lorsqu’il s’agit de les accompagner. Champagne et autres vins effervescents sont servis presque par défaut… Et pourtant !</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={b}
                                            alt="Vins Et Desserts Fruités"
                                        />

                                        <Carousel.Caption>
                                            <h3>Déstockage massif</h3>
                                            <p>Mmmmmh! quel bonheur l’odeur de la tarte aux pommes qui sort tout juste du four. On le sait, un dessert bien réalisé permet de finir le repas en beauté, et c’est encore plus vrai quand on sait le marier avec le vin adapté !</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container className="mb-3 mt-4">
                    <Row>
                        <Info news={{
                            name:'Sur La Table Improvisée',
                            type: 'news',
                            description: 'Le rosé, star des apéros si on vous dit « apéritif » vous pensez directement « vin rosé ». Son point fort, c’est qu’il se marie avec tout et égaye les soirées, même s’il ne vous reste qu’une poignée de chips à servir à vos invités ! Choisissez-le plutôt léger et frais avec le Côte de Provence ou un peu sucré avec le Rosé d’Anjou.',
                            image: d
                        }}/>
                        <Info news={{
                            name:'Wine O’clock, C’est L’heure De L’apéro !',
                            type: 'évènements',
                            description: 'Déjà 19h et vos amis débarquent dans 15 minutes pour l’apéro ! Tout est prêt pour les accueillir mais vous hésitez… Quel vin servir sachant que vous ne ferez que grignoter ? N’ayez crainte, on vous aide à y voir plus clair et à faire les bons choix !',
                            image: e
                        }}/>
                        <Col>
                            <div className="text-right" >
                                <LinkContainer to={"/actualite"}>
                                    <Button variant="dark">Afficher tous les évènements</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;