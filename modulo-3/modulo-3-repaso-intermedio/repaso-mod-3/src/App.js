import React from 'react';
import './App.css';
import clubs from './data/clubs.json';
import ClubList from './components/ClubList.js'
import './styles/main.css'


class App extends React.Component {
  render() {
    return (
    <ClubList clubs={clubs}/>
    );
  }
}

export default App;
