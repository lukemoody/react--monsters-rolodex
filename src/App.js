import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // OR class App extends React.Component
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  /** Fetch data from API  */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Writting as arrow function means this is defined in context based off of Component and binds this to e
  // making it easier to write methods
  handleChange = e => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // Desctructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          // handleChange={e => this.setState({ searchField: e.target.value })}
          handleChange={this.handleChange} // see method written above render()
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
