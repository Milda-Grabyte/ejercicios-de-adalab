import React from 'react';

class Club extends React.Component {
  render() {
    const members = this.props.members.map((member, i) => {
      return (
        <li key={i}>{member}</li>
      );});
    return (
      <article>
        <h1 className="title">{this.props.name}</h1>
        <i className={this.props.icon}></i>
        <div>{members}</div>
      </article>
    );
  }
}

export default Club;