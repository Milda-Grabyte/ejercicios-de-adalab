import React from 'react';

class ShowInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKeyup = this.handleKeyup.bind(this);
  }
  handleKeyup(ev) {
    this.setState({
      input: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        <form action=''>
          <label htmlFor='text'>¿Qué estás pensando?</label>
          <input type='text' id='text' onKeyUp={this.handleKeyup} />
        </form>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default ShowInput;