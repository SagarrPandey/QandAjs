import React from 'react';
import {Button} from 'react-bootstrap';
import '../../../Static/css/bootstrap.css';
import '../../../Static/css/style.css';
import '../../../Static/css/profile/p_style.css';
import SampleImage from '../../../Static/img/avatar/avatar5.png'


const personCard = () =>{
    return (
        <Button variant="light" className="mb-3 item-hl">
            <img src={SampleImage}  className="img-fluid rounded-circle people-suggestion-img" alt=""/>
            <div style={{marginLeft: "4rem"}}>Satyam fauzdar  &bull; <span className="badge badge-secondary float-right">followers <span className="badge badge-primary">4 </span></span> </div>
            <div className="text-muted" style={{marginLeft: "4rem",fontSize: "small"}}>Sr. Developer  <div className="badge badge-dark text-light float-right">follow </div></div>
        </Button>

    )
}

export default personCard;