import React, { Component } from "react";
import "./ScheduleTraining.css";
// import {browserHistory} from "react-router";

class ScheduleTraining extends Component {
  constructor() {
    super();
    this.state = {
      meetingList: {
        training: "",
        description: "",
        department: "",
        date: "",
        duration: "",
        meetingroom: ""
      },
      meetingListArray: [],
      filterString:""
    };
    // this.handelInput = this.handelInput.bind(this);
  }

  handelInput = event => {
    const { name, value } = event.target;
    console.log("Name", name, value);
    event.persist();
    let oldState = this.state.meetingList;
    oldState[name] = value;
    this.setState({ meetingList: oldState });
    console.log("Old State", oldState);
  };

handelFilter=(event)=>{
  const filter=event.target.value;
  this.setState({filterString:filter});
  console.log("filter",filter);
  console.log("state", this.state.filterString)
}

  // filteredTraining=
  //  this.state.meetingListArray.filter((meetingarray)=>{
  //    return meetingarray.training===this.state.filterString
  //  })
   //console.log(filteredTraining);
   
 

  afterSubmission = event => {
    console.log("Inside submit");
    event.preventDefault();
    let newState = this.state.meetingListArray;
    let newStateMeetingList = Object.assign({}, this.state.meetingList);
    newStateMeetingList["training"] = "";
    newStateMeetingList["description"] = "";
    newStateMeetingList["department"] = "";
    newStateMeetingList["date"] = "";
    newStateMeetingList["duration"] = "";
    newStateMeetingList["meetingroom"] = "";
    newState.push(this.state.meetingList);

    this.setState(
      { meetingListArray: newState, meetingList: newStateMeetingList },
      () => {
        console.log(this.state);
      }
    );
    //this.renderDynamicMeetings();
  };

  // editMeeting=(event, trainingid)=>{
  //   const trainingIndex=this.state.meetingListArray.findIndex(training=>{
  //     return training.trainingid===trainingid;
  //   });

  //   const train={
  //     ...this.state.meetingListArray[trainingIndex]
  //   };
  //   train.training.value=train.training;
  // }

  renderDynamicMeetings = () => {
    console.log("TRAILS", this.state.meetingListArray)
    if(this.state.meetingListArray.length > 0){
      const trail= this.state.meetingListArray.map(t => {
        return(
            <div className="card" key={t.duration} style={{width: 30 + 'rem' }}>
              {/* <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} /> */}
                <div className="card-body">
                <h3 className="card-title">TrainingName : {t.training}</h3>
                <h3 className="card-text">Description : {t.description} </h3>
                <h3 className="card-text">Department : {t.department} </h3>
                <h3 className="card-text">Date : {t.date} </h3>
                <h3 className="card-text">Duration : {t.duration} </h3>
                {/* <h4 className="card-text" onClick={(event)=>this.editMeeting(event, t.training)}>edit</h4> */}
                <ul className="list-group list-group-flush">
              </ul>
              </div>
          </div>
        )
      })
      return(
        <div className = "row">
          {trail}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="form-container">
        <h2>Schedule Training</h2>

        <form onSubmit={this.afterSubmission} className="form-main">
        
          <div className="form-section">
            <label htmlFor="training">Training : </label>
            <input
              type="text"
              id="training"
              className="input-boxes"
              placeholder="Training Name"
              name="training"
              required="required"
              onChange={this.handelInput}
              value={this.state.meetingList.training}
            ></input>
          </div>

          <div className="form-section">
            <label htmlFor="description">Description : </label>
            <textarea
              id="description"
              placeholder="Description"
              className="input-boxes"
              name="description"
              onChange={this.handelInput}
              value={this.state.meetingList.description}
            ></textarea>
          </div>

          <div className="form-section">
            <label htmlFor="department">Department : </label>
            <input
              type="text"
              id="department"
              placeholder="department"
              name="department"
              className="input-boxes"
              onChange={this.handelInput}
              value={this.state.meetingList.department}
            ></input>
          </div>

          <div className="form-section">
            <label htmlFor="Date">Date : </label>
            <input
              type="date"
              id="date"
              placeholder="dd/mm/yyyy"
              name="date"
              onChange={this.handelInput}
              className="input-boxes"
              value={this.state.meetingList.date}
            ></input>
          </div>

          <div className="form-section">
            <label htmlFor="duration">Duration : </label>
            <input
              type="text"
              id="duration"
              placeholder="00:00 AM"
              name="duration"
              className="input-boxes"
              onChange={this.handelInput}
              value={this.state.meetingList.duration}
            ></input>
          </div>

          <div className="form-section">
            <label htmlFor="meetingroom">Meeting Room : </label>
            <input
              type="text"
              id="meetingroom"
              placeholder="Meeting Room"
              name="meetingroom"
              onChange={this.handelInput}
              className="input-boxes"
              value={this.state.meetingList.meetingroom}
            ></input>
          </div>

        
          {/* <input type="submit" id="save" value="Submit">Save</input>

                
                <input type="cancel" id="cancel">Cancel</input> */}
          {/* <button>Submit</button> */}
          <div className="form-section">
               <input type="submit" value="Submit" />
          </div>
          
          
        </form>
        <div>
          <h2>Training List</h2>
          <label htmlFor="filter">filter : </label>
          <input type="text" className="filter" placeholder="Enter training name" name="filter"
          onChange={this.handelFilter}></input>
          <input type="submit" value="Submit"  onClick={this.filteredTraining}/>
          {this.renderDynamicMeetings()}
        </div>
      </div>
    );
  }
}
export default ScheduleTraining;
