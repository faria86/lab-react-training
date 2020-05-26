import React from 'react';


const Random = props => {
  const min = props.min;
  const max = props.max;
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <div class="random">
      <span>Random value between {props.min} and {props.max} => {random}</span>
    </div>
  );
};

export default Random;