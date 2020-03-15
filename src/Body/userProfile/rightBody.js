import React from 'react';
import {Col} from 'react-bootstrap';
import '../../Static/css/bootstrap.css';
import '../../Static/css/style.css';
import '../../Static/css/profile/p_style.css';
import PersonCard from './userProfileCards/personCard';
import QuestionCard from './userProfileCards/questionCard';


const rightBody = () =>{
    return(
        <Col xl={4} lg={4} md={4} id="right-side-profile">
        <div className="d-sm-none d-md-block">
          <div className="d-md-none d-lg-block">
              <div className="d-none d-sm-block">
                  <div className="d-flex flex-column row-hl">

                      <div className="p-3 mb-3 item-hl text-muted">People you may know</div>
                      <PersonCard/>
                      <PersonCard/>
                      <PersonCard/>
                      <PersonCard/>

                      <div className="item-hl text-muted ">Questions you might like to answer</div>
                      <QuestionCard/>
                      <QuestionCard/>
                      <QuestionCard/>
                      <QuestionCard/>
                     
                     


                            </div>
                          </div>
                      </div>
                     </div>
                  </Col>

    )
}
export default rightBody;