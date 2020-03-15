import React, { Component } from 'react';
import {Row,Col,Container,Card,Button} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';



class HomePage extends Component {
  render(){
    return (
      <div >
          <Navbar/>


          <section id="showcase" className="p-slope-left">
          <div className="dark-overlay text-white p-slope-left">
            <div className="home-inner container">
              <Row>
                <Col lg={12} >

                  <div id="d-flex" className="d-flex justify-content-center">


                          <h1 className="display-4">We love people who code</h1>

                  </div>

                  <div className="d-flex d-none d-sm-block">

                    <div className="p-4 justify-content-center">
                        <Container>
                          <h3 className="lead text-center text-justify center">We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</h3>
                         </Container>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">

                    <div className="py-4 mr-1">
                              <button id="btn1" className="btn btn-sm btn-yellow mr-0" data-toggle="modal" data-target="#signup">For Students</button>
                          </div>

                    <div className="py-4">
                                  <button id="btn2" className="btn btn-sm btn-orange ml-0" data-toggle="modal" data-target="#signup">For Teachers</button>
                        </div>
                      </div>
                  </Col>
                </Row>

              </div>
            </div>
  </section>


  
  <div className="half-rem" id="body-lower">
  <section id="card-1">
      <Container>
          <Row>
              <Col lg={12}>
                  <div className="d-flex justify-content-center">
                      <div className="p-4">
                          <h5><strong>For developers, by developers</strong> </h5>
                      </div>
                  </div>
                  <div className="p-divider mb32"></div>
                  <div className="d-flex justify-content-center center">
                      <h7>Stack Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</h7>
                  </div>
              </Col>
          </Row>
      </Container>
  </section>

  <section id="card-body" className="p-5">
          <div className="container">
              <div className="text-dark">
                  <Row  id="row1">
                      <Col lg={4} md={4} className="py-5">
                          <Card className="shadow text-center">
                              <Card.Img variant="top" className="far fa-comments fa-7x" className="img-fluid"></Card.Img>

                              <Card.Body>
                                  <Card.Title>Public Q&A</Card.Title>
                                  <Card.Text>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account. </Card.Text>
                                  <Button variant="primary">
                                      Browse Questions
                                  </Button>
                              </Card.Body>

                          </Card>
                      </Col>
                      <Col lg={4} md={4}>
                              <Card className="shadow text-center">
                                      <Card.Img variant="top" className="fas fa-user-lock fa-7x" className="img-fluid "></Card.Img>

                                      <Card.Body>
                                          <Card.Title>Private Q&A</Card.Title>
                                          <Card.Text>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account. </Card.Text>
                                          <Button variant="yellow">
                                              Browse Questions
                                          </Button>
                                      </Card.Body>

                                  </Card>
                      </Col>
                      <Col lg={4} md={4} className="py-5">
                              <Card className="shadow  text-center">
                                      <Card.Img variant="top" className="fas fa-graduation-cap fa-7x" className="img-fluid"></Card.Img>

                                      <Card.Body>
                                          <Card.Title>Experts Answers</Card.Title>
                                          <Card.Text>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account. </Card.Text>
                                          <Button variant="primary">
                                              Browse Questions
                                          </Button>
                                      </Card.Body>

                                  </Card>
                      </Col>
                  </Row>
              </div>
          </div>
      </section>
  
      <section id="card-2">
          <div className="p-slope-right outer-background">
              <Container>
                  <Row>
                      <Col lg={12}>
                          <div className="d-flex justify-content-center">
                              <div className="p-5">
                                  <h5 className="text-center"><strong>For developers, by developers</strong> </h5>
                              </div>
                          </div>
                          <div className="p-divider mb32"></div>
                          <div className="d-flex justify-content-center center">
                              <h7>Stack Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</h7>
                          </div>
                      </Col>
                  </Row>
                 
                  <Row className="py-5" id="row2">
                      <Col lg={4} md={4}>
                          <Card>

                              <Row className="py-4 px-3">

                                  <Col xl={4}>
                                      <Card.Img className="fas fa-share-alt fa-4x"></Card.Img>
                                  </Col>
                                  <Col xl={8}>
                                          <Card.Text>Find the perfect candidate for your growing technical team with Talent solutions</Card.Text>
                                  </Col>

                          </Row>

                          </Card>
                      </Col>
                      <Col className="col-lg-4 col-md-4">
                              <Card >
                                  <Row className="py-4 px-3">

                                          <Col xl={4} >
                                                  <Card.Img className="fas fa-search fa-4x"></Card.Img>
                                          </Col>
                                          <Col xl={4}>
                                                  <Card.Text>Find the perfect candidate for your growing technical team with Talent solutions</Card.Text>
                                          </Col>

                                  </Row>

                              </Card>
                          </Col>
                          <Col lg={4} md={4}>
                                  <Card>
                                      <Row className=" py-4 px-3">

                                              <Col xl={4}>
                                                      <Card.Img className="fas fa-rocket fa-4x"></Card.Img>
                                              </Col>
                                              <Col xl={8} >
                                                      <Card.Text >Accelerate the discovery of your products or services through our Advertising</Card.Text>
                                              </Col>

                                      </Row>

                                  </Card>
                              </Col>
                  </Row>
              </Container>
          </div>
          </section>


        </div>
      </div>
    );
  }
}
 

export default HomePage;