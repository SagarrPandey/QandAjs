import React from 'react';
import {Col,Row} from 'react-bootstrap';
import QandACard from './BodyMiddleCards/QandACards';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';
import Radium from 'radium';


const bodyMiddle = () =>{
return(
    <Col xl={6} lg={6} md={9} sm={12} className="my-2 " >
                    <Row className="mb-4 ">
                      <Col>
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                  <a href="/">Home</a>
                              </li>
                              <li className="breadcrumb-item">
                                  <a href="/user">Users</a>
                              </li>
                              <li className="breadcrumb-item active">Brad</li>
                          </ol>
                      </Col>
                      <div className="col-12">
                        <h4 className="d-inline sm-text-font">Top Questions</h4>
                        <button className="btn btn-primary btn-sm d-inline float-right">Ask Question</button>
                      </div>
                    </Row>

                    <Row>

                      <Col col={12} className=" btn-group ">
                          <button className="btn btn-outline-dark btn-sm active " data-toggle="tooltip" data-placement="top" title="Tooltip on top">Interesting</button>
                          <button className="btn btn-outline-dark btn-sm " data-toggle="tooltip" data-placement="right" title="Tooltip on right"><span className="mr-1  badge badge-primary">30</span>Bountied</button>
                          <button className="btn btn-outline-dark btn-sm  " data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Hot</button>
                          <button className="btn btn-outline-dark btn-sm " data-toggle="tooltip" data-placement="left" title="Tooltip on left">Week</button>
                          <button className="btn btn-outline-dark btn-sm  " data-toggle="tooltip" data-placement="left" title="Tooltip on left">Month</button>
                      </Col>

                    </Row>
                    <hr className="m-3"></hr>


            <QandACard className="card-hower" vote='3' answers="12" views="33"/>
            <QandACard className="card-hower" vote='13' answers="8" views="333" />
        </Col>
)
}

export default Radium(bodyMiddle);