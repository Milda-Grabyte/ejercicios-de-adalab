import React from 'react';
import './App.css';

const numbers = [-60, -23, 1, 4, 6, 8, 45, 89, 400, 5678, 9783, 120800];
class App_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      checked: false,
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCheckInput = this.handleCheckInput.bind(this);
  }

  handleTextInput(ev) {
    this.setState({
      number: ev.target.value,
    });
  }

  handleCheckInput(ev) {
    this.setState({
      checked: ev.target.checked,
    });
  }

  renderNumbers() {
    const stateNumber = this.state.number === '' ? -Infinity : parseInt(this.state.number)
    const newNumbers = numbers
      .filter((number) => number > stateNumber)
      .filter((number) => {
        if (this.state.checked === true) {
          return number % 2 === 0;
        } else {
          return true;
        }
      });
      
    return (
      <ul>
        {newNumbers.map((number) => (
          <div>{number}</div>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <form>
          {/* Input de números */}
          <label htmlFor='number'>Insert a number:</label>
          <input id='number' type='number' name='number' onChange={this.handleTextInput} />
          {/* Checkbox de pares */}
          <label htmlFor='even'></label>
          <input onChange={this.handleCheckInput} id='even' type='checkbox' value='even' name='even' />
          Only even numbers
        </form>
        {this.renderNumbers()}
      </>
    );
  }
}

export default App_1;
