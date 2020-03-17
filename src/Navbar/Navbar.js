import React, { Component } from 'react';
import {Navbar,Nav,Container,Form,Button,Image} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import SignupModal from './Modals/signUpModal';
import LoginModal from './Modals/loginModal';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';
import '../Static/css/navbar/navbar.css'
import { FaLaptopCode } from 'react-icons/fa';
import UserImage from '../Static/img/avatar/avatar04.png'



class NavbarComponent extends Component {
  state = {
    login : false,
    modalbody : null,
    button : null
  }
  showLoginModal = () => {
    this.setState({login:true,modalbody:LoginModal,button:"Login"});
  }
  showSignupModal = () => {
    this.setState({login:true,modalbody:SignupModal,button:"Sign up"});
  }
  hideModal =() =>{
    this.setState({login:false});
  }

    render(){
  
        // if (this.state.login){ //for login
        //   this.state.modalbody = this.setState({modalbody:LoginModal});     
        // }
        // if (this.state.login){ //for signup
        //   this.state.modalbody= this.setState({modalbody:SignupModal});
        // }

        return(
        <div>
            <Navbar bg="yellow" expand="md" className="py-1" id="main-nav">
            <Container >
              <Navbar.Brand href="/" className="pr-5">
                        <FaLaptopCode size='1.5em'/>
                <span className="ml-2 font-custom">Q & A</span>
                </Navbar.Brand>
              <Navbar.Toggle area-control="navbarCollapse"/>
                
              <Navbar.Collapse id="navbarCollapse">
                    <Form inline>
                        <Form.Control size="sm"  type="text" placeholder="Search"/>
                    </Form>
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="QandA">QandA</Nav.Link>
                  <Nav.Link data-toggle="modal" className="text-primary" onClick={this.showLoginModal}>login</Nav.Link>
                  <Nav.Link>
                            <Button size="sm" variant="outline-primary" onClick={this.showSignupModal}>Sign up</Button>
                  </Nav.Link> 
                  <Nav.Link  data-toggle="modal" data-target="#ignup" href='user'>
                        <Image src={UserImage}   className="nav-user-img" alt=""/>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

            </Container>
          </Navbar>
          <Modal show={this.state.login} onHide={this.hideModal}>
              {this.state.modalbody}
              <Modal.Footer>
              <Button href="user" variant="primary" onClick={this.hideModal} block>Sign up</Button>
            </Modal.Footer>
            <Modal.Footer>
              <Button variant="warning" onClick={this.hideModal} block>Cancel</Button>
            </Modal.Footer>
              </Modal>
          </div>
        )
}
}


export default NavbarComponent;