import { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    const { filteredData } = this.props;
    return (
      <>
        <div className="card-body">
          {filteredData.map((names) => (
            <div className="card" key={names.id}>
              <h3>{names.name}</h3>
              <img
                src={`https://robohash.org/${names.id}?set=set3`}
                width={120}
                height={160}
                alt=""
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Card;
