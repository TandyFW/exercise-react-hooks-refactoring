import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';


function TrafficSignal() {
  const {signal, setSignal} = useContext(CarsContext);
  const renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };
  return (
    <div>
      <div className="button-container">
        <button onClick={() => setSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => setSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => setSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signal)} alt="" />
    </div>
  );
};

export default TrafficSignal;
