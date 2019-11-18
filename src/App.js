import React,{Component} from 'react';
//import {Router, Route, browserHistory} from "react-router";
//import { createBrowserHistory } from 'history'
import ScheduleTraining from "./ScheduleTraining";
//import TrainingList from "./TrainingList";


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
      // <Router history={browserHistory}>
      // <Route path={"/"} component={TrainingList}/>
      // <Route path={"/schedule"} component={ScheduleTraining}/>
      // </Router> 
    );
  }

}

export default App;
