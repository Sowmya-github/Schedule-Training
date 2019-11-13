import React, {Component} from 'react';
import {browserHistory} from "react-router";
import "./TrainingList.css"

class TrainingList extends Component{
    constructor(){
        super()
        this.state={
            list:""
        };
    }

    handleNewSchedule=()=>
    browserHistory.push("/schedule");

    render(){
        return(
            <div>
                <h2>List of trainings</h2>
                <div>
                    <div>
                        <button onClick={this.handleNewSchedule}>Schedule new Training</button>
                    </div>
                    <div>
                    <ol>
                    <li>Gss</li>
                    <li>TestTree</li>
                    <li>vServe</li>
                </ol>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TrainingList;