import React from 'react';

const Rating = (props) => {
  const number = props.children;

  var roundNumber = Math.round(number);
  var stars = [];
  for (let i = 0; i < 5; i++) {
    var imgName = 'dice-empty';
    if (roundNumber > i) {
      imgName = 'dice1';
    }
    const imgSrc = '/img/' + imgName + '.png';
    stars.push(<img style={{ maxWidth: 20 }} src={imgSrc} alt={imgName}></img>);
  }
  return (
    <div class="rating">
      <small>
        {roundNumber}
      </small>
      {stars}
    </div>
  );
};

export default Rating;
