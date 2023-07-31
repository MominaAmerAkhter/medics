import React from "react"
import { useState } from "react";
import validator from 'validator';
import './App.css';
import { Link, useNavigate } from "react-router-dom"
import NavAdmin from "./NavAdmin";
import Card from 'react-bootstrap/Card';
import OutPatient from './OutPatient';
import outPatient from "./outpatient.png";
import pharmacy from "./medication.png";
import registration from "./registration.png";
import admin from "./admin.png";


const HomeScreen = () => {

    const fre= "Dhelllo"
    return (
        <div >
            <NavAdmin/>
            <div className="Homescreen-body">
                <div className="Panel-cards-double">
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={outPatient} alt="outPatient" />
                                    <Card.Title>OUT PATIENT</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="Panel-cards-single">           
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={pharmacy} alt="pharmacy" />
                                    <Card.Title>PHARMACY</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>     
                    </div>
                </div>
                <div className="Panel-cards-double">
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={registration} alt="registration" />
                                    <Card.Title>PATIENT REGISTRATION</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={admin} alt="admin" />
                                    <Card.Title>ADMIN PANEL</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
} 



export default HomeScreen;
