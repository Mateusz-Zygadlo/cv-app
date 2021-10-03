import React from 'react'
import './appStyle.css';

class EducationExperience extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            btnOpen: false,
            schoolNameInput: '',
            titleOfStudyInput: '',
            degreeInput: '',
            cityInput: '',
            dateOfStudyInput: '',
        }
    }

    readValue(name, value){
        this.setState({
            [name]: value,
        })
        this.props.parentCallback(name, value);
    }

    btnClicked(){
        this.setState({
            btnOpen: !this.state.btnOpen,
        })
    }

    render() {
        return (
            <div>
                <h1 className="name">Education Experience</h1>
                {this.state.btnOpen ? 
                    <div className="container">
                        <input 
                            value={this.state.schoolNameInput} 
                            className="schoolNameInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="School Name" 
                        />
                        <input 
                            value={this.state.titleOfStudyInput} 
                            className="titleOfStudyInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text"
                             placeholder="Title of study" 
                        />
                        <input 
                            value={this.state.degreeInput} 
                            className="degreeInput"
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="degree" 
                        />
                        <input 
                            value={this.state.cityInput} 
                            className="cityInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="City" 
                        />
                        <input 
                            value={this.state.dateOfStudyInput} 
                            className="dateOfStudyInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="date" 
                            placeholder="Date of study" 
                        />
                        <div className="bottomBtnEducation">
                            <button className="removeBtn" type="submit" onClick={()=>{this.btnClicked()}}>hide</button>
                        </div>
                    </div> 
                :   <div className="closeBtn">
                        <button type="submit" onClick={()=>{this.btnClicked()}}>show</button>
                    </div>
                }
            </div>
        )
    }
}

export default EducationExperience;