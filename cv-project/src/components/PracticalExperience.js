import React from 'react';
import './appStyle.css';

class PracticalExperience extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            btnOpen: false,
            companyNameInput: '',
            positionTitleInputer: '',
            mainTasksInput: '',
            cityCompanyInput: '',
        }
    }

    btnClicked(){
        this.setState({
            btnOpen: !this.state.btnOpen,
        })
    }

    readValue(name, value){
        this.setState({
            [name]: value,
        })
        this.props.parentCallback(name, value);
    }

    render() {
        return (
            <div>
                <h1 className="name">Practical Experience</h1>
                {this.state.btnOpen ? 
                    <div className="container">
                        <input 
                            value={this.state.companyNameInput} 
                            className="companyNameInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="Company name" 
                        />
                        <input 
                            value={this.state.positionTitleInputer} 
                            className="positionTitleInputer" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="Position title" 
                        />
                        <input 
                            value={this.state.mainTasksInput} 
                            className="mainTasksInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}}
                            type="text" 
                            placeholder="Main tasks of your job" 
                        />
                        <input 
                            value={this.state.cityCompanyInput} 
                            className="cityCompanyInput" 
                            onChange={(e)=>{this.readValue(e.target.className, e.target.value)}} 
                            type="text" 
                            placeholder="City" 
                        />
                        <div className="bottomBtn">
                            <button className="removeBtn" type="submit" onClick={()=>{this.btnClicked()}}>hide</button>
                        </div>
                    </div>
                : 
                    <div className="closeBtn">
                        <button type="submit" onClick={()=>{this.btnClicked()}}>show</button>
                    </div>
                }
            </div>
        )
    }
}

export default PracticalExperience;