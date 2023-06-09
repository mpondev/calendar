import React from 'react';
import CalHeaderBtn from './CalHeaderBtn';
import CalHeaderDate from './CalHeaderDate';
import CalHeaderGoTo from './CalHeaderGoTo';
import './CalHeader.css';

function CalHeader() {
  return (
    <div className="cal-header">
      <CalHeaderBtn />
      <CalHeaderDate />
      <CalHeaderGoTo />
    </div>
  );
}

export default CalHeader;
