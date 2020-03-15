import React from 'react';
import {Button,Card} from 'react-bootstrap';
import '../../../Static/css/bootstrap.css';
import '../../../Static/css/style.css';
import '../../../Static/css/profile/p_style.css';



const personCard = () =>{
    return (
        <Button variant="light" className=" mb-2">
        <Card>
        <a href="" className="p-2">
            Lorem ipsum, dolor sit amet consecteture hi there...
        </a>
        <div className=" text-muted p-1">
            <div className="float-right">- sam rolla &bull; 2.5k views &bull;  1hr ago </div>
        </div>
        </Card>
      </Button>

    )
}

export default personCard;