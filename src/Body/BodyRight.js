import React from 'react';
import {Col,Card} from 'react-bootstrap';
import '../static/css/qanda/style.css';
import '../static/css/bootstrap.css';
import '../static/css/style.css';
import { ListGroup } from 'react-bootstrap';


const bodyRight = () =>{
    return(
        <Col xl={3} lg={3} className=" my-2" >
        <div className="d-md-block d-lg-block">
         <div className="d-none d-sm-block">
           <div className="d-md-none d-lg-block">

    
           <Card className="sm-text-font" >

               <ListGroup variant="flush">
                 <ListGroup.Item className="list-group-item"><b>Blog</b> </ListGroup.Item>
                 <ListGroup.Item>
                   <a href="#">
                       <span className="pl-3">
                         <i className="fab fa-blogger-b">
                         Dapibus ac facilisis in
                       </i>
                       </span>
                   </a>
                 </ListGroup.Item>
                 <ListGroup.Item>
                   <a href="#">
                     <span className="pl-3">
                     <i className="fab fa-blogger-b">
                         Vestibulum at eros
                     </i>
                     </span>
                   </a>
                 </ListGroup.Item>
                 <ListGroup.Item ><b>Featured on Meta</b></ListGroup.Item>
                 <ListGroup.Item>
                   <a href="#">
                       <span className="pl-3">
                         <i className="fab fa-blogger-b">
                         Dapibus ac facilisis in
                       </i>
                       </span>
                   </a>
                 </ListGroup.Item>
                 <ListGroup.Item>
                   <a href="#">
                     <span className="pl-3">
                     <i className="fab fa-blogger-b">
                         Vestibulum at eros
                     </i>
                     </span>
                   </a>
                 </ListGroup.Item>
               </ListGroup>
             </Card>

             <Card className="my-4">
                 <Card.Header>
                     Custom Filters
                 </Card.Header>
                 <ListGroup variant="flush">
                   <ListGroup.Item ><a href="">Create a custom filter</a></ListGroup.Item>

                 </ListGroup>
               </Card>

    
              <Card className=" my-4">
                 <Card.Header>
                     <i className="fas fa-eye"></i> Watched Tags
                     <span className="float-right">
                       <a href="">edit</a>
                     </span>
                 </Card.Header>
                 <ListGroup variant="flush">
                   <ListGroup.Item className="list-group-item">
                       <div className="d-flex flex-wrap row-hl mt-3">
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">java</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">python </a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">linix</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">etc</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">randi</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">java</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">python </a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">linix</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">etc</a>
                           <a href="#" className="mr-2 mb-2 item-hl badge badge-secondary">randi</a>
                       </div>
                   </ListGroup.Item>

                 </ListGroup>
               </Card>
           </div>
         </div>
       </div>
     </Col>
    )
}

export default bodyRight;