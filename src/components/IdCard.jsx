import React from 'react';
import './IdCard.css';

const IdCard = props => {
  const lastName = props.lastName;
  const firstName = props.firstName;
  const gender = props.gender;
  const height = props.height;
  const picture = props.picture;
  const dob = props.birth;

  return (
    <div className="id-card">
      <p>Last Name: {lastName}</p>
      <p>First Name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {dob.toLocaleString()}</p>
      <div class="pic-photo">
        <img src={picture} alt="profile-pic"></img>
      </div>
    </div>
  )
}

export default IdCard;