import React from 'react';
import './appStyle.css';

class GeneralInformation extends React.Component{
    render() {
        return (
            <div className="container">
                <h1>general information</h1>
                <input type="text" placeholder="Your first name" />
                <input type="text" placeholder="Your last name" />
                <input type="number" placeholder="Your phone" />
                <input type="email" placeholder="Your email" />
            </div>
        )
    }
}

export default GeneralInformation;