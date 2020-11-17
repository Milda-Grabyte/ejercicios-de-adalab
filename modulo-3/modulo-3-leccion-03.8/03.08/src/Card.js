import React from 'react';
import './Card.css'

function Card(props) {
  return (
    <section>
      <h1>Name:</h1>
      <p className='card__name'>{props.name}</p>
      <h2>Description:</h2>
      <p className='card__description'>{props.description}</p>
      <h2>Language:</h2>
      <p className='card__language'>{props.language}</p>
      <h2>Age restrictions:</h2>
      <p className='card__age'>{props.age}</p>
      <h2>Genre(s):</h2>
      <p className='card__genre'>{props.genres}</p>
    </section>
  );
}

export default Card;
