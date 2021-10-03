import React from 'react';
import './appStyle.css';

class GeneralInformation extends React.Component{
    constructor(props){
        super(props);
    }

    readFirstNameValue(name, value){
        this.props.parentCallback(name, value);
    }

    render() {
        return (
            <div className="container">
                <h1>general information</h1>
                <input value={this.props.firstNameInput} onChange={(e)=>{this.readFirstNameValue(e.target.className, e.target.value)}} className="firstNameInput" type="text" placeholder="Your first name" />
                <input value={this.props.lastNameInput} onChange={(e)=>{this.readFirstNameValue(e.target.className, e.target.value)}} className="lastNameInput" type="text" placeholder="Your last name" />
                <input value={this.props.numberInput} onChange={(e)=>{this.readFirstNameValue(e.target.className, e.target.value)}} className="numberInput" type="number" placeholder="Your phone" />
                <input value={this.props.emailInput} onChange={(e)=>{this.readFirstNameValue(e.target.className, e.target.value)}} className="emailInput" type="email" placeholder="Your email" />
            </div>
        )
    }
}

export default GeneralInformation;