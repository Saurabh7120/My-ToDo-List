/*jshint esversion:9*/
import React from 'react';
import {Header} from './components/header/header-component';
import {InputTask} from './components/input/input-component';
import {TodayTasks} from './components/todayList/todayList-component';
import nextId from "react-id-generator";


class todolist extends React.Component{
  constructor(){
    super();
    const date = new Date();
    this.state={
      currentDate: new Date(),
      tasks:[],
      laterTasks:[]
    };
  }

  addTask = (inputText,date) =>{
    if(this.state.currentDate.getFullYear()===date.getFullYear()){
      if(this.state.currentDate.getMonth()===date.getMonth()){
        if(this.state.currentDate.getDate() === date.getDate()){

          this.setState(prevState => ({
            tasks:[...prevState.tasks,inputText]
          }))

          return;
        }
      }
    }

    const entryData ={
      dateId:nextId(),
      Date: date.toString(),
      taskList:[inputText]
    }
    this.setState(prevState => ({
      laterTasks:[...prevState.laterTasks,entryData]
    }))

  }


  render(){

    return(
      <div>
        <Header/>
        <InputTask handleClick={this.addTask} />
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
        <h1 className='h1 mb-2'>Today</h1>
        <TodayTasks  tasks={this.state.tasks}/>
        </div>
        <div className='col-lg-6'>
        <h1 className='h1 mb-2'>Later</h1>
        <TodayTasks  tasks={this.state.laterTasks}/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}


export default todolist;
