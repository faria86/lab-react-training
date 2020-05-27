import React from 'react';

const BoxColor = (props) => {
  const rgb = 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')';
  return (
    <div
      class="box-color"
      style={{
        backgroundColor: rgb,
      }}
    >
      <p>{rgb}</p>
    </div>
  );
};

export default BoxColor;
