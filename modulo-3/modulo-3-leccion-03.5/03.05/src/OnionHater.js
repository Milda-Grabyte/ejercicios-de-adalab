import React from 'react';
import './OnionHater.scss';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.compClass = '';
    this.h1class = 'numb'
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.currentTarget.value.toLowerCase().includes('cebolla')) {
      this.isHating = true;
      this.compClass = 'red';
      this.h1class = 'triggered';
      alert('ODIO LA CEBOLLA');
    } else {
      this.isHating = false;
      this.compClass = '';
      this.h1class = 'numb'
    }
    this.forceUpdate();
  }  
  
  render() {
    let h1;
    if (this.h1class === 'numb') {
      h1 = <h1 className={this.h1class}>Comfortably numb</h1>
    } else {
      h1 = <h1 className={this.h1class}>TrIgGeReD!!!!111</h1>
    }
    return (
      <div className='OnionStyles'>
        {h1}
        <textarea className={this.compClass} onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default OnionHater;