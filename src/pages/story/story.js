import * as React from "react";
import Header from "../../components/header/header";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer/footer";
import bg1 from '../../asset/images/bg_login.jpg'
import pdf from '../../asset/pdf/a.pdf'
import './story.css';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class Story extends React.Component{
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
        document.title = "Notre histoire - BVS Inside"
    }


    render(){
        return (
            <div>
                <Header/>
                <Jumbotron>
                    <Container>
                        <h1>L'histoire de BVS!</h1>
                        <iframe src={pdf} width="100%" height="500px"></iframe>
                        <div>
                            <img className="float-left" width={500} height={400} src={bg1}/>
                            <p className="float-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aut deserunt distinctio dolore error, est iusto laborum maxime neque omnis quae repudiandae sit. Animi at odio voluptas! Ratione, sint.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet commodi distinctio,
                                dolor eaque, eius eligendi est illum nesciunt nisi nobis odit possimus praesentium qui quis
                                sed tempore unde? Laborum?</p>
                            <p>Architecto assumenda, culpa dolore dolores maxime molestiae
                                natus quos sit veritatis voluptatem! Accusamus adipisci amet commodi id maxime vero voluptas.
                                Aspernatur eos est eum ex odio pariatur quis vero voluptatem?</p>
                            <p>Aut beatae blanditiis
                                commodi dolorum earum ex inventore, iste modi nostrum placeat, quos sapiente sunt unde. At
                                corporis cum dolores enim excepturi iusto laboriosam molestiae, necessitatibus obcaecati, quos
                                sit voluptates.</p>
                            <p>At dolorum in nisi nobis quae quibusdam. Architecto autem, blanditiis
                                dicta earum exercitationem expedita fugiat illo nobis non nulla, omnis perferendis placeat quae
                                quos tempora tempore unde velit voluptatem voluptatum.</p>
                            <p>Aliquam impedit laborum qui
                                quibusdam quo. Accusamus cum ea earum, eveniet expedita in inventore iure molestiae officia
                                possimus quae quam quisquam quos repellendus veritatis voluptatibus voluptatum! Doloremque nam
                                placeat quo.</p>
                        </div>
                        <div>
                            <img className="float-right" width={400} height={400} src={bg1}/>
                            <p className="float-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aut deserunt distinctio dolore error, est iusto laborum maxime neque omnis quae repudiandae sit. Animi at odio voluptas! Ratione, sint.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet commodi distinctio,
                                dolor eaque, eius eligendi est illum nesciunt nisi nobis odit possimus praesentium qui quis
                                sed tempore unde? Laborum?</p>
                            <p>Architecto assumenda, culpa dolore dolores maxime molestiae
                                natus quos sit veritatis voluptatem! Accusamus adipisci amet commodi id maxime vero voluptas.
                                Aspernatur eos est eum ex odio pariatur quis vero voluptatem?</p>
                            <p>Aut beatae blanditiis
                                commodi dolorum earum ex inventore, iste modi nostrum placeat, quos sapiente sunt unde. At
                                corporis cum dolores enim excepturi iusto laboriosam molestiae, necessitatibus obcaecati, quos
                                sit voluptates.</p>
                            <p>At dolorum in nisi nobis quae quibusdam. Architecto autem, blanditiis
                                dicta earum exercitationem expedita fugiat illo nobis non nulla, omnis perferendis placeat quae
                                quos tempora tempore unde velit voluptatem voluptatum.</p>
                            <p>Aliquam impedit laborum qui
                                quibusdam quo. Accusamus cum ea earum, eveniet expedita in inventore iure molestiae officia
                                possimus quae quam quisquam quos repellendus veritatis voluptatibus voluptatum! Doloremque nam
                                placeat quo.</p>
                        </div>

                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Container>
                </Jumbotron>

                <Footer/>
            </div>
        );
    }
}

export default Story;