import React from 'react';
import './appStyle.css';

class GeneralInformation extends React.Component{
    constructor(props){
        super(props);
    }

    readValue(name, value){
        this.props.parentCallback(name, value);
    }

    render() {
        return (
            <div className="container">
                <h1>general information</h1>
                <input 
                    onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                    className="firstNameInput" 
                    type="text" 
                    placeholder="Your first name" 
                />
                <input 
                    onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                    className="lastNameInput" 
                    type="text" 
                    placeholder="Your last name" 
                />
                <input 
                    onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                    className="numberInput" 
                    type="number" 
                    placeholder="Your phone" 
                />
                <input 
                    onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                    className="emailInput" 
                    type="email" 
                    placeholder="Your email" 
                />
            </div>
        )
    }
}

export default GeneralInformation;