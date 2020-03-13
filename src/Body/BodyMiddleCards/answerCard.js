import React from 'react';
import {Col,Row} from 'react-bootstrap';
import '../../static/css/qanda/style.css';
import '../../static/css/bootstrap.css';
import '../../static/css/style.css';
import { IoMdArrowDropup,IoMdArrowDropdown } from 'react-icons/io';



const AnswerCards = (props) =>{
    return(
     
                <Row>
                  <Col xl={1} md={1} sm={1} xs={1} className="pr-1">
                      <Row>
                        <IoMdArrowDropup size="4em" onClick={props.clickIncrease} style={{cursor:'pointer'}}/>
                      </Row>
                      <Row>
                      <span className="m-auto">{props.vote}</span>
                      </Row>
                      <Row>
                        <IoMdArrowDropdown size ="4em" onClick={props.clickDecrease} style={{cursor:'pointer'}}/>
                      </Row>
                  </Col>
                  <Col xl={11} md={11} sm={11} xs={11}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Col>
                </Row>
                
       
    )
}

export default AnswerCards;