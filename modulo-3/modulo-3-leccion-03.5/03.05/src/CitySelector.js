import React from 'react';
 
class CitySelector extends React.Component {
  render() {
    return (
      <>
        <label className='cities' htmlFor='cities'>
          Choose your destination:
        </label>
        <select onChange={this.props.onSelectedCity} name='cities' id='cities'>
          <option value='Buenos Aires'>Buenos Aires</option>
          <option value='Sydney'>Sydney</option>
          <option value='Prague'>Prague</option>
          <option value='Boston'>Boston</option>
          <option value='Tokyo'>Tokyo</option>
        </select>
      </>
    );
  }
}

export default CitySelector;