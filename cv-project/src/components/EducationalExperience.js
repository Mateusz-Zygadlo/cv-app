import React from 'react'
import './appStyle.css';

class EducationExperience extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            btnOpen: false,
        }
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
                        <input type="text" placeholder="School Name" />
                        <input type="text" placeholder="Title of study" />
                        <input type="number" placeholder="degree" />
                        <input type="text" placeholder="City" />
                        <input type="date" placeholder="Date of study" />
                        <div className="bottomBtnEducation">
                            <button className="removeBtn" type="submit" onClick={()=>{this.btnClicked()}}>Remove</button>
                        </div>
                    </div> 
                :   <div className="closeBtn">
                        <button type="submit" onClick={()=>{this.btnClicked()}}>Add</button>
                    </div>}
            </div>
        )
    }
}

export default EducationExperience;