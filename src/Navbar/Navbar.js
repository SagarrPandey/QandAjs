import React from 'react';
import '../Static/css/qanda/style.css';
import '../Static/css/bootstrap.css';
import '../Static/css/style.css';
import { FaLaptopCode } from 'react-icons/fa';

const navbar = () =>{
    return(
    
        <nav className="navbar navbar-expand-md bg-yellow navbar-light fixed-top py-1" id="main-nav">
        <div className="container">
          <a href="/" className="navbar-brand pr-5">
                    <FaLaptopCode size='2em'/>
             <span className="ml-2 font-custom">Q & A</span>
            </a>
          <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <div className="navbar-toggler-icon"></div>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
                <form className="form-inline">
                    <input className="form-control form-control-sm mr-sm-2 ml-sm-5" type="search" placeholder="Search" aria-label="Search"/>

                </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="QandA" className="nav-link">QandA</a>
              </li>
              <li className="nav-item">
                <a  className="nav-link text-primary"  data-toggle="modal" data-target="#login">login</a>
              </li>
              <li className="nav-item">
                <a  className="nav-link btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#signup">Sign up</a>
              </li>



            </ul>
          </div>

        </div>
      </nav>



      
    )
}

export default navbar;