import React, { useState } from 'react'
import EducationExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';
import FinalCv from './FinalCv';

const App = () => {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [schoolNameInput, setSchoolNameInput] = useState('');
    const [titleOfStudyInput, setTitleOfStudyInput] = useState('');
    const [degreeInput, setDegreeInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [dateOfStudyInput, setDateOfStudyInput] = useState('');
    const [companyNameInput, setCompanyNameInput] = useState('');
    const [positionTitleInputer, setPositionTitleInputer] = useState('');
    const [mainTasksInput, setMainTasksInput] = useState('');
    const [cityCompanyInput, setCityCompanyInput] = useState('');

    const setName = (value) => {
        setFirstNameInput(value);
    }

    const setLastName = (value) => {
        setLastNameInput(value);
    }

    const setNumber = (value) => {
        setNumberInput(value);
    }

    const setEmail = (value) => {
        setEmailInput(value);
    }

    const setSchoolName = (value) => {
        setSchoolNameInput(value);
    }

    const setTitleOfStudy = (value) => {
        setTitleOfStudyInput(value);
    }

    const setDegree = (value) => {
        setDegreeInput(value);
    }

    const setCity = (value) => {
        setCityInput(value);
    }

    const dateOfStudy = (value) => {
        setDateOfStudyInput(value);
    }

    const companyName = (value) => {
        setCompanyNameInput(value);
    }

    const positionTitle = (value) => {
        setPositionTitleInputer(value);
    }

    const mainTasks = (value) => {
        setMainTasksInput(value);
    }

    const cityCompany = (value) => {
        setCityCompanyInput(value);
    }

    return (
        <div>
            <GeneralInformation 
                setNameFunc={setName} 
                setLastNameFunc={setLastName} 
                setNumberFunc={setNumber} 
                setEmailFunc={setEmail} 
            />
            <EducationExperience 
                setSchoolNameFunc={setSchoolName} 
                setTitleOfStudyFunc={setTitleOfStudy} 
                setDegreeFunc={setDegree} 
                setCityFunc={setCity} 
                dateOfStudyFunc={dateOfStudy}  
            />
            <PracticalExperience 
                companyNameFunc={companyName} 
                positionTitleFunc={positionTitle} 
                mainTasksFunc={mainTasks}
                cityCompanyFunc={cityCompany} 
            />
            <FinalCv 
                firstName={firstNameInput}
                lastName={lastNameInput}
                number={numberInput}
                email={emailInput}
                schoolName={schoolNameInput}
                titleOfStudy={titleOfStudyInput}
                degree={degreeInput}
                city={cityInput}
                dateOfStudy={dateOfStudyInput}
                companyName={companyNameInput}
                positionTitle={positionTitleInputer}
                mainTasks={mainTasksInput}
                cityCompany={cityCompanyInput}
            />
        </div>
    )
}

export default App;