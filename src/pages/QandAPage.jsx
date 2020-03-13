import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import BodyLeft from '../Body/BodyLeft';
import BodyMiddle from '../Body/BodyMiddle';
import BodyRight from '../Body/BodyRight';
import '../static/css/qanda/style.css';
import '../static/css/bootstrap.css';
import '../static/css/style.css';



class QandAPage extends Component {
  render(){
    return (
      <div >
          <Navbar/>


          <section id="main-body">
              <div className="container-custom">
                <Row>
                  <BodyLeft/>
                  <BodyMiddle/>
                  <BodyRight/>
                </Row>    
              </div>
          </section>



      </div>
    );
  }
 
}

export default QandAPage;