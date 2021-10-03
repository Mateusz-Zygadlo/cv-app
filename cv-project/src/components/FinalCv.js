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
                    <div className="schoolName">[shoolName]: {this.props.parentProps.schoolNameInput}</div>
                    <div className="titleOfStudy">[titleOfStudy]: {this.props.parentProps.titleOfStudyInput}</div>
                    <div className="degree">[degree]: {this.props.parentProps.degreeInput}</div>
                    <div className="city">[city]: {this.props.parentProps.cityInput}</div>
                    <div className="dateOfStudy">[dateOfStudy]: {this.props.parentProps.dateOfStudyInput}</div>
                </div>
                <div className="footer">
                    <div className="companyName">[companyName]: {this.props.parentProps.companyNameInput}</div>
                    <div className="positionTitle">[positionTitle]: {this.props.parentProps.positionTitleInputer}</div>
                    <div className="mainTasks">[mainTasks]: {this.props.parentProps.mainTasksInput}</div>
                    <div className="city">[city]: {this.props.parentProps.cityCompanyInput}</div>
                </div>
            </div>
        )
    }
}

export default FinalCv;