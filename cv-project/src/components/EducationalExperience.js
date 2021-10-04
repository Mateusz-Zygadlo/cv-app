import React, { useState } from 'react'
import './appStyle.css';

const EducationExperience = (props) => {
    const [btnOpen, setBtnOpen] = useState(false);
    const [schoolNameInput, setSchoolNameInput] = useState('');
    const [titleOfStudyInput, setTitleOfStudyInput] = useState('');
    const [degreeInput, setDegreeInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [dateOfStudyInput, setDateOfStudyInput] = useState(''); 
    
    const schoolName = (value) => {
        setSchoolNameInput(value);
    }

    const titleOfStudy = (value) => {
        setTitleOfStudyInput(value);
    }

    const degree = (value) => {
        setDegreeInput(value);
    }

    const btnClicked = () => {
        setBtnOpen(!btnOpen);
    }

    const city = (value) => {
        setCityInput(value);
    }

    const dateOfStudy = (value) => {
        setDateOfStudyInput(value);
    }

    return (
        <div>
            <h1 className="name">Education Experience</h1>
            {btnOpen ? 
                <div className="container">
                    <input 
                        value={schoolNameInput} 
                        className="schoolNameInput" 
                        onChange={(e)=>{schoolName(e.target.value); props.setSchoolNameFunc(e.target.value)}} 
                        type="text" 
                        placeholder="School Name" 
                    />
                    <input 
                        value={titleOfStudyInput} 
                        className="titleOfStudyInput" 
                        onChange={(e)=>{titleOfStudy(e.target.value); props.setTitleOfStudyFunc(e.target.value)}} 
                        type="text"
                        placeholder="Title of study" 
                    />
                    <input 
                        value={degreeInput} 
                        className="degreeInput"
                        onChange={(e)=>{degree(e.target.value); props.setDegreeFunc(e.target.value)}} 
                        type="text" 
                        placeholder="degree" 
                    />
                    <input 
                        value={cityInput} 
                        className="cityInput" 
                        onChange={(e)=>{city(e.target.value); props.setCityFunc(e.target.value)}} 
                        type="text" 
                        placeholder="City" 
                    />
                    <input 
                        value={dateOfStudyInput} 
                        className="dateOfStudyInput" 
                        onChange={(e)=>{dateOfStudy(e.target.value); props.dateOfStudyFunc(e.target.value)}} 
                        type="date" 
                        placeholder="Date of study" 
                    />
                    <div className="bottomBtnEducation">
                        <button className="removeBtn" type="submit" onClick={btnClicked}>hide</button>
                    </div>
                </div> 
            :   <div className="closeBtn">
                    <button type="submit" onClick={btnClicked}>show</button>
                </div>
            }
        </div>
    )
}

export default EducationExperience;