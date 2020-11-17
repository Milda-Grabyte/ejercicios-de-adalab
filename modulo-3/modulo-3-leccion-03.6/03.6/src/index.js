import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowInput from './ShowInput';
import BlinkingSquare from './BlinkingSquare';
import Clock from './Clock';
import SheepCounter from './SheepCounter';


ReactDOM.render(
  <React.StrictMode>
    <ShowInput />
    <BlinkingSquare />
    <Clock />
    <SheepCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

