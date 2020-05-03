/*jshint esversion:9*/
import React from 'react';

export const TodayTasks = (props) => {
  return(
    <div>
    {props.tasks.map((task,index) => (
      <div key={index}>
      <h4 >{task.Date}</h4>
      <ul>
      {task.taskList.map((tsk,index) => (
        <li key ={index}>{tsk}</li>
      ))}
      </ul>
      </div>
    ))}
</div>
  )
}
