import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import LeftBody from '../Body/userProfile/leftBody'

import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';



class UserPage extends Component {
  render(){
    return (
      
          
          <section id="profile-background" >
          <Navbar/>
          <Row class="no-gutter">
            <LeftBody></LeftBody>
          </Row>
          </section>
      

    );
  }
 
}

export default UserPage;