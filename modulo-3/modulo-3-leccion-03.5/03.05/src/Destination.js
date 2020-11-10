import React from 'react';
import './Destination.scss'
import CityImage from './CityImage.js';
import CitySelector from './CitySelector.js';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.alert = '';
    this.city = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.city = event.currentTarget.value;
    this.alert = <p>Your travel destination is {this.city}</p>;
    this.forceUpdate();
  }

  render() {
    return (
      <div className='citySelector'>
        <CitySelector onSelectedCity={this.handleChange}/>
        {this.alert}
        <CityImage city={this.city} />
      </div>
    );
  }
}

export default Destination;