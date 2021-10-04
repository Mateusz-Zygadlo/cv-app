import React, { useState } from 'react';
import './appStyle.css';

const PracticalExperience = (props) => {
    const [btnOpen, setBtnOpen] = useState(false);
    const [companyNameInput, setCompanyNameInput] = useState('');
    const [positionTitleInputer, setPositionTitleInputer] = useState('');
    const [mainTasksInput, setMainTasksInput] = useState('');
    const [cityCompanyInput, setCityCompanyInput] = useState('');

    const btnClicked = () => {
        setBtnOpen(!btnOpen);
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

    return(
        <div>
            <h1 className="name">Practical Experience</h1>
            {btnOpen ? 
                <div className="container">
                    <input 
                        value={companyNameInput} 
                        className="companyNameInput" 
                        onChange={(e)=>{companyName(e.target.value); props.companyNameFunc(e.target.value)}} 
                        type="text" 
                        placeholder="Company name" 
                    />
                    <input 
                        value={positionTitleInputer} 
                        className="positionTitleInputer" 
                        onChange={(e)=>{positionTitle(e.target.value); props.positionTitleFunc(e.target.value)}} 
                        type="text" 
                        placeholder="Position title" 
                    />
                    <input 
                        value={mainTasksInput} 
                        className="mainTasksInput" 
                        onChange={(e)=>{mainTasks(e.target.value); props.mainTasksFunc(e.target.value)}}
                        type="text" 
                        placeholder="Main tasks of your job" 
                    />
                    <input 
                        value={cityCompanyInput} 
                        className="cityCompanyInput" 
                        onChange={(e)=>{cityCompany(e.target.value); props.cityCompanyFunc(e.target.value)}} 
                        type="text" 
                        placeholder="City" 
                    />
                    <div className="bottomBtn">
                        <button className="removeBtn" type="submit" onClick={btnClicked}>hide</button>
                    </div>
                </div>
            : 
                <div className="closeBtn">
                    <button type="submit" onClick={btnClicked}>show</button>
                </div>
            }
        </div>
    )
}

export default PracticalExperience;