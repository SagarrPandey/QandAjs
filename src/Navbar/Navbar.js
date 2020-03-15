import React from 'react';
import {Navbar,Nav,Container,Form,Button,Image} from 'react-bootstrap';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';
import '../Static/css/navbar/navbar.css'
import { FaLaptopCode } from 'react-icons/fa';
import UserImage from '../Static/img/avatar/avatar04.png'


const navbar = () =>{
    return(
    
        <Navbar bg="yellow" expand="md" className="py-1" id="main-nav">
        <Container >
          <Navbar.Brand href="/" className="pr-5">
                    <FaLaptopCode size='1.5em'/>
             <span className="ml-2 font-custom">Q & A</span>
            </Navbar.Brand>
          <Navbar.Toggle area-control="navbarCollapse"/>
            
          <Navbar.Collapse id="navbarCollapse">
                <Form inline>
                    <Form.Control className="form-control-sm mr-sm-2 ml-sm-5" type="text" placeholder="Search" aria-label="Search"/>

                </Form>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="QandA">QandA</Nav.Link>
              <Nav.Link data-toggle="modal" data-target="#login" className="text-primary">login</Nav.Link>
              <Nav.Link  data-toggle="modal" data-target="#signup">
                        <Button size="sm" variant="outline-primary">Sign up</Button>
              </Nav.Link>
              
              <Nav.Link  data-toggle="modal" data-target="#signup" href='user'>
                    <Image src={UserImage}   className="nav-user-img" alt=""/>
              </Nav.Link>


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>



      
    )
}

export default navbar;