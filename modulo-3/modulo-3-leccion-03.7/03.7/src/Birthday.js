import React, { useState } from 'react';
import './App.css';

const Birthday = () => {
  const [age, setAge] = useState(20);
  const handleAgeClick = () => {
    setAge(age + 1);
  };
  const [presents, setPresents] = useState(1);
  const handlePresentClick = () => {
    setPresents(presents + 1);
  };

  const handleReset = () => {
    setAge(20)
    setPresents(1);
  };
  
  let ending = '';
  if (presents >= 2) {
    ending = 's';
  }

  // Si la persona tiene más de 25 años,
  // Nunca va a recibir más de 5 regalos.
  // Pobrecita :(
  let warning = '';
  if (age >= 25) {
    if (presents > 5) {
      setPresents(5);
      warning = <p>Ya te vale</p>;
    }
  }

  return (
    <div className='container'>
      <p className='ageText'>Hoy tengo {age} años de edad</p>
      <button className='btn btnAge' onClick={handleAgeClick}>
        Hazme más viejo
      </button>
      <p className='presentsText'>
        Tengo {presents} regalo{ending}
      </p>
      {warning}
      <button className='btnPresents' onClick={handlePresentClick}>
        Dame regalos
      </button> 
      <br></br>
      <button className='btnReset' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Birthday;
