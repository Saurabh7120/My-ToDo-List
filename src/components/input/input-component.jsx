/*jshint esversion:9*/

import React,{useState} from 'react';
import DateTimePicker from 'react-datetime-picker';

export const InputTask = (props) => {
  const [date,setDate] = useState(new Date());
  const [inputText, setText] = useState('');

  const   handleDateChange = date => setDate(date);
  const   handleTextChange = event => {
  const   newValue = event.target.value;
    setText(newValue);
  }


  return(
    <div className='container mt-5'>
    <div className='row ml-5' style={{paddingLeft:'200px'}}>
      <div className='col-lg-4' style={{textAlign:'right'}}>
        <input type='text' placeholder='type your task here..' value={inputText} onChange={handleTextChange} />
      </div>
      <div className='col-lg-3 mr-2'>
      <DateTimePicker
      onChange={handleDateChange}
       value={date}
       format='dd-MM-yyyy'
     />
      </div>
      <div className='col-lg-4'>
        <input type='button' value='ADD' onClick={()=>{props.handleClick(inputText,date);}}/>
      </div>
    </div>
    </div>
  );
}
