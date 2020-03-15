import React,{Component} from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import BodyLeft from '../Body/BodyLeft';
import AnswerCard from '../Body/BodyMiddleCards/answerCard';
import BodyRight from '../Body/BodyRight';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';
import avatar from '../Static/img/avatar/avatar2.png'



class QandAPage extends Component {
    state = {
        question:"My Question comes Here?",
        questionDescription : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate distinctio inventore fugit magnam rerum, quis corporis temporibus facilis voluptate possimus, pariatur optio qui odio dolore? Quibusdam sapiente harum adipisci.",
        vote: '0'
    }
    voteIncreaseHandler = () => {
        let vote = this.state.vote;
        vote++;
        this.setState({vote:vote})
    }
    voteDecreaseHandler = () => {
        let vote = this.state.vote;
        vote--;
        this.setState({vote:vote})
    }
  render(){
    return (
      <div >
          <Navbar/>


          <section id="main-body">
              <div className="container-custom">
                <Row>
                  <BodyLeft/>
                  <Col xl={6} lg={6} md={9} sm={12} className="my-2 " >


                        <Row>

                            <Col>
                            <Row className="m-3">
                            <Col>
                                    <Row>
                                      <h2>this.state.question</h2>
                                    </Row>
                                    <Row>
                                    <div className="text-muted">Asked: <span className="text-primary">Today</span>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                                                Viewed<span className="text-primary">22 times</span>  </div>
                                    </Row>
                                    <hr/>
                                    <Row> 
                                    {this.state.questionDescription}
                                    </Row>
                                    <Row>
                                    <div className="d-flex flex-wrap row-hl mt-3">
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">java</a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">python </a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">linix</a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">etc</a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">java</a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">python </a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">linix</a>
                                          <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">etc</a>
                                      </div>
                                    </Row>
                                    <Row>
                                        <Col>
                                          <div className="d-flex justify-content-around">
                                            <div className="p-4">
                                              <a className="" href="">Share</a>
                                            </div>
                                          
                                          
                                            <div className="p-4">
                                              <a className="m-auto" href="">Improve this Question</a>
                                            </div>
                                          </div>
                                        
                                        </Col> 
                                            
                                    <Col>
                                    <Card>
                                        <Card.Text className="text-muted m-auto" style={{fontSize: '0.8rem'}}>asked 2hr ago</Card.Text>
                                        <div className="d-flex justify-content-around">
                                          <div>
                                            <img src={avatar} className="mb-2" style={{height:'4vw',width:"4vw"}} />
                                          </div>
                                          <div>
                                            <Card.Text className="text-center" style={{fontSize: '0.5'}}>Profile Name</Card.Text>
                    
                                          </div>
                                        </div>
                                </Card>
                            </Col>   
                    
                                    </Row>
                                    <hr/>
                                    <Row>
                                      2 Answers 
                                      
                                    </Row>
                                    <hr/>
                                    
                                      <AnswerCard vote={this.state.vote} clickIncrease={this.voteIncreaseHandler}  clickDecrease={this.voteDecreaseHandler}/>
                                      <AnswerCard vote={this.state.vote} clickIncrease={this.voteIncreaseHandler}  clickDecrease={this.voteDecreaseHandler}/>
                                      
                                      <hr/>
                                    
                            </Col>
                            </Row>                        

                            </Col>  

                        </Row>


                 </Col>

                  <BodyRight/>
                </Row>    
              </div>
          </section>



      </div>
    );
  }
 
}

export default QandAPage;