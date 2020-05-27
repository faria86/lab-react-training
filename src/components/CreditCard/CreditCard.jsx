import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const type = props.type;
  const number = props.number;
  const expirationMonth = props.expirationMonth;
  const expirationYear = props.expirationYear;
  const bank = props.bank;
  const owner = props.owner;
  const color = props.color;
  const bgColor = props.bgColor;

  var imageName;
  if (type.toLowerCase() === 'visa') {
    imageName = 'visa.png';
  } else if (type.toLowerCase() === 'master card') {
    imageName = 'master-card.svg';
  }

  const lastFourDigits = number.substring(number.length - 4, number.length);

  return (
    <div
      class="credit-card"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <div class="image">
        <img src={'/img/' + imageName} alt={type.toLowerCase()} />
      </div>

      <div class="number">
        <span> **** **** **** {lastFourDigits}</span>
      </div>

      <div class="expiration">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span>{bank}</span>
      </div>

      <div class="owner">
        <span>{owner}</span>
      </div>
    </div>
  );
};

export default CreditCard;
