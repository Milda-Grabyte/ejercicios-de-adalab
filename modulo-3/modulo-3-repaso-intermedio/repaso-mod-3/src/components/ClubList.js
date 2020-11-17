import React from 'react';
import Club from './Club.js';

class ClubList extends React.Component {
  render() {
    const items = this.props.clubs.map((club, i) => {
      return (
        <li className='clubs-list-item' key={i}>
          <Club name={club.name} icon={club.fa} members={club.members} />
        </li>
      );});
    return <ul className="clubs-list">{items}</ul>;
  }
}

export default ClubList;