import React from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import '../../../Static/css/bootstrap.css';
import '../../../Static/css/style.css';
import '../../../Static/css/profile/p_style.css';
import avatar from '../../../Static/img/avatar/avatar04.png';


const dashboardCard = () =>{
    return (
        <div id="authors-dashboard" className="custom-container-profile no-gutters">
        <Row >
            <Col >
                <Card className=" p-5 my-2">
                    <div className="f-2">
                        Your Dashboard
                    </div>
                    <span className="text-muted">Private to you</span>

                    <Row >
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Card>
                                <button href=""><div className="f-2 p-2 text-primary">1 </div>
                                    <span className="text-monospace text-muted">Profile viewed </span>
                                </button>

                            </Card>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Card >
                                <button href=""><div className="f-2 p-2 text-primary">15 </div>
                                    <span className="text-monospace text-muted">Your Questions</span>
                                </button>

                            </Card>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Card>
                                <button href=""><div className="f-2 p-2 text-primary">1 </div>
                                    <span className="text-monospace text-muted">Answers</span>
                                </button>

                            </Card>
                        </Col>

                </Row>
            </Card>
        </Col>
    </Row>
    </div>
    )
}

export default dashboardCard;