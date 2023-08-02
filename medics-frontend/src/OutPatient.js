import React from "react"
import { useState } from "react";
import validator from 'validator';
import './App.css';
import { Link, useNavigate } from "react-router-dom"
import NavAdmin from "./NavAdmin";
import Card from 'react-bootstrap/Card';
import OutPatient from './OutPatient';
import outPatient from "./outpatient.png";
import shifts from "./shifts.png";
import payments from "./payments.png";
import outpatient from "./outpatient_med.png";
import prescriptions from "./prescriptions.png";
import appointments from "./appointments.png";
import reports from "./reports.png";


const HomeScreen = () => {
                                                                                                                                                                                                                                                              
    return (
        <div >
            <NavAdmin/>
            <div className="Outpatient-body">
                <div className="Panel-cards-double">
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={shifts} alt="shifts" />
                                    <Card.Title>MANAGE SHIFTS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="Panel-cards-single">           
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={prescriptions} alt="prescriptions" />
                                    <Card.Title>OPD PRESCRIPTIONS</Card.Title>
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
                                    <Card.Img variant="centre" src={appointments} alt="appointments" />
                                    <Card.Title>APPOINTMENTS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={payments} alt="payments" />
                                    <Card.Title>PAYMENTS & REFUNDS</Card.Title>
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
                                    <Card.Img variant="centre" src={outpatient} alt="outpatient" />
                                    <Card.Title>OUT PATIENTS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="Panel-cards-single">
                        <Link to='/OutPatient' className="link-cards">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Img variant="centre" src={reports} alt="reports" />
                                    <Card.Title>REPORTS</Card.Title>
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
