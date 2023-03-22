import { Component } from "react";
import "./App.css";
import CardList from "./components/card/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFilter: "",
    };
  }

  onSearchChange = (event) => {
    const searchFilter = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFilter };
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  render() {
    const { monsters, searchFilter } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFilter)
    );

    return (
      <div className="App">
        <h1 className="app-title"> Monster Rolodex</h1>
        <SearchBox onChangeHandler= { onSearchChange }  placeholder = 'Search Monster' className = 'search-box'/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
