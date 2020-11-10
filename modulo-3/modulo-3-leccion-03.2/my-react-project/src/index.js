import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quiat from './quiat.png';
import './Mediacard.scss';


// function App() {
//   return (
//     <div className='mediacard'>
//       <img src={quiat} className='mediacard-quiat' alt='quiat' />
//       <p className='mediacard-text'>¡Hola, gatistas!</p>
//     </div>
//   );
// }

// Lo mismo pero escrito como clase (hoy en día se usan más los componentes funcionales)

class App extends Component {
  render() {
    return (
      <div className='mediacard'>
        <img src={quiat} className='mediacard-quiat' alt='quiat' />
        <p className='mediacard-text'>¡Hola, gatistas!</p>
        <p className='mediacard-name'>{this.props.name}</p>
        <p className='mediacard-date'>Nací en {this.props.year}</p>
      </div>
    );
  }
}

console.log('hola!');


ReactDOM.render(
  <React.StrictMode>
    <App name='Puco' year='2016' />
    <App name='Sally' year='2015' />
  </React.StrictMode>,
  document.getElementById('root')
);