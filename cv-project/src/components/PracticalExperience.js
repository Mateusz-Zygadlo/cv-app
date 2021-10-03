import React from 'react';
import './appStyle.css';

class PracticalExperience extends React.Component{
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
                <h1 className="name">Practical Experience</h1>
                {this.state.btnOpen ? 
                    <div className="container">
                        <input type="text" placeholder="Company name" />
                        <input type="text" placeholder="Position title" />
                        <input type="text" placeholder="Main tasks of your job" />
                        <input type="text" placeholder="City" />
                        <div className="bottomBtn">
                            <button className="removeBtn" type="submit" onClick={()=>{this.btnClicked()}}>Remove</button>
                        </div>
                    </div>
                    : 
                    <div className="closeBtn">
                        <button type="submit" onClick={()=>{this.btnClicked()}}>Add</button>
                    </div>}
            </div>
        )
    }
}

export default PracticalExperience;