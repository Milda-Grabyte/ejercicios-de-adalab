import React, { Component } from 'react';
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
  constructor(name, year) {
    super(name, year);
    this.name = name;
    this.year = year;
  }
  render() {
    return (
      <div className='mediacard'>
        <img src={quiat} className='mediacard-quiat' alt='quiat' />
        <p className='mediacard-text'>¡Hola, gatistas!</p>
        <p className='mediacard-name'>{this.name}</p>
        <p className='mediacard-date'>Nací en {this.year}</p>
      </div>
    );
  }
}

const purpy = new App('Puco', '2016');
console.log(purpy);


console.log('hola!');

export default App;
