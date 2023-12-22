import { Component } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

class Search extends Component {
  constructor() {
    super();
  }
  render() {
    const { changeEvent } = this.props;
    return (
      <>
        <div className="search-content">
          <h1>
            ROBO <span style={{ color: "yellow" }}> HASH</span>
          </h1>
          <i>
            <FaSearch />
          </i>
          <input
            type="search"
            placeholder="Search with name"
            onChange={changeEvent}
          />
        </div>
      </>
    );
  }
}

export default Search;
