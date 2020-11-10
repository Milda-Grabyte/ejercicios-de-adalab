import React from 'react';
import './half-page.scss'

class HalfPage extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default HalfPage;

