import React from 'react'
import EducationExperience from './EducationalExperience';
import FinalCv from './FinalCv';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            firstNameInput: '',
            lastNameInput: '',
            numberInput: '',
            emailInput: '',
        }
    }

    handleCallback = (name, value) =>{
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div>
                <GeneralInformation parentCallback={this.handleCallback} />
                <EducationExperience />
                <PracticalExperience />
                <FinalCv parentProps={this.state} />
            </div>
        )
    }
}

export default App;