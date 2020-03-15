import React from 'react';
import {Card} from 'react-bootstrap';
import '../../../Static/css/bootstrap.css';
import '../../../Static/css/style.css';
import '../../../Static/css/profile/p_style.css';



const aboutCard = () =>{
    return (
        <Card className=" my-2 custom-container-profile">
                <Card.Body>
                <Card.Title className=" f-1_5">About <div className="float-right"><a href=""><i className="fas fa-edit f"></i>Edit</a></div></Card.Title>
                <Card.Text className=" f-1">Here comes about context</Card.Text>

                </Card.Body>
        </Card>

    )
}

export default aboutCard;