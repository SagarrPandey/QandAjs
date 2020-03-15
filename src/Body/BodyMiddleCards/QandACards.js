import React from 'react';
import {Col,Row,Card} from 'react-bootstrap';
import '../../Static/css/qanda/style.css';
import '../../Static/css/bootstrap.css';
import '../../Static/css/style.css';





const qandaCards = (props) =>{
    return(
        <Row className="m-3">
        <Col>
        <a href="/answer">
          <Card style={{cursor:'pointer',':hover':{boxShadow: "10px 10px"}}} >
            <Card.Header className="bg-light">
                <Card.Text  className="badge badge-primary mr-2"><span className="badge badge-pill badge-dark">12</span> Vote</Card.Text>
                <Card.Text  className="badge badge-primary mr-2"><span className="badge badge-pill badge-dark">12</span> Answers</Card.Text>
                <Card.Text  className="badge badge-primary mr-2"><span className="badge badge-pill badge-dark">12</span>Views</Card.Text>

              <div className="float-right d-inline">
                <span className="text-muted" style={{fontSize: 'small'}}>modified 9 secs ago </span>
              </div>
            </Card.Header>
            <Card.Body>
                  <Card.Title>Your Question will be shown here?</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate distinctio inventore fugit magnam rerum, quis corporis temporibus facilis voluptate possimus, pariatur optio qui odio dolore? Quibusdam sapiente harum adipisci.</Card.Text>
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
                  <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer" style={{fontSize: 'small'}}>Posted By
                    <cite title="Source Title">Sagar Pandey</cite>
                  </footer>
                </blockquote>
            </Card.Body>
          </Card>
          </a>
      
        </Col>
      </Row>
    )
}

export default qandaCards;