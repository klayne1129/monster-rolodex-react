import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  // after component renders first time, fetches api data and sets it to empy monster array in state
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  // handleChange(event) {

  //   const {name,value} = event.target
  //   this.setState({[name]: value})
   
  // }

  //using arrow function like so binds the method to the component 
  handleChange = event => {

    const {name,value} = event.target
    this.setState({[name]: value})
   
  }

  render() {

    //creates a new array 'filteredMonsters' to check if searchField value matches a monster in the array
    // now will rerender page every time state changes. which does anytime you type in search field
    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App"> 

      <h1> Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
          value={searchField}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
    </div>
    )
  }
}

export default App;
