import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import LeftBody from '../Body/userProfile/leftBody';
import RightBody from '../Body/userProfile/rightBody';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';



class UserPage extends Component {
  render(){
    return (
      
          
          <section id="profile-background" >
          <Navbar/>
          <Row className="no-gutter">
            <LeftBody/>
            <RightBody/>
          </Row>
          </section>
      

    );
  }
 
}

export default UserPage;