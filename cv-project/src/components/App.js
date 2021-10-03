import React from 'react'
import EducationExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

class App extends React.Component{
    render() {
        return (
            <div>
                <GeneralInformation />
                <EducationExperience />
                <PracticalExperience />
            </div>
        )
    }
}

export default App;