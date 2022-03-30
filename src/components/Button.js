import React from 'react';

const Button = ({ name, planType }) => {
  let btnType;

  if (planType === 'Basic' || planType === 'Ultimate') {
    btnType = 'btn--secondary';
  } else if (planType === 'Pro') {
    btnType = 'btn--white';
  } else {
    btnType = 'btn--primary';
  }

  return <button className={`btn ${btnType}`}>{name}</button>;
};

export default Button;
