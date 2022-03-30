import React from 'react';
import Button from './Button';

const Plan = ({ plan }) => {
  let planColor;

  if (plan.name === 'Pro') {
    planColor = 'plan--blue';
  } else if (plan.name === 'Basic' || plan.name === 'Ultimate') {
    planColor = 'plan--white';
  } else {
    planColor = 'plan--blue';
  }
  return (
    <div
      className={`plan ${planColor} m-6 rounded-xl md:flex lg:grow md:justify-between md:items-center md:flex-wrap md:text-left md:px-10 lg:block lg:text-center`}
    >
      <div className=" md:basis-1/2 md:px-6 lg:basis-0">
        <h3 className="font-kumbh-bold text-lg mb-8">{plan.name}</h3>
        <h2 className="font-kumbh-bold text-2xl mb-4">{plan.price}</h2>
        <p>{plan.coverage}</p>
      </div>
      <div className="mt-16 mb-2 md:basis-1/2  md:px-6 md:self-end lg:basis-0 ">
        <p className="mb-6">{plan.features[0]}</p>
        <p className="mb-6">{plan.features[1]}</p>
        <p className="mb-6">{plan.features[2]}</p>
      </div>
      <div className="md:basis-1/2 md:px-6  lg:basis-0 ">
        <Button name="Try for Free" planType={plan.name} />
      </div>
    </div>
  );
};

export default Plan;
