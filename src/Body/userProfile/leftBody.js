import React from 'react';
import {Row,Col} from 'react-bootstrap';
import AboutCard from './userProfileCards/aboutCard';
import DashboardCard from './userProfileCards/dashboardCard';
import '../../Static/css/bootstrap.css';
import '../../Static/css/style.css';
import '../../Static/css/profile/p_style.css';
import avatar from '../../Static/img/avatar/avatar04.png'

const leftBody = () =>{
    return(
        <Col xl={8} lg={8} md={12} sm={12} className=" no-gutter">
            <div className="profile-background-image profile-background-image--loading ember-view"></div>
            <Row id="authors-details">
                <Col className="col pb-3">

                    <img src={avatar} alt="" className="img-fluid rounded-circle"/>
                    <div className="profile-details ml-5">
                        <div className="f-3 "> Sagar Pandey </div>
                        <div className="f-2">B.C.A. Student at I.M.S. noida</div>
                        <div className="f-1">City, State, Country
                            &bull;
                            <a href="#">
                            <span className="badge badge-secondary">followers <span className="badge badge-primary">2.7</span></span>
                            </a>
                            &bull;
                            <a href="#">
                            <span className="badge badge-secondary">Level <span className="badge badge-primary">14</span></span>
                            </a>
                        </div>
                    </div>
                </Col>
                </Row>
    
            <AboutCard/>
            <DashboardCard/>
        </Col>

    )
}
export default leftBody;