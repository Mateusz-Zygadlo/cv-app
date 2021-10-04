import React, { useState } from 'react';
import './appStyle.css';

const GeneralInformation = (props) => {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    
    const firstName = (value) => {
        setFirstNameInput(value);
    }

    const lastName = (value) => {
        setLastNameInput(value);
    }

    const number = (value) => {
        setNumberInput(value);
    }

    const email = (value) => {
        setEmailInput(value);
    }
        
    return (
        <div className="container">
            <h1>general information</h1>
            <input
                value={firstNameInput} 
                onChange={(e)=>{firstName(e.target.value); props.setNameFunc(e.target.value)}} 
                className="firstNameInput" 
                type="text" 
                placeholder="Your first name" 
            />
            <input 
                value={lastNameInput} 
                onChange={(e)=>{lastName(e.target.value); props.setLastNameFunc(e.target.value)}} 
                className="lastNameInput" 
                type="text" 
                placeholder="Your last name" 
            />
            <input
                value={numberInput} 
                onChange={(e)=>{number(e.target.value); props.setNumberFunc(e.target.value)}} 
                className="numberInput" 
                type="number" 
                placeholder="Your phone" 
            />
            <input 
                value={emailInput}
                onChange={(e)=>{email(e.target.value); props.setEmailFunc(e.target.value)}} 
                className="emailInput" 
                type="email" 
                placeholder="Your email" 
            />
        </div>
    )
}

export default GeneralInformation;