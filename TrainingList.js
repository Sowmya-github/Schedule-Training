import React, {Component} from 'react';

class TrainingList extends Component{
    constructor(){
        super()
        this.state={
            list:""
        };
    }

    render(){
        return(
            <div>
                <h2>List of trainings</h2>
            </div>
        );
    }
}

export default TrainingList;