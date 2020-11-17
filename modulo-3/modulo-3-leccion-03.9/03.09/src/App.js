import React from 'react';
import './App.css';

const numbers = [-60, -23, 1, 4, 6, 8, 45, 89, 400, 5678, 9783, 120800]; 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      newNumbers: numbers.map((number) => <div>{number}</div>),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  
  renderListandUpdateNumbers(target) {
    const processedNumbers = numbers.filter((number) => number > target.value).map((number) => <li key={number}>{number}</li>);

    this.setState({
      newNumbers: processedNumbers,
    });
  }

  handleInputChange(ev) {
    this.renderListandUpdateNumbers(ev.currentTarget);
  }

  handleCheckboxChange(ev) {
    if (ev.currentTarget.checked === true) {
      const processedNumbers = this.state.newNumbers.filter((number) => number.key % 2 === 0);
      this.setState({
        newNumbers: processedNumbers,
      });
    } else {
      this.renderListandUpdateNumbers(this.textInput.current);
    }
  }
  render() {
    return (
      <>
        <form>
          {/* Input de números */}
          <label htmlFor='number'>Insert a number:</label>
          <input id='number' type='number' name='number' onChange={this.handleInputChange} ref={this.textInput} />
          {/* Checkbox de pares */}
          <label htmlFor='even'></label>
          <input onClick={this.handleCheckboxChange} id='even' type='checkbox' value='even' name='even' />
          Only even numbers
        </form>
        <ul>{this.state.newNumbers}</ul>
      </>
    );
  }
}

export default App;

