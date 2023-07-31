import React from "react"
import { useState } from "react";
import validator from 'validator';
import './App.css';
import { useNavigate } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
import NavAdmin from "./NavAdmin";

const OutPatient = () => {


    return (
        <div>
            <NavAdmin/>
            Out patient
        </div>
    );
} 



export default OutPatient;
