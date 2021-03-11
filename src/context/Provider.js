// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  // const [cars, setCars] = useState({red: false, blue: false, yellow: false});
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);
  // const moveCar = (car, side) => {
  //   setCars({ ...cars, cars: { [car]: side } });
  // };

  const moveCar = (car) => {
    car === 'red' && setRedCar(!redCar);
    car === 'blue' && setBlueCar(!blueCar);
    car === 'yellow' && setYellowCar(!yellowCar);
  }

  const context = { redCar, blueCar, yellowCar, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
  
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
