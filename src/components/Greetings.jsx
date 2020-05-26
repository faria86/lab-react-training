import React from 'react';
import './Greetings.css';

const Greetings = props => {
  const lang = props.lang
  return (
    <div class="greetings">
      <span>{props.lang}</span>
      {props.children}
    </div>
  );
};

export default Greetings;