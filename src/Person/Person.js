import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p>{props.name}</p>
      <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
  );
}

export default person;
