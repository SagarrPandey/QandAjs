import React from 'react';
import {Form} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import '../../Static/css/qanda/style.css';
import '../../Static/css/bootstrap.css';
import '../../Static/css/style.css';
import '../../Static/css/navbar/navbar.css'


const LoginComponent =(
<div>
            <Modal.Header closeButton>
              <Modal.Title >One step away from Being a Part of Family</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Form.Group>
                      <Form.Label>User Name/Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control  type="password"  placeholder="Enter Password"/>
                  </Form.Group>
              </Form> 
            </Modal.Body>
           
</div>
)

export default LoginComponent;