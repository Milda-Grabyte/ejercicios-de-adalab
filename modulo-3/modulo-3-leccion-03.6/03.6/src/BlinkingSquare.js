import React from 'react';
import './BlinkingSquare.css';

class BlinkingSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'red',
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange() {
    this.setState((prevState, props) => ({
      background: prevState.background === 'red' ? 'green' : 'red',
    }));
  }

  render() {
    return (
      <div className={'square ' + this.state.background} onClick={this.handleColorChange}></div>
    );
  }
}

export default BlinkingSquare;
