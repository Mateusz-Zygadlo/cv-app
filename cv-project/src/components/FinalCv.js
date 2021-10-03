import React from 'react'

class FinalCv extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="finalCv">
                <div className="header">
                    <div className="firstAndFastName">{this.props.parentProps.firstNameInput} {this.props.parentProps.lastNameInput}</div>
                    <div className="phone">[phone]: {this.props.parentProps.numberInput}</div>
                    <div className="email">{this.props.parentProps.emailInput}</div>
                </div>
                <div className="main">
                    <div className="schoolName">[shoolName]: None</div>
                    <div className="titleOfStudy">[titleOfStudy]: None</div>
                    <div className="degree">[degree]: None</div>
                    <div className="city">[city]: Środa Śląska</div>
                    <div className="dateOfStudy">[dateOfStudy]: 2019</div>
                </div>
                <div className="footer">
                    <div className="companyName">[companyName]: Coca Cola</div>
                    <div className="positionTitle">[positionTitle]: Manager</div>
                    <div className="mainTasks">[mainTasks]: Social media</div>
                    <div className="city">[city]: Warszawa</div>
                </div>
            </div>
        )
    }
}

export default FinalCv;