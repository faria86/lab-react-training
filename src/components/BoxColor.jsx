import React from 'react';

const BoxColor = props => {
  const r = props.red;
  const g = props.green;
  const b = props.blue;
  return (
    <div class="box-color" style={{ backgroundColor: (props.red, props.green, props.blue) }}>
    </div>
  );
};

export default BoxColor;
