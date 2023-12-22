import { Component } from "react";
import Card from "./components/Card/Card";
import "./App.css";
import Search from "./components/Search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robo: [],
      searchData: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { robo: data };
        })
      );
  }
  render() {
    // console.log(this.state.robo)
    const filteredData = this.state.robo.filter((names) =>
      names.name.toLocaleLowerCase().includes(this.state.searchData) //includes or startsWith
    );
    const onChange = (event) => {
      const searchData = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchData };
      });
    };

    return (
      <>
        <Search changeEvent={onChange} />
        <Card filteredData={filteredData} />
      </>
    );
  }
}

export default App;
