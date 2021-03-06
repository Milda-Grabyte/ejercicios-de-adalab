import React from 'react';

class CategoryButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onButtonCategory(this.props.category)}>{this.props.category}</button>
    );
  }
}

export default CategoryButton;