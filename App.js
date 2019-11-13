import React,{Component} from 'react';
// import {Router, Route, browserHistory} from "react-router";
import ScheduleTraining from "./ScheduleTraining";
import TrainingList from "./TrainingList";


class App extends Component{
  constructor(){
    super()
    this.state={
      data:""
    };
  }

  render(){
    return(
      <div>
        <ScheduleTraining/>
      </div>
  //     <Router history={browserHistory}>
  //     <Route path={"/"} component={ScheduleTraining}/>
  //     <Route path={"Training"} component={TrainingList}/>
  // </Router> 
    );
  }

}

export default App;
