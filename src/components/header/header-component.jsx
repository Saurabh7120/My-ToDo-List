/*jshint esversion:9*/

import React from 'react';

export const Header = () => {

function getPresentDay(){
  const date = new Date().toString();
  let day = date.slice(0,3);
  switch (day) {
    case 'Sun':
      day = 'Sunday';
      break;
    case 'Mon':
      day = 'Monday';
      break;
    case'Tue':
      day = 'Tuesday';
      break;
      case'Wed':
        day = 'Wednesday';
        break;
      case'Thu':
        day = 'Thursday';
        break;
      case'Fri':
        day = 'Friday';
        break;
      case'Sat':
        day = 'Saturday';
        break;

    default:
      return day;
  }

  const restOfDate = date.slice(3,15);

  return(`${day}`+',' + `${restOfDate}`)
}
  return(
    <div style={{textAlign:'center'}}>
  <p>{getPresentDay()}</p>
  </div>
);}
