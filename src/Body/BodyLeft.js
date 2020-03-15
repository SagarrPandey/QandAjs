import React from 'react';
import {Col, Card, ListGroup} from 'react-bootstrap';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';


const bodyLeft = () =>{
    
    return(
            <Col xl={2} lg={2} md={3} className= "d-sm-none d-md-block"  style={{position:'sticky'}}>
                                   
                        <div className="d-none d-sm-block">
                        

                                <Card className="margin-custom" >
                                    <Card.Header className="text-monospace">
                                        <a href="#">Home</a>
                                    </Card.Header>
                                    <ListGroup className="list-group list-group-flush ">
                                        <ListGroup.Item className="list-group-item sm-text-font text-monospace text-muted">Some Heading</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item text-right p-auto text-monospace text-muted">
                                        <a href="#">Item 1</a> </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item text-right p-auto text-monospace text-muted">
                                        <a href="#">Item 2</a> </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                        </div>
                

            </Col>
        
    )
}

export default bodyLeft;